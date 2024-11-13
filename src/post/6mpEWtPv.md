
# 面试题 12




## 目录
<!-- toc -->
 ## 1. 下面函数的执行情况 

```javascript hl:3
var b = 10;
(function b() {
  // 在具名函数表达式中，函数名标识符在函数内部是只读的（read-only）
  // 严格模式下会报错 // TypeError: Assignment to constant variable
  // 所以这里修改 b 的值是无效的
  b = 20;
  console.log(b);
});

console.log(b); // 10
```

![图片&文件](./files/20241111-52.png)

### 1.1. 严格模式下的行为

在严格模式下，尝试修改只读标识符会抛出错误：

```javascript
var b = 10;
(function b() {
    'use strict';
    b = 20;  // TypeError: Assignment to constant variable
    console.log(b);
})();
```

### 1.2. 使用不同的变量名

```javascript
var b = 10;
(function c() {
    b = 20;
    console.log(b);  // 输出 20
})();
console.log(b);  // 输出 20
```

### 1.3. 在函数内部声明同名变量

```javascript hl:3
var b = 10;
(function b() {
    var b = 20;  // 创建新的局部变量
    console.log(b);  // 输出 20
})();
console.log(b);  // 输出 10
```

## 2. 请简述 Reflect 作用

Reflect 是 ES6 (ECMAScript 2015) 引入的一个新的全局对象，它提供了一组方法来操作对象。Reflect 的主要作用可以概括如下：

### 2.1. 统一操作对象的 API

Reflect 提供了一套统一的方法来执行 JavaScript 对象的常见操作，如属性的读取、设置、删除等。这些方法与对应的 Object 方法相似，但更加规范化和功能统一。

### 2.2. 简化代理（Proxy）的创建

Reflect 的方法与 Proxy 的处理程序（handler）方法一一对应，使得在实现代理时更加方便和直观。

### 2.3. 提供函数式编程风格的对象操作
Reflect 的方法都是函数，可以作为参数传递，有利于函数式编程。

### 2.4. 替代一些 Object 的方法

某些 Object 上的方法在 Reflect 中有对应的、更合理的实现。

### 2.5. 返回更合理的结果

某些操作（如 defineProperty）在 Reflect 中会返回布尔值表示成功与否，而不是抛出异常。

让我们通过一些例子来具体说明 Reflect 的作用：

```javascript
// 1. 获取属性
const obj = { x: 1, y: 2 };
console.log(Reflect.get(obj, 'x')); // 1

// 2. 设置属性
Reflect.set(obj, 'z', 3);
console.log(obj); // { x: 1, y: 2, z: 3 }

// 3. 删除属性
Reflect.deleteProperty(obj, 'y');
console.log(obj); // { x: 1, z: 3 }

// 4. 检查对象是否有某个属性
console.log(Reflect.has(obj, 'x')); // true

// 5. 获取对象的所有属性
console.log(Reflect.ownKeys(obj)); // ['x', 'z']

// 6. 创建新对象
const newObj = Reflect.construct(function(a, b) {
  this.sum = a + b;
}, [1, 2]);
console.log(newObj.sum); // 3

// 7. 调用函数并指定 this
function greet() {
  return `Hello, ${this.name}!`;
}
console.log(Reflect.apply(greet, { name: 'Alice' }, [])); // "Hello, Alice!"

// 8. 定义新属性
Reflect.defineProperty(obj, 'w', {
  value: 4,
  writable: true,
  enumerable: true,
  configurable: true
});
console.log(obj.w); // 4
```

### 2.6. 其他

1. Reflect 主要用于操作普通对象，不直接支持 Map、Set 等集合类型
2. Map 等集合类型有自己的实例方法进行操作
3. 如果需要使用 Reflect 操作 Map，可以：
    - 通过 Reflect.apply 调用 `Map 的原型方法`
    - 使用 `Proxy` 代理 Map 的操作

## 3. 代码执行

```javascript hl:11
Promise.reject(1)
  .then(
    (res) => {
      console.log(2, res);
    },
    (err) => {
      console.log(3, err);
    },
  )
  .catch((err) => {
    // 这里不会执行，因为前面已经有了错误处理
    console.log(4, err);
  });

```

## 4. 如何把一个对象变成可迭代对象

![图片&文件](./files/20241112-7.png)

## 5. 如何在 Canvas 获取跨域的图片

