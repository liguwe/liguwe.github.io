const http = require("http");
const EventEmitter = require("events");

// 实现洋葱模型的中间件组合函数
function compose(middlewares) {
  return function (context) {
    let index = -1;

    function dispatch(i) {
      // 如果在一个中间件中多次调用 next()，则抛出错误
      if (i <= index) {
        return Promise.reject(new Error("next() called multiple times"));
      }

      index = i;
      const fn = middlewares[i];

      if (i === middlewares.length) {
        return Promise.resolve();
      }

      try {
        return Promise.resolve(fn(context, () => dispatch(i + 1)));
      } catch (err) {
        return Promise.reject(err);
      }
    }

    return dispatch(0);
  };
}

// 简化版的 Koa 框架,继承自 EventEmitter
class MiniKoa extends EventEmitter {
  constructor() {
    super();
    this.middleware = [];
    this.context = Object.create(null);
  }

  // 注册中间件
  use(fn) {
    if (typeof fn !== "function") {
      throw new TypeError("Middleware must be a function!");
    }
    // 将中间件函数添加到 middleware 数组中
    this.middleware.push(fn);
    // 返回 this，方便链式调用
    return this;
  }

  // 创建上下文对象
  createContext(req, res) {
    const context = Object.create(this.context);

    // 简化版的请求和响应对象
    context.req = req;
    context.res = res;

    // 添加常用的请求属性
    context.method = req.method;
    context.url = req.url;
    context.path = req.url.split("?")[0];

    // 添加常用的响应方法
    context.status = 404;
    context.body = null;

    context.set = function (key, value) {
      res.setHeader(key, value);
    };

    return context;
  }

  // 处理请求
  handleRequest(ctx) {
    const fn = compose(this.middleware);

    return fn(ctx)
      .then(() => this.handleResponse(ctx))
      .catch((err) => this.handleError(err, ctx));
  }

  // 处理响应
  handleResponse(ctx) {
    const body = ctx.body;
    const res = ctx.res;

    if (body === null) {
      res.statusCode = 404;
      res.end("Not Found");
      return;
    }

    if (typeof body === "string") {
      res.setHeader("Content-Type", "text/plain");
      res.end(body);
      return;
    }

    if (Buffer.isBuffer(body)) {
      res.setHeader("Content-Type", "application/octet-stream");
      res.end(body);
      return;
    }

    if (typeof body === "object") {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(body));
      return;
    }
  }

  // 错误处理
  handleError(err, ctx) {
    console.error(err);
    ctx.status = err.status || 500;
    ctx.body = {
      error: err.message || "Internal Server Error",
    };
    this.handleResponse(ctx);
  }

  // 启动服务器
  listen(...args) {
    const server = http.createServer(this.callback());
    return server.listen(...args);
  }

  // 生成回调函数
  callback() {
    return (req, res) => {
      const ctx = this.createContext(req, res);
      return this.handleRequest(ctx);
    };
  }
}

module.exports = MiniKoa;
