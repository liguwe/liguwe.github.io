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
 * 从文件首行解析日期和 tags
 * 首行示例：#2026/01/05 #人生周报 #周报
 * 日期：#YYYY/MM/DD → "YYYY.MM.DD"
 * tags：#xxx（排除日期格式）
 */
function parseFirstLine(content) {
  const lines = content.split("\n");
  const firstLine = (lines[0] || "").trim();

  // 匹配所有 #xxx 标签（不在行内代码/链接中的）
  const tagPattern = /(?<!\S)#([^\s#]+)(?!\/\S)/g;
  const datePattern = /^(\d{4})\/(\d{2})\/(\d{2})$/;

  let date = "";
  const tags = [];

  let match;
  // 重新用更精确的方式提取
  const tokens = firstLine.split(/\s+/);
  for (const token of tokens) {
    if (token.startsWith("#")) {
      const value = token.slice(1); // 去掉 #
      const dateMatch = value.match(datePattern);
      if (dateMatch) {
        date = `${dateMatch[1]}.${dateMatch[2]}.${dateMatch[3]}`;
      } else if (value.length > 0) {
        tags.push(value);
      }
    }
  }

  return { date, tags };
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
 * 转换文件内容（简化版：处理高亮、Vue 模板、tags）
 */
function transformContent(file) {
  let content = fs.readFileSync(file.sourcePath, "utf8");

  // 处理 Obsidian 图片嵌入 ![[xxx]] → 移除（简化处理）
  content = content.replace(/!\[\[([^\]]+)\]\]/g, "");

  // 处理 Obsidian wiki 链接 [[xxx]] → 纯文本
  content = content.replace(/\[\[([^\]]+)\]\]/g, (match, rawLink) => {
    const [rawTarget, alias] = rawLink.split("|");
    const text =
      alias ||
      rawTarget
        .split("#")[0]
        .split("/")
        .pop()
        .replace(/\.md$/i, "")
        .replace(indexReg, "");
    return text;
  });

  // 去掉首行的 #date #tags 行（详情页 Hero 已经展示了标题和 tags）
  const lines = content.split("\n");
  if (lines.length > 0 && /^#\d{4}\//.test(lines[0].trim())) {
    lines.shift();
    // 去掉首行后面可能的空行
    while (lines.length > 0 && lines[0].trim() === "") {
      lines.shift();
    }
  }
  content = lines.join("\n");

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

    // 读取年份文件夹下的 md 文件
    const files = fs.readdirSync(yearPath, { withFileTypes: true });
    for (const file of files) {
      if (!file.isFile()) continue;
      if (!/\.md$/i.test(file.name)) continue;
      if (shouldExclude(file.name)) continue;

      const { slug, title } = parseFileName(file.name);
      const sourcePath = path.resolve(yearPath, file.name);
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
        href: `/blog/${slug}.html`,
        title,
        date,
        year,
        tags,
      });
    }
  }

  // 按日期降序排序（YYYY.MM.DD 格式可直接字符串比较）
  posts.sort((a, b) => b.date.localeCompare(a.date));

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