![图片&文件](./files/20241112-8.png)

当然，需要设置图片的响应头，允许跨域

## 6. WebSocket 协议本身是没有跨域限制的

### 6.1. 定义

1. WebSocket 是一个独立的、完整的协议，与 HTTP 协议是平行的关系。虽然 WebSocket 连接的建立需要依赖 HTTP 协议进行一次握手（upgrade），但是一旦 WebSocket 连接建立成功后，后续的数据传输就与 HTTP 无关了。
2. 浏览器在实现 WebSocket 协议时，默认就是允许跨域的。这意味着：
	- 你可以从任何域名下的页面连接到任何服务器的 WebSocket 服务
	- 不需要像 HTTP 请求那样配置 CORS（跨域资源共享）相关的头部

### 6.2. 握手阶段的限制

- 在 WebSocket 连接建立时的 HTTP 握手阶段，浏览器会发送 Origin 头部
- 服务器可以通过检查 Origin 头部来决定是否允许连接
- 这是一种服务器端的安全机制，而不是浏览器的跨域限制

### 6.3. 最佳实践
   ```javascript
   // 客户端代码示例
   const ws = new WebSocket('ws://example.com/socketserver');
   
   // 服务器端可以检查 Origin（以 Node.js 为例）
   wss.on('connection', function connection(ws, request) {
     const origin = request.headers.origin;
     if (origin !== 'https://trusted-site.com') {
       ws.close();
       return;
     }
     // 处理正常连接...
   });
   ```

### 6.4. 安全考虑
   - 虽然 WebSocket 没有跨域限制，但出于安全考虑，**服务器端应该实现自己的验证机制**
   - 可以通过 token、session 等方式进行身份验证
   - 建议在生产环境使用 WSS（WebSocket Secure）协议，即基于 SSL/TLS 的安全 WebSocket 连接

### 6.5. 总结

WebSocket 协议本身不受浏览器同源策略的限制，可以自由地进行跨域通信。但为了安全性，服务器端应该实现适当的验证机制来控制连接权限。

## 7. 在 JavaScript 中获取字符串的字节长度，尤其是要支持表情符号（emoji）

### 7.1. 使用 Blob 对象（最简单推荐的方式）

```javascript hl:3,2
function getByteLength(str) {
    // 创建一个 Blob 对象，并指定编码为 UTF-8
    const blob = new Blob([str], { type: 'text/plain' });
    return blob.size;
}

// 测试
console.log(getByteLength('hello')); // 5
console.log(getByteLength('你好')); // 6
console.log(getByteLength('👨‍👩‍👧‍👦')); // 25
console.log(getByteLength('🌞')); // 4
```

### 7.2. 使用 TextEncoder（现代浏览器推荐）

```javascript
function getByteLength(str) {
    return new TextEncoder().encode(str).length;
}

// 测试
console.log(getByteLength('hello')); // 5
console.log(getByteLength('你好')); // 6
console.log(getByteLength('👨‍👩‍👧‍👦')); // 25
console.log(getByteLength('🌞')); // 4
```

### 7.3. 手动计算（兼容性最好，但不推荐）

```javascript
function getByteLength(str) {
    let length = 0;
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        if (code <= 0x7f) {
            length += 1;
        } else if (code <= 0x7ff) {
            length += 2;
        } else if (code <= 0xffff) {
            length += 3;
        } else {
            length += 4;
        }
    }
    return length;
}

// 注意：这种方法对于某些特殊的emoji可能不够准确
```

### 7.4. 完整的测试示例
```javascript
function compareByteLength() {
    const testStrings = [
        'hello',                    // 普通英文
        '你好',                     // 中文
        '👨‍👩‍👧‍👦',                      // 复杂emoji（家庭）
        '🌞',                       // 简单emoji
        '你好👋world',              // 混合字符串
        '❤️',                       // 特殊emoji
        '🏳️‍🌈'                     // 彩虹旗emoji
    ];

    const methods = {
        'Blob方法': str => new Blob([str]).size,
        'TextEncoder方法': str => new TextEncoder().encode(str).length
    };

    console.log('字符串\t\t字符长度\tBlob字节\tEncoder字节');
    console.log('----------------------------------------');

    testStrings.forEach(str => {
        console.log(
            `${str}\t\t` +
            `${str.length}\t\t` +
            `${methods['Blob方法'](str)}\t\t` +
            `${methods['TextEncoder方法'](str)}`
        );
    });
}

compareByteLength();
```

