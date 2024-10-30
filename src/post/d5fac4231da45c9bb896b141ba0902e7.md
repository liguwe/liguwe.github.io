
# 常见面试题

`#前端面试` 


## 目录
<!-- toc -->
 ## 1. 如何实现吸顶效果 

![图片&文件](./files/20241028-21.png)

## 2. `Element.getBoundingClientRect()` 的 6 个属性

返回相对视口的 6 个属性，如下图：

![图片&文件](./files/20241028-20.png)

## 3. 实现模糊搜索结果的关键词高亮显示

```javascript hl:3,5
let value = "北京";
let str = "北京谢谢你，北京再见";
// 使用 new RegExp() 创建正则表达式对象,因为 value 是变量
let reg = new RegExp(`\(${value}\)`, "g");
// 这是关键，第二个参数是字符串
let s = str.replace(reg, "<i>$1</i>");
console.log(s); 
// <i>北京</i>谢谢你，<i>北京</i>再见

```

## 4. 如何实现 `(5).add(3).minus(2)`

```javascript hl:5,11
Number.prototype.add = function (i) {
  if (typeof i !== "number") {
    throw new Error("请输入数字～");
  }
  return this + i;
};
Number.prototype.minus = function (i) {
  if (typeof i !== "number") {
    throw new Error("请输入数字～");
  }
  return this + i;
};

let s = (5).add(3).minus(2);

console.log(s);

```

## 5. 实现下面的诉求（`==`）

```javascript
/**
 * 下面的代码什么情况下打印1
 * var a = ?; 能保证下面log 出 1
 * if(a == 1 && a == 2 && a == 3){
 *  	console.log(1);
 * }
 * */

```

### 5.1. 使用 valueOf 方法

```javascript
var a = {
    value: 0,
    valueOf: function() {
        return ++this.value;
    }
};

if(a == 1 && a == 2 && a == 3) {
    console.log(1); // 会打印 1
}
```

### 5.2. 使用 toString 方法

```javascript
var a = {
    value: 0,
    toString: function() {
        return ++this.value;
    }
};

if(a == 1 && a == 2 && a == 3) {
    console.log(1); // 会打印 1
}
```

### 5.3. 使用 getter (Object.defineProperty)

```javascript hl:2
var value = 0;
Object.defineProperty(window, 'a', {
    get: function() {
        return ++value;
    }
});

if(a == 1 && a == 2 && a == 3) {
    console.log(1); // 会打印 1
}
```

### 5.4. 使用数组和 toString

```javascript hl:2
var a = [1,2,3];
a.toString = a.shift;

if(a == 1 && a == 2 && a == 3) {
    console.log(1); // 会打印 1
}
```

### 5.5. 使用 Symbol.toPrimitive

```javascript
var a = {
    [Symbol.toPrimitive]: function(hint) {
        if (this.value === undefined) {
            this.value = 0;
        }
        return ++this.value;
    }
};

if(a == 1 && a == 2 && a == 3) {
    console.log(1); // 会打印 1
}
```

### 5.6. 使用 Proxy

```javascript
let value = 0;
var a = new Proxy({}, {
    get: function(target, property) {
        return () => ++value;
    }
});

if(a == 1 && a == 2 && a == 3) {
    console.log(1); // 会打印 1
}
```

原理解释：

1. 这些方法都利用了 JavaScript 的类型转换机制。当使用 `==` 进行比较时，如果操作数类型不同，JavaScript 会进行类型转换。
2. 在进行类型转换时，JavaScript 会按以下顺序调用对象的方法：
   - 首先检查 `Symbol.toPrimitive`
   - 然后是 `valueOf()`
   - 最后是 `toString()`
3. 每次进行比较时，都会触发这些转换方法，我们可以在这些方法中返回递增的值。
4. getter 方法的实现利用了属性访问时会调用 get 方法的特性。
5. Proxy 方案利用了代理对象可以拦截各种操作的特性。

### 5.7. 注意事项

- 这些实现都是一些技巧性的代码，在实际开发中**应该避免使用**
- 这类代码可能会导致代码难以理解和维护
- 主要用于理解 JavaScript 的`类型转换机制`和对象属性访问机制

## 6. 实现下面的诉求（`===`）

```javascript
/**
 * 下面的代码什么情况下打印1
 * var a = ?; 能保证下面log 出 1
 * if(a === 1 && a === 2 && a === 3){
 *  	console.log(1);
 * }
 * */

```

如果使用严格相等 `===`，情况会更加受限，因为 `===` 不会进行类型转换，它要求类型和值都相等。不过仍然有几种方法可以实现：

### 6.1. 使用 Object.defineProperty 定义 getter

```javascript
let value = 0;
Object.defineProperty(window, 'a', {
    get: function() {
        return ++value;
    }
});

if(a === 1 && a === 2 && a === 3) {
    console.log(1); // 会打印 1
}
```

