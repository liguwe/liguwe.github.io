
# 异步编程

`#前端面试` 


## 目录
<!-- toc -->
 ## 1. setInterval 的缺陷 

- 定时器指定的时间间隔，表示的是**何时将定时器的代码添加到队列，而不是何时执行代码**。 所以真正何时执行代码的时间是不能保证的，取决于何时被主线程的事件循环取到，并执行
- 综上所述，`setInterval` 有两个缺点：
	- 使用 `setInterval` 时，某些间隔会被跳过；
	- 可能`多个定时器`会连续执行；
- 可以这么理解：
	- 每个 `setTimeout` 产生的任务会直接 `push` 到任务队列中；
	- 而 `setInterval` 在每次把任务 `push` 到任务队列前，都要进**行一下判断**(看上次的任务是否仍在队列中，如果有则不添加，没有则添加)
		- `setInterval(fn(), N);` // 上面这句代码的意思其实是`fn()`将会在 `N 秒之后`被推入任务队列

### 1.1. 使用 setTimeout 实现 setInterval

```javascript
function mySetInterval(fn, timeout) {
  // :::: 关键，标识是否继续,并返回
  let timer = {
    flag: true,
  };
  // :::: 两次 settimeout，需要闭包定义一个函数
  function func() {
    if (timer.flag) {
      fn();
      setTimeout(func, timeout);
    }
  }
  setTimeout(func, timeout);
  // 返回 timer，方便外部控制
  return timer;
}

// 测试
const timer = mySetInterval(() => {
  console.log("log 1");
}, 1000);

// 5s后，停止定时器
setTimeout(() => {
  timer.flag = false;
}, 5000);
```

## 2. 单核、多核、进程、线程、互斥锁、信号量

### 2.1. 单核与多核

想象一个工厂的**生产线**：
- 单核CPU：就像一条生产线**只有一个工人**。这个工人需要一个接一个地完成所有任务。
- 多核CPU：相当于一条生产线上**有多个工人**。每个工人（核心）可以同时处理不同的任务，大大提高了整体效率。

### 2.2. 进程

把进程想象成一个独立的烹饪项目。每个进程都有自己的"厨房"（内存空间）和"食材"（资源）。
- 比如，同时烤蛋糕和煮汤，这两个就可以看作是两个不同的进程。

### 2.3. 线程

如果进程是一个烹饪项目，那么线程就是完成这个项目的**具体步骤**。一个进程可以包含多个线程，就像烤蛋糕这个进程可能包含"搅拌面糊"、"预热烤箱"、"倒入模具"等多个步骤（线程）。这些步骤可以由一个厨师轮流进行，也可以由多个助手同时进行。

### 2.4. 互斥锁

想象一把**钥匙**，用来锁住一个资源。当一个线程需要使用这个资源时，它必须先获得这把钥匙。使用完后，它会归还钥匙，让其他线程使用。这就保证了在任何时刻，只有一个线程能访问这个资源，防止了资源的混乱使用。

例如，在厨房里**只有一个烤箱**。当一个厨师在使用烤箱时，他会"锁住"烤箱，其他厨师就需要等待，直到烤箱空闲。

### 2.5. 信号量

信号量可以看作是一个管理员，控制着可同时访问某个资源的线程数量。想象一个**停车场**，信号量就像是负责管理车位的工作人员：

- 如果还有空位（资源可用），他会允许车辆（线程）进入。
- 如果车位已满（资源耗尽），他会要求新来的车辆等待。
- 当有车离开时（资源被释放），他会允许等待的车辆进入。

信号量比互斥锁更灵活，因为它可以允许多个线程同时访问资源，而不仅仅是一个。

### 2.6. 并发与并行

- 并发：在`单核CPU`上，通过快速切换不同的任务，给人一种"同时"进行的**错觉**。就像一个厨师快速地在烤蛋糕和煮汤之间切换工作。
- 并行：在`多核CPU`上，不同的核心可以真正同时执行不同的任务。就像多个厨师在同一时间分别处理不同的菜品。

### 2.7. 总结

