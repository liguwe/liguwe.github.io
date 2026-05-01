/**
 * @description 从 Obsidian 仓库中解析年份文件夹下的 Markdown 文件，
 * 复制到 VitePress 博客目录 docs/blog/，并生成 posts.json。
 *
 * 规则：
 * - 只解析名字为 4 位数字的文件夹（如 2024、2025、2026）
 * - 排除文件名或路径中包含 @832、@ing、@todo、@ 的文件/文件夹
 * - 文件命名约定：`index. 标题.md`，从中解析出 slug（index）和 title
 * - 从文件首行解析 #YYYY/MM/DD 格式的日期和 #xxx 格式的 tags
 * - 日期格式统一为 YYYY.MM.DD
 */

const fs = require("fs");
const path = require("path");

const repoRoot = __dirname;
const obsidianRoot = path.resolve(
  process.env.OBSIDIAN_ROOT || path.resolve(repoRoot, "../832"),
);
const docsRoot = path.resolve(repoRoot, "docs");
const blogRoot = path.resolve(docsRoot, "blog");
const themeRoot = path.resolve(docsRoot, ".vitepress/theme");

const excludeReg = /@832|@ing|@todo|@/;
const yearReg = /^\d{4}$/;
const indexReg = /^(\d+)\.\s*/;
const articleIndexReg = /^(\d+)\.\s+/;
const metadataDateReg = /^(\d{4})\/(\d{2})\/(\d{2})$/;
const calloutTypeMap = {
  tip: "tip",
  success: "tip",
  note: "info",
  info: "info",
  abstract: "info",
  question: "info",
  example: "info",
  quote: "info",
  warning: "warning",
  todo: "warning",
  danger: "danger",
  bug: "danger",
  failure: "danger",
};

/**
 * 判断是否应排除该路径
 */
function shouldExclude(name) {
  if (name.startsWith(".")) return true;
  if (excludeReg.test(name)) return true;
  return false;
}

/**
 * 从文件名中解析 slug 和 title
 * "37. 周报v17：卸载，减负.md" → { slug: "37", title: "周报v17：卸载，减负" }
 */
function parseFileName(fileName) {
  const baseName = fileName.replace(/\.md$/i, "");
  const match = baseName.match(indexReg);
  if (match) {
    return {
      slug: match[1],
      title: baseName.replace(indexReg, ""),
    };
  }
  return {
    slug: baseName,
    title: baseName,
  };
}

/**
 * 从文件开头解析日期和 tags
 * 首行示例：#2026/01/05 #人生周报 #周报
 * 日期：#YYYY/MM/DD → "YYYY.MM.DD"
 * tags：#xxx（排除日期格式）
 */
function parseFirstLine(content) {
  const lines = content.split("\n");
  const firstContentLine = lines.find((line) => line.trim() !== "") || "";
  return parseMetadataLine(firstContentLine.trim());
}

/**
 * 解析首行元信息：仅由 #tag / #YYYY/MM/DD 组成时认为是文章元信息
 */
function parseMetadataLine(line) {
  const tokens = line.split(/\s+/).filter(Boolean);
  if (tokens.length === 0) {
    return { isMetadataLine: false, date: "", tags: [] };
  }

  let date = "";
  const tags = [];

  for (const token of tokens) {
    if (!token.startsWith("#") || token.length <= 1) {
      return { isMetadataLine: false, date: "", tags: [] };
    }

    const value = token.slice(1);
    const dateMatch = value.match(metadataDateReg);
    if (dateMatch) {
      date = `${dateMatch[1]}.${dateMatch[2]}.${dateMatch[3]}`;
    } else {
      tags.push(value);
    }
  }

  return {
    isMetadataLine: Boolean(date),
    date,
    tags,
  };
}

/**
 * 转换 Obsidian 高亮语法 ==text== → **text**
 */
