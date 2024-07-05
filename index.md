---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: liguwe's books
  text: 开源电子书合集
#  tagline: 语雀知识库 → 开源电子书（mdbook）
  #::::开源作品
  actions:
    - theme: brand
      text: 语雀中查看
      link: https://www.yuque.com/liguwe
      target: _blank
#    - theme: alt
#      text: Vercel 中查看
#      link: https://liguwe.vercel.app
#      target: _blank
#    - theme: alt
#      text: Github 中查看
#      link: https://liguwe.github.io
#      target: _blank
  image:
    src: /Books_icon.svg
    alt: VitePress

features:
  - icon: 📱
    title: 《前端》
    details: 个人知道的关于前端一切，建立前端知识体系
    link: https://liguwe.github.io/front-end-book/
    target: _blank
  - icon: 🖥️
    title: 《算法》
    details: 算法与数据结构，建立算法知识体系
    link: https://liguwe.github.io/algorithm-book
    target: _blank
#  - icon: 🧠
#    title: 《通往 AGI 之路》
#    details: 如何使用 AGI 来武装自己，建立 AGI 知识体系
#    link: https://liguwe.github.io/agi-book
#    target: _blank
#  - icon: 👨‍👦‍👦
#    title: 《技术管理之路》
#    details: 技术管理之路，各类管理知识，建立技术管理知识体系
#    link: https://liguwe.github.io/tech-management-book
#    target: _blank
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