操作系统的设计，因此可以归结为三点

（1）以`多进程`形式，允许多个任务同时运行；
（2）以`多线程`形式，允许单个任务分成不同的部分运行；
（3）**提供**`协调机制`
- 一方面防止进程之间和线程之间产生冲突
- 另一方面允许进程之间和线程之间共享资源

## 3. 进程与线程的主要区别

1. `进程`要分配**一大部分的**`内存`，而`线程`只需要分配`一部分栈`就可以了.
2. 一个 `程序`至少有一个`进程`, 一个`进程`至少有一个`线程`.
3. `进程`是资源分配的最小单位，`线程`是程序`执行的最小单位`。
4. 一个`线程`可以创建和撤销另一个`线程`，同一个`进程`中的多个`线程`之间可以并发执行.

## 4. 现代 Chrome 浏览器架构设计
### 4.1. Chrome 多进程架构：浏览器的 6 个主要进程

1. 浏览器主进程/ UI 进程（Browser Process）：负责管理用户界面、地址栏、书签栏等，以及协调其他进程
2. 渲染进程（Renderer Process）：负责将HTML、CSS和JavaScript转换为用户可以交互的网页
	- 渲染进程负责站点的渲染，其中也包括 `JavaScript 代码的运行`，`web worker` 的管理等。
	- 核心任务是将 ` HTML、CSS 和 JavaScript` 转换为用户可以与之交互的网页，排版引擎Blink和JavaScript引擎V8都是运行在该进程
3. 插件进程：运行网页插件，如Flash
4. GPU 进程：处理GPU相关的任务，加速网页渲染
5. 网络进程（Network Process）：处理网络请求
	1. Chrome有个机制，**同一个域名同时**`最多只能建立6个TCP连接`，如果在同一个域名下同时有10个请求发生，那么其中 4个请求会进入排队等待状态，直至进行中的请求完成
6. 扩展进程（Extension Process）：运行浏览器扩展

### 4.2. 在每个渲染进程中，又包含多个线程

- a) 主线程：执行 JavaScript，处理 DOM、CSS等
	- JavaScript主要在渲染进程的主线程上执行，所以长时间运行的JavaScript会阻塞页面渲染
- b) 工作线程（Worker Thread）：执行Web Worker或Service Worker。 
- c) 合成线程（Compositor Thread）：负责将页面各个部分合成为最终显示的图像。 
- d) 光栅线程（Raster Thread）：将页面元素转换为位图

### 4.3. Chrome 的进程模型

Chrome有四种进程模型，默认使用的是Process-per-site-instance模型

- 同一站点（相同协议和域名）的多个标签页通常会**共用一个渲染进程**
- 不同站点的标签页会使用**不同的渲染进程**

其他的还有
- Process-per-site
- Process-per-tab
- Single Process

Chrome会根据系统的资源情况**动态调整**进程的分配：
- 在资源充足的系统上，它可能会为每个标签页分配独立的进程。
- 在资源受限的系统上，它可能会合并一些进程以节省资源

Chrome允许用户或管理员通过**命令行参数**来选择不同的进程模型

### 4.4. 列举 Chrome 常见的线程

Chrome 采用**多进程多线程架构**，每个进程内部都有多个线程协同工作。以下是一些主要的线程：

1. 主线程（Main thread）：
   - 负责处理大部分的渲染工作，包括 DOM 树的构建、样式计算、布局计算等。
   - 执行 JavaScript 代码。
   - 处理用户交互事件。
2. 合成线程（Compositor thread）：
   - 负责将页面的各个部分合成为最终显示的图像。
   - 处理一些与滚动相关的操作，提高页面滚动的流畅度。
3. 渲染线程（Renderer thread）：
   - 在 Renderer 进程中，负责页面渲染的主要工作。
   - 与主线程密切协作，处理页面的可视化呈现。
4. IO 线程：
   - 负责处理文件系统操作和网络请求。
   - 在浏览器主进程和渲染进程中都存在 IO 线程。
5. 工作线程（Worker threads）：
   - 用于执行 Web Workers，允许在后台运行 JavaScript 代码而不影响主线程。
