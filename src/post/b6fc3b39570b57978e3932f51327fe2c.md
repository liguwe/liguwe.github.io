
# 常见面试题



## 目录
<!-- toc -->
 ## 1. a+++b 、a++++b 、 a+++++b 的结果？ 

> [!danger]
> 关键是看如何断句的，即空格在哪儿

```javascript
var a = 1;
var b = 2;
console.log(a++ + b); // 3

var a = 1;
var b = 2;
console.log(a + ++b); // 4

var a = 1;
var b = 2;
console.log(a ++++ b); // 报错

var a = 1;
var b = 2;
console.log(a++ + ++b); // 4
```

## 2. 说说你平时常用的命令行

- `tail web.2016-06-06.log -n 300 -f` 查看底部即最新300条日志记录，并实时刷新
- 根据端口查进程并杀死进程： 
	- `lsof -i tcp:8080`
	- `kill -9 pid`
- 清除 Git 缓存：`git rm --cached  .idea`

## 3. 根据以下要求，写一个数组去重函数

![图片&文件](./files/20241028-13.png)

### 3.1. 使用 JSON.stringify 

```javascript hl:6
function fn(arr) {
	
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        let itemStr = JSON.stringify(item, (k, v) => {
            console.log('k:',k);
            console.log('v:',v);
        });
        if (!map.get(itemStr)) {
            map.set(itemStr, item);
        }
    }
    return [...map.values()];
}

```

### 3.2. 对于下面这种情况呢

```javascript
const ss = [
    {
        a: 'c',
        b: 'b',
        c: 'c',
    },
    {
        c: 'c',
        b: 'b',
        a: 'c',
    }
]
```

### 3.3. 通用情况

```javascript hl:2,5,9,18
function isEqual(val1, val2) {
  // 处理基础类型
  if (val1 === val2) return true;

  // 如果不是对象类型，直接返回false
  if (typeof val1 !== "object" || typeof val2 !== "object") return false;
  if (!val1 || !val2) return false;

  // 处理数组
  if (Array.isArray(val1) && Array.isArray(val2)) {
    if (val1.length !== val2.length) return false;
    for (let i = 0; i < val1.length; i++) {
      if (!isEqual(val1[i], val2[i])) return false;
    }
    return true;
  }

  // 处理对象
  const keys1 = Object.keys(val1);
  const keys2 = Object.keys(val2);
  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!isEqual(val1[key], val2[key])) return false;
  }
  return true;
}
```

## 4. 如何高性能插入 `100000` 个 DOM节点

有几种高性能插入大量 DOM 节点的方法，我按性能从高到低排序说明：

### 4.1. DocumentFragment + 虚拟列表

```javascript
function renderList(total) {
    const container = document.getElementById('container');
    const fragment = document.createDocumentFragment();
    const itemHeight = 20; // 假设每项高度20px
    const visibleCount = Math.ceil(window.innerHeight / itemHeight);
    
    // 创建虚拟滚动容器
    const virtualContainer = document.createElement('div');
    virtualContainer.style.height = `${total * itemHeight}px`;
    virtualContainer.style.position = 'relative';
    
    // 初始只渲染可视区域的内容
    function renderItems(startIndex) {
        fragment.textContent = ''; // 清空
        const endIndex = Math.min(startIndex + visibleCount, total);
        
        for(let i = startIndex; i < endIndex; i++) {
            const div = document.createElement('div');
            div.textContent = `Item ${i}`;
            div.style.position = 'absolute';
            div.style.top = `${i * itemHeight}px`;
            fragment.appendChild(div);
        }
        
        virtualContainer.textContent = '';
        virtualContainer.appendChild(fragment);
    }
    
    // 监听滚动事件
    container.addEventListener('scroll', () => {
        const scrollTop = container.scrollTop;
        const startIndex = Math.floor(scrollTop / itemHeight);
        renderItems(startIndex);
    });
    
    container.appendChild(virtualContainer);
    renderItems(0);
}
```

### 4.2. DocumentFragment + requestAnimationFrame 分批插入

```javascript hl:14,17
function renderWithRAF(total) {
    const container = document.getElementById('container');
    const fragment = document.createDocumentFragment();
    const batchSize = 500; // 每批处理500个
    let currentIndex = 0;
    
    function appendItems() {
        const fragment = document.createDocumentFragment();
        const end = Math.min(currentIndex + batchSize, total);
        
        for(let i = currentIndex; i < end; i++) {
            const div = document.createElement('div');
            div.textContent = `Item ${i}`;
            fragment.appendChild(div);
        }
        
        container.appendChild(fragment);
        currentIndex = end;
        
        if(currentIndex < total) {
            requestAnimationFrame(appendItems);
        }
    }
    
    requestAnimationFrame(appendItems);
}
```