### 6.2. 使用全局变量和 Proxy

```javascript
let value = 0;
const a = new Proxy({}, {
    get: function(target, property) {
        return ++value;
    }
});

if(a === 1 && a === 2 && a === 3) {
    console.log(1); // 会打印 1
}
```

### 6.3. 使用类的 getter

```javascript
class NumberClass {
    constructor() {
        this._value = 0;
    }
    
    get a() {
        return ++this._value;
    }
}

const obj = new NumberClass();
if(obj.a === 1 && obj.a === 2 && obj.a === 3) {
    console.log(1); // 会打印 1
}
```

### 6.4. 使用闭包

```javascript
let getA = (function() {
    let value = 0;
    return function() {
        return ++value;
    }
})();

if(getA() === 1 && getA() === 2 && getA() === 3) {
    console.log(1); // 会打印 1
}
```

## 7. 说说 `Symbol.toPrimitive`

`Symbol.toPrimitive` 从字面意思拆解来看：

1. **Symbol**：
   - 这是 JavaScript 中的一个基本数据类型
   - 用于创建唯一的标识符
   - ES6 引入的新特性
2. **toPrimitive**：
   - "to" 表示转换到
   - "Primitive" 表示`原始值/基本类型`
   - 合起来就是"转换为原始值"

所以 `Symbol.toPrimitive` 字面意思就是"`转换为原始值的符号`"。它是一个内置的 Symbol 值，作为对象的一个属性，用来指定将对象转换为原始值的方法。

在 JavaScript 中，原始值（primitive values）包括：
- 数字（Number）
- 字符串（String）
- 布尔值（Boolean）
- undefined
- null
- Symbol
- BigInt

使用示例：
```javascript
// Symbol.toPrimitive 的基本使用
const obj = {
    // 定义对象转换为原始值的行为
    [Symbol.toPrimitive](hint) {
        console.log(`Converting to ${hint}`);
        switch(hint) {
            case 'number':  // 需要转换为数字时
                return 42;
            case 'string':  // 需要转换为字符串时
                return 'hello';
            default:        // 默认转换行为
                return 'default';
        }
    }
};

// 不同场景下的转换
Number(obj);    // 打印 "Converting to number" 返回 42
String(obj);    // 打印 "Converting to string" 返回 "hello"
obj + '';       // 打印 "Converting to default" 返回 "default"
```

hint 参数可能的值：
1. `"number"` - 当需要转换为数字时
2. `"string"` - 当需要转换为字符串时
3. `"default"` - 当转换可以是任意类型时

```javascript
// 实际应用示例
const date = {
    day: 1,
    month: 12,
    year: 2024,
    [Symbol.toPrimitive](hint) {
        switch(hint) {
            case 'number':
                // 转换为时间戳
                return new Date(this.year, this.month - 1, this.day).getTime();
            case 'string':
                // 转换为日期字符串
                return `${this.year}-${this.month}-${this.day}`;
            default:
                // 默认行为
                return `${this.day}/${this.month}/${this.year}`;
        }
    }
};

console.log(+date);         // 时间戳
console.log(`${date}`);     // "2024-12-1"
console.log(date + '');     // "1/12/2024"
```

总结：
1. Symbol.toPrimitive 是一个特殊的 Symbol 值
2. 它用作对象的方法名，定义对象转换为原始值的行为
3. 这个名字直观地表明了其功能：将对象转换（to）为原始值（primitive）
4. 它是 JavaScript 类型转换系统中的一个重要部分

## 8. 编程题：请实现一个函数，输入为数据 data 和 id，输出为从根节点到 id 的完整路径

本质是`多叉树`的遍历，找到一条路径即可

```javascript
const data = [
  {
    id: "1",
    name: "test1",
    children: [
      {
        id: "11",
        name: "test11",
        children: [
          {
            id: "111",
            name: "test111",
          },
          {
            id: "112",
            name: "test112",
          },
        ],
      },
      {
        id: "12",
        name: "test12",
        children: [
          {
            id: "121",
            name: "test121",
          },
          {
            id: "122",
            name: "test122",
          },
        ],
      },
    ],
  },
];


```

### 8.1. 实现

```javascript hl:10
// 请实现一个函数，输入为数据 data 和 id，输出为从根节点到 id 的完整路径
function findPath(data, id) {
  const res = [];

  function dfs(data, id, path) {
    for (let i = 0; i < data.length; i++) {
      // 选择
      path.push(data[i].id);
      if (data[i].id === id) {
        res.push(...path); // 浅拷贝下，否则有问题
        return;
      }
      if (data[i].children) {
        dfs(data[i].children, id, path);
      }
      // 撤销选择
      path.pop();
    }
  }

  dfs(data, id, []);

  return res;
}

console.log(findPath(data, "122")); // ["1", "12", "122"]
console.log(findPath(data, "111")); // ["1", "11", "111"]
```

