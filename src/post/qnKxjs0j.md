
# react-dom 介绍




## 目录
<!-- toc -->
 ## 1. 基本作用 

- react-dom 是 React 的配套库，**主要负责将 React 组件渲染到浏览器的 DOM 中**
- 它是连接 React `虚拟 DOM` 和 `实际浏览器 DOM` 的桥梁
- 从 React 16 开始，React 被拆分为 `react 核心库` 和 `react-dom` 两个包

## 2. 常用方法

### 2.1. ReactDOM.render()

```jsx
ReactDOM.render(element, container[, callback])
```

- 用于将 React 元素渲染到指定的 DOM 容器中
- 返回对组件的引用
- 这是最基础也是最常用的方法 

### 2.2. ReactDOM.createRoot()

```jsx
const root = ReactDOM.createRoot(container)
root.render(element)
```

- React 18 中引入的新 API
- 用于创建一个根节点，支持`并发渲染`特性

### 2.3. ReactDOM.unmountComponentAtNode()

```jsx
ReactDOM.unmountComponentAtNode(container)
```

- 从 DOM 中移除已挂载的 React 组件
- 清理组件的事件处理器和 state

### 2.4. ReactDOM.findDOMNode()

```jsx
ReactDOM.findDOMNode(component)
```

- 用于获取已挂载组件的 DOM 节点
- 注意：这个方法在严格模式下已被废弃

## 3. 服务器端渲染方法

- `ReactDOM.hydrate()`：用于服务器端渲染的水合过程
- `ReactDOMServer.renderToString()`：将 React 组件渲染为初始 HTML

## 4. Portal 相关

- 允许将子节点渲染到存在于父组件以外的 DOM 节点中
- 常用于模态框、弹出层等场景

```jsx
ReactDOM.createPortal(child, container)
```

## 5. 特点和注意事项

- react-dom 是专门用于 Web 平台的包
- 移动端开发需要使用 react-native 而不是 react-dom
- 在现代 React 应用中，**推荐使用 createRoot API 而不是传统的 render 方法**

## 6. 使用示例

```jsx
// 传统方式
import ReactDOM from 'react-dom';
ReactDOM.render(<App />, document.getElementById('root'));

// React 18 方式
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```