function convertObsidianHighlight(text) {
  const replacements = [];
  let counter = 0;

  function storeReplacement(content) {
    const placeholder = `HLD_PH_${counter}_`;
    replacements[counter] = content;
    counter++;
    return placeholder;
  }

  let processedText = text;
  [
    /^```[\s\S]*?^```/gm,
    /^````[\s\S]*?^````/gm,
    /`[^`\n]+`/g,
  ].forEach((regex) => {
    processedText = processedText.replace(regex, (m) => storeReplacement(m));
  });

  processedText = processedText.replace(/==([^=\n]+?)==/g, "**$1**");

  for (let i = replacements.length - 1; i >= 0; i--) {
    const placeholder = `HLD_PH_${i}_`;
    processedText = processedText.replace(
      new RegExp(placeholder, "g"),
      replacements[i],
    );
  }

  return processedText;
}

/**
 * 转义 Vue 模板语法 {{ }} → HTML 实体
 */
function escapeVueTemplateSyntax(text) {
  const replacements = [];
  let counter = 0;

  function storeReplacement(content) {
    const placeholder = `VUE_ESC_PH_${counter}_`;
    replacements[counter] = content;
    counter++;
    return placeholder;
  }

  let processedText = text;
  [/^````[\s\S]*?^````/gm, /^```[\s\S]*?^```/gm].forEach((regex) => {
    processedText = processedText.replace(regex, (m) => storeReplacement(m));
  });

  processedText = processedText
    .replace(/{{/g, "&#123;&#123;")
    .replace(/}}/g, "&#125;&#125;");

  for (let i = replacements.length - 1; i >= 0; i--) {
    processedText = processedText.replace(
      new RegExp(`VUE_ESC_PH_${i}_`, "g"),
      replacements[i],
    );
  }

  return processedText;
}

/**
 * 转换标签语法：将首行的 #tag 转为 `#tag` 以避免被解析为标题
 * 同时将正文中的独立 #tag 也转为内联代码
 */
function convertTags(content) {
  const tagRegex = /(?<!\S)#([^\s#]+)(?:\/([^\s#]+))*(?!\S)/g;
  return content.replace(tagRegex, (match) => `\`${match}\``);
}

/**
 * 删除首行元信息，避免详情页正文重复展示 Hero 中的日期和标签
 */
function removeLeadingMetadataLine(content) {
  const lines = content.split("\n");
  const metadataLineIndex = lines.findIndex((line) => line.trim() !== "");
  if (metadataLineIndex === -1) {
    return content;
  }

  const metadata = parseMetadataLine(lines[metadataLineIndex].trim());

  if (!metadata.isMetadataLine) {
    return content;
  }

  lines.splice(0, metadataLineIndex + 1);
  while (lines.length > 0 && lines[0].trim() === "") {
    lines.shift();
  }

  return lines.join("\n");
}

/**
 * 转换 Obsidian callout 为 VitePress 自定义容器
 */
function convertObsidianCallouts(content) {
  const lines = content.split("\n");
  const output = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const calloutMatch = line.match(/^>\s*\[!([^\]\s]+)\](.*)$/i);

    if (!calloutMatch) {
      output.push(line);
      continue;
    }

    const sourceType = calloutMatch[1].toLowerCase();
    const targetType = calloutTypeMap[sourceType] || "info";
    const title = calloutMatch[2].trim();
    const header = title ? `::: ${targetType} ${title}` : `::: ${targetType}`;
    const bodyLines = [];

    i++;
    while (i < lines.length && /^> ?/.test(lines[i])) {
      bodyLines.push(lines[i].replace(/^> ?/, ""));
      i++;
    }
    i--;

    output.push(header);
    output.push(...bodyLines);
    output.push(":::");
  }

  return output.join("\n");
}

function getWikiLinkText(rawTarget, alias) {
  const text =
    alias ||
    rawTarget
      .split("#")[0]
      .split("/")
      .pop()
      .replace(/\.md$/i, "");

  return text.replace(articleIndexReg, "");
}

