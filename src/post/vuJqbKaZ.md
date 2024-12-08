
# Vue3 源码主要包功能介绍分析

`#vue3` 


## 目录
<!-- toc -->
 ## 1. compiler-core 

作用：
- 实现与平台无关的编译器核心功能。
- 负责将模板解析为抽象语法树（AST），然后转换和优化 AST，最后生成**渲染函数**。
使用场景：
- 作为其他编译器包的基础，如 compiler-dom 和 compiler-ssr。
- 当需要为非浏览器环境创建自定义编译器时。
注意事项：
- 这个包是平台无关的，不包含任何与 DOM 或 浏览器相关的代码。
- 通常不会直接使用，而是通过 `compiler-dom` 或自定义编译器间接使用。

## 2. compiler-dom

作用：
- 基于 compiler-core，添加了**缓存全部或部分虚拟节点**。
- 处理 DOM 特定的指令和属性。
使用场景：
- 在构建过程中编译 Vue 模板。
- 在浏览器中进行运行时编译（虽然不推荐在生产环境中使用）。
注意事项：
- 通常与构建工具集成使用，而不是直接在应用代码中使用。
- 确保版本与其他 Vue 包匹配，以避免兼容性问题。

**可以单独使用**：是，但不常见
- 创建自定义编译器
- 在运行时编译模板（不推荐在生产环境中使用）
```javascript
import { compile } from '@vue/compiler-dom'

const template = '<div>Hello, {{ name }}</div>'
const { code } = compile(template)
console.log(code) // 输出编译后的渲染函数

```

>  之前用过，在 markdown 中嵌入 Vue 组件时可以考虑使用

## 3. compiler-sfc

作用：
- 编译 Vue 单文件组件（.vue 文件）。
- 处理 `<template>、<script> 和 <style> 块`。
使用场景：
- 在 Vue CLI 或 Vite 等构建工具中使用，用于处理 `.vue` 文件。
注意事项：
- 这个包通常由构建工具内部使用，开发者很少需要直接与之交互。
- 支持 TypeScript、CSS 预处理器等功能，需要相应的插件支持。

## 4. reactivity

作用：
- 实现 Vue 3 的响应式系统。
- 提供 `reactive、ref、computed` 等核心 API
使用场景：
- 在 Vue 应用中创建响应式数据。
- 可以独立于 Vue 使用，用于任何需要响应式数据的 JavaScript 应用。
注意事项：
- 理解 Vue 3 的响应式原理对于高效使用至关重要
- 注意避免循环依赖，可能导致性能问题

可单独使用 

```javascript
import { reactive, effect } from '@vue/reactivity'

const state = reactive({ count: 0 })

effect(() => {
  console.log('Count is:', state.count)
})

// 将触发效果
state.count++

```

## 5. runtime-core

作用：
- 实现 Vue 的核心运行时功能。
- 包含**组件系统、虚拟 DOM、渲染器等核心概念**的实现。
使用场景：
- 作为 Vue 运行时的基础，通常不直接使用。
- 当需要为特定平台创建自定义渲染器时可能会用到。
注意事项：
- 这是一个平台无关的包，不包含任何 DOM 操作。
- 深入理解这个包有助于理解 Vue 的内部工作原理。

## 6. runtime-dom

作用：
- 基于 runtime-core，添加了浏览器 DOM 特定的运行时代码。
- 处理 DOM 事件、属性、样式等。
使用场景：
- 在浏览器环境中运行 Vue 应用。
注意事项：
- 这是大多数 Vue 应用实际使用的运行时包。
- 确保与其他 Vue 包的版本一致。

## 7. server-renderer

作用：
- 实现 Vue 的服务器端渲染（SSR）功能。
使用场景：
- 需要服务器端渲染的 Vue 应用。
- 用于改善首屏加载性能和 SEO。
注意事项：
- 使用 SSR 需要特别注意服务器端和客户端状态的同步。
- 某些浏览器特定的 API 在服务器端不可用，需要适当处理。

## 8. shared

作用：
- 提供在其他 Vue 包中**共享的工具函数和常量**。
使用场景：
- 在 Vue 的其他包中使用。
- 可以在自定义 Vue 插件或工具中使用这些共享函数。
注意事项：
- 这个包的内容可能会随 Vue 版本更新而变化。
- 不建议在应用代码中直接依赖这个包，因为它主要用于 Vue 内部。

## 9. vue

作用：
- 作为 Vue 3 的主入口。
- 整合了运行时和编译器。
使用场景：
- 在浏览器中使用完整版的 Vue（包括运行时编译器）。
- 通过 CDN 使用 Vue 时。
注意事项：
- 在生产环境中，推荐使用仅运行时版本以减小包体积。
- 使用构建工具时，通常会自动选择合适的版本。