6. 光栅化线程（Raster threads）：
   - 负责将页面的各个部分转换为位图。
   - 通常有多个光栅化线程并行工作，以提高性能。
7. GPU 线程：
   - 在 GPU 进程中，负责与 GPU 硬件交互，加速图形渲染。
8. 网络线程：
   - 在网络进程中，处理所有的网络请求和响应。
      - 比如`Ajax`请求、Fetch等都是
9. 定时器线程：
   - 负责处理 setTimeout 和 setInterval 等计时器功能。
   - 记住，浏览器的`setInterval`和`setTimeout`不是js引擎里的，而`是浏览器自己开了个线程来处理`
10. 事件触发线程：
    - 管理事件队列，当事件被触发时，将其添加到队列中等待主线程处理。
        - JS引擎自己忙不过来，需要浏览器另开线程协助
11. 垃圾回收线程：
    - 负责 JavaScript 的内存垃圾回收，以释放不再使用的内存。
12. 插件线程：
    - 用于运行浏览器插件，每个插件可能在自己的线程中运行。
13. 调试线程：
    - 用于支持开发者工具和日志记录，帮助诊断问题和性能分析。

需要注意的是，虽然 Chrome 是多线程的，但 JavaScript 在浏览器中仍然是**单线程**执行的（除非使用 Web Workers）。这种设计是为了简化编程模型，避免复杂的线程同步问题，同时也与 JavaScript 的主要用途——处理用户交互和操作 DOM——相符合。

### 4.5. JavaScript 引擎与 Chrome 其他线程的关系

总的来说，JavaScript 引擎（V8）是 Chrome 浏览器渲染进程的核心组件之一。它**在专门的线程上运行，负责执行 JavaScript 代码，但同时也与浏览器的其他部分（如 GUI 渲染、事件处理、网络请求等）紧密协作**。这种设计既保证了 JavaScript 的执行效率，又维护了浏览器的整体性能和安全性。理解 JavaScript 引擎与浏览器进程线程架构的关系，对于开发高性能的 Web 应用和理解浏览器的工作原理都非常重要。

1. JavaScript 引擎与渲染进程：
   - JavaScript 引擎（V8）运行在浏览器的渲染进程（Renderer Process）中。
   - 渲染进程是负责将 HTML、CSS 和 JavaScript 转换为用户可以与之交互的网页的核心进程。
   - 在同一个渲染进程中，除了 JavaScript 引擎，还包括排版引擎（如 Blink）。
2. JavaScript 引擎线程：
   - JavaScript 引擎在渲染进程中运行在一个专门的线程上，通常被称为 JS 引擎线程或主线程。
   - 这个线程负责解析和执行 JavaScript 代码。
3. 与 **GUI 渲染线程**的关系：
   - JavaScript 引擎线程和 GUI 渲染线程是**互斥**的。这意味着当 JS 引擎执行时，GUI 渲染线程会被挂起。
   - 这种设计是为了防止渲染出现不可预期的结果。
   - 当 JavaScript 执行时间过长，可能会导致页面渲染的卡顿。
4. 事件循环和消息队列：
   - JavaScript 是单线程的，但通过事件循环（Event Loop）和消息队列来处理异步操作。
   - 事件循环和消息队列的机制允许 JavaScript 在不阻塞主线程的情况下处理 I/O 操作、定时器等异步任务。
5. 与其他进程的交互：
   - 虽然 JavaScript 引擎运行在渲染进程中，但它可以通过进程间通信（IPC）与其他进程（如浏览器主进程、网络进程等）进行交互。
   - 这种交互允许 JavaScript 执行网络请求、访问本地存储等操作。
6. Web Workers：
   - 为了解决 JavaScript 单线程的限制，现代浏览器支持 Web Workers。
   - Web Workers 允许在后台线程中运行 JavaScript，不会直接影响主线程的执行。
   - 但是，Web Workers 不能直接操作 DOM，它们主要用于执行耗时的计算任务。
