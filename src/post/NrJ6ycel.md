
# useMemo 、 useCallback、Vue 的 computed

`#React` `#vue3`  


## 目录
<!-- toc -->
 ## 1. 执行时机 

- 组件`首次`渲染时执行一次
- 在之后，当且仅当`依赖项`发生变化时重新执行
- 如果依赖项没有变化
	- 即使组件重新渲染，也会直接使用缓存的值而不执行回调

## 2. 最佳实践

- 简单计算不需要 `useMemo`，因为
	- `useMemo` 本身也有开销（创建函数、维护依赖列表等）
	- 主要用于优化`复杂计算`或需要`保持引用稳定`的场景
		- 因为只在依赖项改变时`创建新对象`
- 正确的依赖项设置
	- 比如依赖项数组为空，但使用了 `props.data`
- 避免在 `useMemo` 中进行副作用操作，比如请求数据
	- 正确的做法是：
		- 使用 `useEffect` 处理副作用，然后请求完数据后，设置 `data`，然后再将 `data` 作为依赖项

## 3. 注意事项

- 别使用 `{ ...data }` ，每次都不一样，导致缓存失败
	- 可**指定具体依赖属性值**，比如 `data.id`
- useMemo 别放到 if 语句中，清在**顶层**使用
- 如果需要依赖项的深度比较
	- 建议 1：使用具体属性
	- 建议 2：深拷贝，但不建议
- 添加必要依赖项，否则可能会闭包陷阱（即使用了旧的变量）

## 4. 配合其他 hooks 使用

```javascript
function OptimizedComponent() {
  // 1. 与 useState 配合
  const [data, setData] = useState([]);
  
  // 2. 与 useCallback 配合
  const memoizedData = useMemo(() => {
    return processData(data);
  }, [data]);
  
  const handleData = useCallback(() => {
    doSomethingWith(memoizedData);
  }, [memoizedData]); // 使用 memoized 值作为依赖
}

```

## 5. 和 vue 的 computed 的异同

- 响应式系统：
	- Vue computed 基于响应式系统（ref/reactive）
	- React useMemo 基于`依赖数组`比较
- 是否`自动`依赖追踪
	- Vue computed `自动追踪依赖`，更符合响应式编程
	- React useMemo 需要手`动声明依赖`，更显式
- 是否支持写
	- Vue computed 支持 `getter/setter`
	- React useMemo 只支持 getter
- 使用方式
	- Vue computed 返回响应式引用（需要 `.value`）
	- React useMemo 直接返回值
- 集成度：
	- Vue computed 与 其他组合式 API 紧密集成
	- React useMemo 相对独立
- 副作用：
	- 副作用使用 `watch/watchEffect`
	- 副作用使用 useEffect，然后修改状态值，再将状态值作为 `useMemo` 的依赖项
- 计算时机
	- vue **只有依赖变化时重新计算**
	- react **每次渲染都会检查依赖数组**，依赖未变化时使用缓存值

==编程范式不同：==
- Vue 的组合式 API 中的 computed 更符合`响应式编程范式`
- 而 React 的 useMemo 则更符合`函数式编程思维`。

## 6. 与 useCallback 的区别

实际上，`useCallback` 是 `useMemo` 的特殊用例：

```javascript
// useCallback 的实现原理等同于：
const callback = useCallback(fn, deps);
// 等价于，返回一个函数
const callback = useMemo(() => fn, deps);
```

### 6.1. 性能优化场景

#### 6.1.1. useMemo - 昂贵计算的优化

```jsx
// useMemo - 昂贵计算的优化
function DataGrid({ data, config }) {
  // 复杂数据处理的结果缓存
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      processed: expensiveOperation(item, config)
    }));
  }, [data, config]);

  return <Table data={processedData} />;
}


```

#### 6.1.2. useCallback - 防止子组件重渲染

如下，`<TodoInput onAdd={handleAddTodo} /> ` 中 `handleAddTodo` 变化会导致重新渲染

```javascript hl:12
// useCallback - 防止子组件重渲染
function TodoList() {
  const [todos, setTodos] = useState([]);

  // 缓存添加 todo 的函数
  const handleAddTodo = useCallback((text) => {
    setTodos(prev => [...prev, { id: Date.now(), text }]);
  }, []); // 不依赖任何状态，所以是空数组

  return (
    <>
      <TodoInput onAdd={handleAddTodo} /> 
      {/* 子组件使用 React.memo */}
      <TodoItems items={todos} />
    </>
  );
}
```

