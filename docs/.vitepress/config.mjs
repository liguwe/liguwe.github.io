import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Liguwe',
  description: 'Liguwe\'s Personal Website',
  base: '/',
  appearance: true,
  vite: {
    plugins: [tailwindcss()],
  },
  head: [
    ['meta', { name: 'theme-color', content: 'var(--nav-bg-color)' }],
    ['link', { rel: 'icon', href: '/8.svg', type: 'image/svg+xml' }],
  ],
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/liguwe' },
    ],
  },
})
