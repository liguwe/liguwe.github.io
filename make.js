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

/**
 * 转换文件内容（简化版：处理元信息、callout、高亮、Vue 模板、tags）
 */
function transformContent(file) {
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

  // 用 YAML frontmatter 设置 HTML <title>，不再添加 # 标题（Hero 区域已展示）
  return `---\ntitle: "${file.title.replace(/"/g, '\\"')}"\n---\n\n${content.trim()}\n`;
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

function main() {
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
      const outputContent = transformContent(fileInfo);
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

  // 生成 posts.json
  const postsJson = {
    generatedAt: new Date().toISOString(),
    posts,
  };

  fs.writeFileSync(
    path.resolve(themeRoot, "posts.json"),
    JSON.stringify(postsJson, null, 2),
  );

  console.log(
    `✅ Generated ${posts.length} posts from ${obsidianRoot}`,
  );
  console.log(`   Blog files → ${blogRoot}`);
  console.log(`   Posts JSON → ${path.resolve(themeRoot, "posts.json")}`);
}

main();
