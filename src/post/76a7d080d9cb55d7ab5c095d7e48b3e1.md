
# 前端框架的岛屿架构（Island Architecture）

`#前端架构` 

前端框架的岛屿架构（Island Architecture），旨在提高网页性能和用户体验。让我们深入了解一下这种架构的概念、优势以及一些实现它的框架。


## 目录
<!-- toc -->
 ## 岛屿架构的核心概念： 

1. 静态内容和动态内容分离
2. 按需加载交互性组件
3. 最小化 JavaScript 的初始加载


## 1. 岛屿架构的定义

岛屿架构将页面视为一片"海洋"，其中包含多个独立的"岛屿"。
- 这里的"海洋"代表静态的、非交互式的内容，
- 而"岛屿"则是动态的、交互式的组件。

## 2. 工作原理

- 服务器首先渲染静态 HTML 内容
- 识别页面中需要交互的区域（岛屿）
- 为每个岛屿单独加载必要的 JavaScript
- 其余部分保持为静态 HTML

## 3. 优势

- 更快的初始页面加载：大部分内容以静态 HTML 呈现
- 更好的性能：只在需要的地方加载 JavaScript
- 改善核心 Web 指标：如 First Contentful Paint (FCP) 和 Time to Interactive (TTI)
- 更好的 SEO：搜索引擎可以轻松抓取静态内容

## 4. 与其他架构的对比

为了更好地理解岛屿架构，我们可以将它与其他常见的架构进行对比：

| 架构类型 | 初始加载 | JavaScript 使用 | SEO 友好度 | 交互性 |
|---------|---------|----------------|-----------|--------|
| 单页应用 (SPA) | 慢 | 大量 | 低 | 高 |
| 服务器端渲染 (SSR) | 快 | 中等 | 高 | 中等 |
| 静态站点生成 (SSG) | 非常快 | 少量 | 非常高 | 低 |
| 岛屿架构 | 快 | 按需加载 | 高 | 高 |


## 5. 实现岛屿架构的框架

目前，有几个框架和库支持或实现了岛屿架构：
### React Server Component:

-  划分服务端组件和客户端组件，服务端组件仅在服务端运行，客户端只会看到它的渲染结果，JavaScript 执行代码自然也仅存于服务端。
### Astro

Astro 是最早实现岛屿架构的框架之一。

示例：

```vue
---
import MyReactComponent from './MyReactComponent.jsx';
---
<html>
  <body>
    <h1>Welcome to my page</h1>
    <p>This is static content</p>
    <MyReactComponent client:load />
  </body>
</html>
```

在这个例子中，`<MyReactComponent>` 就是一个"岛屿"，只有这部分会加载必要的 JavaScript。

### Qwik

Qwik 是另一个采用类似理念的框架，它使用细粒度的懒加载来实现类似的效果。

### Fresh

Fresh 是一个基于 Deno 的 web 框架，也采用了岛屿架构的理念。

示例：

```jsx
import { useState } from "preact/hooks";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}
```

在 Fresh 中，这个组件会被当作一个"岛屿"，只在需要时才加载和激活。

### 实现岛屿架构的挑战

- 组件划分：需要仔细考虑哪些部分应该是"岛屿"
- 状态管理：岛屿之间的状态共享可能会变得复杂
- 开发复杂性：可能需要更多的规划和架构设计

