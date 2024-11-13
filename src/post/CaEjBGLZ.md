
# 面试题



## 目录
<!-- toc -->
 ## 1. 遍历数组的快慢比较 

![图片&文件](./files/20241111-29.png)

![图片&文件](./files/20241111-28.png)

## 2. 使用 setTimeout(fn,0) 的场景有？

![图片&文件](./files/20241111-30.png)

## 3. resolve 或者 return 一个 promise 对象时，会产生一个新的微任务

```javascript  hl:5,7
Promise.resolve()
  .then(() => {
    console.log(0);
    // 会产生一个新的 Promise，即产生一个新的微任务
    return Promise.resolve(1); // 等价于下面注释中
  })
  // 等价于
  // .then(() => {})
  // .then(() => {})
  .then((res) => {
    console.log(res);
  });

Promise.resolve()
  .then(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(4);
  })
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });

```

![图片&文件](./files/20241111-31.png)

### 3.1. 重点

![图片&文件](./files/20241111-32.png)

## 4. 如何实现大文件上传

![图片&文件](./files/20241111-33.png)

### 4.1. 其他注意点

![图片&文件](./files/20241111-34.png)

## 5. 列举 ES6（ES2015） 到 ES2024 的主要特性，按重要性排序

具体哪个是那年记不清，因为很多东西虽然在提案阶段，但已经被 babel 之类的工具提请给实现了

### 5.1. ES6 (ES2015) - 最重要的版本

```javascript
// 1. let 和 const
let x = 1;
const y = 2;

// 2. 箭头函数
const fn = () => {};

// 3. 解构赋值
const [a, b] = [1, 2];
const {name} = {name: 'test'};

// 4. 模板字符串
const str = `Hello ${name}`;

// 5. Class 语法
class Person {
    constructor() {}
}

// 6. Promise
new Promise((resolve, reject) => {});

// 7. 模块化
import/export

// 8. 默认参数
function fn(x = 1) {}

// 9. 展开运算符
[...array]
```

### 5.2. ES2016

```javascript
// 1. 指数运算符
2 ** 3

// 2. Array.includes()
[1,2].includes(1)
```

### 5.3. ES2017

```javascript
// 1. async/await
async function fn() {
    await promise;
}

// 2. Object.values/entries
Object.values({a: 1})
Object.entries({a: 1})

// 3. String padding
'1'.padStart(2, '0')
```

![图片&文件](./files/20241111-35.png)

### 5.4. ES2018

```javascript
// 1. Rest/Spread 属性
const {a, ...rest} = obj;

// 2. 异步迭代 for-of
for await (const x of array) {}

// 3. Promise.finally()
promise.finally()
```

### 5.5. ES2019
```javascript
// 1. Array.flat/flatMap
[1, [2]].flat()
array.flatMap()

// 2. Object.fromEntries
Object.fromEntries(['a', 1](/post/CaEjBGLZ.html#'a',-1))

// 3. String.trimStart/trimEnd
str.trimStart()
```

### 5.6. ES2020

```javascript
// 1. 可选链操作符
obj?.prop

// 2. 空值合并操作符
null ?? 'default'

// 3. BigInt
const big = 9007199254740991n

// 4. Promise.allSettled
Promise.allSettled([p1, p2])
```

![图片&文件](./files/20241111-36.png)

### 5.7. ES2021

```javascript
// 1. 逻辑赋值运算符
x ||= y
x &&= y
x ??= y

// 2. String.replaceAll
'abc'.replaceAll('a', 'b')

// 3. Promise.any
Promise.any([p1, p2])
```

![图片&文件](./files/20241111-37.png)

![图片&文件](./files/20241111-38.png)
### 5.8. ES2022

```javascript
// 1. Class 字段
class A {
    x = 1;
    `#private` = 2;
    static y = 3;
}

// 2. Top-level await
await promise;

// 3. Array.at()
array.at(-1)
```

### 5.9. ES2023

```javascript
// 1. Array 查找从后向前
array.findLast()
array.findLastIndex()

// 2. Hashbang Grammar
`#!/usr/bin/env` node

// 3. WeakMap 支持 Symbol 键
```

ES2024 (提案阶段)
```javascript
// 1. Promise.withResolvers
const {promise, resolve, reject} = Promise.withResolvers()

// 2. 新增 RegExp v flag
/foo/v.test('foo')

// 3. String.prototype.isWellFormed
str.isWellFormed()
str.toWellFormed()
```

重要性排序（TOP 10）：
1. let/const
2. 箭头函数
3. async/await
4. 解构赋值
5. Promise
6. 模块化(import/export)
7. Class语法
8. 可选链(?.)
9. 展开运算符(...)
10. 模板字符串

使用建议：
1. 优先掌握 ES6 的特性，这是基础
2. async/await 是重点，因为异步处理很常见
3. 可选链和空值合并是提高代码健壮性的利器
4. Class 语法对面向对象编程很重要
5. 注意新特性的浏览器兼容性

记忆技巧：
- ES6 是最大更新，重点掌握
- 之后的版本主要是细节改进
- 按照解决的问题分类记忆：
  - 语法糖：箭头函数、解构赋值
  - 异步处理：Promise、async/await
  - 面向对象：Class
  - 安全性：可选链、空值合并
  - 工具方法：Array、Object新方法

## 6. WeakRef 

WeakRef（弱引用）是 ECMAScript 2021 (ES12) 引入的一个新特性。它的主要作用是允许你保持对对象的引用，而不阻止该对象被垃圾回收器回收。这在某些特定场景下非常有用。让我详细解释一下 WeakRef 的作用和使用场景：

### 6.1. 主要作用

WeakRef 的主要作用是创建对对象的弱引用。这意味着：

- 如果一个对象只被 WeakRef 引用，它可以被垃圾回收。
- WeakRef 不会阻止其引用的对象被垃圾回收。

### 6.2. 使用方法

```javascript hl:2
let obj = { data: "some data" };
let weakRef = new WeakRef(obj);

