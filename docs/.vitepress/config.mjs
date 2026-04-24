import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Liguwe',
  description: 'Liguwe\'s Personal Website',
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/liguwe' },
    ],
  },
})
