
# JavaScript 异步编程：Promise 专题篇二




## 目录
<!-- toc -->
 ## 1. 实现 mergePromise 函数，把传进去的数组按顺序先后执行，并且把返回的数据先后放到数组 data 中 

> 好像之前面试碰到过

区别于 Promise.all，Promise.all 是并行执行，而这里需要**串行执行**，注意下面使用 `promise.resolve` 包装了

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
```

使用 `for - of`

```javascript
/**
 * 串行执行 Promise 任务的函数
 * @param {Array<() => Promise>} tasks - Promise 任务数组
 * @returns {Promise<Array>} 所有任务的结果数组
 */
async function serialPromise(tasks) {
  const results = [];

  for (const task of tasks) {
    try {
      const result = await task();
      results.push(result);
    } catch (error) {
      console.error("Task failed:", error);
      throw error;
    }
  }

  return results;
}

const tasks = [
  () => new Promise(...),
  () => new Promise(...),
  () => new Promise(...)
];

const results = await serialPromise(tasks);
```

## 2. promise中 then 的返回值情况分析

所以上面那题，**foreach 串行执行的道理了吗**？

```javascript hl:6,17,28,45,61,65
// 1. 返回普通值
console.log('=== 示例1: 返回普通值 ===');
Promise.resolve(1)
  .then(value => {
    console.log('第一个then:', value); // 1
    return 2; // 返回普通值
  })
  .then(value => {
    console.log('第二个then:', value); // 2
  });

// 2. 返回 Promise
console.log('\n=== 示例2: 返回 Promise ===');
Promise.resolve('开始')
  .then(value => {
    console.log('第一个then:', value); // "开始"
    return Promise.resolve('Promise的结果');
  })
  .then(value => {
    console.log('第二个then:', value); // "Promise的结果"
  });

// 3. 返回 thenable 对象
console.log('\n=== 示例3: 返回 thenable 对象 ===');
Promise.resolve('开始')
  .then(value => {
    console.log('第一个then:', value); // "开始"
    return {
      then: function(resolve) {
        setTimeout(() => {
          resolve('thenable对象的结果');
        }, 1000);
      }
    };
  })
  .then(value => {
    console.log('第二个then:', value); // "thenable对象的结果"
  });

// 4. 抛出错误
console.log('\n=== 示例4: 抛出错误 ===');
Promise.resolve('开始')
  .then(value => {
    console.log('第一个then:', value); // "开始"
    throw new Error('发生错误');
  })
  .then(
    value => {
      console.log('第二个then:', value); // 不会执行
    },
    error => {
      console.log('错误处理:', error.message); // "发生错误"
    }
  );

// 5. 链式调用中的值传递
console.log('\n=== 示例5: 链式调用中的值传递 ===');
Promise.resolve('初始值')
  .then(value => {
    console.log('第一个then:', value); // "初始值"
    return value + ' -> 追加1';
  })
  .then(value => {
    console.log('第二个then:', value); // "初始值 -> 追加1"
    return value + ' -> 追加2';
  })
  .then(value => {
    console.log('第三个then:', value); // "初始值 -> 追加1 -> 追加2"
  });
```

## 3. Promise 相关问题

### 3.1. finnaly：无论失败或者成功都会执行，且**不接受结果**

### 3.2. 注意顺序

![图片&文件](./files/20241112-14.png)

### 3.3. reject 包在 try 里面也会被捕获到

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

#### 3.3.1. 没有捕获会报错

![图片&文件](./files/20241112-15.png)

### 3.4. Promise 未捕获的错误并不会中断代码执行

```javascript
async function a1() {
  await a2();
  console.log("a1");

  return "a1 success!";
}

async function a2() {
  return new Promise((resolve, reject) => {
    console.log("a2");
    reject("err");
  });
}

a1().then((res) => {
  console.log(res);
});

console.log("test...");  // 正常执行，并不会因为 Promise的错误而中断执行

```

### 3.5. then 和 .catch 返回的值不能使 promise 对象本身，否则会死循环

![图片&文件](./files/20241112-16.png)

## 4. await 没报错就会往下走，别和 promise 搞混了

![图片&文件](./files/20241112-18.png)

因为 如果 **async 函数没有显式的返回值，它仍然会返回一个 Promise**，具体行为如下：
 
```javascript hl:5,8,13,18
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

### 4.1. 下面的代码就一直会 pengding 住了

![图片&文件](./files/20241112-19.png)



## 5. 如何顺序执行 10 个任务

- 方法一：for/for-of - await
- 方法二：reduce，两个参数
	- prev task（累加值）
	- current task

## 6. 如何解决 promise.all 有一个任务报错了，其他任务结果都抛弃了？

- 方案一：promise.allSetteled
- 方案二：容错下，别让 `promise` 报错
- 方案三：
	- ![图片&文件](./files/20241112-11.png)



## 7. promise.finally 实现

- p = this.contrucotor

>  即再加一个 `then` 而已

![图片&文件](./files/20241111-46.png)

## 8. promise then 的第二个参数和 catch 的区别是什么？

### 8.1. 错误捕获范围

1. `.then(onFulfilled, onRejected)` 的第二个参数 (`onRejected`):
	- 只能捕获在当前 `Promise` 对象中发生的错误。
	- 不能捕获 onFulfilled 函数（第一个参数）中抛出的错误。
2. `.catch(onRejected)`:
	- 可以捕获在链式调用中**前面所有 Promise 产生的错误**。
	- 也可以捕获前面 `.then()` 中 onFulfilled 函数里抛出的错误。

### 8.2. 代码示例

```javascript hl:6,20
// 使用 .then() 的第二个参数
promise
  .then(
    result => {
      console.log(result);
      throw new Error('Error in onFulfilled'); // 这个错误 不会被捕获
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

### 8.3. 链式调用中的行为

1. `.then()` 的第二个参数：
	- 在链式调用中，每个 `.then()` 都可以有自己的错误处理函数。
	- 如果一个 `.then()` 的第二个参数处理了错误，错误不会继续传播。
1. `.catch()`:
	- 通常放在 Promise 链的末尾，可以捕获整个链中的任何错误。
	- 更符合"**先执行所有操作，最后统一处理错误**"的模式。

### 8.4. 代码可读性

- `.catch()` 通常提供更好的代码可读性，特别是在处理多个 Promise 的链式调用时。
- 使用 `.catch()` 可以将错误处理逻辑集中在一处
	- 而不是分散在每个 `.then()` 中。

### 8.5. 示例对比

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

### 8.6. 最佳实践

- 通常推荐使用 `.catch()` 而不是 `.then()` 的第二个参数
	- 除非你有特定原因需要在某个特定的 Promise 中单独处理错误。
- 在复杂的 Promise 链中，可以在关键点使用 `.catch()`，然后继续链式调用，这样可以进行更细粒度的错误控制。

### 8.7. 注意事项

- `.catch()` 本身返回一个新的 Promise，如果 `.catch()` 中没有抛出错误，后续的 `.then()` 仍会被调用。
- 如果在 `.catch()` 中抛出新的错误，可以被后续的 `.catch()` 捕获。
	- catch 后面还是会被新的 catch 再捕获

### 8.8. 总结

- `.then()` 的第二个参数适用于需要对特定 `Promise` 的错误进行**精确处理的情况**。
- `.catch()` 更适合全局错误处理，提供了更好的链式调用错误处理能力和代码可读性。
- 在实际开发中，`.catch()` 使用更为普遍，因为它更灵活且能处理更广泛的错误情况。

![图片&文件](./files/20241111-47.png)