### 7.5. 重要说明

#### 7.5.1. **编码说明**

   - 以上方法都是基于 UTF-8 编码计算字节长度
   - UTF-8 是一种变长编码：
     - ASCII 字符占 1 字节
     - 中文字符通常占 3 字节
     - emoji 可能占 4 字节或更多

#### 7.5.2. **方法选择建议**

   - 优先使用 `TextEncoder`，它是专门用于处理文本编码的标准 API
   - 如果需要考虑兼容性，可以使用 `Blob` 方法
   - 避免使用手动计算的方法，因为它可能在处理某些特殊字符时不够准确

#### 7.5.3. **注意事项**

   - 某些复杂的 emoji（如家庭 emoji）实际上是多个 emoji 组合而成的
   - 某些 emoji 可能包含变体选择符（VS16）等特殊字符
   - 在实际应用中，建议根据具体需求选择合适的方法并进行充分测试

#### 7.5.4. **浏览器兼容性**

   - `TextEncoder`: 现代浏览器都支持
   - `Blob`: IE10+ 都支持
   - 手动计算方法: 所有浏览器都支持，但准确性可能有限

## 8. Map、WeakMap、Object 的区别

![图片&文件](./files/20241112-9.png)

## 9. pnpm（performant npm）包管理器  的主要特点和优势

### 9.1. 高效的磁盘空间利用

pnpm 使用`硬链接和符号链接`来共享项目间的依赖，这意味着：

- 相同的依赖包只会在磁盘上存储一次
- 大大减少了磁盘空间的使用
- 安装速度更快，因为许多包可能已经存在于全局存储中

```
.pnpm-store/
  |-- node_modules/
      |-- packageA@1.0.0
      |-- packageB@2.0.0
      ...
```

### 9.2. 严格的依赖结构

pnpm 创建了一个**非平铺**的 `node_modules` 结构：

- 每个包只能访问其直接依赖
- 防止依赖提升，避免"幽灵依赖"问题
- 提高了项目的可预测性和安全性

``` hl:2
node_modules/
  |-- .pnpm/
      |-- packageA@1.0.0/
      |-- packageB@2.0.0/
  |-- packageA -> .pnpm/packageA@1.0.0/node_modules/packageA
  |-- packageB -> .pnpm/packageB@2.0.0/node_modules/packageB
```

### 9.3. 快速安装

- 并行安装多个包
- 利用缓存和硬链接，减少网络和磁盘 I/O

### 9.4. 支持 monorepo

pnpm 内置了对 monorepo（单仓多包）项目的支持：

- 使用 `pnpm-workspace.yaml` 定义工作空间
- 提供 `pnpm add -w` 命令来安装根依赖
- 支持 `--filter` 参数来操作特定的包

### 9.5. 兼容性

- 与 npm 和 Yarn 的 `package.json` 格式完全兼容
- 可以直接替换现有的 npm 或 Yarn 项目

### 9.6. 其他特性

- 内置对 Node.js 版本管理的支持
- 支持插件系统
- 提供了许多有用的命令，如 `pnpm why` 用于分析依赖关系

### 9.7. 使用示例

```bash
# 安装依赖
pnpm install

# 添加依赖
pnpm add react

# 运行脚本
pnpm run build

# 在工作空间中添加依赖
pnpm add -w typescript

# 在特定包中添加依赖
pnpm add lodash --filter package-name
```

### 9.8. pnpm.lock 文件

pnpm 使用 `pnpm-lock.yaml` 文件来锁定依赖版本，确保团队成员和 CI 环境使用相同的依赖版本。

### 9.9. 性能对比

在大多数情况下，pnpm 的安装速度比 npm 和 Yarn 快，尤其是在处理大型项目或 monorepo 时。

## 10. 如何判断是 PC 还是移动端

- ua
- touch 事件是否在 document中
- 横竖屏幕
- 特定属性，比如通过 js 判断媒体查询是否生效
- 最好还是使用三方工具包
- 等等

## 11. js 如何动态生成海报

- dom - canvas - image
- dom - svg - canvas  - image
- nodejs 调用 pupper 无头浏览器

## 12. 如何顺序执行 10 个任务