function getWikiBlogHref(rawTarget) {
  const targetPath = rawTarget.split("#")[0];
  const pathParts = targetPath.split("/");
  const isYearRootArticle =
    pathParts.length === 1 || yearReg.test(pathParts[0]);
  if (!isYearRootArticle) {
    return "";
  }

  const targetFileName = pathParts.pop().replace(/\.md$/i, "");
  const match = targetFileName.match(articleIndexReg);

  if (!match) {
    return "";
  }

  return `/blog/${match[1]}`;
}

function escapeMarkdownLinkText(text) {
  return text.replace(/\\/g, "\\\\").replace(/]/g, "\\]");
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function renderMermaidFences(content, file) {
  const mermaidFenceReg = /^```mermaid\s*\n([\s\S]*?)^```/gm;
  let output = "";
  let lastIndex = 0;
  let index = 0;
  let match;

  while ((match = mermaidFenceReg.exec(content)) !== null) {
    output += content.slice(lastIndex, match.index);
    const source = match[1].trim();
    const id = `blog-${file.slug}-mermaid-${index}`;

    const svg = renderSimpleFlowchart(source, id);
    output += svg
      ? `<div class="mermaid-diagram mermaid-rendered">\n${svg}\n</div>`
      : match[0];

    lastIndex = mermaidFenceReg.lastIndex;
    index++;
  }

  output += content.slice(lastIndex);
  return output;
}

