
# React 自动运行时（Automatic Runtime）

`#react` 


## 目录
<!-- toc -->
 ## 1. 基本概念 

- 自动运行时是 React 17 引入的一个重要特性，它改变了 JSX 的转换方式。
- 这个新的 JSX 转换不需要在文件顶部显式导入 React，而是**自动引入必要的方法**

### 1.1. 传统方式 vs 新方式

```javascript
// 传统方式
import React from 'react';
const element = <h1>Hello, world!</h1>;

// 新方式（自动运行时）
// 不需要导入 React
const element = <h1>Hello, world!</h1>;
```

## 2. 工作原理

### 2.1. 编译转换

```javascript
// JSX 代码
function App() {
  return <h1>Hello World</h1>;
}

// 传统转换（React.createElement）
function App() {
  return React.createElement('h1', null, 'Hello World');
}

// 新的转换（jsx 函数）
import {jsx as _jsx} from 'react/jsx-runtime';

function App() {
  return _jsx('h1', { children: 'Hello World' });
}
```

自动运行时会自动从 `react/jsx-runtime` 导入必要的函数，而不是使用 `React.createElement` 

## 3. 主要优势

### 3.1. 性能优化

- 减少了打包体积
- 提高了编译效率
- 运行时性能更好
- 更少的中间代码 

### 3.2. 开发体验

- 不需要手动导入 React
- 代码更简洁
- 更少的模板代码
- 更好的工具支持 

## 4. 配置方法

### 4.1. Babel 配置

```json hl:4
{
  "presets": [
    ["@babel/preset-react", {
      "runtime": "automatic"
    }]
  ]
}
```

### 4.2. TypeScript 配置

```json hl:3
{
  "compilerOptions": {
    "jsx": "react-jsx"
  }
}
```

从 Babel 8 开始，"automatic" 将成为两个插件的默认运行时 

## 5. 实现细节

### 5.1. JSX 运行时函数

```javascript hl:7
// react/jsx-runtime 中的函数
export function jsx(type, props, key) {
  // ...实现细节
}

export function jsxs(type, props, key) {
  // 用于静态子元素
  // ...实现细节
}
```

### 5.2. 关键特性

- 自动导入必要的函数
- 优化的编译输出
- 更好的树摇（tree-shaking）支持
- 与现有代码完全兼容 

## 6. 使用注意事项

### 6.1. 兼容性考虑

- 确保使用 React 17 或更高版本
- 更新构建工具配置
- 检查第三方库兼容性
- 注意开发工具支持 

### 6.2. 常见问题

- 某些旧版工具可能需要额外配置
- 某些库可能仍需要显式导入 React
- 开发环境和生产环境可能有差异
- 需要注意 HMR（热模块替换）的配置 

## 7. 推荐用法

```javascript
// ✅ 推荐
function Component() {
  return <div>Hello</div>;
}

// ❌ 不再需要
import React from 'react';
function Component() {
  return <div>Hello</div>;
}
```