- 方法一：for/for-of  - await
- 方法二：reduce
	- prev task
	- current task

## 13. 合并连续的数字

遍历 +  临时变量

![图片&文件](./files/20241112-10.png)

## 14. 如何解决 promise.all 有一个任务报错了，其他任务结果都抛弃了？

- 方案一：promise.allSetteled
- 方案二：容错下，别让 promise 报错
- 方案三：
	- ![图片&文件](./files/20241112-11.png)

## 15. `["1", "2", "3"].map(parseInt)`

### 15.1. 分析

```javascript hl:8,14,15
["1", "2", "3"].map(parseInt);

// ==> 1, NaN, NaN
// parseInt() 函数接受两个参数，第一个是要被解析的字符串，第二个是进制数。
// map() 方法会给回调函数传递三个参数：当前元素、当前索引、整个数组。

// parseInt("1", 0, ["1", "2", "3"]); // 1 ， 0进制，自动判断
// // 第二个参数传 0 的规则：
// 1. 如果字符串以 "0x" 或 "0X" 开头，按 16 进制解析
// 2. 在现代 JavaScript（ES5+）中，其他情况一律按 10 进制解析
// 3. 在老版本 JavaScript 中，如果字符串以 "0" 开头，会按 8 进制解析
// 4. 如果第二个参数不是一个数值，会按 10 进制解析，和不传第二个参数一样

// parseInt("2", 1, ["1", "2", "3"]); // NaN, 没有1进制，必须取值范围在2-36之间
// parseInt("3", 2, ["1", "2", "3"]); // NaN ，3不是2进制数

```

### 15.2. 关于 parseInt 的第二个参数

```javascript hl:1,13
// 进制必须在 2-36 之间
console.log(parseInt("123", 1));    // NaN
console.log(parseInt("123", 37));   // NaN

// 不同进制的解析
console.log(parseInt("100", 2)); // 4 (二进制)
console.log(parseInt("100", 8)); // 64 (八进制)
console.log(parseInt("100", 10)); // 100 (十进制)
console.log(parseInt("100", 16)); // 256 (十六进制)

// 不同进制下的相同字符串可能得到不同结果
console.log(parseInt("19", 10)); // 19 (十进制)
console.log(parseInt("19", 8)); // 1 (八进制，9不是有效的八进制数字)
```

## 16. 函数使用 `bind`连续绑定多次，后面绑定的都无效

![图片&文件](./files/20241112-12.png)

## 17. new fn 与 new fn() 的区别

![图片&文件](./files/20241112-13.png)

## 18. ajax  fetch axios

- ajax
	- 基于  XHR 对象
- fetch 
	- 没有基于 XHR，不是对 XHR的进一步封装
	- 使用的原生的 js 
	- 基于 Promise
-  axios
	- 浏览器：基于 XHR
	- nodejs：基于 http 模块
	- 其他的包装比如 promise
	- 安全机制

## 19. 浏览器的跨标签页（Cross-tab）通信

### 19.1. 问题：不同的Tab，不同的域名，一个 Tab 下面的页面使用 postMessage，另外一个 Tab 监听 message 能够监听得到吗？

- 不同的 Tab，不同的域名
	- 当两个标签页属于不同的域名时，它们是运行在完全隔离的上下文中的。这是由于浏览器的同源策略（Same-Origin Policy）所导致的安全限制。
- postMessage 和 message 事件
	- postMessage 方法是一种安全的跨源通信方式，而 message 事件用于接收通过 postMessage 发送的消息。
- 能否监听到？
	- 在你描述的情况下，一个 Tab 下的页面使用 postMessage，另一个 Tab 监听 message 事件，**通常情况下是无法监听到的**。

 原因如下：
1. **窗口引用问题**：postMessage 需要一个目标窗口的引用。不同 Tab 之间默认是没有这种引用的。比如使用 `window.open`
2. **域名不同**：**即使有窗口引用**，不同域名之间的通信也需要明确指定目标源。
3. **事件传播范围**：message 事件通常只在目标窗口内传播，不会跨越到其他未相关的标签页。


### 19.2. 安全策略

- 如果你不需要接受其他网站的message，请不要监听 message 事件
- 即使监听，请务必备注 origin 和 source 来验证发件人的身份

### 19.3. 有一些特殊情况和解决方案

