import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "liguwe's blog",
  lang: 'zh-CN',
  base: '/',
  description: "liguwe's blog，liguwe's book，liguwe's site， Guangwei Li's site ,Guangwei Li's Book， Guangwei Li's blog，李广卫, 李广卫的知识库、 李广卫的博客、李广卫的个人网站、李广卫的站点",
  head: [
    ['link', {rel: 'icon', href: '/logo.png'}],
    [
      'script', {src: '/baidu.js', async: true, crossorigin: true},
    ],
    [
      'script', {src: 'https://www.googletagmanager.com/gtag/js?id=G-CVQ2HFFN9E', async: true, crossorigin: true},
    ],
    [
      'script', {src: '/google.js', async: true, crossorigin: true},
    ],
    [
      'script', {src: '/comment.js', defer: true, crossorigin: true},
    ],
  ],
  themeConfig: {
    logo: '/logo.png',
    outline: [2, 6],
    footer: {
      copyright: `copyright ${new Date().getFullYear()}©liguwe.github.io`
    },
    // 顶部导航
    nav: [
      {text: '语雀', link: 'https://www.yuque.com/liguwe'},
    ],
    // 社交Link
    socialLinks: [
      {icon: 'github', link: 'https://github.com/liguwe'},
    ]
  }
})
