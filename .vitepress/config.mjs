import { defineConfig } from 'vitepress';
import sidebar from '../sidebar.json';
import {  YuQueSVG } from "../utils/index.js";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "liguwe's site",
  lang: 'zh-CN',
  base: '/',
  description: "liguwe's site，liguwe's book，liguwe's blog , liguwe's books，Guangwei Li's Book，liguwe's blog，liguwe's book，liguwe's site， Guangwei Li's site ，Guangwei Li's Books， Guangwei Li's blog，李广卫, 李广卫的知识库、 李广卫的博客、李广卫的个人网站、李广卫的站点",
  head: [
    ['link', {rel: 'icon', href: '/logo.png'}],
    [
      'script', {src: '/baidu.js', async: '', crossorigin: ''},
    ],
    [
      'script', {src: 'https://www.googletagmanager.com/gtag/js?id=G-CVQ2HFFN9E', async: '', crossorigin: ''},
    ],
    [
      'script', {src: '/google.js', async: '', crossorigin: ''},
    ],
    [
      'script', {src: '/comment.js', defer: '', crossorigin: ''},
    ],
  ],
  themeConfig: {
    logo: '/logo.png',
    outline: [2, 6],
    search: {
      provider: 'local'
    },
    footer: {
      copyright: `copyright ${new Date().getFullYear()}©liguwe.site`
    },
    sidebar,
    // 顶部导航
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Blog', link: '/blog'},
    ],
    // 社交Link
    socialLinks: [
      { icon: { svg: YuQueSVG }, link: "https://www.yuque.com/liguwe" },
      {icon: 'github', link: 'https://github.com/liguwe'},
    ]
  }
})
