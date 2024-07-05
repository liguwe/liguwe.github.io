/**
 * @description 根据目录生成侧边栏 vitepress sidebar
 * */

const fs = require('fs');
const path = require('path');
const elogCache = require('./elog.cache.json');
const getFooterHtml = require('./utils/getFooterHtml');
const dayjs = require('dayjs');
const allYears = [];
const docs = elogCache.docs.map((item) => {
    const year = dayjs(item.properties.date).format('YYYY');
    if (!allYears.includes(year)) {
        allYears.push(year);
    }
    return {
        text: item.properties.title,
        link: `/post/${item.properties.urlname}`,
        mdLink: `/post/${item.properties.urlname}.md`,
        createdAt: item.properties.date,
        year: year,
        updatedAt: item.properties.updated,
        description: item.properties.description,
    };
});
docs.sort((a, b) => {
    return dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf();
});
allYears.sort((a, b) => b - a);

const sidebar = [];
allYears.forEach((year, index) =>
    sidebar.push({
        text: year,
        items: [],
        collapsed: index < 2,
    })
);
// 组装首页的菜单
sidebar.forEach((menu, menuIndex) => {
    menu.items = docs.filter((item) => {
        return item.year === menu.text;
    }).map(item => {
        return {
            ...item
        };
    });
});

// 读取post 下的所有 markdown 文件，底部添加评论和语雀链接

const postDir = path.resolve(__dirname, './post');
const postFiles = fs.readdirSync(postDir).filter(file => file.endsWith('.md'));
postFiles.forEach(file => {
        const filePath = path.resolve(postDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        if (fileContent.includes('<div class="liguwe-doc-footer" id="liguwe.site.blog-doc-footer">')) {
            console.log('已经添加过了', file);
            return;
        }
        const uid = file.replace('.md', '');
        const footerHtml = getFooterHtml(uid);
        fs.writeFileSync(filePath, `${fileContent}\n\n${footerHtml}`);
    }
);


fs.writeFileSync('./sidebar.json', JSON.stringify(sidebar));


