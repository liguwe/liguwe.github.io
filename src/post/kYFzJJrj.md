
# React 性能优化的思路有哪些？

`#react` 

## 目录
<!-- toc -->
 ## 1. 组件渲染优化 

### 1.1. 使用 React.memo 避免不必要的重渲染

```javascript
// 使用 React.memo 包装函数组件
const MyComponent = React.memo(function MyComponent(props) {
  /* 渲染逻辑 */
  return (
    // ...
  );
}, (prevProps, nextProps) => {
  // 可选的比较函数，返回 true 则不重新渲染
  return prevProps.id === nextProps.id;
});

// 对于类组件，可以使用 PureComponent
class MyPureComponent extends React.PureComponent {
  render() {
    return (
      // ...
    );
  }
}
```

### 1.2. 使用 useMemo 缓存计算结果

```javascript
function ExpensiveComponent({ data }) {
  // 缓存计算结果
  const processedData = useMemo(() => {
    return data.map(item => expensiveOperation(item));
  }, [data]); // 只在 data 改变时重新计算

  return (
    <div>
      {processedData.map(item => (
        <div key={item.id}>{item.value}</div>
      ))}
    </div>
  );
}
```

### 1.3. 使用 useCallback 缓存函数

```javascript
function ParentComponent() {
  const [count, setCount] = useState(0);

  // 缓存回调函数
  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []); // 空依赖数组，函数永远不会改变

  return <ChildComponent onClick={handleClick} />;
}
```

## 2. 列表渲染优化

### 2.1. 使用合适的 key

```javascript
// ❌ 错误示例：使用索引作为 key
{items.map((item, index) => (
  <ListItem key={index} item={item} />
))}

// ✅ 正确示例：使用唯一标识符作为 key
{items.map(item => (
  <ListItem key={item.id} item={item} />
))}
```

### 2.2. 虚拟列表

使用 `react-window` 或 `react-virtualized` 处理长列表：

```javascript
import { FixedSizeList } from 'react-window';

function VirtualList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].name}
    </div>
  );

  return (
    <FixedSizeList
      height={400}
      width={300}
      itemCount={items.length}
      itemSize={35}
    >
      {Row}
    </FixedSizeList>
  );
}
```

## 3. 状态管理优化

### 3.1. 合理拆分状态

```javascript
// ❌ 错误示例：所有状态放在一起
const [state, setState] = useState({
  user: null,
  posts: [],
  comments: [],
  settings: {}
});

// ✅ 正确示例：拆分状态
const [user, setUser] = useState(null);
const [posts, setPosts] = useState([]);
const [comments, setComments] = useState([]);
const [settings, setSettings] = useState({});
```

### 3.2. 使用 useReducer 管理复杂状态

```javascript
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}
```

## 4. 代码分割和懒加载

### 4.1. 使用 React.lazy 和 Suspense

```javascript
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <Suspense fallback={<Loading />}>
      <OtherComponent />
    </Suspense>
  );
}
```

### 4.2. 路由级别的代码分割

```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';

const Home = React.lazy(() => import('./routes/Home'));
const About = React.lazy(() => import('./routes/About'));
const Contact = React.lazy(() => import('./routes/Contact'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
```

## 5. 避免重复渲染

### 5.1. 使用 CSS 代替 JS 动画

```javascript
// ❌ 使用 JS 动画
function AnimatedComponent() {
  const [position, setPosition] = useState(0);
  
  useEffect(() => {
    const animation = setInterval(() => {
      setPosition(p => p + 1);
    }, 16);
    return () => clearInterval(animation);
  }, []);

  return <div style={{ transform: `translateX(${position}px)` }} />;
}

// ✅ 使用 CSS 动画
const AnimatedComponent = styled.div`
  animation: slide 1s linear infinite;
  
  @keyframes slide {
    from { transform: translateX(0); }
    to { transform: translateX(100px); }
  }
`;
```

### 5.2. 使用防抖和节流

```javascript
import { debounce, throttle } from 'lodash';

function SearchComponent() {
  // 使用防抖处理搜索
  const debouncedSearch = useCallback(
    debounce((query) => {
      // 执行搜索
      performSearch(query);
    }, 300),
    []
  );

  // 使用节流处理滚动
  const throttledScroll = useCallback(
    throttle((event) => {
      // 处理滚动
      handleScroll(event);
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [throttledScroll]);

  return (
    <input
      type="text"
      onChange={(e) => debouncedSearch(e.target.value)}
    />
  );
}
```

## 6. 优化资源加载

### 6.1. 图片懒加载

```javascript
function ImageComponent({ src, alt }) {
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            imgRef.current.src = src;
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src]);

  return <img ref={imgRef} alt={alt} />;
}
```

### 6.2. 预加载关键资源

```javascript
function App() {
  useEffect(() => {
    // 预加载重要图片
    const preloadImages = ['/logo.png', '/hero.jpg'];
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    // 预加载其他组件
    const preloadComponent = () => import('./HeavyComponent');
  }, []);

  return (
    // ...
  );
}
```

## 7. 工具和监控

### 7.1. 使用 React DevTools 进行性能分析

```javascript
// 开发环境中使用 Profiler
import { Profiler } from 'react';

function onRenderCallback(
  id, // 发生提交的 Profiler 树的 "id"
  phase, // "mount" （首次渲染）或 "update" （重新渲染）
  actualDuration, // 本次更新在渲染完成之前耗费的时间
  baseDuration, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
  startTime, // 本次更新开始渲染的时间
  commitTime, // 本次更新被提交的时间
  interactions // 属于本次更新的 interactions 的集合
) {
  // 记录或上报性能数据
  console.log(`${id} 渲染耗时: ${actualDuration}`);
}

function MyApp() {
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <App />
    </Profiler>
  );
}
```

## 8. 其他优化建议

- **合理使用 Context**
	- 避免将频繁变化的值放在 Context 中
	- 考虑拆分 Context 以减少不必要的重渲染
- **使用 Web Workers 处理复杂计算**
   ```javascript
   const worker = new Worker('worker.js');
   
   worker.postMessage({ data: complexData });
   worker.onmessage = (event) => {
     setResult(event.data);
   };
   ```

- **优化依赖包大小**
	- 使用 `import` 语法进行按需加载
	- 使用较小的替代包
	- 定期审查和更新依赖
- **服务端渲染 (SSR)**
	- 考虑使用 Next.js 或其他 SSR 框架
	- 实现首屏快速加载
	- 优化 SEO
- **使用性能监控工具**
	- React DevTools
	- Chrome Performance 面板
	- Lighthouse
	- 自定义性能指标监控