### 6.2. 常见错误用法

```javascript
// ❌ 错误：不必要的 useMemo
const SimpleComponent = ({ name }) => {
  // 简单的字符串拼接不需要 useMemo
  const greeting = useMemo(() => `Hello, ${name}!`, [name]);
  return <div>{greeting}</div>;
};

// ❌ 错误：不必要的 useCallback
const SimpleButton = () => {
  // 简单组件不需要 useCallback
  const handleClick = useCallback(() => {
    console.log('clicked');
  }, []);
  return <button onClick={handleClick}>Click me</button>;
};

// ✅ 正确：有性能影响时使用
const ExpensiveComponent = ({ data }) => {
  // 复杂计算需要缓存
  const processedData = useMemo(() => {
    return heavyComputation(data);
  }, [data]);

  return <div>{processedData}</div>;
};
```

### 6.3. 与 React.memo 配合使用

```javascript
// 子组件使用 React.memo 包裹
const ChildComponent = React.memo(({ onClick, data }) => {
  console.log("Child rendered");
  return (
    <button onClick={onClick}>
      {data.text}
    </button>
  );
});

// 父组件
function ParentComponent() {
  const [count, setCount] = useState(0);
  
  // 使用 useCallback 缓存函数
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []); // 空依赖数组
  
  // 使用 useMemo 缓存数据
  const data = useMemo(() => ({
    text: `Current count is ${count}`
  }), [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent onClick={handleClick} data={data} />
    </div>
  );
}
```

### 6.4. 主要区别总结

- 用途：
	- useMemo：缓存**函数计算的结果**
	- useCallback：缓存**函数引用**
- 返回值：
	- useMemo：返回缓存的**值**
	- useCallback：返回缓存的**函数**
- 使用场景：
	- useMemo：
		- 昂贵的计算操作
		- 复杂的数据处理
		- 需要缓存引用的对象
	- useCallback：
		- **传递给子组件的回调函数**
		- 防止不必要的重渲染
		- 需要保持**函数引用稳定**的场景
- 性能考虑：
	- 不是所有值都需要 useMemo
	- 不是所有函数都需要 useCallback
	- 应该在实际遇到性能问题时才使用

### 6.5. 使用建议

1. 优先考虑代码的可读性和维护性，而不是过早优化
	1. **过早优化是万恶之源**
2. 在以下情况使用 useMemo：
	- 计算成本高的操作
	- 需要保持引用相等的对象
3. 在以下情况使用 `useCallback`：
	- **传递给使用 React.memo 的子组件的函数**
	- 函数作为其他 Hook 的依赖项
4. 避免过度使用：
	- 简单的计算不需要 `useMemo`
	- 简单的事件处理函数不需要 `useCallback`
5. 结合 React.memo 使用可以获得**最佳性能优化效果**

## 7. useCallback 的常见使用场景

### 7.1. 防止子组件重复渲染（最常见场景）

```javascript hl:1,12,31,18
// 子组件
const ExpensiveChild = React.memo(({ onItemClick }) => {
  // 通过这个日志观察渲染情况
  console.log("Child render"); 
  return (
    <div>
      <button onClick={() => onItemClick(1)}>Click me</button>
    </div>
  );
});

// 父组件
function Parent() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  // ✅ 使用 useCallback 缓存回调函数
  const handleItemClick = useCallback((id) => {
    console.log('Item clicked:', id);
    // 一些复杂的操作
  }, []); // 空依赖数组因为这个函数不依赖任何 props 或 state

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      <button onClick={() => setOtherState(!otherState)}>
        Toggle: {otherState.toString()}
      </button>
      <ExpensiveChild onItemClick={handleItemClick} />
    </div>
  );
}
```

### 7.2. 在 useEffect 中使用的函数

- query 和 handleSearch 变化时，触发请求
	- query 变化好理解
	- handleSearch 变化，意味着 searchType 变化了
		- 所以 searchType 变化，导致 handleSearch变化，导致副作业触发（请求触发）

