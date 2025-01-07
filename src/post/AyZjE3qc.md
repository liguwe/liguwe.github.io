
# vite 之 import 关键词

`#vite` `#前端工程化` 


## 目录
<!-- toc -->
 ## 1. 总结 

- `import` 必须放在文件开头
- `import()` 可以在任何位置使用
	- 需 ==返回 Promise==
	- 按需加载和条件加载
		- 根据环境变量
			- 比如 import(env.xx.xx)
		- 多语言加载
			- 语言变量
		- 路由懒加载
	- 可使用 `await` 关键词
---

## 2. import 是否必须放在文件开头？

**答案：不是必须的，但有特定规则**

1. **静态 import**
```javascript
// 静态导入必须在顶层作用域
import Vue from 'vue'
import Router from 'vue-router'
```

- 必须在模块顶层
- 不能在函数、条件语句或循环中使用
- 路径必须是字符串字面量，不能是变量

2. **动态 import()**
```javascript
// 可以在任何位置使用
async function loadModule() {
  if (condition) {
    const module = await import('./moduleA.js')
    // 使用 module
  } else {
    const module = await import('./moduleB.js')
    // 使用 module
  }
}
```
- 可以在任何位置使用
- ==返回 Promise==
- 支持动态路径

## 3. import(env.xx.xx) 的用处

这种形式通常用于**动态导入**和**环境变量**结合的场景：

1. **根据环境变量加载不同配置**
```javascript
// 根据环境加载不同配置文件
const config = await import(`./config/${process.env.NODE_ENV}.js`)
```

2. **按需加载组件**
```javascript
// Vue 路由中的动态导入
const routes = [
  {
    path: '/dashboard',
    component: () => import('./views/Dashboard.vue')
  }
]
```

3. **常见使用场景**：

### 3.1. 环境配置加载

```javascript
// 根据不同环境加载不同配置
const envConfig = await import(`./config/env.${process.env.NODE_ENV}.js`)
```

### 3.2. 多语言文件加载

```javascript
// 动态加载语言包
const loadLanguage = async (lang) => {
  const messages = await import(`./locales/${lang}.js`)
  return messages.default
}
```

### 3.3. 按需加载模块

```javascript
// 条件加载大型库
async function loadChart() {
  if (needChart) {
    const { Chart } = await import('chart.js')
    return new Chart(/*...*/)
  }
}
```

### 3.4. 路由懒加载

```javascript
// Vue Router 配置
export const routes = [
  {
    path: '/admin',
    component: () => import(
      /* webpackChunkName: "admin" */ 
      './views/Admin.vue'
    )
  }
]
```

## 4. 动态导入的优势

1. **性能优化**
   - 减少初始加载时间
   - 实现代码分割
   - 按需加载资源

2. **灵活性**
   - 运行时决定加载模块
   - 支持条件加载
   - 处理动态路径

3. **资源管理**
   - 更好的内存使用
   - 更高效的资源加载
   - 优化应用性能

## 5. 使用示例

1. **条件加载模块**：
```javascript
async function loadFeature() {
  if (userHasPermission) {
    const module = await import('./features/advanced.js')
    module.init()
  }
}
```

2. **动态路径加载**：
```javascript
async function loadPlugin(pluginName) {
  try {
    const plugin = await import(`./plugins/${pluginName}.js`)
    return plugin.default
  } catch (error) {
    console.error(`Plugin ${pluginName} not found`)
  }
}
```

3. **环境特定代码**：
```javascript
// 根据环境变量加载不同的 API 配置
const apiConfig = await import(`./config/api.${import.meta.env.MODE}.js`)
```

## 6. 总结

1. **静态 import**
	- 必须在模块顶层
	- 路径必须是静态的
	- 用于基础依赖导入

2. **动态 import()**
	- 可在任何位置使用
	- 支持动态路径
	- 适合按需加载和条件加载

3. **import(env.xx.xx)**
	- 用于动态配置加载
	- 环境特定代码处理
	- 实现灵活的模块加载策略