7. V8 引擎的优化：
   - V8 引擎内部有多个线程协同工作，如编译线程、优化线程和垃圾回收线程。
   - 这些内部线程帮助 V8 实现 JIT（即时编译）、代码优化和内存管理，提高 JavaScript 的执行效率。
8. 沙箱隔离：
   - JavaScript 引擎在渲染进程中运行，这种设计提供了一定程度的安全隔离。
   - 每个标签页通常运行在独立的渲染进程中，这意味着一个标签页中的 JavaScript 代码不能直接访问或影响其他标签页。

## 5. 如何理解 JavaScript 的单线程？

### 5.1. 历史原因

JavaScript 最初是为了在浏览器中操作 DOM 而设计的

### 5.2. 如果是多线程的

一个线程在某个DOM节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准

### 5.3. 缺点

- 性能限制：在处理 CPU 密集型任务时，可能会导致页面卡顿
- 不能充分利用多核 CPU 的优势
- 可靠性较低：如果某个任务崩溃，可能会影响整个应用程序

### 5.4. 如何克服单线程的限制

- a. 事件循环和异步编程：JavaScript 使用事件循环（Event Loop）和回调函数来处理异步操作
- b. Web Workers : 可以新开线程
- c. 异步 API：许多浏览器 API 和 Node.js API 都是异步的，允许非阻塞操作
- d. 服务器端解决方案：在 Node.js 环境中，可以使用**集群（Cluster）模块**或 **PM2** 等**进程管理工具**来创建多个进程，充分利用多核 CPU

### 5.5. Web Worker 线程

- 允许 JavaScript 脚本 创建多个线程，但是子线程完全受主线程控制，且不得操作DOM。
- 所以，这个新标准并没有改变 JavaScript 单线程的本质 

## 6. 事件循环与消息队列

- **消息队列：** 消息队列是一个先进先出的 `队列`，它里面存放着各种消息
- **事件循环：** 
	- 事件循环是指 `主线程` 重复从**消息队列**中取消息、执行的过程
	- 事件循环 是 JavaScript 引擎等待任务、执行任务和进入休眠状态等待更多任务的一种机制
	- JavaScript 是单线程的，**事件循环**使得它能够非阻塞地执行 I/O 操作

![图片&文件](./files/20241025-3.png)

类似于下面代码：

```javascript
while(true) {     
  var message = queue.shift();     
  execute(message); 
}
```

## 7. 宏任务与微任务

```javascript hl:1
即 同步代码，一个宏任务，所有微任务，一个宏任务，所有微任务......
while (true) {
  宏任务队列.shift()
  微任务队列全部任务()
}
```

- 谁发起的
	- 宏任务：由宿主（Node 或者 浏览器）发起
	- 微任务：js 引擎发起
- 微任务 是 宏任务的组成部分，不能分开谈
- DOM 操作是同步任务
- `window.requestAnimationFrame()` 不能算宏任务也不能算微任务，而是一个**特定时机**
	- 你希望执行一个动画，并且要求浏览器在**下次重绘之前**调用指定的回调函数更新动画
	- 执行时机是在当前宏任务范围内,  执行完**同步代码和微任务队列后**再执行
		- 它仍然属于宏任务范围内，但是是在微任务队列执行完毕后才执行
- 常见的**宏任务**包括：
	- script（**整体代码**）
	- setTimeout/setInterval
	- I/O
	- UI 渲染
	- postMessage
	- setImmediate（Node.js 环境）
- 常见的微任务包括：
	- `Promise.then/catch/finally`
	- process.nextTick（Node.js 环境）
	- MutationObserver
	- queueMicrotask()
- 执行顺序：
	- a. 执行同步代码，这属于宏任务。
	- b. 执行栈为空，查询是否有微任务需要执行。
	- c. 执行所有微任务。
	- d. 必要的话进行 UI 渲染。
	- e. 然后开始下一轮事件循环，执行宏任务中的异步代码

## 8. Node.js 版本（v12 及以后）与浏览器环境中宏任务和微任务的区别

- 事件循环的基本结构：
	- 浏览器：事件循环相对简单，主要包括宏任务队列和微任务队列。
	- Node.js：事件循环更复杂，包含**多个阶段**（timers、pending callbacks、idle、prepare、poll、check、close callbacks）
