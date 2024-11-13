
# 常见面试题二


`#前端面试`  


## 目录
<!-- toc -->
 ## 1. 函数声明会被提升到作用域的顶部 

```javascript hl:5
// 为什么不会报错？
// 因为函数声明会被提升到作用域的顶部，
console.log(832, foo);

// 如果改成 var foo = function 则会报错
function foo() {
  console.log("foo");
}

var foo = 1;

```

![图片&文件](./files/20241024.png)


## 2. this 的指向问题

### 2.1. 非严格模式

```javascript hl:18,21,24
// 非严格模式下，this 的值为 undefined 的时候，其值会被隐式转换为全局对象。
var value = 1;

var foo = {
  value: 2,
  bar: function () {
    return this.value;
  },
};

//示例1
console.log(foo.bar()); // 2
//示例2
console.log(foo.bar()); // 2
//示例3：
// 为什么这里会是 1 呢？ 因为 foo.bar 赋值给了一个变量，然后调用这个变量，相当于调用全局的 bar 函数
console.log((foo.bar = foo.bar)()); // 1
//示例4：false || foo.bar 返回的是函数 foo.bar，所以调用后，输出的是 1
console.log((false || foo.bar)()); // 1

//示例5: true && foo.bar 返回的是函数 foo.bar，所以调用后，输出的是 1
(true && foo.bar)(); // 1

//示例6: 逗号操作符返回最后一个表达式的值，所以这里返回的是 foo.bar 函数，调用这个函数相当于调用全局的 bar 函数，所以输出的是 1
console.log((foo.bar, foo.bar)()); // 1

```

![图片&文件](./files/20241024-1.png)


### 2.2. 严格模式

![图片&文件](./files/20241024-2.png)


## 3. 模块模式

```javascript
// 就是一个闭包，返回一些方法
// 立即执行函数
var counter = (function(){
    var i = 0;
    return {
        get: function(){
            return i;
        },
        set: function(val){
            i = val;
        },
        increment: function(){
            return ++i;
        }
    }
}());
```


## 4. apply/call/bind 的区别及简易实现

### 4.1. 区别

1. call 和 apply 的区别主要在于参数的传递方式:
    - call 接受一系列参数：`fn.call(obj,arg1,arg2)`
    - apply 接受一个参数数组：`fn.apply(obj,[arg1,arg2])`
2. bind 与 call/apply 的主要区别:
    - call 和 apply 会**立即执行**函数
    - bind 返回一个新函数,可以稍后执行
3. 使用场景:
    - call/apply: 当你想**立即调用函数**,并`临时`改变 this 指向时使用
    - bind: 当你想创建一个**永久改变 this 指向**的新函数时使用,常用于回调函数中保持 this 指向

### 4.2. 手写 apply

```javascript
// 使用ES6语法实现的apply 
Function.prototype._apply = function (context = window, args) {
  // 首先要获取那个函数调用了 apply ，即 this
  // 比如 foo.apply(bar, [1, 2, 3]) , 这里的 this 就是 foo
  context.fn = this;

  let res;
  if (Array.isArray(args)) {
    res = context.fn(...args);
  } else {
    // none args
    res = context.fn();
  }

  delete context.fn;
  return res;
};

```

### 4.3. 手写 call

```javascript
// 使用ES6语法实现的call: 记得使用扩展运算符
Function.prototype._call = function (context = window, ...args) {
  // 首先要获取那个函数调用了 call ，即 this
  // 比如 foo.call(bar, 1, 2, 3) , 这里的 this 就是 foo
  context.fn = this;

  let res = context.fn(...args);

  delete context.fn;
  return res;
};
```

### 4.4. 手写 bind

```javascript hl:4,7
// 使用ES6语法实现的bind
Function.prototype._bind = function (context = window, ...args) {
  let fn = this;
  // 返回的一个新函数: 注意这里需要合并参数
  return function (...newArgs) {
    return fn.apply(context, args.concat(newArgs));
    // 如果要求不能使用 apply, 那么就使用 上面定义的 _apply
    // return fn._apply(context, args.concat(newArgs));
  };
};
```