### 4.3. DocumentFragment 一次性插入

```javascript hl:3,8,11
function renderAll(total) {
    const container = document.getElementById('container');
    const fragment = document.createDocumentFragment();
    
    for(let i = 0; i < total; i++) {
        const div = document.createElement('div');
        div.textContent = `Item ${i}`;
        fragment.appendChild(div);
    }
    
    container.appendChild(fragment);
}
```

### 4.4. innerHTML 模板字符串

```javascript
function renderWithInnerHTML(total) {
    const container = document.getElementById('container');
    const html = Array.from({ length: total }, (_, i) => 
        `<div>Item ${i}</div>`
    ).join('');
    
    container.innerHTML = html;
}
```

### 4.5. 性能优化要点

- 使用虚拟列表（最优方案）
	- 只渲染可视区域的内容
	- 监听滚动按需渲染
	- 内存占用最小
	- 性能最好
- 分批处理
	- 使用 `requestAnimationFrame` 分批插入
	- 避免长时间阻塞主线程
	- 保持页面响应性
- DocumentFragment
	- 减少 DOM 操作次数
	- 避免重排重绘
	- 一次性插入
- 批量更新
	- 使用 innerHTML 或模板字符串
	- 减少 DOM 操作
	- 注意 XSS 风险

### 4.6. 使用建议

- 数据量大时（>1000）推荐使用虚拟列表
- 数据量中等时（100-1000）可以用分批处理
- 数据量小时（<100）可以直接用 DocumentFragment
- 需要考虑内存占用时避免使用 innerHTML

### 4.7. 示例用法

```javascript
// 虚拟列表（推荐）
renderList(100000);

// 分批处理
renderWithRAF(100000);

// 一次性插入
renderAll(100000);

// innerHTML方式
renderWithInnerHTML(100000);
```

## 5. 打平一个树形结构

```javascript
let ss = [
  {
    id: "1",
    name: "1",
    pid: "0",
    children: [
      {
        id: "1-1",
        name: "1-1",
        pid: "1",
      },
      {
        id: "1-2",
        name: "1-2",
        pid: "1",
        children: [
          {
            id: "1-2-1",
            name: "1-2-1",
            pid: "1-2",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "2",
    pid: "0",
    children: [
      {
        id: "2-1",
        name: "2-1",
        pid: "2",
      },
    ],
  },
];

// 打平一个树形结构
function flatTree(tree) {
  let res = [];

  function traverse(tree) {
    for (let i = 0; i < tree.length; i++) {
      let item = tree[i];
      res.push(item);
      if (Array.isArray(item.children)) {
        traverse(item.children);
      }
    }
  }

  return res;
}

```

## 6. 判断一个数是否是 `素数` ，列举出 `n` 以内的`素数` 的个数

```javascript
// 断一个数是否是素数

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i * i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// 列举出 n 以内的所有素数

function listPrimes(n) {
  const res = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      res.push(i);
    }
  }
  return res;
}

// :::: 优化
//  首先 2 是一个素数，那么 2 × 2 = 4, 3 × 2 = 6, 4 × 2 = 8… 都不可能是素数了。
//  然后我们发现 3 也是素数，那么 3 × 2 = 6, 3 × 3 = 9, 3 × 4 = 12… 也都不可能是素数了

function listPrimes(n) {
  const res = [];
  // primes.flll(true) ,表示所有的数都是素数
  const primes = new Array(n).fill(true);
  for (let i = 2; i <= n; i++) {
    // 如果 i 是素数, 那么 i 的倍数都不是素数
    if (isPrime(i)) {
      res.push(i);
      for (let j = i * i; j < n; j += i) {
        primes[j] = false;
      }
    }
  }
  return res;
}

```

## 7. 跨域

### 7.1. 列举下跨页面通讯的方式
![图片&文件](./files/20241028-15.png)

### 7.2. 跨域的表现、如何跨域？

![图片&文件](./files/20241028-16.png)

- 简单请求，直接在 origin 中添加字段
- 非简单请求，需要预检

![图片&文件](./files/20241028-17.png)

### 7.3. 关于跨域、为什么非简单请求不需要预检，而其他请求需要预检

让我详细解释一下跨域请求中的简单请求和预检请求的机制：

### 7.4. 简单请求的条件

一个请求必须同时满足以下所有条件才是简单请求：

1. 请求方法仅限于：
   - GET
   - POST
   - HEAD

