
# 面试题



## 目录
<!-- toc -->
 ## 1. 打印出 1 - 10000 之间的所有对称数 例如 121、1331 等 

```javascript hl:4
let a1 = [...Array(10000).keys()].filter((i) => {
  return (
    String(i).length > 1 &&
    String(i) === i.toString().split("").reverse().join("")
  );
});
```

## 2. 如何快速从一个巨大的数组中随机获取部分元素(不能重复获取)

- 思路
	- 生成随机数：`Math.floor(Math.random() * (arr.length - i))`
		- 每次都把抽到的数据放到最后一位去了，那么下次再抽取时就可能再抽到了

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

```javascript
/*************************************************
 * 数组洗牌
 * ● 思路：从最后一个元素开始，从数组中随机选出一个位置，交换，直到第一个元素。
 * ● 关键：random = Math.floor(length * Math.random());
 ************************************************/

let a = [1, 2, 3, 4, 5];

function fn1(arr) {
  let len = arr.length - 1;
  // :::: 倒着遍历
  // :::: 这里是大于 -1
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

- 思路1：正常`split('')` 转成数组遍历计数
- 思路2：直接使用 `match` 匹配正则， `"11112111".match(/1/g).length`

## 5. sort((a, b) => a - b > 0) 和 sort((a, b) => a - b) 的区别？

这两种写法有很大的区别：

1. `sort((a, b) => a - b)`：
    - 返回值是具体的差值（数字）
    - 返回负数：表示 a 应该在 b 前面
    - 返回 0：表示 a 和 b 相等
    - 返回正数：表示 a 应该在 b 后面
    - 结果：==升序排列==
    - 例如：当 a=3, b=1 时，返回 2（数字）
2. `sort((a, b) => a - b > 0)`：
    - 返回值是布尔值转换后的数字（==0 或 1==）
    - 返回 false (0)：当 a-b ≤ 0 时
    - 返回 true (1)：当 a-b > 0 时
    - 结果：==降序排列==
    - 例如：当 a=3, b=1 时，返回 true（转为数字就是 1）

### 5.1. 返回值类型不同

   ```javascript
// a=3, b=1 时
(a - b)     // 返回 2 (数字)
(a - b > 0) // 返回 true (布尔值，转为数字 1)
   ```

### 5.2. 排序结果不同

   ```javascript
[3,1,2].sort((a,b) => a-b)      // [1,2,3] (升序)
[3,1,2].sort((a,b) => a-b > 0)  // [3,2,1] (降序)
   ```

### 5.3. 精度和区分度

   ```javascript
// a-b 可以区分具体大小差异
sort((a,b) => a-b)     // 能区分差值大小

// a-b > 0 只能区分大于、小于等于
sort((a,b) => a-b > 0) // 只能区分是否大于
   ```

### 5.4. 性能影响

   ```javascript
// a-b 直接返回差值
sort((a,b) => a-b)     // 一次运算

// a-b > 0 需要先计算差值再比较
sort((a,b) => a-b > 0) // 两次运算
   ```

### 5.5. 最佳实践建议

#### 5.5.1. 对于数字排序，推荐使用 `sort((a, b) => a - b)`

   ```javascript
// ✅ 好的写法
numbers.sort((a, b) => a - b)     // 升序
numbers.sort((a, b) => b - a)     // 降序
   ```

#### 5.5.2. 避免使用 `sort((a, b) => a - b > 0)`

   ```javascript
// ❌ 不推荐的写法
numbers.sort((a, b) => a - b > 0)  // 不够直观，且性能略差
   ```

#### 5.5.3. 如果确实需要布尔值比较，直接使用比较运算符

   ```javascript
// 如果一定要用布尔值比较
numbers.sort((a, b) => a > b ? 1 : -1)
   ```

### 5.6. 总结

- `a - b` 写法更清晰、更准确、性能更好
- `a - b > 0` 写法虽然能工作，但不够直观且可能有性能影响
- 在实际开发中，推荐使用 `a - b` 的写法

## 6. 数组扁平化

- 方法1： 原生方法：`arr.flat(Infinity)`
- 方法2： 数组
	- `toString` 
	-  `split(',')`
	- 然后 `.map(Number)`
- 方法3： 遍历的方法，之前还写错了，这个都写错了，一定要用一个全局变量放在闭包函数里

## 7. 实现一个千分位

- **方法1：** 正则 `'10000000000'.replace(/(\d)(?=(\d{3})+$)/g, '$1,')`
- 方法2：`Number(12121323232323).toLocaleString()`
- 方法3：使用遍历，转成数组，再两次`reverse` 做不同的事情

## 8. rgb 转成 16 进制

- 从 rgb(255, 255, 255) 中提取出 r=255 、 g=255 、 b=255
- 将 r 、 g 、 b 转换为十六进制，不足两位则补零
	- 转十六进制 ：toString(16)
	- 不足两位补 0 

## 9. 层树结构处理转成一维树结构：回溯算法

```javascript
var entry = {
  a: {
    b: {
      c: {
        dd: "abcdd",
      },
    },
    d: {
      xx: "adxx",
    },
    e: "ae",
  },
};

