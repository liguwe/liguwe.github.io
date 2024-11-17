
# 高阶组件（HOC）


`#react` 


## 目录
<!-- toc -->
 ## 1. 什么是高阶组件 

高阶组件是一个函数，接收一个组件作为参数，返回一个新的增强组件。这是一种基于 React 组合特性的组件**复用**技术。

```jsx
// 基本的 HOC 结构
const withExample = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
}

// 使用 HOC
const EnhancedComponent = withExample(OriginalComponent);
```

## 2. 常见使用场景

### 2.1. 属性代理

```jsx
// 添加额外的 props
const withExtraProps = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      const newProps = {
        extraProp: 'Extra Property'
      };
      return <WrappedComponent {...this.props} {...newProps} />;
    }
  }
}

// 使用示例
const MyComponent = ({ extraProp }) => (
  <div>{extraProp}</div>
);

const Enhanced = withExtraProps(MyComponent);
```

### 2.2. 条件渲染：权限控制

```jsx 
// 权限控制 HOC
const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      if (!this.props.isAuthenticated) {
        return <Navigate to="/login" />;
      }
      return <WrappedComponent {...this.props} />;
    }
  }
}

// 加载状态 HOC
const withLoading = (WrappedComponent) => {
  return function({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  }
}
```

### 2.3. 状态管理

```jsx
// 添加本地状态管理
const withState = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      count: 0
    };

    increment = () => {
      this.setState(prev => ({ count: prev.count + 1 }));
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          count={this.state.count}
          onIncrement={this.increment}
        />
      );
    }
  }
}
```

### 2.4. 日志记录

```jsx
// 组件生命周期日志
const withLogger = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      console.log(`${WrappedComponent.name} mounted`);
    }

    componentWillUnmount() {
      console.log(`${WrappedComponent.name} will unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
}
```

### 2.5. 性能优化：React.memo

```jsx
// 添加性能优化
const withMemo = (WrappedComponent) => {
  return React.memo(WrappedComponent, (prevProps, nextProps) => {
    // 自定义比较逻辑
    return prevProps.value === nextProps.value;
  });
}
```

### 2.6. **数据获取和加载状态**

```javascript hl:11
const withData = (dataSource) => (WrappedComponent) => {
  return class extends React.Component {
    state = {
      data: null,
      loading: true,
      error: null
    };

    async componentDidMount() {
      try {
        const data = await dataSource();
        this.setState({ data, loading: false });
      } catch (error) {
        this.setState({ error, loading: false });
      }
    }

    render() {
      const { data, loading, error } = this.state;
      return (
        <WrappedComponent
          data={data}
          loading={loading}
          error={error}
          {...this.props}
        />
      );
    }
  };
};
```

### 2.7. **样式注入**

```javascript
const withStyles = (styles) => (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <div style={styles}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};
```

## 3. 复杂示例

### 3.1. 组合多个 HOC：compose

```jsx
// HOC 组合
const compose = (...funcs) => x => funcs.reduceRight((v, f) => f(v), x);

const enhance = compose(
  withAuth,
  withLogger,
  withState,
  withLoading
);

const EnhancedComponent = enhance(BaseComponent);
```

### 3.2. 带参数的 HOC：带参数 `url`

```jsx
const withFetch = (url) => (WrappedComponent) => {
  return class extends React.Component {
    state = {
      data: null,
      loading: true,
      error: null
    };

    componentDidMount() {
      this.fetchData();
    }

    fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ data, loading: false });
      } catch (error) {
        this.setState({ error, loading: false });
      }
    };

    render() {
      const { data, loading, error } = this.state;
      return (
        <WrappedComponent
          {...this.props}
          data={data}
          loading={loading}
          error={error}
        />
      );
    }
  };
};

// 使用
const UserList = withFetch('https://api.example.com/users')(UserComponent);
```

## 4. 注意事项

### 4.1. 不要在 render 方法中使用 HOC

```jsx
// ❌ 错误示例
class Example extends React.Component {
  render() {
    // 每次渲染都会创建新的组件实例
    const EnhancedComponent = withExample(MyComponent);
    return <EnhancedComponent />;
  }
}

// ✅ 正确示例
const EnhancedComponent = withExample(MyComponent);
class Example extends React.Component {
  render() {
    return <EnhancedComponent />;
  }
}
```

### 4.2. 复制静态方法

```javascript
import hoistNonReactStatics from 'hoist-non-react-statics';

function withExample(WrappedComponent) {
  class WithExample extends React.Component {
    /* ... */
  }
  
  // 复制静态方法
  hoistNonReactStatics(WithExample, WrappedComponent);
  return WithExample;
}
```

### 4.3. **命名约定**

```javascript
// 为 HOC 添加显示名称以便调试
function withExample(WrappedComponent) {
  class WithExample extends React.Component {/* ... */}
  
  // 设置有意义的显示名称
  WithExample.displayName = `WithExample(${getDisplayName(WrappedComponent)})`;
  return WithExample;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
```

### 4.4. 传递 Refs

```jsx
const withRef = (WrappedComponent) => {
  return React.forwardRef((props, ref) => {
    return <WrappedComponent {...props} forwardedRef={ref} />;
  });
}
```

## 5. 最佳实践

### 5.1. **命名约定**

```jsx
// 使用 with 前缀
const withAuth = (WrappedComponent) => {
  // HOC 实现
};

// 为 HOC 包装的组件设置显示名称
const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

HOC.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;
```

### 5.2. **解构 props**

```jsx
const withExample = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      const { specialProp, ...passThroughProps } = this.props;
      return <WrappedComponent {...passThroughProps} />;
    }
  }
}
```

### 5.3. **组合而非修改**

```jsx
// ❌ 错误示例：直接修改原组件
const withExample = (WrappedComponent) => {
  WrappedComponent.prototype.componentDidMount = function() {
    // 某些操作
  };
  return WrappedComponent;
};

// ✅ 正确示例：使用组合
const withExample = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      // 某些操作
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
};
```

## 6. 常见问题和解决方案

### 6.1. **props 命名冲突**

```jsx
const withProps = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      const newProps = {
        // 使用特定前缀避免冲突
        withProps_value: 'example'
      };
      return <WrappedComponent {...this.props} {...newProps} />;
    }
  }
}
```

### 6.2. **多个 HOC 的顺序问题**

```jsx
// HOC 的执行顺序从下到上
const enhance = compose(
  withAuth,      // 第三个执行
  withLayout,    // 第二个执行
  withLoading    // 第一个执行
);
```

## 7. 替代方案

在某些情况下，可以考虑使用以下替代方案：

1. **Render Props**
2. **Hooks**
3. **组件组合**

选择使用 HOC 还是其他方案，应该基于：
- 代码复用的粒度
- 性能要求
- 组件的复杂度
- 团队的开发习惯

HOC 是一个强大的模式，但不是唯一的解决方案。

在现代 React 开发中，**Hooks 通常是更简单和灵活的选择**。

## 8. 性能考虑

### 8.1. **避免不必要的嵌套**

```javascript
// ❌ 过度嵌套
export default withRouter(connect(mapState)(withStyles(MyComponent)));

// ✅ 使用组合函数
const enhance = compose(
  withRouter,
  connect(mapState),
  withStyles
);
export default enhance(MyComponent);
```

### 8.2. **使用记忆化**

```javascript
const memoizedHOC = (WrappedComponent) => {
  return React.memo((props) => {
    return <WrappedComponent {...props} />;
  });
};
```