// 稍后使用
let objAgain = weakRef.deref();
if (objAgain) {
    console.log(objAgain.data);
} else {
    console.log("Object has been garbage collected");
}
```

### 6.3. 主要使用场景

#### 6.3.1. 缓存系统
```javascript
const cache = new Map();

function getDataForKey(key) {
    let weakRef = cache.get(key);
    if (weakRef) {
        let data = weakRef.deref();
        if (data) return data;
    }
    
    // 如果数据不存在或已被回收，重新获取数据
    let newData = expensiveOperation(key);
    cache.set(key, new WeakRef(newData));
    return newData;
}
```

#### 6.3.2. 观察者模式
```javascript
class Subject {
    constructor() {
        this.observers = new Set();
    }

    addObserver(observer) {
        this.observers.add(new WeakRef(observer));
    }

    notifyObservers() {
        for (let weakRef of this.observers) {
            const observer = weakRef.deref();
            if (observer) {
                observer.update();
            } else {
                this.observers.delete(weakRef);
            }
        }
    }
}
```

#### 6.3.3. 大型对象的临时引用

```javascript
function processLargeObject(obj) {
    let weakRef = new WeakRef(obj);
    
    // 做一些其他操作...
    
    // 当需要时再次访问对象
    let objAgain = weakRef.deref();
    if (objAgain) {
        // 使用对象
    }
}
```

### 6.4. 优点

- 内存效率：允许垃圾回收器回收不再需要的对象，防止内存泄漏。
- 灵活性：可以保持对对象的引用，同时允许该对象在必要时被回收。

### 6.5. 注意事项

- 不确定性：**无法预测对象何时会被回收**。
- 性能开销：频繁检查对象是否仍然存在可能会影响性能。
- 复杂性：增加了代码的复杂性，使用时需要额外的检查。

### 6.6. 与 WeakMap 和 WeakSet 的关系

WeakRef 与 WeakMap 和 WeakSet 类似，都是处理对象的弱引用。但 WeakRef 更加灵活，允许你直接操作弱引用。

### 6.7. 最佳实践

- 仅在真正需要时使用 WeakRef。
- 总是检查 `deref()` 的结果是否为 null。
- 考虑使用 `FinalizationRegistry` 来清理相关资源。

```javascript
const registry = new FinalizationRegistry(heldValue => {
    console.log(`Object with ${heldValue} has been garbage collected.`);
});

let obj = { data: "important data" };
let weakRef = new WeakRef(obj);
registry.register(obj, "my object");

// 使用完毕后
obj = null; // 允许对象被回收
```

### 6.8. 总结

WeakRef 是一个强大但需谨慎使用的特性。它主要用于需要临时引用大型对象或需要在对象可能被回收的情况下维护引用的场景。正确使用可以提高内存效率，但也增加了代码的复杂性。

## 7. FinalizationRegistry 概述

FinalizationRegistry 对象可以让你**在对象被垃圾回收时请求一个回调**。这个机制提供了一种方式来为那些不再被使用的对象执行一些清理操作。

```javascript
const registry = new FinalizationRegistry(heldValue => {
  console.log('对象被回收了，关联值为:', heldValue);
});

let obj = {};
registry.register(obj, "自定义数据");

// 当 obj 被垃圾回收时，回调函数会被调用
```

### 7.1. FinalizationRegistry 不能主动触发垃圾回收

虽然 FinalizationRegistry 确实与垃圾回收（GC）密切相关，但它并不能直接触发垃圾回收

FinalizationRegistry 主要用于在对象被垃圾回收后执行一些清理操作。它允许你注册一个回调函数，这个函数会在某个对象被垃圾回收后被调用。

FinalizationRegistry 是一个**被动机制**。它依赖于 JavaScript 引擎的垃圾回收器来触发回调，而不是主动触发垃圾回收

## 8. 是否有什么办法能够主动触发垃圾回收？

在常规 JavaScript 中，不能直接、可靠地触发垃圾回收（Garbage Collection，GC），因为这是由 JavaScript 引擎自动管理的。不过，我们可以了解一些相关的方法和注意事项：

### 8.1. 开发环境下的调试方法

```javascript
// Chrome DevTools
// 1. 打开开发者工具
// 2. 打开 Memory 面板
// 3. 点击垃圾桶图标 "Collect garbage"

// Node.js 环境
if (global.gc) {
    global.gc();
}
// 需要使用 --expose-gc 参数启动 Node.js
// node --expose-gc script.js
```

### 8.2. 间接触发 GC 的常见做法

```javascript
// 1. 解除引用
let obj = { data: "some data" };
obj = null;  // 解除引用，使对象可被回收