2. 允许的请求头：
   - Accept
   - Accept-Language
   - Content-Language
   - Content-Type（仅限于以下三种）：
     - text/plain
     - multipart/form-data
     - application/x-www-form-urlencoded
   - DPR
   - Downlink
   - Save-Data
   - Viewport-Width
   - Width

3. 请求中没有注册任何事件监听器
4. 请求中没有使用 ReadableStream 对象

### 7.5. 为什么需要预检请求？

预检请求（Preflight）的主要目的是为了**保护服务器**。原因如下：

#### 7.5.1. **向后兼容**

```javascript
// 旧服务器只知道处理简单请求
// 如果直接发送复杂请求可能会导致意外行为
fetch('api.example.com/data', {
    method: 'DELETE',  // 非简单请求
    headers: {
        'Content-Type': 'application/json'  // 非简单请求的 Content-Type
    }
});
```

#### 7.5.2. **安全性考虑**

```javascript
// 预检请求可以让服务器事先检查：
// 1. 该源是否被允许
// 2. 该方法是否被允许
// 3. 该头部是否被允许
const headers = new Headers({
    'X-Custom-Header': 'value',  // 自定义头部需要预检
    'Content-Type': 'application/json'
});

fetch('api.example.com/data', {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify({ key: 'value' })
});
```

#### 7.5.3. **避免服务器端的副作用**

```javascript
// DELETE 请求可能会删除数据
// PUT 请求可能会修改数据
// 预检请求可以在实际操作前验证权限
async function deleteResource() {
    // 会首先发送 OPTIONS 请求
    const response = await fetch('api.example.com/resource/123', {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer token'
        }
    });
}
```

### 7.6. 预检请求的过程

#### 7.6.1. **OPTIONS 请求**

```http
OPTIONS /resource/123 HTTP/1.1
Host: api.example.com
Origin: https://example.com
Access-Control-Request-Method: DELETE
Access-Control-Request-Headers: Authorization
```

#### 7.6.2. **服务器响应**

```http
HTTP/1.1 200 OK
Access-Control-Allow-Origin: https://example.com
Access-Control-Allow-Methods: DELETE, PUT, POST, GET, OPTIONS
Access-Control-Allow-Headers: Authorization
Access-Control-Max-Age: 86400
```

#### 7.6.3. **实际请求**

```http
DELETE /resource/123 HTTP/1.1
Host: api.example.com
Origin: https://example.com
Authorization: Bearer token
```

### 7.7. 为什么简单请求不需要预检？

#### 7.7.1. **历史原因**

```html
<!-- 在 CORS 出现之前，这些操作就已经可以跨域了 -->
<form action="https://other-domain.com/form" method="POST">
    <input type="text" name="data">
    <button type="submit">Submit</button>
</form>

<img src="https://other-domain.com/image.jpg">
```

#### 7.7.2. **安全性考虑**

```javascript
// 简单请求的特点：
// 1. 不会改变服务器数据（GET）
// 2. 使用传统的数据格式（form-data）
// 3. 不包含自定义头部
fetch('api.example.com/data', {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
});
```

### 7.8. 最佳实践： **缓存预检请求**

```javascript
// 服务器端设置预检请求的缓存时间
app.options('/api', (req, res) => {
    res.header('Access-Control-Max-Age', '86400'); // 24小时
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.send();
});
```

## 8. 实现 `子元素宽度`永远是`父元素的一半`，且`宽高比`永远为 `2 :1`

![图片&文件](./files/20241028-18.png)

## 9. 关于 DOM 操作的一些细节点

- isConnect 表示是否在文档中
- DOM 树中有`前后兄弟节点`的指针引用属性
- `document.elementFromPoint(x,y)` 方法返回位于页面指定位置`最上层的元素节点`
- `Event.composedPath()` 返回冒泡经过的 DOM 节点
- `Navigator.sendBeacon()` 常使用在埋点场景，浏览器会把放在队列里，所以页面关闭也会正常发送

## 10. 普通函数和箭头函数在 this 绑定上的区别

### 10.1. 普通函数的 this

普通函数的 this 是**动态绑定**的，取决于**函数的调用方式**：

```javascript hl:1,7,16,23
// 1. 直接调用：this 指向全局对象（非严格模式）或 undefined（严格模式）
function normalFunc() {
    console.log(this);
}
normalFunc(); // window 或 undefined

// 2. 作为对象方法调用：this 指向调用该方法的对象
const obj = {
    name: 'object',
    method: function() {
        console.log(this.name);
    }
};
obj.method(); // 'object'

// 3. 构造函数调用：this 指向新创建的实例
function Person(name) {
    this.name = name;
}
const person = new Person('John');
console.log(person.name); // 'John'

// 4. call/apply/bind 调用：this 指向指定的对象
const context = { name: 'custom' };
normalFunc.call(context);   // { name: 'custom' }
normalFunc.apply(context);  // { name: 'custom' }
const boundFunc = normalFunc.bind(context);
boundFunc();               // { name: 'custom' }
```