// 要求转换成如下对象
var output = {
  "a.b.c.dd": "abcdd",
  "a.d.xx": "adxx",
  "a.e": "ae",
};

function fn(obj) {
  let res = {};
  function backtrack(obj, keys) {
    // base case
    if (typeof obj === "string") {
      res[keys.join(".")] = obj;
      return;
    }
    // 遍历
    Object.entries(obj).forEach(([k, v]) => {
      // 做选择
      keys.push(k);
      backtrack(v, keys);
      // 撤销选择
      keys.pop();
    });
  }
  // []这里代表路径，需要决策的路径
  backtrack(obj, []);
  return res;
}

console.log(fn(entry));

```

## 10. 接上题：打平的对象，组装成对象

```javascript
var entry = {
  a: {
    b: {
      c: {
        dd: "abcdd",
      },
    },
    d: {
      xx: "adxx",
    },
    e: "ae",
  },
};

var output = {
  "a.b.c.dd": "abcdd",
  "a.d.xx": "adxx",
  "a.e": "ae",
};

function flattenToNested(entry) {
  const output = {};
  for (const [key, value] of Object.entries(entry)) {
    const keys = key.split(".");
    let current = output;
    for (let i = 0; i < keys.length - 1; i++) {
      const k = keys[i];
      current[k] = current[k] || {};
      current = current[k];
    }
    current[keys[keys.length - 1]] = value;
  }
  return output;
}

console.log(flattenToNested(output));

```



## 12. opacity:0 的 注意事项

- `opacity:0` **并不等于之前理解的** `display:none`，搞错了亲
- `opacity:0`  时也能**点击**

## 13. 实现map、filter、push等方法

- map 写成 `fn(this,i,this)`

## 14. 查找频率出现最高的单词

- 先通过 `s.match(/[a-z]+/g)`  匹配出所有的单词数组 `wordlist`
-  `wordlist ` 中找出现次数最多的单词

## 15. 循环打印红绿灯

- 使用 promise
- 使用 async/await
- 记得要递归

## 16. 解析URL参数为对象

- 正常字符串解析 
	- `?` `=` `&` 等
- `new URLSearchParams('s=1&b=1').get('s')`

## 17. 类数组转成数组

- `[].slice.call(arr)`
- `Array.from(arr)`

## 18. base64 转换

```javascript
// btoa ==》 b to a ; base64 to a 反着理解就对了
// b 代表base64反过来理解，就记住了
// a 代表ascii码，反过来理解就记住了

let encodedData = window.btoa("this is a example");
console.log(encodedData); // dGhpcyBpcyBhIGV4YW1wbGU=

let decodeData = window.atob(encodedData);
console.log(decodeData); // this is a example

// node 端： toBase64:

Buffer.from('123').toString('base64')
Buffer.from('MTIz', 'base64').toString()

