/**
 * @description 根据首页 sidebar  生成 liguwe.github.io/README.md
 * */

const fs = require('fs');
const indexList = require('./sidebar.json');

let mdStr = `# liguwe.site \n`;

indexList.forEach(item => {
    mdStr += `## ${item.text} \n`;
    item.items.forEach(subItem => {
        mdStr += `- [${subItem.text}（${subItem.createdAt.split(' ')[1]}）](${subItem.mdLink}) \n`;
    });
});

// 生成 README.md 文件
fs.writeFileSync('./README.md', mdStr);