## 9. 关于异步的一些细节点

- `then(console.log(1))` ， 表达式会同步执行
- 如果没有 `resolve`，永远不会往下执行
- 注意层级
	- ![图片&文件](./files/20241028-22.png)

如下图：

![图片&文件](./files/20241028-23.png)

- 上面 `7` 不打印，是因为这个参数多余
- `8` 不打印，是因为已经在上面 `catch` 了 

## 10. Promise 的 then 方法接受两个参数

![图片&文件](./files/20241028-24.png)

## 11. promise 里 `return 2` 相等于 `resolve(2)`

```javascript hl:4
Promise.resolve(1)
  .then((res) => {
    console.log(res);
    //  返回 return 2 实际上是包装成了 resolve(2)
    return 2;
  })
  .catch((err) => {
    return 3;
  })
  .then((res) => {
    console.log(res);
  });

```

## 12. 再看一段代码

```javascript hl:4,26
console.log(1);
setTimeout(() => {
  console.log(5);
  // process.nextTick 可是优先级高于 promise 的 then 的
  process.nextTick(() => {
    console.log(7);
  });
  new Promise((resolve) => {
    console.log(6);
    resolve();
  }).then(() => {
    console.log(8);
  });
});
new Promise((resolve) => {
  console.log(2);
  resolve();
}).then(() => {
  console.log(3);
});

process.nextTick(() => {
  console.log(4);
});

// 这里有两个settimeout ，完全分开吧，虽然时间都是 0ms
setTimeout(() => {
  console.log(9);
  // :::: nextTick 可是高于 promise 的
  process.nextTick(() => {
    console.log(11);
  });
  new Promise((resolve) => {
    console.log(10);
    resolve();
  }).then(() => {
    console.log(12);
  });
});

```

## 13. 自己实现 Promise：setTimeout 模拟

```javascript hl:5,34,56
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

// 传入参数为一个函数，函数接受两个参数，分别是resolve和reject
function MyPromise(executor) {
  this.state = PENDING;
  this.value = null;
  this.reason = null;
  this.onFulfilledCallbacks = [];
  this.onRejectedCallbacks = [];

  const resolve = (value) => {
    if (this.state === PENDING) {
      this.state = FULFILLED;
      this.value = value;
      this.onFulfilledCallbacks.forEach((fun) => {
        fun();
      });
    }
  };

  const reject = (reason) => {
    if (this.state === PENDING) {
      this.state = REJECTED;
      this.reason = reason;
      this.onRejectedCallbacks.forEach((fun) => {
        fun();
      });
    }
  };

  try {
    // 执行传入的函数, 传入上面定义好的resolve和reject
    executor(resolve, reject);
  } catch (reason) {
    reject(reason);
  }
}

// then方法接受两个参数，onFulfilled和onRejected，分别是成功和失败的回调
MyPromise.prototype.then = function (onFulfilled, onRejected) {
  // 如果onFulfilled不是函数，就返回一个函数，这个函数会把值传递下去
  if (typeof onFulfilled != "function") {
    onFulfilled = function (value) {
      return value;
    };
  }
  // 如果onRejected不是函数，就返回一个函数，这个函数会把错误传递下去
  if (typeof onRejected != "function") {
    onRejected = function (reason) {
      throw reason;
    };
  }

  // 返回一个新的Promise, 用于链式调用
  const promise2 = new MyPromise((resolve, reject) => {
    switch (this.state) {
      case FULFILLED:
        // 使用setTimeout来模拟异步
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value);
            resolve(x);
          } catch (reason) {
            reject(reason);
          }
        }, 0);
        break;
      case REJECTED:
        setTimeout(() => {
          try {
            const x = onRejected(this.reason);
            resolve(x);
          } catch (reason) {
            reject(reason);
          }
        }, 0);
        break;
      case PENDING:
        // 如果状态是PENDING，说明是异步操作，将回调函数存起来
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value);
              resolve(x);
            } catch (reason) {
              reject(reason);
            }
          }, 0);
        });
        // 如果状态是PENDING，说明是异步操作，将回调函数存起来
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onRejected(this.reason);
              resolve(x);
            } catch (reason) {
              reject(reason);
            }
          }, 0);
        });
        break;
    }
  });
  return promise2;
};

// catch方法是then方法的语法糖，只传入onRejected
MyPromise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
};

// finally方法无论如何都会执行，不会改变Promise的状态
MyPromise.prototype.finally = function (fn) {
  return this.then(
    (value) => {
      fn();
      return value;
    },
    (reason) => {
      fn();
      throw reason;
    },
  );
};

// resolve方法返回一个成功的Promise
MyPromise.resolve = function (value) {
  return new MyPromise((resolve, reject) => {
    resolve(value);
  });
};

// reject方法返回一个失败的Promise
MyPromise.reject = function (reason) {
  return new MyPromise((resolve, reject) => {
    reject(reason);
  });
};

// all方法接受一个Promise数组，只有所有的Promise都成功才会返回成功，否则返回失败
MyPromise.all = function (promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve([]);
    } else {
      let result = [];
      let index = 0;
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          (data) => {
            result[i] = data;
            if (++index === promises.length) {
              resolve(result);
            }
          },
          (err) => {
            reject(err);
            return;
          },
        );
      }
    }
  });
};

// race方法接受一个Promise数组，只要有一个Promise成功就返回成功，否则返回失败
MyPromise.race = function (promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve();
    } else {
      let index = 0;
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          (data) => {
            resolve(data);
          },
          (err) => {
            reject(err);
            return;
          },
        );
      }
    }
  });
};

```

