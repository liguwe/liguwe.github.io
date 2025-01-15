
# React 中错误捕获的方式

`#react` 


## 目录
<!-- toc -->
 ## 总结 

- `static getDerivedStateFromError`
	- 更新 state，降级 UI 显示
- componentDidCatch
	- 更后面，将错误日志上报给服务器
- 全局错误
	- window.onerror 
	- window.addEventListener('unhandledrejection'
	- window.addEventListener('error'
- 通用的错误解决方案
	- 错误类型枚举
	- 错误上报
	- 默认错误回退组件等
	- 分层上报


> 更多参考
> - [22. 前端错误的分类、优先级管理及处理策略](/post/HecEAEDr.html)
> - [22. 前端错误的分类和优先级管理建议](/post/SAGGPqWD.html)

## 1. Error Boundary（错误边界）

这是 React 官方推荐的捕获渲染错误的方式：

```jsx hl:7,12,36
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // 更新 state，下次渲染时显示降级 UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // 可以在这里将错误日志上报给服务器
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <details>
            <summary>Error Details</summary>
            <pre>{this.state.error && this.state.error.toString()}</pre>
            <pre>{this.state.errorInfo && this.state.errorInfo.componentStack}</pre>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}
```

## 2. 全局错误处理

```jsx hl:10
// 在应用入口处设置
window.onerror = function(message, source, lineno, colno, error) {
  // 处理全局错误
  console.error('Global error:', { message, source, lineno, colno, error });
  // 上报错误
  return false;
};

// 处理 Promise 中的错误
window.addEventListener('unhandledrejection', function(event) {
  console.error('Unhandled promise rejection:', event.reason);
  // 上报错误
  event.preventDefault();
});
```

## 3. 异步错误处理

```jsx
// 异步组件的错误处理
const AsyncComponent = React.lazy(() => import('./AsyncComponent'));

function SafeAsyncComponent() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <AsyncComponent />
      </Suspense>
    </ErrorBoundary>
  );
}

// 异步请求错误处理
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    // 处理错误
    console.error('API Error:', error);
    throw error; // 或者返回默认值
  }
}
```

## 4. 通用错误处理解决方案

### 4.1. 创建错误类型枚举

```javascript
// 1. 创建错误类型枚举
const ErrorTypes = {
  NETWORK_ERROR: 'NETWORK_ERROR',
  RENDER_ERROR: 'RENDER_ERROR',
  RUNTIME_ERROR: 'RUNTIME_ERROR',
  BUSINESS_ERROR: 'BUSINESS_ERROR'
};
```

### 4.2. 创建自定义错误类

```tsx
// 2. 创建自定义错误类
class AppError extends Error {
  constructor(type, message, metadata = {}) {
    super(message);
    this.type = type;
    this.metadata = metadata;
    this.timestamp = new Date().toISOString();
  }
}
```

### 4.3. 错误处理服务：记得上报

```tsx hl:28,22
// 3. 错误处理服务
class ErrorService {
  static async reportError(error, componentInfo = null) {
    const errorReport = {
      error: {
        message: error.message,
        stack: error.stack,
        type: error.type || 'UNKNOWN',
        metadata: error.metadata || {},
      },
      component: componentInfo,
      userInfo: {
        // 收集用户信息
        userId: localStorage.getItem('userId'),
        userAgent: navigator.userAgent,
        // 其他相关信息
      },
      timestamp: new Date().toISOString()
    };

    try {
      await fetch('/api/error-logging', {
        method: 'POST',
        body: JSON.stringify(errorReport)
      });
    } catch (e) {
      console.error('Failed to report error:', e);
      // 可以考虑使用备用报告机制，如 sendBeacon
      navigator.sendBeacon('/api/error-logging', JSON.stringify(errorReport));
    }
  }
  static getErrorMessage(error) {
    // 根据错误类型返回用户友好的错误信息
    const messages = {
      [ErrorTypes.NETWORK_ERROR]: '网络连接出现问题，请检查网络后重试',
      [ErrorTypes.RENDER_ERROR]: '页面渲染出现问题，请刷新重试',
      [ErrorTypes.BUSINESS_ERROR]: error.message,
      'default': '系统出现未知错误，请稍后重试'
    };

    return messages[error.type] || messages.default;
  }
}
```

### 4.4. 增强版错误边界组件

```tsx
// 4. 增强版错误边界组件
class EnhancedErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    ErrorService.reportError(error, {
      componentStack: errorInfo.componentStack,
      componentName: this.props.name || 'Unknown'
    });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return this.props.fallback ? (
        this.props.fallback({
          error: this.state.error,
          retry: this.handleRetry
        })
      ) : (
        <DefaultErrorFallback
          error={this.state.error}
          onRetry={this.handleRetry}
        />
      );
    }

    return this.props.children;
  }
}
```

### 4.5. 默认错误回退组件

```tsx
// 5. 默认错误回退组件
function DefaultErrorFallback({ error, onRetry }) {
  return (
    <div className="error-container">
      <h2>出错啦！</h2>
      <p>{ErrorService.getErrorMessage(error)}</p>
      <button onClick={onRetry}>重试</button>
    </div>
  );
}
```

### 4.6. 使用示例

```jsx

// 6. 使用示例
function App() {
  return (
    <EnhancedErrorBoundary
      name="RootApp"
      fallback={({ error, retry }) => (
        <CustomErrorUI error={error} onRetry={retry} />
      )}
    >
      <Router>
        {/* 路由配置 */}
      </Router>
    </EnhancedErrorBoundary>
  );
}

// 7. 异步组件错误处理
const AsyncComponent = React.lazy(() => 
  import('./AsyncComponent')
    .catch(error => {
      ErrorService.reportError(
        new AppError(ErrorTypes.RUNTIME_ERROR, 'Failed to load component', {
          componentName: 'AsyncComponent'
        })
      );
      // 返回一个默认导出，避免应用崩溃
      return { default: () => <DefaultErrorFallback /> };
    })
);

// 8. API 请求错误处理
const api = {
  async fetch(url, options = {}) {
    try {
      const response = await fetch(url, options);
      
      if (!response.ok) {
        throw new AppError(
          ErrorTypes.NETWORK_ERROR,
          `HTTP error! status: ${response.status}`,
          { url, status: response.status }
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      }
      
      throw new AppError(
        ErrorTypes.NETWORK_ERROR,
        'Failed to fetch data',
        { url, originalError: error.message }
      );
    }
  }
};

// 9. 在组件中使用
function DataComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await api.fetch('/api/data');
        setData(result);
      } catch (error) {
        setError(error);
        ErrorService.reportError(error, {
          componentName: 'DataComponent',
          action: 'fetchData'
        });
      }
    }

    fetchData();
  }, []);

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (!data) {
    return <Loading />;
  }

  return <div>{/* 渲染数据 */}</div>;
}
```

## 5. 使用建议

### 5.1. 在应用的关键节点使用 ErrorBoundary

```jsx
function App() {
  return (
    <EnhancedErrorBoundary name="Root">
      <Router>
        <Switch>
          <Route path="/dashboard">
            <EnhancedErrorBoundary name="Dashboard">
              <Dashboard />
            </EnhancedErrorBoundary>
          </Route>
          {/* 其他路由 */}
        </Switch>
      </Router>
    </EnhancedErrorBoundary>
  );
}
```

### 5.2. 对于重要的异步操作添加错误处理

```jsx
function ImportantComponent() {
  const handleImportantAction = async () => {
    try {
      await performAction();
    } catch (error) {
      ErrorService.reportError(
        new AppError(ErrorTypes.BUSINESS_ERROR, '操作失败', {
          action: 'importantAction'
        })
      );
      // 显示用户友好的错误消息
      message.error(ErrorService.getErrorMessage(error));
    }
  };

  return <button onClick={handleImportantAction}>执行操作</button>;
}
```

### 5.3. 在开发环境提供详细信息，生产环境注意安全

```jsx
const ErrorMessage = ({ error }) => (
  <div className="error-message">
    <h3>{ErrorService.getErrorMessage(error)}</h3>
    {process.env.NODE_ENV === 'development' && (
      <details>
        <summary>Debug Information</summary>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </details>
    )}
  </div>
);
```

### 5.4. 分层错误处理

这种分层方式确保了即使某个部分出错，其他部分仍然可以正常工作

```javascript
// App.js
function App() {
  return (
    <ErrorBoundary>
      <div className="app">
        <Header />
        <main>
          <ErrorBoundary>
            <Router>
              <Switch>
                <Route path="/dashboard">
                  <ErrorBoundary>
                    <Dashboard />
                  </ErrorBoundary>
                </Route>
                {/* 其他路由 */}
              </Switch>
            </Router>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

```

### 5.5. 记得错误监控和上报

```javascript
// 错误监控服务
const errorTracker = {
  init() {
    // 初始化错误追踪服务
  },

  captureError(error, context = {}) {
    // 收集错误信息
    const errorInfo = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      userInfo: getUserInfo(),
      context,
    };

    // 发送到服务器
    this.sendToServer(errorInfo);
  },

  sendToServer(errorInfo) {
    fetch('/api/errors', {
      method: 'POST',
      body: JSON.stringify(errorInfo),
    }).catch(err => {
      // 确保错误上报本身的错误不会影响应用
      console.error('Error reporting failed:', err);
    });
  }
};

```