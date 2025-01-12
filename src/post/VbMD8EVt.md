
# 常见面试题：篇一


`#前端面试`  


## 目录
<!-- toc -->
 ## 1. 打印出 1 - 10000 之间的所有对称数例如 121、1331 等 

```javascript hl:4
let a1 = [...Array(10000).keys()].filter((i) => {
  return (
    String(i).length > 1 &&
    String(i) === i.toString().split("").reverse().join("")
  );
});
```

## 2. 如何快速从一个巨大的数组中随机获取部分元素(不能重复获取)

> [!abstract]
> - 思路
> 	- 生成随机数：`Math.floor(Math.random() * (arr.length - i))`
> 	- 每次都把抽到的数据放到**最后一位**去了，那么下次再抽取时就可能再抽到了


```javascript
/**
 * 洗牌算法：
    1.  生成一个 0 ~ arr.length 的随机数
    2.  交换该随机数位置元素和数组的最后一个元素，并把该随机位置的元素放入结果数组
    3.  生成一个 0 ~ arr.length - 1 的随机数  →   生成一个 0 ~ arr.length - 2 的随机数 ...
    4.  交换该随机数位置元素和数组的倒数第二个元素，并把该随机位置的元素放入结果数组
        依次类推，直至取完所需的100个元素
*/

function shuffle(arr, size) {
  let result = [];
  for (let i = 0; i < size; i++) {
    // 1、生成一个 0 ~ arr.length 的随机数
    const randomIndex = Math.floor(Math.random() * (arr.length - i));
    // 2、 交换该随机数位置元素和数组的最后一个元素，并把该随机位置的元素放入结果数组
    const item = arr[randomIndex];
    arr[randomIndex] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = item;
    result.push(item);
  }
  return result;
}
```

## 3. 数组洗牌

- 从最后一个元素开始
	- `0 - len` 之间的随机数 random
		- random 和 最后一位交换
	- `len--` 
	- 继续交换，直至到第一个元素
		- 从数组中随机选出一个位置，交换，直到第一个元素
	* 关键：`random = Math.floor(length * Math.random());`

```javascript hl:6,7,9,10
let a = [1, 2, 3, 4, 5];
function fn1(arr) {
  let len = arr.length - 1;
  // 倒着遍历
  // 这里是大于 -1
  while (len > -1) {
    let random = Math.floor(Math.random() * len);
    // 和最后一个位置，交互
    [arr[random], arr[len]] = [arr[len], arr[random]];
    len--;
  }
  console.log(arr);
  return arr;
}
fn1(a);
fn1(a);
fn1(a);
fn1(a);
fn1(a);
```

## 4. 统计 1 ~ n 整数中出现 1 的次数

- 思路 1：
	- 正常`split('')` 转成数组遍历计数
- 思路 2：
	- 直接使用 `match` 匹配正则， `"11112111".match(/1/g).length`

## 5. 数组扁平化

- 方法1： 
	- 原生方法：`arr.flat(Infinity)`
- 方法2： 数组
	- `toString` 
	- `split(',')`
	- 然后 `.map(Number)`
- 方法3：
	- 遍历的方法，之前还写错了，这个都写错了，一定要用一个全局变量放在闭包函数里


```javascript
let a = [1, [2, 3, [4, [6, [7]]]]];
function flat(arr) {
  let res = [];
  function fn(a) {
    for (let item of a) {
      if (Array.isArray(item)) {
        fn(item);
      } else {
        res.push(item);
      }
    }
  }
  fn(arr);
  return res;
}
console.log(flat(a));
```

## 6. 实现一个千分位

- **方法1：**
	- 正则 `'10000000000'.replace(/(\d)(?=(\d{3})+$)/g, '$1,')`
- 方法 2：
	- `Number(12121323232323).toLocaleString()`
- 方法3：
	- 使用遍历，转成数组，再两次`reverse` 做不同的事情

## 7. rgb 转成 16 进制

- 从 rgb(255, 255, 255) 中提取出 r=255 、 g=255 、 b=255
- 将 r 、 g 、 b 转换为十六进制，不足两位则补零
	- 转十六进制 ：`toString(16)`
	- 不足两位补 `0` 

