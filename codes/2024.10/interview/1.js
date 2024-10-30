class MyPromise {
  // 定义三种状态
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";

  // 构造函数：executor是一个函数，函数接收两个参数，分别是resolve和reject
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
        this.onFulfilledCallbacks.forEach((fn) => fn());
      }
    };

    // reject 函数
    const reject = (reason) => {
      if (this.status === MyPromise.PENDING) {
        this.status = MyPromise.REJECTED;
        this.reason = reason;
        // 执行所有失败回调
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };

    try {
      // 立即执行executor，传入上面定义好的 resolve 和 reject
      executor(resolve, reject);
    } catch (error) {
      // 发生异常时执行reject
      reject(error);
    }
  }

  // then 方法: 接收两个参数，onFulfilled 和 onRejected，分别是成功和失败的回调
  then(onFulfilled, onRejected) {
    // 参数校验，确保一定是函数
    // 如果不是函数，需要创建一个函数来返回原因或者值
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };

    // 返回新的Promise以实现链式调用
    const promise2 = new MyPromise((resolve, reject) => {
      // 如果状态是fulfilled，执行onFulfilled
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

      // 如果状态是rejected，执行onRejected
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
      // 如果状态是pending，将回调存储起来
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