// 2. 使用 WeakRef 和 WeakMap
let weakRef = new WeakRef(obj);
obj = null;  // 原对象可能被回收

// 3. 闭包内的变量
function createClosure() {
    let largeData = new Array(1000000);
    return function() {
        // largeData 在这里被引用
    };
}
let closure = createClosure();
closure = null; // 清除闭包引用
```

### 8.3. 内存监控方法

```javascript
// 1. Node.js 环境
const used = process.memoryUsage();
console.log({
    heapTotal: `${Math.round(used.heapTotal / 1024 / 1024 * 100) / 100} MB`,
    heapUsed: `${Math.round(used.heapUsed / 1024 / 1024 * 100) / 100} MB`
});

// 2. 浏览器环境
console.log(performance.memory); // Chrome only
```

### 8.4. 开发建议

- 避免全局变量
- 及时清除事件监听器
- 及时清除定时器
- 避免循环引用
- 使用适当的数据结构（WeakMap、WeakSet 等）
- 分批处理大量数据
- 注意闭包的使用

```javascript
// 错误示例
window.globalData = { /* 大量数据 */ };

// 正确示例
function processData() {
    const data = { /* 大量数据 */ };
    // 处理数据
    // 函数结束后 data 可被回收
}
```

### 8.5. 调试工具

- Chrome DevTools 的 Memory 面板
- Node.js 的 --inspect 调试模式
- 内存泄漏检测工具（如 heapdump）

## 9. IndexedDB 严格遵循同源策略（Same-Origin Policy）

## 10. 能够像 storage 一样监听到 indexDB 的数据变化了吗？

不同于 localStorage 和 sessionStorage，IndexedDB 并没有内置的事件机制来直接监听数据变化。然而，我们可以通过一些技术和模式来实现类似的功能。让我为您详细解释几种方法：

### 10.1. 使用事务（Transaction）和对象存储（Object Store）事件

IndexedDB 提供了一些事件，可以在事务级别监听变化：

```javascript
function openDatabase() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('MyDatabase', 1);
        request.onerror = (event) => reject(event.target.error);
        request.onsuccess = (event) => resolve(event.target.result);
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            db.createObjectStore('MyStore', { keyPath: 'id' });
        };
    });
}

async function monitorChanges() {
    const db = await openDatabase();
    const transaction = db.transaction(['MyStore'], 'readwrite');
    const store = transaction.objectStore('MyStore');

    store.addEventListener('add', (event) => {
        console.log('数据添加:', event);
    });

    store.addEventListener('put', (event) => {
        console.log('数据更新:', event);
    });

    store.addEventListener('delete', (event) => {
        console.log('数据删除:', event);
    });

    // 使用
    store.add({ id: 1, value: 'test' });
}

monitorChanges();
```

这种方法的局限性在于它只能监听当前事务中的变化。

### 10.2. 使用自定义事件和发布-订阅模式

我们可以创建一个包装器来发出自定义事件：

```javascript
class IndexedDBWrapper {
    constructor(dbName, version) {
        this.dbName = dbName;
        this.version = version;
        this.db = null;
        this.listeners = {};
    }

    async open() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.version);
            request.onerror = (event) => reject(event.target.error);
            request.onsuccess = (event) => {
                this.db = event.target.result;
                resolve(this.db);
            };
            // 处理 onupgradeneeded...
        });
    }

    async put(storeName, data) {
        const transaction = this.db.transaction([storeName], 'readwrite');
        const store = transaction.objectStore(storeName);
        await store.put(data);
        this.emit('change', { type: 'put', storeName, data });
    }

    async delete(storeName, key) {
        const transaction = this.db.transaction([storeName], 'readwrite');
        const store = transaction.objectStore(storeName);
        await store.delete(key);
        this.emit('change', { type: 'delete', storeName, key });
    }

    on(eventName, callback) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(callback);
    }

    emit(eventName, data) {
        if (this.listeners[eventName]) {
            this.listeners[eventName].forEach(callback => callback(data));
        }
    }
}

// 使用示例
async function useIndexedDBWrapper() {
    const dbWrapper = new IndexedDBWrapper('MyDatabase', 1);
    await dbWrapper.open();

    dbWrapper.on('change', (event) => {
        console.log('数据变化:', event);
    });

    await dbWrapper.put('MyStore', { id: 1, value: 'test' });
    await dbWrapper.delete('MyStore', 1);
}

useIndexedDBWrapper();
```

### 10.3. 使用 Proxy 或 Observable 模式

我们可以使用 Proxy 来包装 IndexedDB 操作，从而实现自动监听：

```javascript
function createObservableStore(db, storeName) {
    return new Proxy({}, {
        get: (target, prop) => {
            if (prop === 'get') {
                return async (key) => {
                    const transaction = db.transaction([storeName], 'readonly');
                    const store = transaction.objectStore(storeName);
                    return await store.get(key);
                };
            }
            if (prop === 'put') {
                return async (data) => {
                    const transaction = db.transaction([storeName], 'readwrite');
                    const store = transaction.objectStore(storeName);
                    await store.put(data);
                    console.log('数据更新:', data);
                };
            }
            if (prop === 'delete') {
                return async (key) => {
                    const transaction = db.transaction([storeName], 'readwrite');
                    const store = transaction.objectStore(storeName);
                    await store.delete(key);
                    console.log('数据删除:', key);
                };
            }
        }
    });
}

