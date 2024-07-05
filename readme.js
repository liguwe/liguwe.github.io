/**
 * @description 根据首页 sidebar  生成 liguwe.github.io/README.md
 * */

const fs = require('fs');
const indexList = require('./sidebar.json');

let mdStr = `# liguwe.site \n`;


const block = [
    {
        text: '开源作品',
        items: [
            {
                text: '🔌 Deeptest',
                detail: '免费开源的端到端 API 设计、调试、测试和管理平台',
                link: 'https://github.com/deeptest-com/deeptest',
            }
        ]
    },
    {
        text: '开源电子书',
        items: [
            {
                text: '📕 front-end-book',
                detail: '个人知道的关于前端一切，建立前端知识体系',
                link: 'https://github.com/liguwe/front-end-book',
            },
            {
                text: '📗 algorithm-book',
                detail: '算法与数据结构，持续构建算法知识体系',
                link: 'https://github.com/liguwe/front-end-book',
            }
        ]
    },
]

block.forEach(item => {
    mdStr += `## ${item.text} \n`;
    item.items.forEach(subItem => {
        mdStr += `- [${subItem.text}](${subItem.link})：${subItem.detail} \n`;
    });
});


mdStr += `## Blog \n`;
indexList.forEach(item => {
    mdStr += `### ${item.text} \n`;
    item.items.forEach(subItem => {
        mdStr += `- [${subItem.text}（${subItem.createdAt.split(' ')[0]}）](${subItem.mdLink}) \n`;
    });
});

// 生成 README.md 文件
fs.writeFileSync('./README.md', mdStr);