## 8. opacity:0 的 注意事项

- `opacity:0` **并不等于之前理解的** `display:none`，搞错了亲
- `opacity:0` 时也能**点击**

## 9. 实现map、filter、push等方法

- map 写成 `fn(this,i,this)`

## 10. 查找频率出现最高的单词

- 先通过 `s.match(/[a-z]+/g)` 匹配出所有的单词数组 `wordlist`
- `wordlist` 中找出现次数最多的单词

## 11. 循环打印红绿灯

- 一、使用 `promise`
	- 使用**递归**
- 二、使用 `async/await`
	- 记得要**递归**

## 12. 解析URL参数为对象 → **两种方法**

- 正常字符串解析 
	- `?` `=` `&` 等
- `new URLSearchParams('s=1&b=1').get('s')`

## 13. 类数组转成数组

- `[].slice.call(arr)`
- `Array.from(arr)`

## 14. base64 转换：window.atob/btoa 

```javascript hl:11
// btoa ==》 b to a ; base64 to a 反着理解就对了
// b 代表base64反过来理解，就记住了
// a 代表ascii码，反过来理解就记住了

let encodedData = window.btoa("this is a example");
console.log(encodedData); // dGhpcyBpcyBhIGV4YW1wbGU=

let decodeData = window.atob(encodedData);
console.log(decodeData); // this is a example

// node 端： toString Base64:
Buffer.from('123').toString('base64')
Buffer.from('MTIz', 'base64').toString()

```

## 15. 如何判断一个正常表达式是合法的

- new URL(url)
- 正则

## 16. 不用加减乘除运算符，求整数的7倍 → **String.repeat(x).repeat**

```javascript
const times7 = x => '1'.repeat(x).repeat(7).length
```

## 17. 怎么判断一个元素在可视区域内 → offsetTop 或者 新 API IntersectionObserver

- `el.offsetTop - document.documentElement.scrollTop <= viewPortHeight`
- `getBoundingClientRect`，相对于视口的距离，计算 w/h/top/left/bottom/right ，会引起重排，不建议，以下条件就在可视区域内。
	- top 大于等于 0
	- left 大于等于 0
	- bottom 小于等于视窗高度
	- right 小于等于视窗宽度
- 新 API ：
	- 判断元素是否进入可视区域内，`IntersectionObserver`的实现，应该采用`requestIdleCallback()`

## 18. 高并发场景，高技术要求场景的方法论？

- 选用成熟框架，经受过高压场景验证过得，比如`egg.js`
- 做好压测
- 做好线上预警
- 具体快速扩容能力

## 19. while 和 for 中使用 `return` 终止循环

```javascript hl:4,2
function test() {
  // 或者使用while一样的效果
  for (let i = 1; i < 10; i++) {
    if (i === 5) return;
    console.log(i);
  }
}
test();
```

## 20. 图片懒加载的时机

- `img[i].offsetTop < 可视区域视图高度 + scrollTop`
- 所以 `offsetTop` 是==相对于整个文档的距离==

## 21. 找出字符串中连续出现最多的字符和个数：`/(\w)\1*/g`

![图片&文件](./files/20241114-15.png)

## 22. js 和 css 压缩的原理

### 22.1. js

![图片&文件](./files/20241114-17.png)

### 22.2. css

`CSS` 压缩比较简单，就是将多余的回车`换行符`与`注释` 去掉

## 23. flex:1

![图片&文件](./files/20241114-18.png)

## 24. new 关键字

![图片&文件](./files/20241114-19.png)

## 25. Http 状态码 301 和 302 的应用场景分别是什么

- **301: 永久重定向**
- **302: 临时重定向**
	- **搜索引擎会抓取新的内容而**`保留旧的地址`
- **304 Not Modified ，即**
	- `协商缓存`

## 26. async 会隐式返回一个 Promise