async function useObservableStore() {
    const db = await openDatabase(); // 假设这个函数已经定义
    const store = createObservableStore(db, 'MyStore');

    await store.put({ id: 1, value: 'test' });
    const data = await store.get(1);
    console.log('获取的数据:', data);
    await store.delete(1);
}

useObservableStore();
```

### 10.4. 使用 Service Worker 进行跨标签页通信

如果需要在多个标签页之间同步 IndexedDB 的变化，可以使用 Service Worker：

```javascript
// service-worker.js
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'DB_CHANGE') {
        self.clients.matchAll().then(clients => {
            clients.forEach(client => {
                if (client.id !== event.source.id) {
                    client.postMessage(event.data);
                }
            });
        });
    }
});

// main.js
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
}

function notifyDBChange(change) {
    if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({
            type: 'DB_CHANGE',
            change: change
        });
    }
}

navigator.serviceWorker.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'DB_CHANGE') {
        console.log('其他标签页的 IndexedDB 变化:', event.data.change);
    }
});

// 在 IndexedDB 操作后调用
notifyDBChange({ type: 'put', key: 1, value: 'new data' });
```

### 10.5. 总结

虽然 IndexedDB 没有像 localStorage 那样的内置事件监听机制，但我们可以通过上述方法来实现类似的功能：

1. 使用事务和对象存储事件（局限于单个事务）
2. 实现自定义的发布-订阅模式
3. 使用 Proxy 或 Observable 模式包装 IndexedDB 操作
4. 利用 Service Worker 实现跨标签页的数据变化通知

## 11. 前端页面通讯的方式有哪些？

![图片&文件](./files/20241111-39.png)

## 12. map 和 foreach 的区别

### 12.1. 快慢

![图片&文件](./files/20241111-40.png)

### 12.2. 是否修改原数组

![图片&文件](./files/20241111-41.png)

## 13. 阿拉伯计数转成中文：101 → 一百零一

思路：直接数组对应先匹配出来，再处理特殊情况

```javascript hl:1,14
const numberMap = {
  0: "零",
  1: "一",
  2: "二",
  3: "三",
  4: "四",
  5: "五",
  6: "六",
  7: "七",
  8: "八",
  9: "九",
};

const unitMap = {
  0: "", // 个位
  1: "十", // 十位
  2: "百", // 百位
  3: "千", // 千位
  4: "万", // 万位
  5: "十", // 十万位
  6: "百", // 百万位
  7: "千", // 千万位
  8: "亿", // 亿位
};

function numberToChinese(num) {
  // 转换为字符串
  const numStr = num.toString();
  // 结果数组
  const result = [];
  // 数字长度
  const length = numStr.length;

  // 处理零的特殊情况
  if (num === 0) return numberMap[0];

  for (let i = 0; i < length; i++) {
    const digit = parseInt(numStr[i]);
    const position = length - 1 - i; // 位置（从右往左）

    // 跳过零的处理
    if (digit === 0) {
      // 当前数字是0，且不是最后一位，且后面的数字不是0
      if (i < length - 1 && numStr[i + 1] !== "0") {
        result.push(numberMap[digit]);
      }
      continue;
    }

    // 处理十位数的特殊情况（如：一十 => 十）
    if (position === 1 && digit === 1 && i === 0) {
      result.push(unitMap[position]);
    } else {
      result.push(numberMap[digit]);
      result.push(unitMap[position]);
    }
  }

  return result.join("");
}

// 测试
console.log(numberToChinese(0)); // 零
console.log(numberToChinese(10)); // 十
console.log(numberToChinese(11)); // 十一
console.log(numberToChinese(111)); // 一百一十一
console.log(numberToChinese(1001)); // 一千零一
console.log(numberToChinese(10001)); // 一万零一
console.log(numberToChinese(10101)); // 一万零一百零一
console.log(numberToChinese(100000)); // 十万
console.log(numberToChinese(1000001)); // 一百万零一

```


## 14. 将类数组对象转成真正数组的 4 种方法

![图片&文件](./files/20241111-42.png)

## 15. 虚拟 DOM 渲染到页面时，框架会做那些处理？

![图片&文件](./files/20241111-43.png)

## 16. `reduce` 方法及其常见的使用场景

### 16.1. reduce 方法基本语法

```javascript
array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
```

- `callback`: 执行数组中每个值的函数，包含四个参数：
	- `accumulator`: 累加器，累加回调的返回值
	- `currentValue`: 数组中正在处理的元素
	- `index`（可选）: 数组中正在处理的当前元素的索引
	- `array`（可选）: 调用 `reduce()` 的数组
- `initialValue`（可选）: 作为第一次调用 `callback` 函数时的第一个参数的值
	- ==注意：如果不传时，调用空数组会报错==

### 16.2. 使用场景

#### 16.2.1. 数组求和

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 输出: 15
```

#### 16.2.2. 数组中最大值

```javascript
const numbers = [5, 2, 8, 1, 9];
const max = numbers.reduce((acc, cur) => Math.max(acc, cur));
console.log(max); // 输出: 9
```

#### 16.2.3. 数组扁平化

```javascript
const nestedArray = [1, 2], [3, 4], [5, 6](/post/CaEjBGLZ.html#1,-2],-[3,-4],-[5,-6);
const flatArray = nestedArray.reduce((acc, cur) => acc.concat(cur), []);
console.log(flatArray); // 输出: [1, 2, 3, 4, 5, 6]
```

