
# 微前端原理（篇三：乾坤）


## 目录
<!-- toc -->
 ## 1. 整体架构 

乾坤基于 single-spa 封装，实现了以下核心功能：

```javascript hl:7
// 主应用注册微应用
registerMicroApps([
  {
    name: 'app1',
    entry: '//localhost:8080',
    container: '#container',
    activeRule: '/app1'
  }
]);

// 启动主应用
start();
```

核心功能模块：
1. 应用加载（HTML Entry）
2. JavaScript 沙箱
3. 样式隔离
4. 生命周期管理
5. 应用通信 

## 2. 应用加载机制（HTML Entry）

乾坤使用 HTML Entry 方式加载应用，主要步骤：

```javascript hl:10
async function loadApp(app) {
  // 1. 获取 HTML 内容
  const html = await fetch(app.entry).then(res => res.text());
  
  // 2. 解析 HTML，提取资源
  const { 
    template,    // DOM 结构
    scripts,     // JS 脚本
    styles      // CSS 样式
  } = parseHTML(html);
  
  // 3. 加载外部脚本和样式
  await Promise.all([
    loadScripts(scripts),
    loadStyles(styles)
  ]);
  
  // 4. 渲染应用
  const container = document.querySelector(app.container);
  container.innerHTML = template;
}
```

## 3. 生命周期管理

乾坤为每个微应用定义了完整的生命周期：

```javascript
// 微应用需要导出以下生命周期函数
export async function bootstrap() {
  // 应用初始化
}

export async function mount(props) {
  // 应用挂载
  render(props);
}

export async function unmount() {
  // 应用卸载
  cleanup();
}

// 可选
export async function update(props) {
  // 应用更新
}
```

生命周期执行流程：
1. bootstrap：应用首次加载时调用
2. mount：应用激活时调用
3. unmount：应用切换/卸载时调用
4. update：应用更新时调用

## 4. 路由系统

乾坤的路由系统基于 URL 改变触发应用切换：
- 支持配置式路由
- 支持函数动态判断
- 自动处理应用切换 

```javascript
class RouterEngine {
  constructor(apps) {
    this.apps = apps;
    window.addEventListener('popstate', this.handleRouteChange);
  }
  
  handleRouteChange = () => {
    const { pathname } = window.location;
    // 查找匹配的应用
    const app = this.apps.find(app => {
      return this.isActive(app.activeRule, pathname);
    });
    
    if (app) {
      // 加载并挂载应用
      this.mountApp(app);
    }
  }
  
  isActive(rule, pathname) {
    // 支持字符串或函数规则
    return typeof rule === 'function' 
      ? rule(pathname)
      : pathname.startsWith(rule);
  }
}
```

## 5. 应用通信机制

乾坤提供多种应用通信方式：

```javascript
// 1. Props 传递
registerMicroApps([{
  name: 'app1',
  props: { data: 'shared data' }
}]);

// 2. 全局状态管理
import { initGlobalState } from 'qiankun';

const actions = initGlobalState({
  user: 'qiankun'
});

// 主应用监听
actions.onGlobalStateChange((state, prev) => {
  console.log(state, prev);
});

// 子应用监听
export function mount(props) {
  props.onGlobalStateChange((state, prev) => {
    console.log(state, prev);
  });
}

// 3. 自定义事件
window.addEventListener('app1-event', () => {});
```

### 5.1. 通信方式比较

1. Props：简单直接，适合父子通信
2. 全局状态：功能完整，适合复杂场景
3. 自定义事件：灵活，但需要自行管理 

## 6. 样式隔离

乾坤提供两种样式隔离方案：

```javascript
// 1. 严格隔离：使用 Shadow DOM
registerMicroApps([{
  name: 'app1',
  sandbox: {
    strictStyleIsolation: true // 使用 Shadow DOM
  }
}]);

// 2. 作用域隔离：添加特定前缀
registerMicroApps([{
  name: 'app1',
  sandbox: {
    experimentalStyleIsolation: true // 添加特定前缀
  }
}]);
```

### 6.1. 实现原理：

#### 6.1.1. Shadow DOM 隔离：

```javascript
class ShadowDOM {
  constructor(app) {
    const container = document.querySelector(app.container);
    this.shadow = container.attachShadow({ mode: 'closed' });
  }
  
  mount(html) {
    this.shadow.innerHTML = html;
  }
}
```

#### 6.1.2. 作用域隔离：