### 10.2. 箭头函数的 this

箭头函数的 this 是**词法绑定**的，**继承自定义时所在的上下文**：

```javascript hl:1,20
// 1. 继承外层作用域的 this
const obj = {
    name: 'object',
    normalMethod: function() {
        // 箭头函数继承 normalMethod 的 this
        const arrowFunc = () => {
            console.log(this.name);
        };
        arrowFunc();
    },
    arrowMethod: () => {
        // 这里的 this 继承全局作用域的 this
        console.log(this.name);
    }
};

obj.normalMethod(); // 'object'
obj.arrowMethod();  // undefined

// 2. 不能通过 call/apply/bind 改变 this
const arrowFunc = () => {
    console.log(this);
};

const context = { name: 'custom' };
arrowFunc.call(context);   // window
arrowFunc.apply(context);  // window
const boundFunc = arrowFunc.bind(context);
boundFunc();              // window
```

### 10.3. 常见问题和解决方案

#### 10.3.1. **定时器中的 this**

```javascript hl:1,11,21
// 问题：普通函数
const obj = {
    name: 'object',
    delayLog: function() {
        setTimeout(function() {
            console.log(this.name); // undefined
        }, 1000);
    }
};

// 解决方案 1：使用箭头函数
const obj1 = {
    name: 'object',
    delayLog: function() {
        setTimeout(() => {
            console.log(this.name); // 'object'
        }, 1000);
    }
};

// 解决方案 2：保存 this
const obj2 = {
    name: 'object',
    delayLog: function() {
        const self = this;
        setTimeout(function() {
            console.log(self.name); // 'object'
        }, 1000);
    }
};
```

#### 10.3.2. **事件处理中的 this**

```javascript hl:1,15,26
// 问题：类方法作为事件处理器
class Handler {
    constructor() {
        this.name = 'handler';
    }
    
    handleClick() {
        console.log(this.name);
    }
}

const handler = new Handler();
button.addEventListener('click', handler.handleClick); // undefined

// 解决方案 1：箭头函数
class Handler1 {
    constructor() {
        this.name = 'handler';
    }
    
    handleClick = () => {
        console.log(this.name);
    }
}

// 解决方案 2：bind
class Handler2 {
    constructor() {
        this.name = 'handler';
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        console.log(this.name);
    }
}
```

#### 10.3.3. **回调函数中的 this**

```javascript hl:1,10,16
// 问题：回调函数中的 this 丢失
class DataFetcher {
    constructor() {
        this.data = [];
    }
    
    fetchData() {
        fetch('api/data')
            .then(function(response) {
                // this 指向 undefined 或 window
                this.data = response.json();
            });
    }
}

// 解决方案：使用箭头函数
class DataFetcher1 {
    constructor() {
        this.data = [];
    }
    
    fetchData() {
        fetch('api/data')
            .then(response => {
                // this 正确指向 DataFetcher 实例
                this.data = response.json();
            });
    }
}
```

### 10.4. 总结

1. 普通函数的 this 是动态的，取决于调用方式
2. 箭头函数的 this 是静态的，继承定义时的上下文
3. 选择使用哪种函数取决于你是否需要动态的 this 绑定
4. 在需要保持 this 上下文的场景（如回调、事件处理器）中，箭头函数很有用
5. 在需要动态 this 的场景（如对象方法、原型方法）中，使用普通函数更合适

## 11. js 实现继承的方式有哪些？

### 11.1. es6

```javascript
class Parent {
  constructor(name) {
    this.name = name;
    this.colors = ["red", "blue"];
  }

  getName() {
    return this.name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  getAge() {
    return this.age;
  }
}

```
### 11.2. es5：原型链继承

```javascript
// 缺点：引用类型属性被所有示例共享
Child.prototype = new Parent();
```

### 11.3. es5：借用构造函数继承

```javascript
/*********************************************
 // 832: 借用构造函数继承
 优点1：避免引用类型属性被所有示例共享
 优点2：可以在 Child 中向 Parent 传参
 缺点：每次创建实例都会创建一遍方法
 *********************************************/
function Child(name) {
    // 832: 使用call函数
    Parent.call(this, name);
}
```

### 11.4. es5：原型链继承 + 借用构造函数