- 宏任务和微任务的执行顺序
	- 都是在每个宏任务执行完毕后，会立即执行所有微任务
- Node.js 中的 `process.nextTick` 是一个特殊的微任务，**它的优先级高于其他微任务**。在每个阶段结束时，如果存在 nextTick 队列，会优先执行完 nextTick 队列中的所有任务，然后才会执行其他微任务
- Nodejs  中 ： 同步任务 > `process.nextTick()` > 微任务
- 如果在一个 I/O 周期内调用，setImmediate 总是先于 setTimeout 执行，否则不确定

## 9. requestIdleCallback 的特点、用法和应用场景

`requestIdleCallback` 允许开发者在**浏览器的空闲时间**执行后台或低优先级的任务。它的工作原理是利用**浏览器的空闲周期**来执行任务，而不会影响关键的渲染和交互操作

API： `window.requestIdleCallback(callback[, options])`
 
```javascript
requestIdleCallback(myNonEssentialWork);

// 非必要任务
function myNonEssentialWork(deadline) {
  // timeRemaining()： 返回当前空闲期还剩余的毫秒数
  // didTimeout： 一个布尔值，表示任务是否已经超时
  while (deadline.timeRemaining() > 0 && tasks.length > 0) {
    doWorkIfNeeded();
  }
  if (tasks.length > 0) {
    requestIdleCallback(myNonEssentialWork);
  }
}

```

requestIdleCallback 主要用于执行非必要的后台任务或计算，例如：
- 数据预加载
- 长列表的渐进式渲染
- 复杂计算的分割执行
- 非关键数据的处理和分析
- 大量 DOM 操作：例如，动态插入大量 DOM 元素时，可以使用 requestIdleCallback 分批处理，避免长时间阻塞主线程。
- 数据处理：处理大量数据或执行复杂计算时，可以将任务分割并在空闲时执行。
- 预加载：在用户不活跃时预加载资源或数据

React 的 **Fiber 架构** 在内部实现了类似 requestIdleCallback 的机制，用于将渲染工作分割成小块，在浏览器空闲时执行。这允许 React 在不阻塞主线程的情况下进行复杂的更新操作

注意：
- 不要在 requestIdleCallback 中执行 DOM 操作，因为它可能会触发重排或重绘，影响性能
- 对于有**时间限制**的任务，应该使用 setTimeout 或 requestAnimationFrame，而不是 requestIdleCallback

## 10. 说出下面代码的执行顺序

```javascript hl:14,15
setTimeout(() => {
  console.log("1");
  Promise.resolve().then(function () {
    console.log("2");
  });
}, 0);
setTimeout(() => {
  console.log("3");
  Promise.resolve().then(function () {
    console.log("4");
  });
}, 0);

// 1 2 3 4
// nodejs 12 以上 和 浏览器一样
```

## 11. 下面代码的执行顺序

setTimeout 和 setImmediate 都是宏任务
- setTimeout **通常**会先于 setImmediate 执行
- 但如果涉及到 I/O 操作，setImmediate 这更快执行，因为setImmediate 总是在 I/O 操作之后执行

```javascript hl:2,18,22
setImmediate(function () {
  console.log(6);
});
setTimeout(function () {
  console.log(7);
}, 0);

setTimeout(function () {
  console.log("7-1s");
}, 1);

setTimeout(function () {
  console.log("7-2s");
}, 2);

setTimeout(function () {
  console.log("7-4s");
}, 4);

setTimeout(function () {
  console.log("7-100s");
}, 100);

console.log(1);

process.nextTick(() => {
  console.log(4);
});
new Promise(function (resolve, rejected) {
  console.log(2);
  resolve();
}).then((res) => {
  console.log(5);
});

console.log(3);

// 1
// 2
// 3
// 4
// 5
// 7
// 7-1s
// 7-2s
// 7-4s
// 6
// 7-100s
```

下面代码就会很**稳定的输出**，因为代码会进入 I/O callback阶段，然后check阶段，再然后是timers阶段