#### 16.2.4. 计算数组中元素出现的次数

```javascript
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
}, {});
console.log(count); // 输出: { apple: 3, banana: 2, orange: 1 }
```

#### 16.2.5. 按条件分组

```javascript
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 30 }
];

const groupedByAge = people.reduce((acc, person) => {
    (acc[person.age] = acc[person.age] || []).push(person);
    return acc;
}, {});

console.log(groupedByAge);
// 输出: { 
//   25: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
//   30: [{ name: 'Bob', age: 30 }, { name: 'David', age: 30 }]
// }
```

#### 16.2.6. 串联 Promise

```javascript
const asyncTasks = [
    () => new Promise(resolve => setTimeout(() => resolve('Task 1'), 1000)),
    () => new Promise(resolve => setTimeout(() => resolve('Task 2'), 500)),
    () => new Promise(resolve => setTimeout(() => resolve('Task 3'), 800))
];

asyncTasks.reduce((acc, task) => 
    acc.then(results => 
        task().then(result => [...results, result])
    ), 
    Promise.resolve([])
).then(console.log);
// 输出: ['Task 1', 'Task 2', 'Task 3']
```

#### 16.2.7. 实现 pipe 或 compose 函数

```javascript
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

const addOne = (x) => x + 1;
const double = (x) => x * 2;
const square = (x) => x * x;

const compute = pipe(addOne, double, square);
console.log(compute(3)); // 输出: 64 ((3 + 1) * 2)^2
```

#### 16.2.8. 提取对象中的特定字段

```javascript
const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 }
];

const names = users.reduce((acc, user) => [...acc, user.name], []);
console.log(names); // 输出: ['Alice', 'Bob', 'Charlie']
```

## 17. 绑定 this 指向的的方法都有哪些？

- bind
- 箭头函数：指向定义时的上下文
- apply/call

## 18. addEventListenser 的三个参数

![图片&文件](./files/20241111-44.png)
## 19. `??`  与 `||` 的区别？

- `||` 运算符在左侧为任何 `false` 值时都会返回右侧的值。
- `??` 运算符只在左侧为 `null 或 undefined` 时才会返回右侧的值。

```javascript hl:2,5,8
console.log(0 || 42);     // 输出: 42
console.log(0 ?? 42);     // 输出: 0

console.log('' || 'default');  // 输出: "default"
console.log('' ?? 'default');  // 输出: ""

console.log(false || true);    // 输出: true
console.log(false ?? true);    // 输出: false

```

## 20. this 指向问题

```javascript
const obj = {
  fn1: () => {
    // this 指向定义时所在的对象，即 window
    // 如果 new 调用，则报错
    console.log(this);
  },
  fn2: function () {
    console.log(this);
  },
};

obj.fn1(); // Window {...}
obj.fn2(); // { fn1: [Function: fn1], fn2: [Function: fn2] }

const x = new obj.fn1(); //  Uncaught TypeError: obj.fn1 is not a constructor
const y = new obj.fn2(); // fn2 {}

```

## 21. cookie 的有效期设置为 0 会怎么样？

### 21.1. 会话 Cookie（Session Cookie）

当你将 cookie 的有效期设置为 0 时，实际上是创建了一个会话 cookie（session cookie）。这种 cookie 没有明确的过期时间。

### 21.2. 浏览器关闭时删除

会话 cookie 会在用户关闭浏览器时自动删除。这意味着当用户结束当前的浏览会话（关闭所有浏览器窗口）时，这个 cookie 就会被清除。

### 21.3. 生命周期

- 在浏览器打开期间，这个 cookie 会一直存在并可用。
- 只要浏览器保持打开状态，**即使用户关闭了特定的标签页或窗口，cookie 仍然有效**。

### 21.4. 用途

会话 cookie 通常用于**存储临时信息**，比如：
- 用户的登录状态
- 购物车内容
- 用户在网站上的临时设置或偏好

### 21.5. 设置方法

在 JavaScript 中，你可以这样设置一个会话 cookie：

```javascript
document.cookie = "username=John Doe; path=/";
```

注意这里没有设置 `expires` 或 `max-age` 属性。

### 21.6. 与持久 Cookie 的区别

- 持久 cookie 有明确的过期时间，会被保存在用户的**硬盘上**。
- 会话 cookie 只存在于**内存**中，浏览器关闭后就会消失。

### 21.7. 安全考虑

- 会话 cookie 相对更安全，因为它们不会长期存储在用户的设备上。
- 但它们仍然可能被中间人攻击或跨站脚本（XSS）攻击利用。

### 21.8. 浏览器行为差异

不同的浏览器可能对会话 cookie 有略微不同的处理方式。例如，某些浏览器的"恢复会话"功能可能会在浏览器重新打开时恢复会话 cookie。

### 21.9. 无法保证精确的生命周期

由于会话 cookie 的生命周期依赖于用户何时关闭浏览器，因此无法精确控制它的有效期。

### 21.10. 不影响已存在的同名持久 Cookie

如果已经存在一个同名的持久 cookie，设置有效期为 0 的新 cookie 不会覆盖或删除原有的持久 cookie。

### 21.11. 总结

将 cookie 的有效期设置为 0 实际上是创建了一个会话 cookie，它在浏览器会话期间有效，并在用户关闭浏览器时自动删除。这种 cookie 适用于需要临时存储信息但不希望长期保留在用户设备上的场景。

