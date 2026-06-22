import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";

export const MERMAID_CLI_VERSION = "11.15.0";
export const MAX_SVG_BYTES = 1024 * 1024;

export const MERMAID_RENDER_CONFIG = Object.freeze({
  backgroundColor: "white",
  height: 600,
  jobs: 1,
  mermaid: {
    flowchart: { htmlLabels: false },
    htmlLabels: false,
    securityLevel: "strict",
  },
  theme: "neutral",
  width: 800,
});

const DEFAULT_CHROME_PATHS = [
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
];

function normalizeLineEndings(value) {
  return value.replace(/\r\n?/g, "\n");
}

export function normalizeMermaidDefinition(value) {
  return `${normalizeLineEndings(value).replace(/^\n+|\n+$/g, "")}\n`;
}

export function mermaidContentHash(definition) {
  const payload = JSON.stringify({
    cliVersion: MERMAID_CLI_VERSION,
    definition: normalizeMermaidDefinition(definition),
    renderConfig: MERMAID_RENDER_CONFIG,
  });
  return crypto.createHash("sha256").update(payload).digest("hex");
}

function splitLinesWithEndings(content) {
  const lines = [];
  let offset = 0;

  while (offset < content.length) {
    const newlineIndex = content.indexOf("\n", offset);
    const end = newlineIndex === -1 ? content.length : newlineIndex + 1;
    const text = content.slice(offset, end);
    lines.push({
      body: text.replace(/\r?\n$/, ""),
      end,
      ending: text.endsWith("\r\n") ? "\r\n" : text.endsWith("\n") ? "\n" : "",
      start: offset,
    });
    offset = end;
  }

  return lines;
}

function openingFence(line) {
  const match = line.match(/^([\t ]*)(`{3,})[\t ]*([^\t ]*)[\t ]*$/);
  if (!match || match[3].toLowerCase() !== "mermaid") return null;
  return { indent: match[1], length: match[2].length };
}

function isClosingFence(line, minimumLength) {
  const match = line.match(/^[\t ]*(`{3,})[\t ]*$/);
  return Boolean(match && match[1].length >= minimumLength);
}

function ensureOutputPathAvailable(assetRefs, sourcePath, outputPath) {
  for (const [existingSourcePath, existingOutputPath] of assetRefs) {
    if (existingOutputPath === outputPath && existingSourcePath !== sourcePath) {
      throw new Error(
        `Published asset filename conflict: ${sourcePath} conflicts with ${existingSourcePath}`,
      );
    }
  }
}

export function replaceMermaidBlocks(
  content,
  {
    articleTitle,
    assetRefs,
    cacheRoot,
    diagramRegistry,
    publicAssetsRoot,
    sourcePath,
  },
) {
  const lines = splitLinesWithEndings(content);
  const replacements = [];
  let diagramIndex = 0;

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
    const opening = openingFence(lines[lineIndex].body);
    if (!opening) continue;

    let closingIndex = lineIndex + 1;
    while (
      closingIndex < lines.length &&
      !isClosingFence(lines[closingIndex].body, opening.length)
    ) {
      closingIndex += 1;
    }

    if (closingIndex >= lines.length) {
      throw new Error(
        `Unclosed Mermaid code block: ${sourcePath} (diagram ${diagramIndex + 1})`,
      );
    }

    diagramIndex += 1;
    const definitionStart = lines[lineIndex].end;
    const definitionEnd = lines[closingIndex].start;
    const definition = normalizeMermaidDefinition(
      content.slice(definitionStart, definitionEnd),
    );
    const hash = mermaidContentHash(definition);
    const outputFilename = `mermaid-${hash}.svg`;
    const cachePath = path.resolve(cacheRoot, `${hash}.svg`);
    const outputPath = path.resolve(publicAssetsRoot, outputFilename);
    const publicUrl = `/assets/os/${outputFilename}`;
    const label = `${articleTitle} 图表 ${diagramIndex}`;

    ensureOutputPathAvailable(assetRefs, cachePath, outputPath);
    assetRefs.set(cachePath, outputPath);

    const existing = diagramRegistry.get(hash);
    if (existing) {
      existing.usages.push({ diagramIndex, sourcePath });
    } else {
      diagramRegistry.set(hash, {
        cachePath,
        definition,
        hash,
        usages: [{ diagramIndex, sourcePath }],
      });
    }

    replacements.push({
      end: lines[closingIndex].end,
      replacement: `${opening.indent}![${label.replace(/\\/g, "\\\\").replace(/]/g, "\\]")}](${publicUrl})${lines[closingIndex].ending}`,
      start: lines[lineIndex].start,
    });
    lineIndex = closingIndex;
  }

  if (replacements.length === 0) return content;

  let output = "";
  let offset = 0;
  for (const replacement of replacements) {
    output += content.slice(offset, replacement.start);
    output += replacement.replacement;
    offset = replacement.end;
  }
  output += content.slice(offset);
  return output;
}