```javascript 

const fs = require('fs');

fs.readFile('test.js', () => {
  setTimeout(() => console.log(1));
  setImmediate(() => console.log(2));
});

// 2 1 
```

## 12. promise的兼容性：es6

## 13. Vue 的 nextTick 如何实现的？

由于 Vue 的异步更新策略，如果我们在修改数据后立即操作 DOM，可能会得到更新前的旧 DOM。nextTick 提供了一种机制，确保我们的代码在 DOM 更新后执行

所以当数据发生变化时，Vue 不会立即更新 DOM，而是将更新操作推入一个队列中，这种做法可以提高性能

Vue会尝试使用原生的 Promise.then、MutationObserver 和 setImmediate，如果执行环境不支持，则会采用`setTimeout(fn, 0)` 代替

nextTick 的**核心思想**：利用 JavaScript 的事件循环，将回调推迟到 `下一个"tick"`执行

```javascript
// 一个简单的 nextTick 实现

// 用于存储回调函数的数组
let callbacks = [];

// 代表是否正在执行回调
let pending = false;

function nextTick(cb) {
  callbacks.push(cb);

  if (!pending) {
    pending = true;
    // 使用setTimeout来调度一个刷新操作
    setTimeout(flushCallbacks, 0);
  }
}

// flushCallbacks函数负责执行所有的回调
function flushCallbacks() {
  pending = false;
  const copies = callbacks.slice(0);
  callbacks.length = 0;
  for (let i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// 使用示例
nextTick(() => {
  console.log("这是在下一个tick执行的回调");
});

console.log("这是同步代码");


```

## 14. queueMicrotask

`queueMicrotask` 是一个用于将回调函数作为**微任务（microtask）** 添加到微任务队列中的全局函数， nodejs 环境和浏览器环境都可用

`queueMicrotask` 可用于批量处理状态更新，确保 DOM 只更新一次，而不是每次状态变化都更新，如下代码

```javascript hl:9,22,23,24
let state = { count: 0 };
let updateScheduled = false;

function updateState(newState) {
  Object.assign(state, newState);

  if (!updateScheduled) {
    updateScheduled = true;
    queueMicrotask(() => {
      updateDOM();
      updateScheduled = false;
    });
  }
}

function updateDOM() {
  console.log("Updating DOM with state:", state);
  // 实际的 DOM 更新操作
}

// 使用示例
updateState({ count: 1 });
updateState({ count: 2 });
updateState({ count: 3 });

console.log("Current state:", state);

```

## 15. `async`和`await`的串行并行问题

```javascript hl:2,7,10
async function main() {
  // 串行
  var name1 = await foo();
  // 这里会等待foo执行完后在执行
  var name2 = await bar();

  // 并行
  var [name1, name2] = await Promise.all([foo(), bar()]);

  // 并行
  var foo2 = foo();
  var bar2 = bar();
  var name1 = await foo2;
  var name2 = await bar2;
}

```

## 16. 假设本地机器无法做加减乘除法，需要通过远程请求让服务端来实现

```javascript hl:12,27,49
// 假设本地机器无法做加减乘除法，需要通过远程请求让服务端来实现

// 本地模拟远程请求
async function addRemote(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

// 基本实现
async function add(...args) {
  let res = 0;

  // base case
  if (args.length === 0) return res;
  if (args.length === 1) return args[0];

  for (const item of args) {
    res = await addRemote(res, item);
  }

  return res;
}

// 优化 1：分组并行请求
async function add(...args) {
  let res = 0;

  // base case
  if (args.length === 0) return res;
  if (args.length === 1) return args[0];

  const tasks = [];
  for (const item of args) {
    tasks.push(addRemote(res, item));
  }

  const values = await Promise.all(tasks);

  values.forEach((value) => {
    res += value;
  });

  return res;
}

// 优化 2：缓存请求，减少请求次数
async function add(...args) {
  let res = 0;

  // base case
  if (args.length === 0) return res;
  if (args.length === 1) return args[0];

  const cache = new Map();
  for (const item of args) {
    if (cache.has(item)) {
      res = cache.get(item);
    } else {
      res = await addRemote(res, item);
      cache.set(item, res);
    }
  }

  return res;
}

```

