
# 常见的设计模式

`#javascript` 


## 目录
<!-- toc -->
 ## 1. 总结 

- 模块模式：立即执行函数
- 发布订阅模式
- 观察者模式
- 单例模式
	- widow对象
	- 状态管理库
	- 全局缓存池
	- 日志记录器：
	- 登录模态框
	-  如`jQuery库`、`登陆的弹窗` ，惰性单例等
- 原型模式：
	- 如 `js 的原型链`
- 适配器模式：
	- 如`nodeJS`做聚合
- 代理模式
	- 比如`new Proxy`
- 装饰器模式
	- 比如`@connect` redux 的用法
	- NG 的 `@component`
- 组合模式：
	- 我理解像 Vue 的组合式API，或者 react 自定义`hooks` 也有组合模式的影子
- 迭代器模式

## 2. 模块模式

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

## 3. 实现一个简易的发布订阅模式

### 3.1. 简易实现

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

### 3.2. 使用

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

## 4. 简易的观察者模式

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

## 5. 单例模式

### 5.1. 使用场景

- `window`对象
- 登录模态框
- 全局缓存池
- 状态管理库：
	- 理论上都是一个单例
- 日志记录器： 
	- 单例模式可以用于创建一个全局的日志记录器，确保所有日志都通过同一个实例处理
- 数据库连接池：
	- 在需要管理数据库连接的应用中，单例模式可以用来创建和管理连接池，确保高效地重用连接

### 5.2. 简易实现

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

### 5.3. 使用场景：简易状态管理

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

### 5.4. 场景：日志记录

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

### 5.5. 模态框

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

### 5.6. 模拟登录

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

### 5.7. 使用方法

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

## 6. 说说常见的设计模式

- 单例：
	- 如`jQuery库`、`登陆的弹窗` ，惰性单例等
- 原型模式：
	- 如 `js 的原型链`
- 适配器模式：
	- 如`nodeJS`做聚合
- 代理模式
	- 比如`new Proxy`
- 装饰器模式
	- 如ts中，或者 angular 或者 react 的话，比如`@connect` redux的用法
- 组合模式：
	- 我理解像Vue的组合式API，或者 react 自定义`hooks` 也有组合模式的影子
- 迭代器模式
- 发布-订阅模式 、 观察者模式

## 7. 手写单例模式

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

## 8. 登录单例

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

