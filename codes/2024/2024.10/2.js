const MiniKoa = require("./mini-koa");
const app = new MiniKoa();

// 记录请求日志的中间件
app.use(async (ctx, next) => {
  const start = Date.now();
  console.log(`${ctx.method} ${ctx.url}`);

  await next();

  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// 处理错误的中间件
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = {
      error: err.message,
    };
  }
});

// 业务逻辑中间件
app.use(async (ctx) => {
  if (ctx.path === "/") {
    ctx.body = "Hello MiniKoa!";
  } else if (ctx.path === "/json") {
    ctx.body = { message: "Hello MiniKoa!" };
  } else if (ctx.path === "/error") {
    throw new Error("Oops! Something went wrong!");
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