## 22. 下面代码的输出是？

```javascript
console.log(typeof typeof typeof null);

console.log(typeof console.log(1));

```

### 22.1. 分析

```javascript
// 分析
// 1. typeof null 返回的是 "object"
// 2. typeof typeof null：即 typeof "object" 返回的是 "string"
// 3. typeof typeof typeof null：即 typeof "string" 返回的 "string"
console.log(typeof typeof typeof null);

// 分析：
// 1. console.log(1) 返回的是 undefined
// 2. typeof undefined 返回的是 "undefined"
console.log(typeof console.log(1));

// 所以 output:
// string
// 1  因为 console.log(1) 会执行的，输出 1，然后返回 undefined
// undefined

```

## 23. 前端浏览器实现截图功能主要有几种实现方式

### 23.1. HTML5 Canvas 截图

这是最基本和常用的方法，主要使用 Canvas API 来实现。

```javascript hl:21
// 基本实现步骤
function captureElement(element) {
    // 1. 创建 canvas
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    
    // 2. 设置 canvas 尺寸
    canvas.width = element.offsetWidth;
    canvas.height = element.offsetHeight;
    
    // 3. 将目标元素绘制到 canvas
    const html2canvas = new html2canvas(element);
    
    // 4. 转换为图片
    const image = canvas.toDataURL('image/png');
    
    // 5. 下载或使用图片
    const link = document.createElement('a');
    link.download = 'screenshot.png';
    link.href = image;
    link.click();
}
```

### 23.2. MediaDevices API (屏幕录制)

用于捕获屏幕内容，可以实现更复杂的屏幕截图功能。

```javascript
async function captureScreen() {
    try {
        // 1. 请求屏幕捕获权限
        const stream = await navigator.mediaDevices.getDisplayMedia({
            video: {
                mediaSource: 'screen'
            }
        });
        
        // 2. 创建 video 元素
        const video = document.createElement('video');
        video.srcObject = stream;
        
        // 3. 等待视频加载
        await new Promise(resolve => video.onloadedmetadata = resolve);
        video.play();
        
        // 4. 创建 canvas 并截图
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0);
        
        // 5. 停止所有轨道
        stream.getTracks().forEach(track => track.stop());
        
        // 6. 转换为图片
        return canvas.toDataURL('image/png');
    } catch (err) {
        console.error('Error: ' + err);
    }
}
```

### 23.3. 使用第三方库 html2canvas

html2canvas 是一个流行的库，可以将 DOM 元素转换为 canvas。

```javascript
import html2canvas from 'html2canvas';

function captureElementWithHtml2canvas(element) {
    html2canvas(element, {
        // 配置选项
        useCORS: true,            // 处理跨域图片
        scale: window.devicePixelRatio, // 设备像素比
        logging: true,            // 启用日志
        allowTaint: true,         // 允许加载跨域图片
        backgroundColor: null     // 背景色
    }).then(canvas => {
        // 转换为图片
        const image = canvas.toDataURL('image/png');
        // 处理图片...
    });
}
```

### 23.4. 浏览器扩展 API

如果是开发浏览器扩展，可以使用浏览器提供的截图 API：

```javascript
// Chrome 扩展示例
chrome.tabs.captureVisibleTab(null, {}, function(image) {
    // image 是 base64 编码的图片数据
});
```

### 23.5. 实现中需要注意的问题

#### 23.5.1. 跨域资源处理

```javascript hl:3
// 处理跨域图片
const img = new Image();
img.crossOrigin = 'anonymous';
img.src = url;
```

#### 23.5.2. 高分辨率屏幕支持

```javascript
// 考虑设备像素比
canvas.width = element.offsetWidth * window.devicePixelRatio;
canvas.height = element.offsetHeight * window.devicePixelRatio;
context.scale(window.devicePixelRatio, window.devicePixelRatio);
```

#### 23.5.3. 异步内容处理

```javascript
// 等待图片加载完成
async function waitForImages(element) {
    const images = element.getElementsByTagName('img');
    const promises = Array.from(images).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
            img.onload = resolve;
            img.onerror = resolve;
        });
    });
    await Promise.all(promises);
}
```

#### 23.5.4. 性能优化
```javascript
// 使用 requestAnimationFrame 优化性能
requestAnimationFrame(() => {
    // 执行截图操作
});
```

### 23.6. 常见应用场景

1. 网页内容分享
2. 生成缩略图
3. 页面bug截图反馈
4. 生成图片报告
5. 保存canvas绘制内容

### 23.7. 总结

前端实现截图功能主要依赖：
- Canvas API 进行图像处理
- MediaDevices API 捕获屏幕内容
- 第三方库提供的功能
- 浏览器扩展 API


## 24. 下面代码的执行顺序

```javascript hl:12
var a = 3;
function c() {
  alert(a);
}

(function () {
  // 立即执行函数的变量只在函数内部有效
  // 这里的 a 是局部变量
  // 但是 c 函数中的 a 是全局变量
  // 所以 c 函数中的 a 从全局变量中取值
  var a = 4;
  c(); // 3
})();
```

## 25. 浏览器缓存的优先级

![图片&文件](./files/20241111-45.png)

## 26. promise.finnly 实现

![图片&文件](./files/20241111-46.png)