```javascript
function scopedCSS(styleSheet, appName) {
  const prefix = `[data-qiankun="${appName}"]`;
  return styleSheet.replace(/([^}{]*){/g, (match, selector) => {
    return `${prefix} ${selector} {`;
  });
}
```

## 7. 性能优化

乾坤采用多种优化策略：

```javascript
// 1. 预加载
prefetchApps([
  { name: 'app1', entry: '//localhost:8080' }
]);

// 2. 资源缓存
const cache = new Map();
async function loadWithCache(url) {
  if (cache.has(url)) {
    return cache.get(url);
  }
  const resource = await fetch(url);
  cache.set(url, resource);
  return resource;
}

// 3. 并行加载
async function loadResources(resources) {
  return Promise.all(
    resources.map(url => loadWithCache(url))
  );
}
```

优化要点：
1. 应用预加载
2. 资源缓存复用
3. 并行加载优化
4. 按需加载策略

## 8. 错误处理

乾坤提供完整的错误处理机制：

```javascript
registerMicroApps([{
  name: 'app1',
  entry: '//localhost:8080',
  loader: (loading) => render(loading),
  errorBoundary: (error) => {
    // 渲染错误页面
    renderError(error);
    // 上报错误
    reportError(error);
  }
}]);

// 全局错误监听
addGlobalUncaughtErrorHandler((event) => {
  console.log(event);
  // 处理全局未捕获错误
});
```

错误处理策略：
1. 应用加载错误
2. 运行时错误
3. 生命周期错误
4. 资源加载错误 

## 9. 弹框问题常见解决方案：

### 9.1. 常见弹框问题

1. **样式丢失问题**
	- 当弹框设置了`append-to-body`时，会脱离子应用的样式作用域
	- 弹框被插入到主应用的 body 下，导致样式失效
	- 特别是在使用Element UI 等组件库的Dialog组件时最为常见 
2. **定位偏移问题**
	- 使用fixed定位的弹框可能出现位置偏移
	- 依赖popper.js的组件（如Select下拉框）在弹框中位置错误 

### 9.2. 解决方案

#### 9.2.1. 样式隔离方案

```javascript
// 方案一：重写append方法
const originAppend = HTMLElement.prototype.append;
HTMLElement.prototype.append = function(...args) {
  // 如果是弹窗元素，则添加特定的类名
  if (args[0]?.classList?.contains('el-dialog__wrapper')) {
    args[0].classList.add('子应用命名空间');
  }
  return originAppend.apply(this, args);
};
```

```css
/* 方案二：添加样式作用域 */
.子应用命名空间 {
  .el-dialog__wrapper {
    /* 弹框样式 */
  }
  .el-dialog {
    /* 弹框内容样式 */
  }
}
```

#### 9.2.2. 容器挂载方案

```javascript
// 方案三：指定挂载容器
// 在子应用中创建专门的弹框容器
const modalContainer = document.createElement('div');
modalContainer.id = 'modal-container';
document.body.appendChild(modalContainer);

// 弹框配置
{
  appendTo: '#modal-container'
}
```

#### 9.2.3. Element UI 弹框解决方案

```javascript
// 方案四：修改弹框配置
export default {
  mounted() {
    // 获取当前子应用的容器
    const container = document.querySelector('#子应用容器ID');
    
    this.$dialog = this.$createElement('el-dialog', {
      props: {
        // 禁用append-to-body
        appendToBody: false,
        // 指定挂载点
        modalAppendToBody: false
      }
    });
    
    // 手动挂载到子应用容器
    container.appendChild(this.$dialog.$el);
  }
}
```

#### 9.2.4. 全局样式处理

```javascript
// 方案五：全局样式处理
// 在主应用中
import { registerMicroApps } from 'qiankun';

registerMicroApps([
  {
    name: 'subApp',
    entry: '//localhost:8080',
    container: '#container',
    props: {
      sandbox: {
        // 开启严格样式隔离
        strictStyleIsolation: true,
        // 实验性样式隔离
        experimentalStyleIsolation: true
      }
    }
  }
]);
```

### 9.3. 最佳实践建议

1. **避免使用append-to-body**
```javascript
// 不推荐
<el-dialog append-to-body>

// 推荐
<el-dialog :append-to-body="false">
```

2. **使用动态挂载点**
```javascript
// 在子应用中创建动态挂载点
const createModalContainer = () => {
  const container = document.createElement('div');
  container.setAttribute('data-modal-container', '');
  return container;
};

// 在弹框组件中使用
{
  mounted() {
    this.modalContainer = createModalContainer();
    document.body.appendChild(this.modalContainer);
  },
  beforeDestroy() {
    this.modalContainer.remove();
  }
}
```

3. **样式作用域处理**
```scss
// 使用命名空间
.sub-app-namespace {
  // 弹框样式覆盖
  .el-dialog__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2000;
  }
  
  // 遮罩层样式
  .el-dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
```

4. **位置修正**
```javascript
// 处理弹框位置偏移
const fixModalPosition = (modal) => {
  const { top, left } = modal.getBoundingClientRect();
  const offsetTop = window.innerHeight - top;
  const offsetLeft = window.innerWidth - left;
  
  modal.style.transform = `translate(${offsetLeft}px, ${offsetTop}px)`;
};
```

通过以上方案的组合使用，可以有效解决微前端中的弹框问题。建议根据具体场景选择合适的解决方案，并在开发中注意以下几点：

- 优先考虑不使用`append-to-body`
- 合理使用样式隔离机制
- 注意弹框的层级管理
- 保持子应用的独立性