```javascript
/*********************************************
 // 832: 原型链继承 + 借用构造函数
 优点1：避免引用类型属性被所有示例共享
 优点2：可以在 Child 中向 Parent 传参
 优点3：方法不用重新创建，在原型链上
 *********************************************/
// 关键点1：
function Child(name) {
    Parent.call(this, name);
}

// 关键点2：
Child.prototype = new Parent();
Child.prototype.constructor = Child;
```

### 11.5. ES5： Object.create

```javascript
/*********************************************
 // 832: 即ES5 Object.create ， 将传入的对象作为创建的对象的原型
 缺点：引用类型属性被所有示例共享，和原型链一样
 *********************************************/
function myCreate(o) {
    function F() {
    }

    F.prototype = o;
    return new F();
}
```

### 11.6. es5：寄生式继承

```javascript
/*********************************************
 // 832: 寄生式继承
 缺点：每次创建实例都会创建一遍方法
 *********************************************/
function createObj(o) {
    let clone = Object.create(o);
    clone.sayName = function () {
        console.log('hi');
    }
    return clone;
}
```

### 11.7. es5：寄生组合式继承

```javascript
/*********************************************
 // 832: 寄生组合式继承
 优点1：这种方式的高效率体现它只调用了一次 Parent 构造函数，
 优点2：并且因此避免了在 Parent.prototype 上面创建不必要的、多余的属性。
 优点3：与此同时，原型链还能保持不变；因此，还能够正常使用 instanceof 和 isPrototypeOf。
 *********************************************/
function prototype(child, parent) {
    let p = Object.create(parent.prototype);
    p.constructor = child;
    child.prototype = p;
}
```

## 12. 手写 promise.all 、race 、retry

```javascript hl:4,26,53
Promise._race = (tasks) => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      // ::::Promise.resolve 包一层，以兼容非promise的情况
      Promise.resolve(arr[i])
        .then((res) => {
          // 某一promise完成后直接返回其值
          // 只要有一个promise完成，就返回
          resolve(res);
        })
        .catch((e) => {
          //如果有错误则直接结束循环，并返回错误
          reject(e);
        });
    }
  });
};

Promise.retry = function (promiseFn, times = 3) {
  return new Promise(async (resolve, reject) => {
    // times: 重试次数
    while (times--) {
      try {
        let ret = await promiseFn();
        resolve(ret);
        // 832: 如果成功了，就直接break了
        break;
      } catch (error) {
        if (!times) reject(error);
      }
    }
  });
};

Promise._all = (tasks) => {
  return new Promise((resolve, reject) => {
    let length = arr.length; //传入的promise的个数
    let count = 0; // 进入fullfilled 的promise个数
    const result = []; //创建一个等长的数组,放置结果
    // 当传递是一个空数组，返回一个为fulfilled状态的promise
    if (arr.length === 0) {
      return new Promise.resolve([]);
    }
    // 遍历数组
    for (let i = 0; i < arr.length; i++) {
      // ::::Promise.resolve 包一层，以兼容非promise的情况
      Promise.resolve(arr[i])
        .then((res) => {
          //// ::::这里是关键逻辑
          result[i] = res; //将每次结果保存在result数组中
          count++; //个数加1
          //是否所有的promise都进入fullfilled状态
          if (count === length) {
            resolve(result); //返回结果
          }
        })
        .catch((e) => {
          reject(e); //如果有错误则直接结束循环，并返回错误
        });
    }
  });
};

```

## 13. 深拷贝最终实现

```javascript
function fn(obj, map = new WeakMap()) {
  // 基本数据类型
  if (
    ["String", "Boolean", "Number", "Null", "Undefined"].includes(getType(obj))
  ) {
    return obj;
  }

  // 如果是对象
  if (map.get(obj)) {
    return obj;
  }

  let target = Array.isArray(obj) ? [] : {};
  map.set(obj, target);

  // TODO 这个不会检测出symbol
  // 1、可以使用Reflect.keys 全部能检测出全部keys
  // 2、可以使用 Object.getOwnPropertySymbols(obj) 检测出symbol keys
  Reflect.ownKeys(obj).forEach((key) => {
    // 改动
    if (isObject(obj[key])) {
      target[key] = fn(obj[key], map);
    } else {
      target[key] = obj[key];
    }
  });

  return target;
}

```

## 14. 遍历对象的方式都有哪些？

- 使用 `Object.keys()` 当：
    - 只需要`可枚举`属性
    - 不返回继承的属性
    - 不需要 Symbol 属性
    - 性能是主要考虑因素
        - `Object.keys()` 通常性能更好，因为它只处理可枚举属性