## 5. 获取函数参数的方法

- 使用 `arguments` 对象
	- ![图片&文件](./files/20241024-3.png)
- 使用**扩展运算符**
	- `function fn(first, ...args) {}`


## 6. 自己实现 myInstanceof


```javascript hl:3,5
function myInstanceof(left, right) {

  // 获取对象的原型，使用 Object.getPrototypeOf()
  let proto = Object.getPrototypeOf(left); 
  // 或者使用 left.__proto__
  // let proto = left.__proto__; 
  let prototype = right.prototype; // 获取构造函数的原型对象

  while (true) {
    // 查找到尽头，还没找到, 返回 false
    if (proto === null) {
      return false;
    }
    // 找到相同的原型对象，返回 true
    if (proto === prototype) {
      return true;
    }
    // 继续查找, 直到找到相同的原型对象
    proto = Object.getPrototypeOf(proto);
  }
}
```


## 7. 原型链


![图片&文件](./files/20241024-4.png)

## 8. 如何清除浮动

- 子元素设置浮动时，父元素设置为 BFC，比如 `overflow:hidden`
- 前后两个兄弟元素，前一个设置了浮动  `float:left`，后一个把前一个覆盖了
	- 后一个设置为 BFC 即可，比如 `overflow:hidden

## 9. z-index 的规则

- 在同一个层叠上下文领域，**谁大谁上**
- 当元素的层叠水平一致时，**后来居上**

## 10. CSS 性能优化

- 文件压缩
- css 动画启用`GPU`加速，一些图形渲染的`放心交给GPU`
- 避免`@import`
- 减少`css嵌套`
- 减少过分`重排`
- `不要table布局`，一个很小的改动会导致 `致table重新布局`
- `css 选择器，不要通配符`

## 11. css 优先级计算规则

![图片&文件](./files/20241024-5.png)

## 12. CSS 的编写方式有哪些？

- 手写源生 CSS
- 使用预处理器 `Sass/Less`
- 使用后处理器 `PostCSS` 、`css`的`babel` （类比于js）
- 使用 **css modules**
- 使用 **css in js**

## 13. 实现字符串的翻转

三种方法：

![图片&文件](./files/20241024-6.png)


## 14. 实现 trim

两种写法： `/^\s+|\s+$/`  ，注意使用 `^`  和 `$`

![图片&文件](./files/20241024-7.png)

## 15. 实现千分位

![图片&文件](./files/20241024-8.png)

关键点：
- 使用 replace 的第二个函数参数
- `x(?=y)`  
- `$` 匹配结束，应该从后往前匹配
- 遍历的话，需要转成数组
	- 遍历需要 reverse 
	- 或者 倒着遍历

## 16. 防抖和节流的实现

- 防抖：即 `只执行最后一次` ， 比如 resize 和 sug ，按钮提交、表单验证、
- 节流：即`单位时间只执行一次`，比如滚动加载更多，拖拽移动事件


```javascript hl:3,15
function debounce(fn, ms) {
  let timer = null;
  // 返回一个函数
  return function (...args) {
    timer && clearTimeout(timer);
    // 清除，重新settimeout
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, ms);
  };
}

function throttle(fn, ms) {
  let timer = null;
  // 返回一个函数
  return function (...args) {
    // 保证一段时间只执行一次
    // 如果 timer 存在，说明已经执行过了，直接返回
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
      }, ms);
    }
  };
}

function throttle(fn, ms) {
  let start = 0;
  return function (...args) {
    if (Date.now() - start > ms) {
      start = Date.now();
      fn.apply(this, args);
    }
  }
}

```


## 17. 实现一个简易的发布订阅模式

### 17.1. 简易实现

```javascript
class Event {
  constructor(props) {
    // 事件对象, 事件类型, 回调函数队列
    this._events = Object.create(null);
  }

  //订阅事件
  on(type, fn) {
    this._events[type].push(fn);
  }