function parseFlowchartEndpoint(value) {
  const trimmed = value.trim();
  const match = trimmed.match(/^([A-Za-z0-9_-]+)(?:\[(?:"([^"]*)"|([^\]]+))\])?$/);
  if (!match) return null;

  return {
    id: match[1],
    label: match[2] || match[3] || "",
  };
}

function renderSvgText(lines, x, y) {
  const escapedLines = lines.map((line) => escapeHtml(line));
  const startY = y - ((escapedLines.length - 1) * 18) / 2;

  return `<text x="${x}" y="${startY}" text-anchor="middle" dominant-baseline="middle">${escapedLines
    .map((line, index) => `<tspan x="${x}" dy="${index === 0 ? 0 : 18}">${line}</tspan>`)
    .join("")}</text>`;
}

function renderSimpleFlowchart(source, id) {
  const lines = source
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("%%"));
  const heading = lines.shift() || "";
  const headingMatch = heading.match(/^(?:flowchart|graph)\s+(TD|TB|BT|LR|RL)$/i);
  if (!headingMatch) return "";

  const direction = headingMatch[1].toUpperCase();
  const isHorizontal = direction === "LR" || direction === "RL";
  const nodes = new Map();
  const edges = [];

  function upsertNode(endpoint) {
    if (!nodes.has(endpoint.id)) {
      nodes.set(endpoint.id, {
        id: endpoint.id,
        label: endpoint.label || endpoint.id,
      });
      return;
    }

    if (endpoint.label) {
      nodes.get(endpoint.id).label = endpoint.label;
    }
  }

  for (const line of lines) {
    const edgeMatch = line.match(/^(.+?)\s*-->\s*(.+)$/);
    if (!edgeMatch) return "";

    const from = parseFlowchartEndpoint(edgeMatch[1]);
    const to = parseFlowchartEndpoint(edgeMatch[2]);
    if (!from || !to) return "";

    upsertNode(from);
    upsertNode(to);
    edges.push([from.id, to.id]);
  }

  if (nodes.size === 0 || edges.length === 0) return "";

  const nodeList = Array.from(nodes.values()).map((node, index) => {
    const labelLines = node.label
      .replace(/<br\s*\/?>/gi, "\n")
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
    const width = Math.max(
      180,
      Math.min(320, Math.max(...labelLines.map((line) => line.length)) * 12 + 36),
    );
    const height = Math.max(54, labelLines.length * 22 + 22);
    const x = isHorizontal ? 32 + index * 250 : 56;
    const y = isHorizontal ? 56 : 32 + index * 104;

    return {
      ...node,
      index,
      labelLines,
      width,
      height,
      x,
      y,
      cx: x + width / 2,
      cy: y + height / 2,
    };
  });
  const nodeById = new Map(nodeList.map((node) => [node.id, node]));
  const width = isHorizontal
    ? Math.max(...nodeList.map((node) => node.x + node.width)) + 48
    : Math.max(...nodeList.map((node) => node.x + node.width)) + 92;
  const height = isHorizontal
    ? Math.max(...nodeList.map((node) => node.y + node.height)) + 56
    : Math.max(...nodeList.map((node) => node.y + node.height)) + 48;

  const edgeSvg = edges
    .map(([fromId, toId], edgeIndex) => {
      const from = nodeById.get(fromId);
      const to = nodeById.get(toId);
      if (!from || !to) return "";

      if (isHorizontal) {
        if (to.index > from.index) {
          const y = from.cy;
          return `<path d="M ${from.x + from.width} ${y} L ${to.x - 14} ${y}" marker-end="url(#${id}-arrow)" />`;
        }
        const loopY = Math.max(24, from.y - 28 - edgeIndex * 8);
        return `<path d="M ${from.cx} ${from.y} L ${from.cx} ${loopY} L ${to.cx} ${loopY} L ${to.cx} ${to.y - 14}" marker-end="url(#${id}-arrow)" />`;
      }

      if (to.index > from.index) {
        const x = from.cx;
        return `<path d="M ${x} ${from.y + from.height} L ${x} ${to.y - 14}" marker-end="url(#${id}-arrow)" />`;
      }

      const loopX = Math.max(from.x + from.width, to.x + to.width) + 34 + edgeIndex * 8;
      return `<path d="M ${from.x + from.width} ${from.cy} L ${loopX} ${from.cy} L ${loopX} ${to.cy} L ${to.x + to.width + 14} ${to.cy}" marker-end="url(#${id}-arrow)" />`;
    })
    .join("");

  const nodeSvg = nodeList
    .map(
      (node) => `<g class="simple-flowchart-node">
  <rect x="${node.x}" y="${node.y}" width="${node.width}" height="${node.height}" rx="6" />
  ${renderSvgText(node.labelLines, node.cx, node.cy)}
</g>`,
    )
    .join("");

  return `<svg id="${id}" class="simple-flowchart" viewBox="0 0 ${width} ${height}" width="100%" role="img" aria-label="flowchart">
<defs>
  <marker id="${id}-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
    <path d="M 0 0 L 10 5 L 0 10 z" />
  </marker>
</defs>
<g class="simple-flowchart-edges">${edgeSvg}</g>
<g class="simple-flowchart-nodes">${nodeSvg}</g>
</svg>`;
}

/**
 * 转换文件内容（简化版：处理元信息、callout、高亮、Vue 模板、tags）
 */
async function transformContent(file) {
  let content = fs.readFileSync(file.sourcePath, "utf8");

  // 处理 Obsidian 图片嵌入 ![[xxx]] → 移除（简化处理）
  content = content.replace(/!\[\[([^\]]+)\]\]/g, "");

  // 处理 Obsidian wiki 链接 [[2026/42. 标题|别名]] → [别名](/blog/42)
  content = content.replace(/\[\[([^\]]+)\]\]/g, (match, rawLink) => {
    const [rawTarget, alias] = rawLink.split("|");
    const text = getWikiLinkText(rawTarget, alias);
    const href = getWikiBlogHref(rawTarget);

    if (!href) {
      return text;
    }

    return `[${escapeMarkdownLinkText(text)}](${href})`;
  });

  // 去掉首行元信息（详情页 Hero 已经展示了标题和 tags）
  content = removeLeadingMetadataLine(content);

  // 转换 Obsidian callout
  content = convertObsidianCallouts(content);

  // 转换 tags
  content = convertTags(content);

  // 转换高亮
  content = convertObsidianHighlight(content);

  // 转义 Vue 模板语法
  content = escapeVueTemplateSyntax(content);

  // 构建期预渲染 Mermaid，避免线上加载大体积 Mermaid 运行时后才出图
  content = await renderMermaidFences(content, file);

  // 用 YAML frontmatter 设置 HTML <title>，不再添加 # 标题（Hero 区域已展示）
  return `---\ntitle: "${file.title.replace(/"/g, '\\"')}"\n---\n\n${content.trim()}\n`;
}

