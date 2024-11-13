
# Koa 的核心原理

`#koa` 

Koa 是一个轻量级的 Node.js Web 框架


## 目录
<!-- toc -->
 ## 1. 中间件机制与洋葱模型 

Koa 最核心的特性是其`中间件机制`，采用洋葱模型（Onion Model）。这种模型的工作方式如下：

![图片&文件](./files/20241101-29.png)

![图片&文件](./files/20241101-27.png)

### 1.1. 中间件的核心实现原理

```javascript hl:4,12
// 简化版的中间件实现原理
class Koa {
  constructor() {
    this.middleware = [];
  }

  use(fn) {
    this.middleware.push(fn);
    return this;
  }

  // 核心的中间件组合函数
  compose(middleware) {
    return function(context, next) {
      let index = -1;
      
      function dispatch(i) {
        if (i <= index) {
          return Promise.reject(new Error('next() called multiple times'));
        }
        index = i;
        
        let fn = middleware[i];
        if (i === middleware.length) fn = next;
        if (!fn) return Promise.resolve();
        
        try {
          return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
        } catch (err) {
          return Promise.reject(err);
        }
      }
      
      return dispatch(0);
    };
  }
}
```

### 1.2. 中间件机制（洋葱模型）：示例

```javascript
const Koa = require('koa');
const app = new Koa();

// 中间件1
app.use(async (ctx, next) => {
    console.log('1 开始');
    await next();
    console.log('1 结束');
});

// 中间件2
app.use(async (ctx, next) => {
    console.log('2 开始');
    await next();
    console.log('2 结束');
});

// 1 开始 -> 2 开始 -> 2 结束 -> 1 结束
```

## 2. Context 对象

Koa 的 Context 对象是请求的上下文，将 node 的 request 和 response 对象封装到单个对象中：

```javascript
class Context {
  constructor(req, res) {
    this.req = req;
    this.res = res;
    this.state = {};  // 用于在中间件之间传递信息
    
    // 代理 request 和 response 对象的属性
    delegate(this, 'response')
      .method('attachment')
      .method('redirect')
      .access('type')
      .access('status');
      
    delegate(this, 'request')
      .method('acceptsLanguages')
      .method('acceptsEncodings')
      .access('querystring')
      .access('socket');
  }
}
```

## 3. 错误处理机制

Koa 提供了优雅的错误处理方式：

```javascript
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = {
      message: err.message
    };
    // 触发应用级错误事件
    ctx.app.emit('error', err, ctx);
  }
});
```

## 4. 异步流程控制

Koa 2.x 版本利用 async/await 来处理异步流程：

```javascript
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
```

## 5. 请求和响应的封装

Koa 对 Node.js 原生的 req 和 res 对象进行了封装，形成了`更易用的 Request 和 Response 对象`：

```javascript
class Request {
  get header() {
    return this.req.headers;
  }
  
  get method() {
    return this.req.method;
  }
  
  get url() {
    return this.req.url;
  }
  
  get query() {
    const str = this.querystring;
    return qs.parse(str);
  }
}

class Response {
  set type(type) {
    this.set('Content-Type', type);
  }
  
  set body(val) {
    this._body = val;
    // 根据不同类型设置对应的 Content-Type
    if (typeof val === 'string') this.type = 'text/plain';
    if (Buffer.isBuffer(val)) this.type = 'application/octet-stream';
    if (typeof val === 'object') this.type = 'application/json';
  }
}
```

## 6. 工作流程

完整的 Koa 工作流程如下：

![图片&文件](./files/20241101-28.png)

## 7. 主要特点总结

- 轻量级：核心代码量很小，但扩展性强
- 中间件机制：基于洋葱模型的优雅中间件机制
- 异步流程：完美支持 async/await
- 上下文封装：将 request 和 response 封装为单一的 context 对象
- 错误处理：统一的错误处理机制
- 无回调地狱：通过 async/await 彻底解决回调问题

## 8. 对比 Koa 与 express 

先说主要区别
- 是否集成了 router/static 中间件
- 中间件实现基于 回调还是 promise
	- 导致捕获错误的的方式不一致

### 8.1. 核心理念

Express:
- "**增强** Node.js"的理念
- 提供了完整的应用程序功能
- 包含了路由、模板等功能在框架内
- 更像是一个全能型的框架
Koa:
- "**修复并替代** Node.js"的理念
- 极简主义，核心功能非常精简
- 通过中间件扩展功能
- 更像是一个中间件框架

### 8.2. 中间件系统

Express:
- 基于`回调`函数（Callback）
- 中间件按线性方式执行
- 错误处理需要特殊的错误处理中间件
```javascript
// Express 中间件示例
app.use((req, res, next) => {
    console.log('Start');
    next();
    console.log('End');
});
```

Koa:
- 基于 async/await
- 洋葱模型（Onion model）中间件
- 更优雅的错误处理机制
```javascript
// Koa 中间件示例
app.use(async (ctx, next) => {
    console.log('Start');
    await next();
    console.log('End');
});
```

### 8.3. 异步处理

Express:
- 使用回调处理异步
- 容易陷入`回调地狱`
- 错误处理相对复杂
```javascript
// Express 异步处理
app.get('/users', (req, res, next) => {
    db.users.find()
        .then(users => res.json(users))
        .catch(next);
});
```

Koa:
- 原生支持 async/await
- 更清晰的异步流程
- 统一的错误处理
```javascript
// Koa 异步处理
app.use(async ctx => {
    const users = await db.users.find();
    ctx.body = users;
});
```

### 8.4. 上下文处理

Express:
- 分离的 req 和 res 对象
- 需要手动处理请求和响应
```javascript
// Express
app.use((req, res) => {
    res.send(req.query.name);
});
```

Koa:
- 统一的 context 对象
- 封装了 request 和 response
```javascript
// Koa
app.use(ctx => {
    ctx.body = ctx.query.name;
});
```

### 8.5. 性能比较

Express:
- 更多的内置功能意味着更大的开销
- 处理简单请求的性能很好
- 大量中间件可能影响性能
Koa:
- 更轻量级
- 更少的内存占用
- 在处理大量并发请求时表现更好

### 8.6. 代码示例比较

#### 8.6.1. Express 路由处理: 已经内置路由能力

```javascript
const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
    res.json({ users: [] });
});

app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});
```

#### 8.6.2. Koa 路由处理

需要引入 `@koa/router`

```javascript hl:2
const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('/api/users', async (ctx) => {
    ctx.body = { users: [] };
});

app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = 500;
        ctx.body = { error: err.message };
    }
});
```
