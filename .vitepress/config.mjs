import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "liguwe's books",
  lang: 'zh-CN',
  base: '/',
  description: "liguwe's books，Guangwei Li's Book，liguwe's blog，liguwe's book，liguwe's site， Guangwei Li's site ，Guangwei Li's Books， Guangwei Li's blog，李广卫, 李广卫的知识库、 李广卫的博客、李广卫的个人网站、李广卫的站点",
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
    footer: {
      copyright: `copyright ${new Date().getFullYear()}©liguwe.github.io`
    },
    // 顶部导航
    nav: [
      {text: '语雀', link: 'https://www.yuque.com/liguwe'},
      {text: 'Vercel', link: 'https://liguwe.vercel.app/'},
    ],
    // 社交Link
    socialLinks: [
      {icon: 'github', link: 'https://github.com/liguwe'},
    ]
  }
})