## 17. 在循环中使用 async、await 的注意事项

- `forEach` 不能很好地与 `async/await` 配合使用，因为它不会等待异步操作完成；如果一定使用，注意使用**立即执行函数**包装
- `map` 可以配合 `Promise.all` 使用
- `for...of` 是在循环中使用 async/await **最自然和推荐**的方式
- `while` 循环可以很好地与 async/await 配合使用
- `for...in` 主要用于遍历对象的可枚举属性，一般不用，如果使用，注意使用**立即执行函数**包装
- 传统的 `for 循环`也可以与 async/await 一起使用
- 使用`filter`，完全没用，因为回调返回 `都是promise对象，都为true`

## 18. 一个经典的循环与闭包的问题

```javascript hl:8
// 可能出现问题的代码
for (var i = 0; i < 5; i++) {
  setTimeout(async () => {
    await someAsyncOperation(i);
  }, 1000);
}

// 修正后的代码，使用 let，不使用 var
for (let i = 0; i < 5; i++) {
  setTimeout(async () => {
    await someAsyncOperation(i);
  }, 1000);
}

```

## 19. 说说 Nginx

### 19.1. 正向代理与反向代理

![图片&文件](./files/20241025-4.png)

### 19.2. 一些基本设置

- 针对 特定路径，特定文件后缀，开启 `gzip on`
- 请求限制：对 `同一 ip` 的连接数 和 并发数进行限制
	- imit_conn_module `连接频率`限制
	- limit_req_module `请求频率`限制
- 针对特定路径，特定文件后缀，检查 referer 来源，开启**防盗链**

### 19.3. 负载均衡

![图片&文件](./files/20241025-5.png)

## 20. PaaS 、SaaS 等
- PaaS是（Platform as a Service）的缩写
- SaaS
- Faas
- 基础设施即服务(IaaS) ，`IaaS`是指基础设施服务，Infrastructure-as-a-service
- `BaaS`是指后端即服务，Backend as a Service
- `DaaS`是指函数即服务，Data as a Service。
- `NaaS`是指网络即服务，Network as a Service
- XPaaS 是指各种类型的 PaaS，它和 XaaS 一样，类的术语，这里是 PaaS 类的统称
- `UIPaaS`是UI平台即服务，User Interface PaaS。产品界面设计与研发一站式解决方案

## 21. 最后来一段代码的执行顺序

```javascript
async function async1() {
  console.log("2");
  await async2();
  console.log("9");
}
async function async2() {
  console.log("3");
}
console.log(1);

setTimeout(function () {
  console.log("11");
}, 0);
setTimeout(function () {
  console.log("13");
}, 300);

setImmediate(() => console.log("12"));

process.nextTick(() => console.log("7"));

async1();

process.nextTick(() => console.log("8"));

new Promise(function (resolve) {
  console.log("4");
  resolve();
  console.log("5");
}).then(function () {
  console.log("10");
});
console.log("6");

1
2
3
4
5
6
7
8
9
10
11
12
13
```

## 22. 同级的先清空，然后再到下一级

```javascript
// 111
// 222
// 333
// 444
// 555
// 666
// 777

// :::: 同级的先清空，然后再到下一级
new Promise(resolve => {
    setTimeout(() => {
        console.log(666);
        new Promise(resolve => {
            resolve();
        }).then(() => {
            console.log(777);
        })
    })
    resolve();
}).then(() => {
    new Promise(resolve => {
        resolve(); // 所以继续执行111 、 222
    }).then(() => {
        console.log('111');
    }).then(() => {
        console.log('222');
    });
}).then(() => {
    new Promise((resolve) => {
        resolve()
    }).then(() => {
        // ::::又多了一层
        new Promise((resolve) => {
            resolve()
        }).then(() => {
            console.log(444)
        })
    }).then(() => {
        console.log(555);
    })
}).then(() => {
    console.log(333);
})

```