## 14. 自己实现 Promise ： class

核心特性：
1. 三种状态（PENDING、FULFILLED、REJECTED）
2. 状态只能由 PENDING 转变为 FULFILLED 或 REJECTED，且状态转变不可逆
3. then 方法支持链式调用
4. 使用 `queueMicrotask` 确保回调在微任务中执行

```javascript
class MyPromise {
  static PENDING = 'pending';
  static FULFILLED = 'fulfilled';
  static REJECTED = 'rejected';

  constructor(executor) {
    // 初始状态为 pending
    this.status = MyPromise.PENDING;
    // 存储成功值
    this.value = undefined;
    // 存储失败原因
    this.reason = undefined;
    // 存储成功回调函数
    this.onFulfilledCallbacks = [];
    // 存储失败回调函数
    this.onRejectedCallbacks = [];

    // resolve 函数
    const resolve = (value) => {
      if (this.status === MyPromise.PENDING) {
        this.status = MyPromise.FULFILLED;
        this.value = value;
        // 执行所有成功回调
        this.onFulfilledCallbacks.forEach(fn => fn());
      }
    };

    // reject 函数
    const reject = (reason) => {
      if (this.status === MyPromise.PENDING) {
        this.status = MyPromise.REJECTED;
        this.reason = reason;
        // 执行所有失败回调
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    };

    try {
      // 立即执行executor
      executor(resolve, reject);
    } catch (error) {
      // 发生异常时执行reject
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    // 参数校验，确保一定是函数
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };

    // 返回新的Promise以实现链式调用
    const promise2 = new MyPromise((resolve, reject) => {
      if (this.status === MyPromise.FULFILLED) {
        // 创建微任务
        queueMicrotask(() => {
          try {
            const x = onFulfilled(this.value);
            resolve(x);
          } catch (error) {
            reject(error);
          }
        });
      }

      if (this.status === MyPromise.REJECTED) {
        queueMicrotask(() => {
          try {
            const x = onRejected(this.reason);
            resolve(x);
          } catch (error) {
            reject(error);
          }
        });
      }

      if (this.status === MyPromise.PENDING) {
        // 如果是pending状态，将回调存储起来
        this.onFulfilledCallbacks.push(() => {
          queueMicrotask(() => {
            try {
              const x = onFulfilled(this.value);
              resolve(x);
            } catch (error) {
              reject(error);
            }
          });
        });

        this.onRejectedCallbacks.push(() => {
          queueMicrotask(() => {
            try {
              const x = onRejected(this.reason);
              resolve(x);
            } catch (error) {
              reject(error);
            }
          });
        });
      }
    });

    return promise2;
  }
}

```

### 14.1. 待完善

1. 实现 Promise 的 resolve 和 reject 静态方法
2. 实现 catch 方法
3. 实现 finally 方法
4. 实现 all、race、allSettled 等静态方法
	- Promise.allSettled() 所有异步操作都完成，而不管成功或失败，主要用于移除 `loading` 效果
5. 完善 Promise 解决过程（Promise Resolution Procedure）
6. 处理 thenable 对象

## 15. 包装请求图片为 Promise

```javascript
function loadImageAsync(url) {
  return new Promise(function (resolve, reject) {
    const image = new Image();

    image.onload = function () {
      resolve(image);
    };

    image.onerror = function () {
      reject(new Error("Could not load image at " + url));
    };

    image.src = url;
  });
}

const preloadImage = function (url) {
  return new Promise(function (resolve, reject) {
    const image = new Image();
    image.onload = resolve;
    image.onerror = reject;
    image.src = url;
  });
};

```

## 16. 包装 XHR 为 Promise

```javascript
const getJSON = function (url) {
  const promise = new Promise(function (resolve, reject) {
    const handler = function () {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();
  });

  return promise;
};

getJSON("/posts.json").then(
  function (json) {
    console.log("Contents: " + json);
  },
  function (error) {
    console.error("出错了", error);
  },
);

```