```

## 19. 如何判断一个正常表达式是合法的

- new URL(url)
- 正则

## 20. 不用加减乘除运算符，求整数的7倍

```javascript
const times7 = x => '1'.repeat(x).repeat(7).length
```

## 21. js bridge 交互

### 21.1. js 调用 native 的东西

- 拦截 Scheme：比较类似于`jsonp`的思路
	- js层：`a.herf=` / `locacation.href` / `iframe`
	- ios 和 Android 侧：分别做拦截即可，就类比于 `jsonp` 的思路
- 这种方法的`缺点`
	- 连续续调用 `location.href` 会出现消息丢失
	- `url`长度有限制
- 弹窗方式：
	- 安卓测：onJsAlert、onJsConfirm、onJsPrompt
	- ios侧：WKWebView支持，但UIWebView 不支持
- 注入上下文的方式：
	- 即注入到 js 环境中的 `window`对象上，直接调用

### 21.2. native 调用 js 中的东西

- **就是再native中执行window上的方法等，如安卓中** `webView.loadUrl("javascript:foo()");`

## 22. 怎么判断一个元素在可视区域内

- `el.offsetTop - document.documentElement.scrollTop <= viewPortHeight`
- `getBoundingClientRect`，相对于视口的距离，计算w/h/top/left/bottom/right ，会引起重排，不建议，以下条件就在可视区域内。
	- top 大于等于 0
	- left 大于等于 0
	- bottom 小于等于视窗高度
	- right 小于等于视窗宽度
- 新 API ：
	- 判断元素是否进入可视区域内，`IntersectionObserver`的实现，应该采用`requestIdleCallback()`

## 23. 高并发场景，高技术要求场景的方法论？

- 选用成熟框架，经受过高压场景验证过得，比如`egg.js`
- 做好压测
- 做好线上预警，具体快速扩容能力

## 24. while 和 for 中使用 return 终止循环

```javascript
function test() {
  // 或者使用while一样的效果
  for (let i = 1; i < 10; i++) {
    if (i === 5) return;
    console.log(i);
  }
}
test();
```

## 25. howOld(tree,name)实现

```javascript
var tree = {
  age: 100,
  name: "a",
  child: [
    {
      age: 88,
      name: "b",
    },
    {
      age: 66,
      name: "c",
      child: [
        {
          age: 0,
          name: "d",
          child: [
            {
              age: -1,
              name: "e",
            },
          ],
        },
      ],
    },
  ],
};

function howOld(tree, name) {
  let res = null;
  function dfs(root, name) {
    // base case
    if (root.name === name) {
      res = root.age;
      return;
    }
    // 如果是数组，则遍历子节点
    if (Array.isArray(root.child)) {
      root.child.forEach((item) => {
        dfs(item, name);
      });
    }
  }
  dfs(tree, name);
  return res;
}

console.log(howOld(tree, "e"));
console.log(howOld(tree, "c"));

```

## 26. 递归实现反转字符串

```javascript hl:9
let str = "1234";

function fn(str) {
  // base case
  if (str === "") {
    return str;
  }

  return fn(str.slice(1)) + str[0];
}

console.log(fn(str));

```

## 27. 罗马数字转化整数

```javascript

let map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
var romanToInt = function (s) {
  let arr = s.split("");
  let res = [];
  arr.forEach((item) => {
    res.push(map[item]);
  });
  let val = 0;
  for (let i = 0; i < res.length; i++) {
    let a = res[i];
    let b = res[i + 1];
    if (b && b > a) {
      val += b - a;
      i++;
    } else {
      val += a;
    }
  }
  console.log(val);
  return val;
};
```

## 28. 整数转成罗马数字

```javascript
let intToRoman = function (num) {
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        strs = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"],
        result = '';
    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            num -= values[i];
            result += strs[i];
        }
    }
    return result;
};
```

## 29. 实现 retry 并指定尝试次数

```javascript hl:8
Promise.retry = function (promiseFn, times = 3) {
  return new Promise(async (resolve, reject) => {
    while (times--) {
      try {
        let ret = await promiseFn();
        resolve(ret);
        // 成功了就直接break了
        break;
      } catch (error) {
        if (!times) reject(error);
      }
    }
  });
};

```

## 30. 柯里化参数固定场景 `add(1)(2)(3)`

```javascript
/**
 * 柯里化
 * 参数固定场景
 * add(1)(2)(3)
 * add(4)(5)(6)
 * */

const curry = (fn, ...args1) => {
    if (args1.length >= fn.length) {
        return fn(...args1)
    } else {
         // 两个return 
        return (...args2) => {
            return curry(fn, ...args1, ...args2);
        }
    }
}

function add1(x, y, z) {
    return x + y + z;
}

const add = curry(add1);
console.log(add(1, 2, 3));
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));
```

## 31. 参数不固定的柯里化场景
```javascript
/**
 * 柯里化
 * 参数不固定场景
 * add(1)(2)(3,4).sumof()
 * */

const add = (...args) => {
    let vars = [];
    // 写一个函数，形成闭包
    const curried = (...arg2) => {
        // ::::这里 vars,记住了
        vars = [...vars, ...arg2];
        return curried
    }
    curried.sumof = () => {
        //todo 做你想做的事情
        return vars;
    }
    return curried(...args)
}

