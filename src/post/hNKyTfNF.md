
# 其他


## 目录
<!-- toc -->
 ## 6. 为什么 React 需要 Fiber 架构，而 Vue 似乎不需要类似的机制 

### 6.1. React 的特点和挑战

React 的核心理念是：

```javascript
UI = f(state)
```

这意味着 React 在**每次状态变化时都会重新渲染整个组件树**。

这种方法简单直接，但也带来了一些挑战：

```jsx
// React 组件示例
function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <LargeList items={generateItems(1000)} />
    </div>
  );
}
```

在这个例子中，即使只是更新了 `count`，React 也会重新渲染整个组件树，包括 `LargeList`。

### 6.2. Fiber 架构的必要性

Fiber 架构主要解决了以下问题：

#### 6.2.1. 大型应用的性能问题

```javascript
// 模拟大量计算
function heavyComputation() {
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += Math.random();
  }
  return result;
}

function SlowComponent() {
  const result = heavyComputation();
  return <div>{result}</div>;
}
```

在旧的架构中，这种计算可能会阻塞主线程，导致页面卡顿。

#### 6.2.2. 优先级调度

```jsx
<div>
  <UserInfo />  // 高优先级
  <Newsfeed />  // 低优先级
  <Sidebar />   // 低优先级
</div>
```

Fiber 允许 React 根据优先级调度更新。

#### 6.2.3. 可中断的渲染过程

```javascript
// Fiber 允许将渲染工作分解成小单元
let nextUnitOfWork = null;

function workLoop(deadline) {
  while (nextUnitOfWork && deadline.timeRemaining() > 0) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
  }
  requestIdleCallback(workLoop);
}

requestIdleCallback(workLoop);
```

### 6.3. Vue 的不同之处

Vue 采用了不同的策略：

#### 6.3.1. 细粒度的依赖追踪

```vue
<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="increment">Increment</button>
    <large-list :items="items" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      items: []
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>
```

Vue 能够**精确地知道**哪些组件依赖于 `count`，只更新必要的部分。

#### 6.3.2. 异步更新队列

```javascript
// Vue 内部的更新队列机制
let queue = [];
let waiting = false;

function queueJob(job) {
  if (!queue.includes(job)) {
    queue.push(job);
    if (!waiting) {
      waiting = true;
      Promise.resolve().then(flushJobs);
    }
  }
}

function flushJobs() {
  for (let i = 0; i < queue.length; i++) {
    queue[i]();
  }
  queue = [];
  waiting = false;
}
```

Vue 通过这种机制来批量处理更新，减少不必要的渲染。

#### 6.3.3. 编译时优化

```vue
<template>
  <div>
    <p>Static content</p>
    <p>{{ dynamicContent }}</p>
  </div>
</template>
```

Vue 的模板编译器可以在编译时识别静态内容，从而减少运行时的工作。

### 6.4. 总结比较

React（使用 Fiber）:
- 适合大型、复杂的应用
- 提供更细粒度的控制和调度
- 能够处理长时间运行的任务而不阻塞 UI
Vue:
- 依赖追踪系统更精确
- 默认情况下性能已经很好
- 编译时优化减少了运行时的工作量

### 6.5. 结论

React 需要 Fiber 架构主要是因为它的设计理念（**整体重新渲染**）带来的挑战。Fiber 使 React 能够更好地控制渲染过程，提高大型应用的性能。

Vue 通过其响应式系统和编译时优化，在大多数情况下已经能够提供良好的性能，因此不需要像 Fiber 这样复杂的架构。

然而，这并不意味着 Vue 完全不需要类似的优化。事实上，Vue 3 引入了 Composition API 和基于 Proxy 的响应式系统，这些也是为了提高性能和灵活性。但总的来说，Vue 的设计使得它不需要像 Fiber 这样彻底的架构改变。

## 7. React 中的 Portal  的点击事件，同样冒泡到在事件冒泡方面

![图片&文件](./files/20241111-15.png)

首先，让我们明确一下什么是 Portal：

```jsx
import ReactDOM from 'react-dom';

function Modal({ children }) {
  return ReactDOM.createPortal(
    children,
    document.getElementById('modal-root')
  );
}
```

Portal 允许我们将子节点渲染到存在于父组件以外的 DOM 节点中。

现在，关于你的问题：**在 React 中，即使子组件是一个 Portal，发生在其中的点击事件仍然能够冒泡到父组件。**

这看起来可能有点反直觉，因为在 DOM 结构中，Portal 的内容实际上是在父组件之外的。但是 React 特意设计了这种行为，以保持一致性和方便性。

这种行为有几个重要的特点：