- 使用 `Reflect.ownKeys()` 当：
    - 需要完整的属性列表
    - 不返回继承的属性
    - 需要包含 Symbol 属性
    - 需要不可枚举属性
    - 需要确保特定的属性顺序
- **for...in 循环**
	- 返回**所有可枚举**属性，包括**继承**的
	- 不返回 Symbol 属性
- 在开发工具、框架或需要完整反射功能的场景中，`Reflect.ownKeys()` 是更好的选择

### 14.1. 选择指南

1. **需要遍历继承的属性**
    - 使用 `for...in`
2. **只需要自身可枚举属性**
    - 使用 `Object.keys()`
3. **需要所有属性（包括不可枚举）**
    - 使用 `Object.getOwnPropertyNames()`
4. **需要 Symbol 属性**
    - 使用 `Object.getOwnPropertySymbols()`
5. **需要所有类型的属性**
    - 使用 `Reflect.ownKeys()`
6. **需要键值对**
    - 使用 `Object.entries()`
7. **只需要值**
    - 使用 `Object.values()`

## 15. 柯里化

### 15.1. 参数固定场景

实现 add(1)(2)(3) 或者 add(1,2)(3) 等等都相等

```javascript hl:4,8
function curry(fn, ...arg1) {
  // fn.length 函数的形参个数
  // arg1.length 传入的实参个数
  // 如果传入的实参个数大于等于函数的形参个数，则直接执行函数
  if (arg1.length >= fn.length) {
    return fn(...arg1);
  }
  // 否则，返回一个新函数，接收剩余的参数
  return (...arg2) => {
    return curry(fn, ...arg1, ...arg2);
  };
}

// 三个参数的函数
function add(a, b, c) {
  return a + b + c;
}

const curryAdd = curry(add);

console.log(curryAdd(1)(2)(3)); // 6
console.log(curryAdd(1, 2)(3)); // 6
console.log(curryAdd(1)(2, 3)); // 6

// 四个参数的函数
function add2(a, b, c, d) {
  return a + b + c + d;
}

const curryAdd2 = curry(add2);

console.log(curryAdd2(1)(2)(3)(4)); // 10
console.log(curryAdd2(1, 2)(3)(4)); // 10
console.log(curryAdd2(1)(2, 3)(4)); // 10
console.log(curryAdd2(1)(2)(3, 4)); // 10
console.log(curryAdd2(1, 2, 3)(4)); // 10
console.log(curryAdd2(1, 2)(3, 4)); // 10
console.log(curryAdd2(1)(2, 3, 4)); // 10

```

### 15.2.  参数不固定场景

闭包函数中实现真正的逻辑

```javascript hl:8,17,26
function add(...args) {
  let vars = [];
  // 闭包,返回一个函数，并且把所有参数都保存在vars中
  const curry = (...args2) => {
    vars = [...vars, ...args2];
    return curry;
  };
  // 真正的求和函数
  curry.sumof = () => {
    let res = 0;
    for (let i = 0; i < vars.length; i++) {
      res += vars[i];
    }
    return res;
  };

  // 真正的求积函数
  curry.product = () => {
    let res = 1;
    for (let i = 0; i < vars.length; i++) {
      res *= vars[i];
    }
    return res;
  };

  // 返回一个这个闭包函数
  return curry(...args);
}

console.log(add(1, 2, 3).sumof()); // 6
console.log(add(1, 2, 3)(4).sumof()); // 10
console.log(add(1, 2, 3)(4, 5).sumof()); // 15
console.log(add(1, 2, 3)(4, 5)(6).sumof()); // 21

console.log(add(1, 2, 3).product()); // 6
console.log(add(1, 2, 3)(4).product()); // 24
console.log(add(1, 2, 3)(4, 5).product()); // 120
console.log(add(1, 2, 3)(4, 5)(6).product()); // 720
console.log(add(1)(2)(3)(4)(5)(6).product()); // 720

```

### 15.3. 总结

柯里化是将一个多参数函数转换为一系列单参数函数的过程，使用场景为：
- 参数复用
- 延迟计算
- 动态创建函数
- 参数验证
- 日志系统

但其实，问题更多，比如
- 过度使用柯里化可能降低代码`可读性`
- 柯里化会创建多个闭包，可能影响性能
- 调试困难

## 16. 手写单例模式

```javascript
// class的方式
class Single {
  show() {
    console.log("我是一个单例对象");
  }
  // 静态方法, 用来获取Single类的唯一实例
  static getInstance() {
    // 判断是否已经new过1个实例
    if (!Single.instance) {
      // 若这个唯一的实例不存在，那么先创建它
      Single.instance = new Single();
    }
    // 如果这个唯一的实例已经存在，则直接返回
    return Single.instance;
  }
}

```

