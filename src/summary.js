/**
 * @description 根据 elog.cache.json 生成 mdbook 的 SUMMARY.md
 * - SUMMARY.md 结构参考：https://rust-lang.github.io/mdBook/format/summary.html
 * */
/*************************************************
 * :::::::::::  生成 SUMMARY.md 需要配置的地方 start  :::::::::::::::::
 ************************************************/
let mdStr = `# liguwe's Books\n\n`;
/*************************************************
 * ::::::::::  生成 SUMMARY.md 需要配置的地方 start  :::::::::::::::::
 ************************************************/

const fs = require("fs");
const path = require("path");
const sidebar = require("./sidebar.json");
const post = require("./post.json");

const partIndex = sidebar.findIndex((item) => item.isPart);
const partLastIndex = sidebar.findLastIndex((item) => item.isPart);
const prefix = sidebar.slice(0, partIndex);
const suffix = sidebar.slice(partLastIndex + 1);
const part = sidebar.slice(partIndex, partLastIndex + 1);

// 获取 md 链接
const getMdLink = (item) => {
  const uid = item?.isIndex ? item?.indexFile?.uid : item?.uid;
  if (uid && post?.[uid]) {
    return `post/${uid}.md`;
  }
  // - [Draft Chapter]() 未发布的章节，即草稿章节
  return ``;
};

// 前序不会有层级关系
const generatePrefix = () => {
  prefix.forEach((item) => {
    const mdLink = getMdLink(item);
    mdStr += `[${item.title}](${mdLink})\n`;
  });
};

// 递归生成目录
const generatePart = (menus) => {
  mdStr += "\n";
  menus.forEach((item) => {
    if (!item.isPart) {
      // 缩进：根据当前节点的层级来决定
      const indent = "  ".repeat(item.depth - 1);
      // 本地的 md 链接
      const mdLink = getMdLink(item);
      mdStr += `\n${indent}- [${item.title}](${mdLink})\n`;
      if (item.children && item.children.length) {
        generatePart(item.children);
      }
      // 如果是部分
    } else {
      mdStr += `\n# ${item.title}\n`;
      if (item.children && item.children.length) {
        generatePart(item.children);
      }
    }
  });
};

// 后序不会有层级关系
const generateSuffix = () => {
  mdStr += "\n-----------\n";
  suffix.forEach((item) => {
    const mdLink = getMdLink(item);
    mdStr += `[${item.title}](${mdLink})\n`;
  });
};

generatePrefix();
generatePart(part);
generateSuffix();

fs.writeFileSync(path.resolve(__dirname, "../src/SUMMARY.md"), mdStr);