export function validateSvg(svgPath, usage = {}) {
  const stats = fs.statSync(svgPath);
  const location = usage.sourcePath
    ? `${usage.sourcePath} (diagram ${usage.diagramIndex})`
    : svgPath;

  if (stats.size > MAX_SVG_BYTES) {
    throw new Error(
      `Mermaid SVG exceeds 1 MiB: ${location} (${stats.size} bytes)`,
    );
  }

  const svg = fs.readFileSync(svgPath, "utf8");
  if (!/<svg\b/i.test(svg) || !/\bviewBox\s*=/i.test(svg)) {
    throw new Error(`Invalid Mermaid SVG: ${location} (missing svg/viewBox)`);
  }

  const forbiddenPatterns = [
    [/<script\b/i, "script"],
    [/<foreignObject\b/i, "foreignObject"],
    [/@import\b/i, "CSS import"],
    [/(?:href|xlink:href)\s*=\s*["']\s*(?:javascript:|https?:\/\/|\/\/)/i, "external href"],
    [/url\(\s*["']?\s*(?:javascript:|https?:\/\/|\/\/)/i, "external CSS URL"],
  ];

  for (const [pattern, name] of forbiddenPatterns) {
    if (pattern.test(svg)) {
      throw new Error(`Unsafe Mermaid SVG: ${location} (${name})`);
    }
  }
}

export function resolveChromePath(env = process.env) {
  if (env.MERMAID_CHROME_PATH) {
    const configuredPath = path.resolve(env.MERMAID_CHROME_PATH);
    if (!fs.existsSync(configuredPath)) {
      throw new Error(
        `MERMAID_CHROME_PATH does not exist: ${configuredPath}`,
      );
    }
    return configuredPath;
  }

  const found = DEFAULT_CHROME_PATHS.find((candidate) => fs.existsSync(candidate));
  if (found) return found;

  throw new Error(
    "Cannot render Mermaid SVG: Chrome was not found. Set MERMAID_CHROME_PATH to a Chrome or Chromium executable.",
  );
}

function rendererCommandArgs({ inputPath, outputPath, artefactsPath, configPath, puppeteerPath }) {
  return [
    "exec",
    "--yes",
    `--package=@mermaid-js/mermaid-cli@${MERMAID_CLI_VERSION}`,
    "--",
    "mmdc",
    "-i",
    inputPath,
    "-o",
    outputPath,
    "-a",
    artefactsPath,
    "-e",
    "svg",
    "-j",
    String(MERMAID_RENDER_CONFIG.jobs),
    "-t",
    MERMAID_RENDER_CONFIG.theme,
    "-b",
    MERMAID_RENDER_CONFIG.backgroundColor,
    "-w",
    String(MERMAID_RENDER_CONFIG.width),
    "-H",
    String(MERMAID_RENDER_CONFIG.height),
    "-c",
    configPath,
    "-p",
    puppeteerPath,
  ];
}

function runRendererBatch(entries, { chromePath, runCommand = spawnSync }) {
  const temporaryRoot = fs.mkdtempSync(
    path.join(os.tmpdir(), "liguwe-mermaid-"),
  );
  const inputPath = path.join(temporaryRoot, "batch-input.md");
  const outputPath = path.join(temporaryRoot, "batch-output.md");
  const artefactsPath = path.join(temporaryRoot, "assets");
  const configPath = path.join(temporaryRoot, "mermaid.json");
  const puppeteerPath = path.join(temporaryRoot, "puppeteer.json");

  try {
    fs.mkdirSync(artefactsPath, { recursive: true });
    fs.writeFileSync(
      inputPath,
      entries.map((entry) => `\`\`\`mermaid\n${entry.definition}\`\`\`\n`).join("\n"),
    );
    fs.writeFileSync(configPath, JSON.stringify(MERMAID_RENDER_CONFIG.mermaid));
    fs.writeFileSync(
      puppeteerPath,
      JSON.stringify({ executablePath: chromePath }),
    );

    const result = runCommand(
      "npm",
      rendererCommandArgs({
        artefactsPath,
        configPath,
        inputPath,
        outputPath,
        puppeteerPath,
      }),
      {
        encoding: "utf8",
        env: { ...process.env, PUPPETEER_SKIP_DOWNLOAD: "true" },
        timeout: 120000,
      },
    );

    if (result.error || result.status !== 0) {
      const firstUsage = entries[0]?.usages[0];
      const location = firstUsage
        ? `${firstUsage.sourcePath} (diagram ${firstUsage.diagramIndex})`
        : "unknown Mermaid diagram";
      const detail = [result.error?.message, result.stderr, result.stdout]
        .filter(Boolean)
        .join("\n")
        .trim();
      throw new Error(
        `Failed to render Mermaid SVG near ${location}${detail ? `\n${detail}` : ""}`,
      );
    }

    return entries.map((entry, index) => ({
      entry,
      renderedPath: path.join(artefactsPath, `batch-output-${index + 1}.svg`),
    }));
  } catch (error) {
    fs.rmSync(temporaryRoot, { recursive: true, force: true });
    throw error;
  }
}

function cleanupRenderedBatch(rendered) {
  const temporaryRoot = rendered[0]?.renderedPath
    ? path.dirname(path.dirname(rendered[0].renderedPath))
    : null;
  if (temporaryRoot) {
    fs.rmSync(temporaryRoot, { recursive: true, force: true });
  }
}

function renderWithExactFailureLocation(entries, options) {
  try {
    return runRendererBatch(entries, options);
  } catch (batchError) {
    if (entries.length === 1) throw batchError;

    for (const entry of entries) {
      try {
        const diagnosticRender = runRendererBatch([entry], options);
        cleanupRenderedBatch(diagnosticRender);
      } catch (entryError) {
        throw entryError;
      }
    }

    throw batchError;
  }
}

export async function ensureMermaidSvgCache(
  diagramRegistry,
  { env = process.env, runCommand = spawnSync } = {},
) {
  const entries = Array.from(diagramRegistry.values()).sort((a, b) =>
    a.hash.localeCompare(b.hash),
  );
  const missing = [];
  let cacheHits = 0;

  for (const entry of entries) {
    if (fs.existsSync(entry.cachePath)) {
      try {
        validateSvg(entry.cachePath, entry.usages[0]);
        cacheHits += 1;
        continue;
      } catch {
        // Invalid ignored cache files are regenerated before publication.
      }
    }
    missing.push(entry);
  }

  if (missing.length === 0) {
    return { cacheHits, rendered: 0, total: entries.length };
  }

  const chromePath = resolveChromePath(env);
  const rendered = renderWithExactFailureLocation(missing, {
    chromePath,
    runCommand,
  });

  try {
    for (const { entry, renderedPath } of rendered) {
      if (!fs.existsSync(renderedPath)) {
        throw new Error(
          `Mermaid renderer did not create an SVG for ${entry.usages[0].sourcePath} (diagram ${entry.usages[0].diagramIndex})`,
        );
      }
      validateSvg(renderedPath, entry.usages[0]);
      fs.mkdirSync(path.dirname(entry.cachePath), { recursive: true });
      const temporaryCachePath = `${entry.cachePath}.${process.pid}.tmp`;
      fs.copyFileSync(renderedPath, temporaryCachePath);
      fs.renameSync(temporaryCachePath, entry.cachePath);
    }
  } finally {
    cleanupRenderedBatch(rendered);
  }

  return {
    cacheHits,
    rendered: missing.length,
    total: entries.length,
  };
}
