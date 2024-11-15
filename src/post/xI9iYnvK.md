
# nodejs server端如何清除  cookie


1. Express: `res.clearCookie(name)`
2. Koa: `ctx.cookies.set(name, null)`
3. 原生: `res.setHeader('Set-Cookie', 'name=; Max-Age=0')`

实际应用，通过 `/logout` 来退出登录，清除 cookie 等

安全相关：

```javascript
const cookieOptions = {
    path: '/',
    httpOnly: true,    // 防止 XSS
    secure: true,      // 仅 HTTPS
    sameSite: 'strict' // 防止 CSRF
};
```