  // 取消订阅
  off(type, fn) {
    // 找this._events[type]下的fn，remove 它
    // 如果该类型的事件存在，且是数组
    if (Array.isArray(this._events[type])) {
      this._events[type] = this._events[type].filter((event) => {
        return event !== fn && event.origin !== fn;
      });
    }
  }

  // 只订阅一次
  once(type, fn) {
    const only = (...args) => {
      fn.apply(this, args);
      this.off(type, fn);
    };
    only.origin = fn;
    this.add(type, only);
  }

  // 触发事件，type 为事件类型，args 为传递的参数
  emit(type, ...args) {
    // 遍历执行
    if (Array.isArray(this._events[type])) {
      this._events[type].forEach((fn) => {
        fn.apply(this, args);
      });
    }
  }
}
```

### 17.2. 使用

```javascript
// 使用
// 使用示例
const eventEmitter = new Event();

// 订阅事件
function onMessage(data) {
  console.log("Received message:", data);
}
eventEmitter.on("message", onMessage);

// 发布事件
eventEmitter.emit("message", "Hello, World!");

// 取消订阅
eventEmitter.off("message", onMessage);

```

## 18. 简易的观察者模式

```javascript
// 主题类（小宝宝）
class Subject {
  constructor(name) {
    this.name = name;
    this.observers = []; // 存储观察者的数组
    // 小宝宝的状态
    this.state = "开心"; // 难受、开心、生气
  }

  // 添加观察者
  add(observer) {
    this.observers.push(observer);
  }

  // 移除观察者
  remove(observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  // 通知所有观察者
  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }

  // 某些状态变化时调用，用于通知观察者
  setState(state) {
    this.state = state;
    this.notify(this.state);
  }
}

// 观察者类
class Observer {
  constructor(name) {
    this.name = name;
  }

  // 当收到主题的通知时调用
  update(data) {
    console.log(`${this.name} 观察到了小宝宝状态: ${data}`);
  }
}

// 测试代码
// 创建一个小宝宝主题
const baby = new Subject("小宝宝");

// 创建爸爸和妈妈两个观察者
const father = new Observer("爸爸");
const mother = new Observer("妈妈");

// 爸爸和妈妈订阅小宝宝，关心小宝宝的状态
baby.add(father);
baby.add(mother);

// 小宝宝状态变化，通知所有观察者
baby.setState("难受");

// 输出：
// 爸爸 观察到了小宝宝状态: 难受
// 妈妈 观察到了小宝宝状态: 难受

// 小宝宝状态变化，通知所有观察者
baby.setState("开心");

// 输出：
// 爸爸 观察到了小宝宝状态: 开心
// 妈妈 观察到了小宝宝状态: 开心

// 移除观察者
baby.remove(father);
```

## 19. 单例模式

### 19.1. 使用场景

- `window`对象
- 登录模态框
- 全局缓存池
- 状态管理库：理论上都是一个单例
- 日志记录器： 单例模式可以用于创建一个全局的日志记录器，确保所有日志都通过同一个实例处理
- 数据库连接池：在需要管理数据库连接的应用中，单例模式可以用来创建和管理连接池，确保高效地重用连接

### 19.2. 简易实现

```javascript hl:3,10,23
class Singleton {
  constructor() {
    // 如果没有实例，则创建实例
    if (!Singleton.instance) {
      // 初始化代码
      this.data = [];
      // 保存实例的引用
      Singleton.instance = this;
    }
    // 如果有则返回
    return Singleton.instance;
  }

  // 实例方法
  addItem(item) {
    this.data.push(item);
  }

  getItems() {
    return this.data;
  }
  
  // 静态方法：惰性单例的实现关键点
  static getInstance() {
    // 如果没有实例，则创建实例
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    // 如果有则返回
    return Singleton.instance;
  }
}

// 使用示例
const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // 输出: true

instance1.addItem("Item 1");
instance2.addItem("Item 2");

console.log(instance1.getItems()); // 输出: ["Item 1", "Item 2"]
console.log(instance2.getItems()); // 输出: ["Item 1", "Item 2"]