console.log(add(1)(2)(3, 4).sumof())
console.log(add(1)(2)(3, 4)(7, 8).sumof())
```

## 32. 大文件上传思路

- 1、使用FileReader读文件流 ，blob.slice分割，md5文件唯一标识，hash.1.png
* 2、试试监听xhr  ononpress实时获取上传进度
* 3、都上传完后，需要再发一个请求告诉服务器做合并处理

## 33. 图片懒加载的时机

`img[i].offsetTop < 可视区域视图高度 + scrollTop`

## 34. 自己实现`Array.prototype.splice`

```javascript
Array.prototype.splice =
  Array.prototype.splice ||
  function (start, deleteCount, ...addList) {
    ////  处理开始 startIndex
    if (start < 0) {
      if (Math.abs(start) > this.length) {
        start = 0;
      } else {
        start += this.length;
      }
    }
    // 处理删除的的个数，如果没传，直接等于长度 - start
    if (typeof deleteCount === "undefined") {
      deleteCount = this.length - start;
    }

    // 处理，移除的
    const removeList = this.slice(start, start + deleteCount);

    const right = this.slice(start + deleteCount);
    ////  重新修改this -> 原数组 ，即加入addlist数组片段 + right剩余的数组片段
    //   关键是这里，没有发现所谓的left,因为left还在this里呢，也就是本身没变
    let addIndex = start;
    addList.concat(right).forEach((item) => {
      this[addIndex] = item;
      addIndex++;
    });

    this.length = addIndex;

    return removeList;
  };

```

## 35. 实现`1,2,3,5,7,8,9` => `1~3,5,7~9`

```javascript
function compressNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  const ranges = [];
  let start = numbers[0];
  let prev = numbers[0];

  for (let i = 1; i <= numbers.length; i++) {
    const current = numbers[i];
    if (current !== prev + 1 || i === numbers.length) {
      if (start === prev) {
        ranges.push(start.toString());
      } else {
        ranges.push(`${start}~${prev}`);
      }
      start = current;
    }
    prev = current;
  }

  return ranges.join(",");
}
compressNumbers([1, 2, 3, 5, 7, 8, 9]); // 返回 "1~3,5,7~9"

```

## 36. 要求设计 `LazyMan` 类，实现以下功能

- 关键点：tasklist 任务队列
- next 实际执行下一个任务

```javascript
LazyMan('Tony');
// Hi I am Tony

LazyMan('Tony').sleep(10).eat('lunch');
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food


class LazyManClass {
    constructor(name) {
        this.taskList = [];
        this.name = name;
        console.log(`Hi I am ${this.name}`);
        setTimeout(() => {
            this.next();
        }, 0);
    }
    eat (name) {
        var that = this;
        // 这里包装了一下，放在一个函数里面
        var fn = (function (n) {
            return function () {
                console.log(`I am eating ${n}`)
                that.next();
            }
        })(name);
        this.taskList.push(fn);
        return this;
    }
    sleepFirst (time) {
        var that = this;
        var fn = (function (t) {
            return function () {
                setTimeout(() => {
                    console.log(`等待了${t}秒...`)
                    that.next();
                }, t * 1000);
            }
        })(time);
         // 优先级较高
        this.taskList.unshift(fn);
        return this;
    }
    sleep (time) {
        var that = this
        var fn = (function (t) {
            return function () {
                setTimeout(() => {
                    console.log(`等待了${t}秒...`)
                    that.next();
                }, t * 1000);
            }
        })(time);
        this.taskList.push(fn);
        return this;
    }
    next () {
        var fn = this.taskList.shift();
        fn && fn();
    }
}

function LazyMan(name) {
    return new LazyManClass(name);
}

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(4).eat('junk food');


```

## 37. `[abc[bcd[def]]]` 转成对象
```javascript
/**
 * 字符串仅由小写字母和 [] 组成，且字符串不会包含多余的空格。
 * 示例一: 'abc' --> {value: 'abc'}
 * 示例二：'[abc[bcd[def]]]' -->
 *			{value: 'abc', children: {value: 'bcd', children: {value: 'def'}}}
 */

let str = "[abc[bcd[def]]]";
// 先转成数组，再递归处理
let arr = str.split(/[\[\]]/).filter((item) => {
  return !!item;
});

let res = {};
arr.reduce((prev, curent, index, array) => {
  prev.value = curent;
  // 除了最后一个，都返回 prev.children
  if (array.length - 1 !== index) {
    prev.children = {};
    return prev.children;
  }
}, res);