1. **一致性**：无论子组件是否通过 Portal 渲染，事件冒泡的行为都是一致的。这使得开发者可以更容易地理解和预测事件的流动。
2. **灵活性**：你可以在 Portal 内部处理事件，同时也可以让事件冒泡到 Portal 之外的父组件。
3. **控制**：如果你不想让事件冒泡到 Portal 外部，你可以在 Portal 内部的事件处理函数中调用 `e.stopPropagation()`。
4. **注意 DOM 结构**：虽然在 React 的事件系统中事件会冒泡，但在实际的 DOM 结构中，Portal 的内容是在父组件之外的。这意味着如果你使用原生 DOM 事件监听器，行为可能会有所不同。

总结：
- 在 React 中，Portal 内部的事件可以冒泡到 Portal 外部的父组件。
- 这是 React 特意设计的行为，为了保持一致性和方便性。
- 你可以使用 `e.stopPropagation()` 来阻止事件冒泡，如果需要的话。
- 这个行为是 React 事件系统的特性，与实际的 DOM 结构无关。

这种设计使得 Portal 在保持灵活性的同时，也能够与 React 的组件树结构保持一致的事件传播行为。

## 8. React 为什么要废弃 componentwillMount、componentWillReceiveProps、componentWillUpdate 这三个生命周期钩子？它们有哪些问题呢？ React 又是如何解决的呢？

![图片&文件](./files/20241111-16.png)

## 9. React render 方法的原理和触发时机

### 9.1. Render 方法的基本原理

React 的 render 方法主要负责将组件转换为虚拟 DOM（Virtual DOM）：

```jsx hl:3,15
// 类组件中的 render
class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

// 函数组件
function MyFunctionalComponent(props) {
  // 整个函数体相当于 render 方法
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}
```

### 9.2. Render 的执行过程

```jsx
// 简化的 render 过程
const render = (Component, props) => {
  // 1. 执行 render 方法，获取虚拟 DOM
  const vdom = Component(props);
  
  // 2. 对比虚拟 DOM（Diffing）
  const patches = diff(previousVDOM, vdom);
  
  // 3. 更新真实 DOM
  patch(realDOM, patches);
}
```

### 9.3. Render 的触发时机

#### 9.3.1. 首次渲染

```jsx
// 组件首次挂载时
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

#### 9.3.2. Props 改变

```jsx
function Parent() {
  const [count, setCount] = useState(0);
  
  return (
    <Child count={count} /> // props 改变会触发 Child 重新渲染
  );
}
```

#### 9.3.3. State 改变

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

#### 9.3.4. 父组件重新渲染

```jsx
function Parent() {
  const [update, setUpdate] = useState(0);
  
  return (
    <div>
      <Child /> {/* Parent 重新渲染会导致 Child 也重新渲染 */}
      <button onClick={() => setUpdate(update + 1)}>
        Update Parent
      </button>
    </div>
  );
}
```

#### 9.3.5. 性能优化方法

##### 9.3.5.1. React.memo 用于函数组件
```jsx
const MemoizedComponent = React.memo(function MyComponent(props) {
  return (
    <div>{props.value}</div>
  );
});
```

##### 9.3.5.2. PureComponent 用于类组件

```jsx
class MyPureComponent extends React.PureComponent {
  render() {
    return (
      <div>{this.props.value}</div>
    );
  }
}
```

##### 9.3.5.3. shouldComponentUpdate 用于自定义更新逻辑

```jsx
class MyComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.value !== nextProps.value;
  }
  
  render() {
    return (
      <div>{this.props.value}</div>
    );
  }
}
```

### 9.4. 常见的渲染优化问题

#### 9.4.1. 避免在渲染中创建新对象或函数
```jsx
// 不好的写法
function BadComponent() {
  return (
    <button onClick={() => console.log('clicked')}>  // 每次渲染都创建新函数
      Click me
    </button>
  );
}

// 好的写法
function GoodComponent() {
  const handleClick = useCallback(() => {
    console.log('clicked');
  }, []);
  
  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```

#### 9.4.2. 使用 useMemo 缓存计算结果
```jsx
function ExpensiveComponent({ data }) {
  const processedData = useMemo(() => {
    return data.map(item => expensiveCalculation(item));
  }, [data]);
  
  return <div>{processedData}</div>;
}
```

### 9.5. 渲染阶段的生命周期

对于类组件，render 相关的生命周期方法执行顺序：
```jsx
class LifecycleComponent extends React.Component {
  // 1. 在 render 之前
  static getDerivedStateFromProps(props, state) {
    return null;
  }
  
  // 2. 判断是否需要更新
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  
  // 3. render 方法
  render() {
    return <div>Content</div>;
  }
  
  // 4. render 后，更新前
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null;
  }
  
  // 5. 更新后
  componentDidUpdate(prevProps, prevState, snapshot) {
  }
}
```

### 9.6. 总结

1. Render 方法是 React 组件的核心，负责生成虚拟 DOM。
2. 触发时机包括：首次渲染、props 变化、state 变化、父组件重渲染。
3. React 提供了多种优化方法来避免不必要的渲染。
4. 合理使用这些优化方法可以显著提升应用性能。
5. 理解渲染原理和触发时机对于编写高性能的 React 应用至关重要。

![图片&文件](./files/20241111-18.png)