```javascript hl:23
function SearchComponent({ searchType }) {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');

  // ✅ 缓存搜索函数，避免 useEffect 不必要的触发
  const handleSearch = useCallback(async (searchText) => {
    try {
      const response = await fetch(
        `/api/search?type=${searchType}&q=${searchText}`
      );
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Search failed:', error);
    }
  }, [searchType]); // 只依赖 searchType

  // 现在 useEffect 只会在 query 或 handleSearch 变化时执行
  useEffect(() => {
    if (query) {
      handleSearch(query);
    }
  }, [query, handleSearch]); 



  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {results.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

### 7.3. 事件监听器的处理

> 传入空数组，说明是组件挂载时，只执行一次，后面都是取缓存值

```javascript hl:13,18
function WindowResizeHandler() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // ✅ 缓存 resize 处理函数
  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []); // 不依赖任何变量

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]); // 依赖 handleResize

  return (
    <div>
      Window size: {windowSize.width} x {windowSize.height}
    </div>
  );
}
```

### 7.4. 在自定义 Hook 中返回函数

```javascript
// 自定义 Hook
function useFormField(initialValue = '') {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');

  // ✅ 缓存验证和更新函数
  const handleChange = useCallback((e) => {
    const newValue = e.target.value;
    setValue(newValue);
    
    // 验证逻辑
    if (newValue.length < 3) {
      setError('Value must be at least 3 characters');
    } else {
      setError('');
    }
  }, []); // 不依赖外部变量

  const reset = useCallback(() => {
    setValue(initialValue);
    setError('');
  }, [initialValue]);

  return {
    value,
    error,
    handleChange,
    reset
  };
}

```

使用自定义 Hook：useFormField

```javascript hl:3,4
// 使用自定义 Hook
function Form() {
  const username = useFormField('');
  const password = useFormField('');

  return (
    <form>
      <div>
        <input
          value={username.value}
          onChange={username.handleChange}
          placeholder="Username"
        />
        {username.error && <span>{username.error}</span>}
      </div>
      <div>
        <input
          type="password"
          value={password.value}
          onChange={password.handleChange}
          placeholder="Password"
        />
        {password.error && <span>{password.error}</span>}
      </div>
      <button type="button" onClick={() => {
        username.reset();
        password.reset();
      }}>
        Reset
      </button>
    </form>
  );
}
```

### 7.5. 处理防抖/节流函数

> 空依赖数组，因为这个函数不需要重新创建

```javascript
function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  // ✅ 缓存防抖搜索函数
  const debouncedSearch = useCallback(
    debounce(async (term) => {
      if (term) {
        const response = await fetch(`/api/search?q=${term}`);
        const data = await response.json();
        setResults(data);
      } else {
        setResults([]);
      }
    }, 500),
    [] // 空依赖数组，因为这个函数不需要重新创建
  );

  // ✅ 缓存输入处理函数
  const handleInputChange = useCallback((e) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  }, [debouncedSearch]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

### 7.6. 复杂表单处理

```javascript
function ComplexForm() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  // ✅ 缓存字段验证函数
  const validateField = useCallback((name, value) => {
    let error = '';
    switch (name) {
      case 'email':
        if (!value.includes('@')) {
          error = 'Invalid email address';
        }
        break;
      case 'password':
        if (value.length < 6) {
          error = 'Password must be at least 6 characters';
        }
        break;
      // 更多验证规则...
    }
    return error;
  }, []);

  // ✅ 缓存字段更新处理函数
  const handleFieldChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  }, [validateField]);

  // ✅ 缓存表单提交处理函数
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const hasErrors = Object.values(errors).some(error => error);
    if (!hasErrors) {
      try {
        await fetch('/api/submit', {
          method: 'POST',
          body: JSON.stringify(formData)
        });
        // 处理成功
      } catch (error) {
        // 处理错误
      }
    }
  }, [formData, errors]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="email"
          onChange={handleFieldChange}
          value={formData.email || ''}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <input
          name="password"
          type="password"
          onChange={handleFieldChange}
          value={formData.password || ''}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
```

### 7.7. 使用建议

- 优先考虑以下场景使用 useCallback：
	- 传递给使用 React.memo() 的子组件的函数
	- 作为 useEffect 的依赖项的函数
	- 在自定义 Hook 中返回的函数
	- 需要稳定引用的事件处理函数
- 避免过度使用：
	- 简单的内联事件处理器不需要 useCallback
	- 组件内部使用的函数通常不需要 useCallback
	- 只渲染一次的组件不需要 useCallback
- 性能优化原则：
	- **先测量，后优化**
	- 使用 React DevTools Profiler 检测性能问题
	- 关注实际用户体验而不是理论优化
- 结合其他优化技术：
	- 配合 React.memo 使用
	- 考虑使用 useMemo 缓存计算结果
	- 适当使用状态提升和组件拆分