```


### 19.3. 使用场景：简易状态管理

```javascript hl:7,6
class StateManager {
  constructor() {
    if (StateManager.instance) {
      return StateManager.instance;
    }
    this.state = {};
    StateManager.instance = this;
  }

  setState(key, value) {
    this.state[key] = value;
  }

  getState(key) {
    return this.state[key];
  }

  static getInstance() {
    if (!StateManager.instance) {
      StateManager.instance = new StateManager();
    }
    return StateManager.instance;
  }
}

// 使用
const stateManager = StateManager.getInstance();
stateManager.setState('user', { name: 'John', id: 1 });
console.log(stateManager.getState('user')); // { name: 'John', id: 1 }

```

### 19.4. 场景：日志记录

```javascript hl:6,7
class Logger {
  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }
    this.logs = [];
    Logger.instance = this;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push(`${timestamp}: ${message}`);
    console.log(`${timestamp}: ${message}`);
  }

  getLogs() {
    return this.logs;
  }

  static getInstance() {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }
}

// 使用
const logger = Logger.getInstance();
logger.log("User logged in");
logger.log("API call failed");
console.log(logger.getLogs());

```

### 19.5. 模态框

```javascript hl:6,10,15,22
class ModalManager {
  constructor() {
    if (ModalManager.instance) {
      return ModalManager.instance;
    }
    this.modal = null;
    ModalManager.instance = this;
  }

  openModal(content) {
    this.modal = { content, isOpen: true };
    this.render();
  }

  closeModal() {
    if (this.modal) {
      this.modal.isOpen = false;
      this.render();
    }
  }

  render() {
    // 实际应用中，这里会更新DOM
    console.log(this.modal ? "Modal is open" : "Modal is closed");
  }

  static getInstance() {
    if (!ModalManager.instance) {
      ModalManager.instance = new ModalManager();
    }
    return ModalManager.instance;
  }
}

// 使用
const modalManager = ModalManager.getInstance();
// 打开模态框
modalManager.openModal("Hello World");
// 关闭模态框
modalManager.closeModal();

```

### 19.6. 模拟登录

通过**单例模式**来实现, 保证页面中只有一个登录框, 且只能通过`getInstance`方法获取

```javascript hl:7,40,45,53
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
    mask.innerHTML = `
          <div class="login-wrapper">
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
    Login.closeLogin();
  }
  //静态方法: 获取元素
  static getLoginDom(cls) {
    return document.querySelector(cls);
  }

  // 静态方法: 打开登录框
  static openLogin() {
    this.getLoginDom(".mask-layer").style = "display: block";
  }

  //静态方法: 注册关闭登录框事件
  static closeLogin() {
    this.getLoginDom(".close-btn").addEventListener("click", () => {
      //给遮罩层添加style, 用于隐藏遮罩层
      this.getLoginDom(".mask-layer").style = "display: none";
    });
  }

  //静态方法: 获取实例(单例)
  static getInstance() {
    if (!this.instance) {
      this.instance = new Login();
    } else {
      //移除遮罩层style, 用于显示遮罩层
      this.getLoginDom(".mask-layer").removeAttribute("style");
    }
    return this.instance;
  }
}


```


### 19.7. 使用方法

```javascript
// 使用方法:
// 1. 通过getInstance方法获取实例
let login1 = Login.getInstance();
// 2. 通过openLogin方法打开登录框
login1.openLogin();
// 3. 通过closeLogin方法关闭登录框
login1.closeLogin();

let login2 = Login.getInstance();
login2.openLogin();
login2.closeLogin();

login1 === login2; // true

```

## 20. 说说常见的设计模式

- 单例：如`jQuery库`、`登陆的弹窗` ，惰性单例等
- 原型模式：如 `js 的原型链`
- 适配器模式：如`nodeJS`做聚合
- 代理模式，比如`new Proxy`
- 装饰器模式，如ts中，或者 angular 或者 react 的话，比如`@connect` redux的用法
- 组合模式：我理解像Vue的组合式API，或者 react 自定义`hooks` 也有组合模式的影子
- 迭代器模式
- 发布-订阅模式 、 观察者模式