console.log(JSON.stringify(res));
```

## 38. 找出字符串中连续出现最多的字符和个数

![图片&文件](./files/20241114-15.png)

## 39. 打平数组转成树形结构

### 39.1. 先去重

使用 `.values()`

![图片&文件](./files/20241114-16.png)
### 39.2. 转成数组

- 关键点：函数的参数 `fn(array,pid)`
- 必须知道根节点

```javascript
/**
 *  21、数组转成树形结构
 *  如何将 [{id: 1}, {id: 2, pId: 1}, ...] 的重复数组（有重复数据）
 *  转成树形结构的数组 [{id: 1, child: [{id: 2, pId: 1}]}, ...] （需要去重） `#243`
 * */
 
// :::: 已经去重了
let arr = [
  { id: 1, pid: 0 },
  { id: 2, pid: 1 },
  { id: 3, pid: 2 },
  { id: 4, pid: 1 },
  { id: 5, pid: 3 },
  { id: 6, pid: 2 },
];

/**
 * @rootId 跟节点的 pid
 * */
function fn(array, rootId) {
  //  第1步： 借助map对象， 转成以id为 key , item为value的 对象
  let map = {};
  array.forEach((item) => {
    map[item.id] = { ...item }; // 浅拷贝
  });
  const res = [];
  // ::::遍历
  array.forEach((item) => {
    let { id, pid } = item;
    // 如果是根节点，那么直接push 给 res
    if (pid === rootId) {
      res.push(map[id]);
      // 否则，操作后面的map,判断是否有children，没有就复制给一个
    } else {
      if (map[pid].children) {
        map[pid].children.push(map[id]);
      } else {
        map[pid].children = [map[id]];
      }
    }
  });
  return res;
}

console.log(JSON.stringify(fn(arr, 0)));

```

## 40. js 和 css 压缩的原理

### 40.1. js

![图片&文件](./files/20241114-17.png)

### 40.2. css

`CSS` 压缩比较简单，就是将多余的回车`换行符`与`注释` 去掉

## 41. 实现 classNames 库的能力

```javascript
/*************************************************
 * 实现 classNames 库的能力
 *
 * classNames('BFE', 'dev', 100)
 * // 'BFE dev 100'
 *
 * classNames(
 *   null, undefined, Symbol(), 1n, true, false
 * )
 * // ''
 *
 * const obj = new Map()
 * obj.cool = '!'
 *
 * classNames({BFE: [], dev: true, is: 3}, obj)
 * // 'BFE dev is cool'
 *
 * classNames(['BFE', [{dev: true}, ['is', [obj]]]])
 * // 'BFE dev is cool'
 ************************************************/

function classNames(...args) {
    let arr = [];
    for (let item of args) {
        // :::: 必须if/else if ,一个经验是尽量这么写，别分开，不然可能会重复命中
        if (typeof item === "string" || typeof item === "number") {
            arr.push(item);
        } else if (Array.isArray(item)) {
            // 彻底打平，然后把它放到args参数里面去
            item.flat(Infinity).forEach((it) => {
                args.push(it);
            })
        }
        // :::: 这里需要过滤掉 null
        else if (typeof item === "object" && item !== null) {
            Object.entries(item).forEach(([k, v]) => {
                arr.push(k)
            })
        }
    }
    return arr;
}

console.log(
    // :::: BigInt 可以表示任意大的整数。1n是一种表达方式， 1n == 1 相等
    classNames(
        null, undefined, Symbol(), 1n, true, false
    ) || ''
)

console.log(
    classNames('BFE', 'dev', 100)
)

const obj = new Map()
obj.cool = '!'

// 'BFE dev is cool'
console.log(
    classNames({BFE: [], dev: true, is: 3}, obj)
)

console.log(
    classNames(['BFE', [{dev: true}, ['is', [obj]]]])
)

```

## 42. flex:1

![图片&文件](./files/20241114-18.png)

### 42.1. new 关键字

![图片&文件](./files/20241114-19.png)

## 43. class中箭头函数与普通函数的 `this` 指向问题

![图片&文件](./files/20241114-20.png)

```javascript
class Animal {
  constructor() {
    this.name = "cat";
  }
  // 普通函数方法,直接挂载在原型上
  speak() {
    // 当然，this都指向实例对象
    console.log(this.name);
  }
  // 箭头函数方法，直接挂载在 Animal 上
  eat = () => {
    // 当然，this都指向实例对象
    console.log(this.name);
  };
}
const n = new Animal();
const a = n.speak;
const b = n.eat;

