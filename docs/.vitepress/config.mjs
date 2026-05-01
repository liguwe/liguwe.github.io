import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
  title: 'liguwe.site',
  description: 'Liguwe\'s Personal Website',
  base: '/',
  /** 站内链接与地址栏为 /blog/39 等形式；托管需能将无后缀路径映射到对应 .html（GitHub Pages 默认支持） */
  cleanUrls: true,
  appearance: true,
  vite: {
    plugins: [tailwindcss()],
    server: {
      port: 7001,
    },
    preview: {
      port: 7001,
    },
  },
  head: [
    ['meta', { name: 'theme-color', content: 'var(--nav-bg-color)' }],
    ['link', { rel: 'icon', href: '/favicon.png', type: 'image/png' }],
  ],
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
  mermaid: {
    startOnLoad: false,
    securityLevel: 'strict',
  },
  mermaidPlugin: {
    class: 'mermaid-diagram',
  },
  themeConfig: {
    outline: {
      label: '本页目录',
      level: [2, 3],
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            displayDetails: '显示详细列表',
            resetButtonTitle: '清除',
            backButtonTitle: '关闭搜索',
            noResultsText: '无匹配结果',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '回车',
              navigateText: '移动',
              navigateUpKeyAriaLabel: '上箭头',
              navigateDownKeyAriaLabel: '下箭头',
              closeText: '关闭',
              closeKeyAriaLabel: 'Esc',
            },
          },
        },
      },
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/liguwe' },
    ],
  },
}))
