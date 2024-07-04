---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "liguwe's blog"
  text: "个人知识库合集"
  tagline: "语雀知识库 → 开源电子书"
  #::::开源作品
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
      target: _blank
    - theme: alt
      text: 语雀中查看
      link: https://www.yuque.com/liguwe
      target: _blank
    - theme: alt
      text: 语雀 → mdbook
      link: https://github.com/liguwe/yuque-to-mdBook
      target: _blank
  image:
    src: /vitepress-logo-large.webp
    alt: VitePress

features:
  - icon: 🚀
    title: 《前端知识体系》
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    link: https://vitepress.vuejs.org/guide/getting-started.html
    target: _blank
  - icon: 🚀
    title: 《算法》
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    link: /markdown-examples
    target: _blank
  - icon: 🚀
    title: 《算法》
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    link: /markdown-examples
    target: _blank
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