// 箭头函数方法： this依然指向创建的实例对象，即，箭头函数中的this始终是该箭头函数所在作用域中的this
b(); // cat
// 普通方法，报错，因为 方法中的this 会指向undefined ，即普通函数中的 this 是动态绑定的，始终指向函数的执行环境，
a(); // 报错

```

## 44. typescript 中 unknown、any、void 的区别

### 44.1. **类型安全性**

- `any`: 完全不安全，跳过类型检查
- `unknown`: 类型安全，需要类型检查才能使用
- `void`: 类型安全，只能赋值 undefined 或 null
	- `void`其实可以理解为`null`和`undefined`的`联合类型`，它表示空值
### 44.2. **使用场景**

- `any`: 当你不确定类型，或者需要快速迁移 JavaScript 代码时使用
- `unknown`: 当你不确定输入类型，但想保持类型安全时使用
- `void`: 主要用于表示函数没有返回值
### 44.3. **操作限制**

- `any`: 没有任何限制
- `unknown`: 必须先进行类型检查或断言
- `void`: 只能赋值 undefined 或 null
### 44.4. **最佳实践**

- 尽量避免使用 `any`，因为它会失去 TypeScript 的类型检查优势
- 如果不确定类型，优先使用 `unknown` 而不是 `any`
- `void` 主要用于函数返回类型声明

## 45. ts 的类型保护

类型保护主要的想法是尝试检测属性、方法或原型，以弄清楚如何处理一个值。有四种使用类型保护的主要方法，分别是 `in`，`typeof`，`instanceof`，`类型谓词is`

- `typeof` 类比于 js 的`typeof`
- `instanceof` 类比于 js 的`instanceof`
- `in` 如下检查某个对象上是否存在某个属性
	- ![图片&文件](./files/20241114-21.png)
- is 
	- ![图片&文件](./files/20241114-22.png)

## 46. implements 与 extends 的区别

![图片&文件](./files/20241114-23.png)

## 47. TypeScript 中 Interface 与 Type 的区别

- `interface` 只能定义`对象类型`
- `type` 声明可以声明任何类型。
- `interface` 能够声明 **合并**，两个相同接口会 **合并**。`Type`声明合并会报错
- `type`可以`类型推导`
	- ![图片&文件](./files/20241114-24.png)

## 48. ts 中的 const 、 readonly 的区别

- 一个用于变量，一个用于属性
- `readonly` 修饰的**属性**能确保自身不能修改属性，

## 49. Http 状态码 301 和 302 的应用场景分别是什么

- **301: 永久重定向**
- **302: 临时重定向**
	- **搜索引擎会抓取新的内容而**`保留旧的地址`
- **304 Not Modified ，即**`协商缓存`

## 50. async会隐式返回一个Promise

```javascript hl:21
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
// 所以下面代码会可能会有坑哦，因为useEffect返回销毁函数，可能会导致组件销毁时执行
useEffect(async () => {
  const response = await fetch('...');
  // ...
}, []);
```

## 51. 如何监控网页崩溃？

- 使用`sw`来监控，轮询去看检测心跳！

## 52. 一句话总结Web worker，Service worker和worklet

![图片&文件](./files/20241114-25.png)

## 53. `indexOf` 与 `findIndex` 区别（总结）

- `indexOf` ：
	- 查找值作为第一个参数，采用 `===` 比较，更多的是`用于查找基本类型`，如果是对象类型，则是判断是否是`同一个对象的引用`
- `findIndex` ：
	- 比较函数作为第一个参数，多用于`非基本类型(例如对象)的数组索引查找`，或查找条件`很复杂`

## 54. 讲下 V8 sort 的大概思路，并手写一个 sort 的实现

- 最早以前v8引擎
	- 当数组排序区间长度在`10`之内时，实际的排序方法是 `插入排序`
	- 其余时候使用 `快速排序`
		- 但后面最新的`es`规范中`要求稳定`，所以舍弃了
- 现在改用混合排序的算法：`TimSort`
	- `Timsort` 是一种混合、稳定高效的排序算法，源自`合并排序`和`插入排序`
		- `其实在现实中，给定的大部分数组中通常是有部分已经排好序的（无论是升序还是降序 `