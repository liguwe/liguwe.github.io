
# useLayoutEffect 和 useEffect


`#react` 

>  是不是很**类似 Vue 的 watch ，并参入参数 `sync`**


## 目录
<!-- toc -->
 ## 1. 执行时机的区别 

```jsx
// useEffect：渲染完成后异步执行
useEffect(() => {
  // 在浏览器完成绘制之后执行
  console.log('useEffect 执行');
}, []);

// useLayoutEffect：渲染完成前同步执行
useLayoutEffect(() => {
  // 在浏览器绘制之前执行
  console.log('useLayoutEffect 执行');
}, []);
```

执行顺序：

1. React 更新 DOM
2. useLayoutEffect 执行
3. 浏览器绘制屏幕
4. useEffect 执行

## 2. 性能影响

### 2.1. useEffect

```jsx hl:2
useEffect(() => {
  // 异步执行，不会阻塞浏览器绘制
  expensiveOperation();
}, []);
```

### 2.2. useLayoutEffect

```jsx hl:2
useLayoutEffect(() => {
  // 同步执行，会阻塞浏览器绘制
  expensiveOperation();
}, []);
```

## 3. 使用场景

### 3.1. useLayoutEffect 适用场景

```jsx hl:1,7
// 1. 需要立即测量 DOM 的场景
useLayoutEffect(() => {
  const dimensions = element.getBoundingClientRect();
  setMeasurements(dimensions);
}, []);

// 2. 防止闪烁的场景
useLayoutEffect(() => {
  element.style.opacity = 1; // 在用户看到之前就完成设置
}, []);
```

### 3.2. useEffect 适用场景

```jsx hl:1,6
// 1. 数据获取
useEffect(() => {
  fetchData().then(data => setData(data));
}, []);

// 2. 订阅事件
useEffect(() => {
  const handler = () => console.log('scroll');
  window.addEventListener('scroll', handler);
  return () => window.removeEventListener('scroll', handler);
}, []);
```

## 4. 关键区别总结（表格）

| 特性    | useEffect | useLayoutEffect |
| ----- | --------- | --------------- |
| 执行时机  | 渲染后异步执行   | 渲染前同步执行         |
| 浏览器绘制 | 不阻塞       | 阻塞              |
| 性能影响  | 较小        | 可能较大            |
| 适用场景  | 大多数副作用    | DOM 测量和更新       |

## 5. 最佳实践

### 5.1. 默认使用 useEffect

```jsx
// 大多数情况下使用 useEffect 即可
useEffect(() => {
  // 副作用代码
}, [dependencies]);
```

### 5.2. 仅在必要时使用 useLayoutEffect

```jsx hl:1
// 当需要同步更新 DOM 或防止闪烁时
useLayoutEffect(() => {
  // DOM 操作代码
}, [dependencies]);
```

## 6. 常见问题和解决方案

### 6.1. 闪烁问题

```jsx
// 问题代码
const [position, setPosition] = useState(0);
useEffect(() => {
  setPosition(100); // 可能导致闪烁
}, []);

// 解决方案
useLayoutEffect(() => {
  setPosition(100); // 不会闪烁
}, []);
```

### 6.2. 性能问题

```jsx
// 避免在 useLayoutEffect 中进行耗时操作
useLayoutEffect(() => {
  // 不推荐
  heavyComputation();
  
  // 推荐：移到 useEffect 中
  requestAnimationFrame(() => {
    heavyComputation();
  });
}, []);
```

## 7. 注意事项

- SSR（服务器端渲染）注意事项：

```jsx
// useLayoutEffect 在 SSR 中会警告
// 可以使用条件判断
const useIsomorphicLayoutEffect = 
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;
```

- 避免过度使用：

```jsx
// 不推荐
useLayoutEffect(() => {
  // 非必要的同步操作
  setSimpleState(newValue);
}, []);

// 推荐
useEffect(() => {
  // 使用 useEffect 即可
  setSimpleState(newValue);
}, []);
```

## 8. 选择建议

- 默认使用 useEffect
- 当**出现以下情况时考虑使用 useLayoutEffect**：
	- 需要同步测量 DOM
	- 需要在视觉更新之前修改 DOM
	- 出现闪烁问题需要解决
- 在使用 useLayoutEffect 时注意性能影响
