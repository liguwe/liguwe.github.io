import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import {
  MAX_SVG_BYTES,
  ensureMermaidSvgCache,
  mermaidContentHash,
  normalizeMermaidDefinition,
  replaceMermaidBlocks,
  validateSvg,
} from "./render-mermaid-assets.mjs";

function temporaryWorkspace() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "mermaid-assets-test-"));
  return {
    cacheRoot: path.join(root, "cache"),
    publicAssetsRoot: path.join(root, "public"),
    root,
  };
}

function safeSvg() {
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><path d="M0 0h10v10z"/></svg>';
}

test("normalizes line endings and creates a stable content hash", () => {
  const lf = "flowchart TD\nA --> B\n";
  const crlf = "flowchart TD\r\nA --> B\r\n";

  assert.equal(normalizeMermaidDefinition(crlf), lf);
  assert.equal(mermaidContentHash(lf), mermaidContentHash(crlf));
  assert.match(mermaidContentHash(lf), /^[a-f0-9]{64}$/);
});

test("replaces Mermaid before other Markdown transforms and preserves regular code", () => {
  const workspace = temporaryWorkspace();
  const assetRefs = new Map();
  const diagramRegistry = new Map();
  const source = [
    "before",
    "````Mermaid",
    "flowchart TD",
    'A[[Node #fff]] --> B[\"{{value}}<br/>\"]',
    "`````",
    "```js",
    "console.log('kept')",
    "```",
    "after",
    "",
  ].join("\n");

  const output = replaceMermaidBlocks(source, {
    articleTitle: "214. Test",
    assetRefs,
    cacheRoot: workspace.cacheRoot,
    diagramRegistry,
    publicAssetsRoot: workspace.publicAssetsRoot,
    sourcePath: "/notes/214.md",
  });

  assert.doesNotMatch(output, /````Mermaid/i);
  assert.doesNotMatch(output, /A\[\[Node/);
  assert.match(output, /!\[214\. Test 图表 1\]\(\/assets\/os\/mermaid-[a-f0-9]{64}\.svg\)/);
  assert.match(output, /```js\nconsole\.log\('kept'\)\n```/);
  assert.equal(diagramRegistry.size, 1);
  assert.equal(assetRefs.size, 1);
});

test("deduplicates identical diagrams across articles", () => {
  const workspace = temporaryWorkspace();
  const assetRefs = new Map();
  const diagramRegistry = new Map();
  const content = "```mermaid\nflowchart TD\nA --> B\n```\n";

  for (const title of ["One", "Two"]) {
    replaceMermaidBlocks(content, {
      articleTitle: title,
      assetRefs,
      cacheRoot: workspace.cacheRoot,
      diagramRegistry,
      publicAssetsRoot: workspace.publicAssetsRoot,
      sourcePath: `/notes/${title}.md`,
    });
  }

  assert.equal(diagramRegistry.size, 1);
  assert.equal(assetRefs.size, 1);
  assert.equal(Array.from(diagramRegistry.values())[0].usages.length, 2);
});

test("rejects an unclosed Mermaid block", () => {
  const workspace = temporaryWorkspace();
  assert.throws(
    () =>
      replaceMermaidBlocks("```mermaid\nflowchart TD\nA --> B\n", {
        articleTitle: "Broken",
        assetRefs: new Map(),
        cacheRoot: workspace.cacheRoot,
        diagramRegistry: new Map(),
        publicAssetsRoot: workspace.publicAssetsRoot,
        sourcePath: "/notes/broken.md",
      }),
    /Unclosed Mermaid code block.*broken\.md.*diagram 1/,
  );
});

test("validates safe SVG and rejects unsafe or oversized output", () => {
  const workspace = temporaryWorkspace();
  const validPath = path.join(workspace.root, "valid.svg");
  const scriptPath = path.join(workspace.root, "script.svg");
  const foreignObjectPath = path.join(workspace.root, "foreign.svg");
  const externalPath = path.join(workspace.root, "external.svg");
  const oversizedPath = path.join(workspace.root, "oversized.svg");

  fs.writeFileSync(validPath, safeSvg());
  fs.writeFileSync(scriptPath, '<svg viewBox="0 0 1 1"><script/></svg>');
  fs.writeFileSync(
    foreignObjectPath,
    '<svg viewBox="0 0 1 1"><foreignObject/></svg>',
  );
  fs.writeFileSync(
    externalPath,
    '<svg viewBox="0 0 1 1"><image href="https://example.com/a.png"/></svg>',
  );
  fs.writeFileSync(
    oversizedPath,
    `<svg viewBox="0 0 1 1"><!--${"x".repeat(MAX_SVG_BYTES)}--></svg>`,
  );

  assert.doesNotThrow(() => validateSvg(validPath));
  assert.throws(() => validateSvg(scriptPath), /script/);
  assert.throws(() => validateSvg(foreignObjectPath), /foreignObject/);
  assert.throws(() => validateSvg(externalPath), /external href/);
  assert.throws(() => validateSvg(oversizedPath), /exceeds 1 MiB/);
});

test("uses a valid cache without resolving Chrome or running npm", async () => {
  const workspace = temporaryWorkspace();
  const assetRefs = new Map();
  const diagramRegistry = new Map();
  replaceMermaidBlocks("```mermaid\nflowchart TD\nA --> B\n```\n", {
    articleTitle: "Cached",
    assetRefs,
    cacheRoot: workspace.cacheRoot,
    diagramRegistry,
    publicAssetsRoot: workspace.publicAssetsRoot,
    sourcePath: "/notes/cached.md",
  });
  const entry = Array.from(diagramRegistry.values())[0];
  fs.mkdirSync(path.dirname(entry.cachePath), { recursive: true });
  fs.writeFileSync(entry.cachePath, safeSvg());

  const result = await ensureMermaidSvgCache(diagramRegistry, {
    env: { MERMAID_CHROME_PATH: "/missing/chrome" },
    runCommand: () => {
      throw new Error("renderer must not run on a cache hit");
    },
  });

  assert.deepEqual(result, { cacheHits: 1, rendered: 0, total: 1 });
});

test("regenerates an unsafe cache through the isolated renderer", async () => {
  const workspace = temporaryWorkspace();
  const assetRefs = new Map();
  const diagramRegistry = new Map();
  replaceMermaidBlocks("```mermaid\nflowchart TD\nA --> B\n```\n", {
    articleTitle: "Regenerate",
    assetRefs,
    cacheRoot: workspace.cacheRoot,
    diagramRegistry,
    publicAssetsRoot: workspace.publicAssetsRoot,
    sourcePath: "/notes/regenerate.md",
  });
  const entry = Array.from(diagramRegistry.values())[0];
  fs.mkdirSync(path.dirname(entry.cachePath), { recursive: true });
  fs.writeFileSync(
    entry.cachePath,
    '<svg viewBox="0 0 1 1"><script/></svg>',
  );
  const chromePath = path.join(workspace.root, "chrome");
  fs.writeFileSync(chromePath, "");
  let renderCalls = 0;

  const result = await ensureMermaidSvgCache(diagramRegistry, {
    env: { MERMAID_CHROME_PATH: chromePath },
    runCommand: (_command, args) => {
      renderCalls += 1;
      const artefactsPath = args[args.indexOf("-a") + 1];
      fs.writeFileSync(
        path.join(artefactsPath, "batch-output-1.svg"),
        safeSvg(),
      );
      return { status: 0, stderr: "", stdout: "" };
    },
  });

  assert.equal(renderCalls, 1);
  assert.deepEqual(result, { cacheHits: 0, rendered: 1, total: 1 });
  assert.doesNotThrow(() => validateSvg(entry.cachePath));
});

test("reports the exact article and diagram when one batch entry fails", async () => {
  const workspace = temporaryWorkspace();
  const assetRefs = new Map();
  const diagramRegistry = new Map();
  const definitions = [
    ["valid", "flowchart TD\nA --> B"],
    ["broken", "BROKEN DIAGRAM"],
  ];

  for (const [name, definition] of definitions) {
    replaceMermaidBlocks(`\`\`\`mermaid\n${definition}\n\`\`\`\n`, {
      articleTitle: name,
      assetRefs,
      cacheRoot: workspace.cacheRoot,
      diagramRegistry,
      publicAssetsRoot: workspace.publicAssetsRoot,
      sourcePath: `/notes/${name}.md`,
    });
  }

  const chromePath = path.join(workspace.root, "chrome");
  fs.writeFileSync(chromePath, "");

  await assert.rejects(
    () =>
      ensureMermaidSvgCache(diagramRegistry, {
        env: { MERMAID_CHROME_PATH: chromePath },
        runCommand: (_command, args) => {
          const inputPath = args[args.indexOf("-i") + 1];
          const input = fs.readFileSync(inputPath, "utf8");
          if (input.includes("BROKEN DIAGRAM")) {
            return { status: 1, stderr: "Parse error", stdout: "" };
          }
          const artefactsPath = args[args.indexOf("-a") + 1];
          fs.writeFileSync(
            path.join(artefactsPath, "batch-output-1.svg"),
            safeSvg(),
          );
          return { status: 0, stderr: "", stdout: "" };
        },
      }),
    /\/notes\/broken\.md \(diagram 1\)[\s\S]*Parse error/,
  );
});
