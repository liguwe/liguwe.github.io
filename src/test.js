const fs = require("fs");
const path = require("path");

let content = fs.readFileSync(
  path.resolve(__dirname, "./post/tjvg7663x9.md"),
  "utf-8"
);

// `\n## 目录\n` + `<!-- toc -->`
content = content.replace(`\n## 目录\n` + `<!-- toc -->`, "");
// 去掉标题层级 1 的标题
content = content.replace(/^#\s+.*\n/m, "");
content = content.replace(/\[([^\]]+)\]\(\/post\/([^\s]+)\.html\)/g, "[$1](/liguwe/post/$2)");
console.log(content);
