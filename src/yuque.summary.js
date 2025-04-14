/**
 * @description 根据 elog.cache.json 生成 mdbook 的 SUMMARY.md
 * - SUMMARY.md 结构参考：https://rust-lang.github.io/mdBook/format/summary.html
 * */
/*************************************************
 * :::::::::::  生成 SUMMARY.md 需要配置的地方 start  :::::::::::::::::
 ************************************************/
let mdStr = ``;
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


// 前序不会有层级关系
const generatePrefix = () => {
  prefix.forEach((item) => {
    mdStr += `\n- [${item.title}](${item?.uid?.toLowerCase() || ""})`;
  });
};
let globalIndex = 0; // 全局计数器
// 递归生成目录
const generatePart = (menus, isPartParent, numberArray = []) => {
  menus.forEach((item, index) => {
    if (item.isPart) {
      mdStr += `\n- [${item.title}]()`;
      if (item.children && item.children.length) {
        generatePart(item.children, true, []); // 重置局部计数器
      }
    } else {
      // 深度为 2 的，需要加序号
      if (item.depth === 2) {
        globalIndex++;
      }
      // 更新局部计数器
      const currentNumberArray = item.depth === 2 ? [globalIndex] : [...numberArray, index + 1];
      const number = currentNumberArray.join('.');

      // 缩进：根据当前节点的层级来决定
      // const indent = isPartParent ? "" : "  ".repeat(item.depth - 1);
      const indent = "  ".repeat(item.depth - 1);
      const title = item?.title;
      const uid = item?.indexFile?.uid || item?.uid || "";

      // 本地的 md 链接
      mdStr += `\n${indent}- [${number}. ${title}](${uid?.toLowerCase() || ""})`;
      if (item.children && item.children.length) {
        generatePart(item.children, false, currentNumberArray);
      }
    }
  });
};

// 后序不会有层级关系
const generateSuffix = () => {
  suffix.forEach((item) => {
    mdStr += `\n- [${item.title}](${item?.uid?.toLowerCase() || ""})`;
  });
};

generatePrefix();
generatePart(part, true,[]);
generateSuffix();

fs.writeFileSync(path.resolve(__dirname, "../src/yuque.SUMMARY.md"), mdStr);
