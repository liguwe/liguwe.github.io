import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Liguwe',
  description: 'Liguwe\'s Personal Website',
  base: '/',
  appearance: false,
  vite: {
    plugins: [tailwindcss()],
  },
  head: [
    ['meta', { name: 'theme-color', content: 'var(--nav-bg-color)' }],
    [
      'script',
      {},
      `!function(){try{var d=document.documentElement,c=d.classList;c.remove('light','dark');var e=localStorage.getItem('theme')||'system';if(e==='system'){var m=window.matchMedia('(prefers-color-scheme: dark)');if(m.matches){d.style.colorScheme='dark';c.add('dark')}else{d.style.colorScheme='light';c.add('light')}}else{d.style.colorScheme=e;c.add(e)}}catch(e){}}();`,
    ],
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