## 27. promise then 的第二个参数和 catch 的区别是什么？


### 27.1. 错误捕获范围

1. `.then(onFulfilled, onRejected)` 的第二个参数 (onRejected):
	- 只能捕获在当前 Promise 对象中发生的错误。
	- 不能捕获 onFulfilled 函数（第一个参数）中抛出的错误。
2. `.catch(onRejected)`:
	- 可以捕获在链式调用中**前面所有 Promise 产生的错误**。
	- 也可以捕获前面 `.then()` 中 onFulfilled 函数里抛出的错误。

### 27.2. 代码示例

```javascript hl:6,20
// 使用 .then() 的第二个参数
promise
  .then(
    result => {
      console.log(result);
      throw new Error('Error in onFulfilled'); // 这个错误不会被捕获
    },
    error => {
      console.error('Error caught by second argument of then:', error);
    }
  );

// 使用 .catch()
promise
  .then(result => {
    console.log(result);
    throw new Error('Error in onFulfilled');
  })
  .catch(error => {
    console.error('Error caught by catch:', error); // 这里可以捕获上面抛出的错误
  });
```

### 27.3. 链式调用中的行为

1. `.then()` 的第二个参数：
	- 在链式调用中，每个 `.then()` 都可以有自己的错误处理函数。
	- 如果一个 `.then()` 的第二个参数处理了错误，错误不会继续传播。
1. `.catch()`:
	- 通常放在 Promise 链的末尾，可以捕获整个链中的任何错误。
	- 更符合"先执行所有操作，最后统一处理错误"的模式。

### 27.4. 代码可读性

- `.catch()` 通常提供更好的代码可读性，特别是在处理多个 Promise 的链式调用时。
- 使用 `.catch()` 可以将错误处理逻辑集中在一处，而不是分散在每个 `.then()` 中。

### 27.5. 示例对比

```javascript
// 使用 .then() 的第二个参数
somePromise
  .then(result => processResult(result), error => handleError(error))
  .then(newResult => furtherProcess(newResult), error => handleAnotherError(error));

// 使用 .catch()
somePromise
  .then(result => processResult(result))
  .then(newResult => furtherProcess(newResult))
  .catch(error => handleAllErrors(error));
```

### 27.6. 最佳实践

- 通常推荐使用 `.catch()` 而不是 `.then()` 的第二个参数，除非你有特定原因需要在某个特定的 Promise 中单独处理错误。
- 在复杂的 Promise 链中，可以在关键点使用 `.catch()`，然后继续链式调用，这样可以进行更细粒度的错误控制。

### 27.7. 注意事项

- `.catch()` 本身返回一个新的 Promise，如果 `.catch()` 中没有抛出错误，后续的 `.then()` 仍会被调用。
- 如果在 `.catch()` 中抛出新的错误，可以被后续的 `.catch()` 捕获。

### 27.8. 总结：

- `.then()` 的第二个参数适用于需要对特定 Promise 的错误进行精确处理的情况。
- `.catch()` 更适合全局错误处理，提供了更好的链式调用错误处理能力和代码可读性。
- 在实际开发中，`.catch()` 使用更为普遍，因为它更灵活且能处理更广泛的错误情况。

![图片&文件](./files/20241111-47.png)


## 28. this 的问题

```javascript hl:5,8,14
var name = 123;
var obj = {
  name: 456,
  print: function () {
    // 这里的 this 指向 obj，作为对象的方法被调用
    console.log(this.name);
    function a() {
      console.log(this.name);
    }
    a();
  },
};

// 普通函数的 this 指向取决于在何处被调用，这里 a 函数是在全局作用域被调用的，所以 this 指向全局对象
obj.print(); // 123

```

## 29. generator 函数是如何做到中断和恢复执行的？

### 29.1. 基本原理

Generator 函数的核心机制包括：

1. **函数状态保存**：Generator 函数可以保存其内部状态。
2. **yield 关键字**：用于暂停函数执行并可能返回一个值。
3. **迭代器对象**：Generator 函数返回一个迭代器对象，用于控制函数的执行。

### 29.2. 详细实现机制

#### 29.2.1. 函数对象和执行上下文

当定义一个 Generator 函数时，JavaScript 引擎会创建一个特殊的函数对象。这个对象包含：

- 函数体代码
- 闭包变量
- 一个内部指针，指向当前的执行位置

#### 29.2.2. yield 语句的作用

`yield` 语句在 Generator 函数中起到关键作用：

- 它标记了函数的暂停点
- 可以返回一个值给调用者
- 保存当前的执行状态，包括局部变量和表达式的值

#### 29.2.3. 迭代器对象

当调用 Generator 函数时，它不会立即执行函数体，而是返回一个迭代器对象。这个对象有一个 `next()` 方法，用于控制 Generator 的执行：

```javascript
function* exampleGenerator() {
    yield 1;
    yield 2;
    return 3;
}

const gen = exampleGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: true }
```

#### 29.2.4. 执行过程

1. **初始化**：调用 Generator 函数创建迭代器对象，但不执行函数体。
2. **执行**：每次调用 `next()` 方法，函数从当前位置执行到下一个 `yield` 语句。
3. **暂停**：遇到 `yield` 时，函数执行暂停，保存当前状态，并返回 `yield` 后的表达式值。
4. **恢复**：下一次调用 `next()` 时，从上次暂停的位置继续执行。