```javascript hl:16,13
async function name([param[, param[, ... param]]]) {
    statements 
}
// async 函数一定会返回一个 promise 对象。
// 如果一个 async 函数的返回值看起来不是 promise，那么它将会被隐式地包装在一个 promise 中。
// 例如，如下代码：

async function foo() {
   return 1
}
// 等价于：===> 
function foo() {
   return Promise.resolve(1)
}
// async会隐式返回一个Promise
// 所以下面代码会可能会有坑哦，因为 useEffect 返回销毁函数，可能会导致组件销毁时执行
useEffect(async () => {
  const response = await fetch('...');
  // ...
}, []);
```

> async会隐式返回一个Promise，特别是在 `useEffect` 使用需要注意有坑

## 27. 如何监控网页崩溃？

- 使用`sw`来监控，轮询去看检测心跳！

## 28. 一句话总结 Web worker，Service worker 和 worklet

- 相同点：**脚本都是运行于主线程之外的单独线程中**
- 不同点：
	- 作用各不一样

![图片&文件](./files/20241114-25.png)

## 29. `indexOf` 与 `findIndex` 区别（总结）

- `indexOf` ：
	- 查找值作为第一个参数，采用 `===` 比较，更多的是`用于查找基本类型`，如果是对象类型，则是判断是否是`同一个对象的引用`
- `findIndex` ：
	- 比较函数作为第一个参数，多用于`非基本类型(例如对象)的数组索引查找`，或查找条件`很复杂`

## 30. 讲下 V8 sort 的大概思路，并手写一个 sort 的实现

- 最早以前v8引擎
	- 当数组**排序区间长度**在`10`之内时，实际的排序方法是 `插入排序`
	- 其余时候使用 `快速排序`
		- 但后面最新的`es`规范中`要求稳定`，所以舍弃了
- 现在改用混合排序的算法：`TimSort`
	- `Timsort` 是一种混合、稳定高效的排序算法，源自`合并排序`和`插入排序`
		- `其实在现实中，给定的大部分数组中通常是有部分已经排好序的（无论是升序还是降序 `

## 31. 遍历数组的快慢比较

![图片&文件](./files/20241111-29.png)

![图片&文件](./files/20241111-28.png)

> for-in 还**能遍历继承和原型链上的属性**，所以慢

## 32. 使用 setTimeout(fn,0) 的场景有？

- UI 渲染后的回调
- 创建一个宏任务，推迟到下一个事件循环

![图片&文件](./files/20241111-30.png)

## 33. resolve 或者 return 一个 promise 对象时，会产生一个新的微任务

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

### 33.1. 重点

![图片&文件](./files/20241111-32.png)

## 34. 如何实现大文件上传

要点：
- 客户端拆分大文件 → 并发上传 → 新接口通知服务器端合并

### 34.1. 大文件上传思路

- 1、使用 `FileReader` 读文件流 ，blob.slice分割，md5 文件唯一标识，hash.1.png
* 2、试试监听 `xhr ononpress` 实时获取上传进度
* 3、都上传完后，需要再发一个请求告诉服务器做合并处理

![图片&文件](./files/20241111-33.png)

### 34.2. 其他注意点

![图片&文件](./files/20241111-34.png)

## 35. map 和 foreach 的区别

### 35.1. 快慢

![图片&文件](./files/20241111-40.png)

### 35.2. 是否修改原数组

![图片&文件](./files/20241111-41.png)

## 36. 将类数组对象转成真正数组的 4 种方法

- ① 的方式，可使用 `[].slice.call()` 的简写方式
- 最新的使用方式 `Array.from(args)`
- 最后一种 ④ 挺有意思，使用 `...扩展` ，在函数里作为参数传入，然后再 return 
	- 所以**扩展符，就是可以转数组**

![图片&文件](./files/20241111-42.png)

## 37. 虚拟 DOM 渲染到页面时，框架会做那些处理？

- 要点：
	- 挂载
		- 事件处理
		- 生命周期
	- 更新
		- diff
	- 卸载节点
	- 错误处理

---

![图片&文件](./files/20241111-43.png)

## 38. 绑定 this 指向的的方法都有哪些？

- bind
- 箭头函数：
	- 指向定义时的上下文
- apply/call

## 39. addEventListenser 的三个参数

- options
	- once 最多只调用一次
	- passive 
	- signal

---


![图片&文件](./files/20241111-44.png)
