/**
 * @description 根据首页 indexList 生成 liguwe.github.io/README.md
 * */

const fs = require('fs');
const indexList = require('../json/index.json');

let mdStr = `# liguwe.github.io \n`;

indexList.forEach(item => {
    mdStr += `## ${item.text} \n`;
    item.items.forEach(subItem => {
        mdStr += `- [${subItem.title}（${subItem.createAt}）](${subItem.mdLink}) \n`;
    });
});

// 生成 README.md 文件
fs.writeFileSync('./docs/.vitepress/dist/README.md', mdStr);