## 17. 登录单例

```javascript hl:50
class Login {
  //构造器
  constructor() {
    this.init();
  }

  //初始化方法
  init() {
    //新建div
    let mask = document.createElement("div");
    //添加样式
    mask.classList.add("mask-layer");
    //添加模板字符串
    mask.innerHTML = `<div class="login-wrapper">
      <div class="username-input user-input">
        <span class="login-text">用户名:</span>
        <input type="text">
      </div>
      <div class="pwd-input user-input">
        <span class="login-text">密码:</span>
        <input type="password">
      </div>
      <div class="btn-wrapper">
        <button class="confrim-btn">确定</button>
        <button class="clear-btn">清空</button>
      </div>
    </div>
    `;
    //插入元素
    document.body.insertBefore(mask, document.body.childNodes[0]);
    //注册关闭登录框事件
    Login.addCloseLoginEvent();
  }

  //静态方法: 获取元素
  static getLoginDom(cls) {
    return document.querySelector(cls);
  }

  //静态方法: 注册关闭登录框事件
  static addCloseLoginEvent() {
    this.getLoginDom(".close-btn").addEventListener("click", () => {
      //给遮罩层添加style, 用于隐藏遮罩层
      this.getLoginDom(".mask-layer").style = "display: none";
    });
  }

  //静态方法: 获取实例(单例)
  // 我们调用Login.getInstance()实例化了一个登陆框，
  // 且在之后的点击中，并没有重新创建新的登陆框，只是移除掉了"display: none"这个样式来显示登陆框，节省了内存开销。
  static getInstance() {
    // :如果实例不存在, 则创建实例
    if (!this.instance) {
      this.instance = new Login();
      // 否则，展示遮罩层，即显示登陆框
    } else {
      // 移除遮罩层style, 用于显示遮罩层
      this.getLoginDom(".mask-layer").removeAttribute("style");
    }
    // 返回实例
    return this.instance;
  }
}

```

## 18. 实现一个简单的classname

### 18.1. 使用示例

```javascript
// 使用示例
console.log(
  className(
    "button",
    {
      "btn-primary   btn-large": true,
      "btn-disabled": false,
    },
    ["active", ["nested", "  multiple   spaces  "]],
    null,
    undefined,
    { error: true },
  ),
); // 'button btn-primary btn-large active nested multiple spaces error
```

### 18.2. 实现一个classname

```javascript hl:4,9,15,18
function classNames(...args) {
  let res = [];
  // 遍历参数
  for (let item of args) {
    // 如果是字符串或者数字，直接放到arr里面，需要判断是否为真
    if (typeof item === "string" || typeof item === "number" && !!item) {
      res.push(item);
      // 如果是数组，递归调用,使用 item.flat(Infinity)
    } else if (Array.isArray(item)) {
      item.flat(Infinity).forEach((it) => {
        res.push(it);
      });
    }
    //  如果是对象，需要过滤掉 null
    else if (typeof item === "object" && item !== null) {
      Object.entries(item).forEach(([k, v]) => {
        if (v) {
          res.push(k);
        }
      });
    }
  }

  // 返回
  return res;
}
```

## 19. 实现一个 Array.map

```javascript hl:1,15
// 不指定指定上下文参数
Array.prototype._map = function (fn) {
  // 错误处理
  if (!Array.isArray(this) || typeof fn != "function") {
    throw new Error("has Error, please check!");
  }
  let arr = this;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res[i] = fn(arr[i], i, arr);
  }
  return res;
};

// 指定上下文参数
Array.prototype._map1 = function (fn, context) {
  // 错误处理
  if (!Array.isArray(this) || typeof fn !== "function") {
    throw new Error("has Error, please check!");
  }

  let arr = this;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res[i] = fn.call(context, arr[i], i, arr);
  }
  return res;
};

```

## 20. 实现一个双向绑定

### 20.1. 使用 proxy 

```javascript
`<input id="input" type="text"/>
<div id="text"></div>
`;

let input = document.getElementById("input");
let text = document.getElementById("text");

let data = { value: "" };

new Proxy(data, {
  /**
   * @param target 指向data
   * @param p 属性值，比如value
   * */
  get(target, p, receiver) {
    return input.value;
  },
  set(target, p, value, receiver) {
    target[p] = value;
    // 直接做渲染,更好做法是写一个render函数放外面去
    text.innerHTML = target[p];
    input.value = target[p];
  },
});

// 需要监听onkeyup事件
input.onkeyup = function (e) {
  data.value = e.target.value;
};

```

### 20.2. 使用 `Object.defineProperty`