function transformTagPage(tag) {
  return `---\ntitle: "${tag.replace(/"/g, '\\"')}"\n---\n`;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function collectMarkdownFiles(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (shouldExclude(entry.name)) continue;

    const entryPath = path.resolve(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectMarkdownFiles(entryPath));
      continue;
    }

    if (entry.isFile() && /\.md$/i.test(entry.name)) {
      files.push(entryPath);
    }
  }

  return files;
}

async function main() {
  if (!fs.existsSync(obsidianRoot)) {
    throw new Error(`Obsidian root does not exist: ${obsidianRoot}`);
  }

  // 清理旧的 blog 文件
  fs.rmSync(blogRoot, { recursive: true, force: true });
  ensureDir(blogRoot);

  const posts = [];

  // 读取 obsidian 根目录下的年份文件夹
  const entries = fs.readdirSync(obsidianRoot, { withFileTypes: true });
  const yearDirs = entries.filter(
    (e) => e.isDirectory() && yearReg.test(e.name) && !shouldExclude(e.name),
  );

  for (const yearDir of yearDirs) {
    const year = yearDir.name;
    const yearPath = path.resolve(obsidianRoot, year);

    // 递归读取年份文件夹下的 md 文件
    const files = collectMarkdownFiles(yearPath);
    for (const sourcePath of files) {
      const { slug, title } = parseFileName(path.basename(sourcePath));
      const content = fs.readFileSync(sourcePath, "utf8");
      const { date, tags } = parseFirstLine(content);

      const fileInfo = {
        slug,
        title,
        sourcePath,
        date,
        year,
        tags,
      };

      // 转换并写入文件
      const outputContent = await transformContent(fileInfo);
      const outputPath = path.resolve(blogRoot, `${slug}.md`);
      fs.writeFileSync(outputPath, outputContent);

      posts.push({
        slug,
        href: `/blog/${slug}`,
        title,
        date,
        year,
        tags,
      });
    }
  }

  // 按文件序号降序排序：43.md、42.md、41.md ...
  posts.sort((a, b) => Number(b.slug) - Number(a.slug));

  const tagMap = new Map();
  for (const post of posts) {
    for (const tag of post.tags) {
      if (!tagMap.has(tag)) {
        tagMap.set(tag, {
          id: tag,
          label: tag,
          href: `/blog/${tag}`,
        });
      }
    }
  }
  const tags = Array.from(tagMap.values());

  for (const tag of tags) {
    const outputPath = path.resolve(blogRoot, `${tag.id}.md`);
    fs.writeFileSync(outputPath, transformTagPage(tag.label));
  }

  // 生成 posts.json
  const postsJson = {
    generatedAt: new Date().toISOString(),
    posts,
    tags,
  };

  fs.writeFileSync(
    path.resolve(themeRoot, "posts.json"),
    JSON.stringify(postsJson, null, 2),
  );

  console.log(
    `✅ Generated ${posts.length} posts from ${obsidianRoot}`,
  );
  console.log(`   Tag pages → ${tags.length}`);
  console.log(`   Blog files → ${blogRoot}`);
  console.log(`   Posts JSON → ${path.resolve(themeRoot, "posts.json")}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