1. **opener 关系**：如果一个标签页是由另一个标签页打开的（使用 window.open()），则它们之间可以通过 opener 和 postMessage 进行通信。
2. **共享存储**：可以使用 localStorage 或 IndexedDB 等共享存储方式，配合 storage 事件来实现跨标签页通信。
3. **Broadcast Channel API**：这是一个较新的 API，允许**同源的不同上下文**（如不同的标签页）之间进行通信。
4. **Service Worker**：可以使用 Service Worker 作为中间人来协调不同标签页之间的通信。
5. **WebSocket**：可以通过服务器端的 WebSocket 连接来协调不同标签页之间的通信。

## 20. 给一个 DOM 元素绑定多次 click，一个捕获，一个冒泡，如何执行？

- 绑定多少次就执行多少次
- 先捕获，后冒泡

## 21. 如何获取一个对象的原型对象

- `构造函数.prototype`
- `实例对象.__proto__`
- `Object.getProtoTypeof(对象实例)`

## 22. 移动端适配原理

比如 flexible.js  不展开了，和 rem 一个道理

需要注意的事，如何判断是否 `0.5`
- 很简单 `dpr >= 2` 即可


## 23. 如何实现 repeat 实现字符串拼接

```javascript hl:2,5,10
// 最简单直接的方法
const str1 = "abc".repeat(3); // "abcabcabc"

const str2 = Array(4).join("abc"); // "abcabcabc"
// 解释：创建长度为4的数组，join会执行3次，所以重复3次
// Array(4) 创建 [empty × 4]
// join("abc") 会在数组元素之间插入"abc"


const str3 = Array(3).fill("abc").join(""); // "abcabcabc"
// 或者
const str3_2 = new Array(3).fill("abc").join("");

```


## 24. 实现 mergePromise 函数，把传进去的数组按顺序先后执行，并且把返回的数据先后放到数组 data 中

```javascript hl:10,17,25
// mergePromise 函数，把传进去的数组按顺序先后执行，并且把返回的数据先后放到数组 data 中
mergePromise([ajax1, ajax2, ajax3]).then((data) => {
  console.log("done");
  console.log(data); // data 为 [1, 2, 3]
});

function mergePromise(arr) {
  // 在这里写代码
  const data = [];
  let promise = Promise.resolve();
  // 依次执行传入的函数
  // 这里的 promise.then 是为了保证顺序执行
  arr.forEach((fn) => {
    // 每次遍历时，promise 都是上一个 promise.then 返回的 promise
    // 但是，这里 promise 不会被覆盖吗？
    // 不会，因为 promise.then 返回的是一个新的 promise
    promise = promise.then(fn).then((res) => {
      data.push(res);
      // 返回 res 保证下一个 then 中的 res 是上一个的结果
      return data;
    });
  });
}

// 区别于 Promise.all，Promise.all 是并行执行，而这里需要串行执行

```


## 25. Promise 相关问题

### 25.1. finnaly：无论失败或者成功都会执行，且接受不到结果

### 25.2. 注意顺序

![图片&文件](./files/20241112-14.png)

### 25.3. reject 包在 try 里面也会被捕获到

```javascript hl:3,5
async function asyncl() {
  try {
    await Promise.reject("error!!!");
  } catch (e) {
    console.log(e); // 会执行到
  }
}

asyncl();
```

#### 25.3.1. 没有捕获会报错

![图片&文件](./files/20241112-15.png)

### 25.4. then 和 .catch 返回的值不能使 promise 对象本身，否则会死循环

![图片&文件](./files/20241112-16.png)



## 26. await 没报错就会往下走，别和 promise 搞混了

![图片&文件](./files/20241112-18.png)


因为 如果 async 函数没有显式的返回值，它仍然会返回一个 Promise，具体行为如下：

```javascript
// 没有 return 语句
async function noReturn() {
    console.log("Hello");
}
// 等价于返回 Promise<undefined>
console.log(noReturn()); // Promise {<fulfilled>: undefined}


// 空 return 语句
async function emptyReturn() {
    console.log("Hello");
    return;
}
// 同样返回 Promise<undefined>
console.log(emptyReturn()); // Promise {<fulfilled>: undefined}


// 即使函数体为空
async function empty() {}
console.log(empty()); // Promise {<fulfilled>: undefined}
```


### 26.1. 下面的代码就一直会 pengding 住了

![472](#)