/**
 * @description 根据目录生成侧边栏 vitepress sidebar
 * */

const fs = require('fs');
const path = require('path');
const elogCache = require('./elog.cache.json');
const dayjs = require('dayjs');
const allYears = [];
const docs = elogCache.docs.map((item) => {
    const year = dayjs(item.properties.date).format('YYYY');
    if(!allYears.includes(year)) {
        allYears.push(year);
    }
    return {
        text: item.properties.title,
        link: `/post/${item.properties.urlname}`,
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


fs.writeFileSync('./sidebar.json', JSON.stringify(sidebar));


