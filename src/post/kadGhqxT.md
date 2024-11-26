
# 前端框架未来趋势分析

`#前端框架` 


## 目录
<!-- toc -->
 ## 1. 都忙着**去 JS 化** 和 **去 Vdom 化** ？ 

- 比如岛屿架构 
	- 详见 [9. 前端框架的岛屿架构（Island Architecture）](/post/6Pj0ofHx.html)
- 又比如 vue3.5 最新的进展

## 1. 当前主流前端框架概况

- React
- Vue
- Svelte
	- 新兴的编译时框架
	- **无虚拟 DOM**，直接编译为原生 JavaScript
	- 性能优秀，包体积小

## 2. 未来趋势

### 2.1. 编译时优化

- Svelte 带动的编译时优化趋势
- 更多框架开始`关注构建时的优化`
- 减少运行时开销成为主要方向 

### 2.2. 服务器组件和同构渲染

- React Server Components 的推广
- 服务端渲染(SSR)和静态生成(SSG)的进一步融合
- 更好的性能和SEO支持 

### 2.3. 元框架兴起

- Next.js(React)、Nuxt(Vue)、umi(React) 等成为标配
- 同时支持SSR、SSG 等多种渲染模式
- 开箱即用的完整解决方案

### 2.4. 去 JavaScript 化

其中的典型代表是

- `Islands Architecture` (岛屿架构)
-  `React Server Component`(RSC, React 服务端组件)

## 3. 选择建议

- 大型企业项目：考虑Angular 或 React
- 中小型项目：Vue.js 是很好的选择
- 性能敏感项目：可以考虑 Svelte
- 快速开发：
	- Next.js或Nuxt.js等元框架
- 性能敏感
	- Svelte
	- Solid
- 原生 Web Components