### 29.3. 内部实现细节

虽然具体实现可能因 JavaScript 引擎而异，但基本原理如下：

#### 29.3.1. 状态机

Generator 函数内部实际上是一个状态机，每个 `yield` 语句对应一个状态：

```javascript
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}

// 可以被概念化为：
function generatorFunction() {
    let state = 0;
    return {
        next() {
            switch (state) {
                case 0:
                    state = 1;
                    return { value: 1, done: false };
                case 1:
                    state = 2;
                    return { value: 2, done: false };
                case 2:
                    state = 3;
                    return { value: 3, done: false };
                case 3:
                    return { value: undefined, done: true };
            }
        }
    };
}
```

#### 29.3.2. 闭包和上下文保存

Generator 使用闭包来保存函数的执行上下文，包括局部变量和执行位置：

```javascript
function* counter() {
    let count = 0;
    while (true) {
        yield ++count;
    }
}

// 可以被概念化为：
function counter() {
    let count = 0;
    return {
        next() {
            count++;
            return { value: count, done: false };
        }
    };
}
```

#### 29.3.3. 异步操作处理

Generator 特别适合处理异步操作，通过与 Promise 结合使用：

```javascript
function* fetchData() {
    try {
        const response = yield fetch('https://api.example.com/data');
        const data = yield response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

function runGenerator(genFn) {
    const gen = genFn();
    function step(result) {
        if (result.done) return result.value;
        return Promise.resolve(result.value).then(
            value => step(gen.next(value)),
            error => step(gen.throw(error))
        );
    }
    return step(gen.next());
}

runGenerator(fetchData);
```

### 29.4. 性能考虑

- Generator 函数的中断和恢复操作比普通函数调用要慢一些。
- 但在处理大量数据或复杂异步流程时，Generator 可以提供更好的内存效率和代码组织。

### 29.5. 总结

Generator 函数通过巧妙的状态管理和闭包机制，实现了函数执行的中断和恢复。这种机制为处理复杂的同步和异步流程提供了强大而灵活的工具，尽管在某些情况下可能会带来轻微的性能开销。理解 Generator 的工作原理有助于更好地利用这一强大特性，特别是在处理异步操作和复杂数据流时。

## 30. 列举浏览器的几个宏任务和微任务

- dom 事件
- script 标签的加载与执行

![图片&文件](./files/20241111-48.png)


## 31. 说说 toPrimitive 的理解

`toPrimitive` 是 JavaScript 中一个重要的内部操作，用于将对象转换为原始值

### 31.1. 基本概念

`Symbol.toPrimitive` 是一个内置的 Symbol 值，它指定了一个方法，该方法将对象转换为原始值。当需要将对象转换为原始值时，JavaScript 引擎会自动调用这个方法。

### 31.2. 转换规则

对象转换为原始值时有三种模式（`hint`）：

1. **"number"** - 期望得到一个数字
2. **"string"** - 期望得到一个字符串
3. **"default"** - 没有明确期望，由对象自行决定

### 31.3. 实现示例

```javascript
// 自定义对象的 toPrimitive 行为
const obj = {
    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case 'number':
                return 42;
            case 'string':
                return 'hello';
            case 'default':
                return 'default';
            default:
                throw new Error('Invalid hint');
        }
    }
};

// 测试不同转换场景
console.log(+obj);          // 42 (number hint)
console.log(`${obj}`);      // "hello" (string hint)
console.log(obj + '');      // "default" (default hint)
```

### 31.4. 默认转换过程

如果没有实现 `Symbol.toPrimitive`，JavaScript 会按照以下顺序尝试转换：

#### 31.4.1. 对于 hint "string":

1. 先调用 `toString()`
2. 如果返回的不是原始值，则调用 `valueOf()`
3. 如果还不是原始值，则抛出 TypeError

```javascript
const obj = {
    toString() {
        return "Custom String";
    },
    valueOf() {
        return 100;
    }
};

console.log(String(obj)); // "Custom String"
```

#### 31.4.2. 对于 hint "number" 或 "default":

1. 先调用 `valueOf()`
2. 如果返回的不是原始值，则调用 `toString()`
3. 如果还不是原始值，则抛出 TypeError

```javascript
const obj = {
    toString() {
        return "Custom String";
    },
    valueOf() {
        return 100;
    }
};

console.log(Number(obj)); // 100
```

### 31.5. 常见使用场景

#### 31.5.1. 数学运算

```javascript
const obj = {
    value: 42,
    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
            return this.value;
        }
        return null;
    }
};

console.log(obj * 2); // 84
```

#### 31.5.2. 字符串拼接

```javascript
const obj = {
    firstName: 'John',
    lastName: 'Doe',
    [Symbol.toPrimitive](hint) {
        if (hint === 'string') {
            return `${this.firstName} ${this.lastName}`;
        }
        return null;
    }
};

console.log(`Name: ${obj}`); // "Name: John Doe"
```

### 31.6. 日期对象示例

Date 对象是一个很好的内置 toPrimitive 实现示例：

```javascript
const date = new Date();

// string hint
console.log(String(date)); // 当前日期的字符串表示

// number hint
console.log(+date); // 时间戳

// default hint
console.log(date + ''); // 当前日期的字符串表示
```



### 31.9. 总结

![图片&文件](./files/20241111-49.png)