```javascript
`
<input id="input" type="text"/>
<div id="text"></div>
`;
let input = document.getElementById("input");
let text = document.getElementById("text");

let data = { value: "" };

Object.defineProperty(data, "value", {
  set: function (val) {
    text.innerHTML = val;
    input.value = val;
  },
  get: function () {
    return input.value;
  },
});

// 需要监听onkeyup事件
input.onkeyup = function (e) {
  data.value = e.target.value;
};

```

## 21. 如何判断一个对象中是否循环引用了

### 21.1. 方法1：直接遍历，借助一个 `weakSet` 对象，如果已经命中了，则说明循环引用了

```javascript
function hasCircularReference(obj) {
    const seen = new WeakSet();
    
    function detect(value) {
        // 处理基础类型
        if (value === null || typeof value !== 'object') {
            return false;
        }
        
        // 检测循环引用
        if (seen.has(value)) {
            return true;
        }
        
        seen.add(value);
        
        // 处理数组
        if (Array.isArray(value)) {
            return value.some(item => detect(item));
        }
        
        // 处理对象
        return Object.values(value).some(item => detect(item));
    }
    
    return detect(obj);
}

// 测试用例
// 1. 简单循环引用
const obj1 = { a: 1 };
obj1.b = obj1;
console.log(hasCircularReference(obj1));  // true

// 2. 数组循环引用
const arr = [1, 2, 3];
arr.push(arr);
console.log(hasCircularReference(arr));  // true

// 3. 深层循环引用
const obj2 = {
    a: {
        b: {
            c: {}
        }
    }
};
obj2.a.b.c.d = obj2.a;
console.log(hasCircularReference(obj2));  // true

// 4. 无循环引用
const obj3 = {
    a: 1,
    b: {
        c: 2,
        d: [1, 2, 3]
    }
};
console.log(hasCircularReference(obj3));  // false

```

### 21.2. 方法二：借助`JSON.toString()` 捕获报错信息

## 22. 手写一个 new

```javascript
function _new(fn, ...args) {
  const obj = Object.create(fn.prototype);
  const ret = fn.apply(obj, args);
  return ret instanceof Object ? ret : obj;
}

```

## 23. 实现一个拖拽会话框

### 23.1. 轮廓代码

```javascript
class Dialog {
  constructor(text) {
    this.lastX = 0;
    this.lastY = 0;
    this.x;
    this.y;
    this.text = text || "";
    this.isMoving = false;
    this.dialog;
  }
  // 打开对话框
  open() {}
  // 关闭对话框
  close() {}
  // 鼠标按下
  handleMousedown(e) {}
  // 鼠标移动
  handleMousemove(e) {}
  // 鼠标抬起
  handleMouseup(e) {}
}

let dialog = new Dialog("Hello");
dialog.open();

```

### 23.2. 具体实现和使用

```javascript
class Dialog {
  constructor(text) {
    this.lastX = 0;
    this.lastY = 0;
    this.x;
    this.y;
    this.text = text || "";
    this.isMoving = false;
    this.dialog;
  }
  open() {
    const model = document.createElement("div");
    model.id = "model";
    model.style = `
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        background-color:rgba(0,0,0,.3);
        display:flex;
        justify-content: center;
        align-items: center;`;
    model.addEventListener("click", this.close.bind(this));
    document.body.appendChild(model);
    this.dialog = document.createElement("div");
    this.dialog.style = `
        padding:20px;
        background-color:white`;
    this.dialog.innerText = this.text;
    this.dialog.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    this.dialog.addEventListener("mousedown", this.handleMousedown.bind(this));
    document.addEventListener("mousemove", this.handleMousemove.bind(this));
    document.addEventListener("mouseup", this.handleMouseup.bind(this));
    model.appendChild(this.dialog);
  }
  close() {
    this.dialog.removeEventListener("mousedown", this.handleMousedown);
    document.removeEventListener("mousemove", this.handleMousemove);
    document.removeEventListener("mouseup", this.handleMouseup);
    document.body.removeChild(document.querySelector("#model"));
  }
  handleMousedown(e) {
    this.isMoving = true;
    this.x = e.clientX;
    this.y = e.clientY;
  }
  handleMousemove(e) {
    if (this.isMoving) {
      this.dialog.style.transform = `translate(${e.clientX - this.x + this.lastX}px,${e.clientY - this.y + this.lastY}px)`;
    }
  }
  handleMouseup(e) {
    this.lastX = e.clientX - this.x + this.lastX;
    this.lastY = e.clientY - this.y + this.lastY;
    this.isMoving = false;
  }
}
let dialog = new Dialog("Hello");
dialog.open();

```