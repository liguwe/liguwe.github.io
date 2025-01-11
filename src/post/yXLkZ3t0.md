
# this 指向问题汇总


## 目录
<!-- toc -->
 ## 2. this 指向问题 1 

总结：
- 箭头函数的 `this` 是**词法作用域**的 this，在定义时就确定了
- 普通函数的 `this` 是**动态**的，取决于调用方式
- 如果需要方法中的 `this` 指向**对象本身**，应该：
    1. 使用普通函数定义方法
    2. 或在**对象方法**内部定义箭头函数
    3. 或在类的**构造函数**中定义箭头函数

```javascript 
const obj = {
  fn1: () => {
    // this 指向定义时所在的对象，即 window
    // 如果 new 调用，则报错
    console.log(this);
  },
  fn2: function () {
    console.log("fn2", this);
  },
  fn2: function () {
    // 这里的箭头函数继承了 fn2 的 this
    const arrowFn = () => {
      console.log(this);
      // 这里的 this 会指向 obj
    };
    arrowFn();
  },
};

obj.fn1(); // Window {...}

// 因为还是在 obj.fn 下面调用
obj.fn2(); // { fn1: [Function: fn1], fn2: [Function: fn2] }

fn2 = obj.fn2;
// 这就是在 window 上面调用
fn2(); // Window {}

const x = new obj.fn1(); //  Uncaught TypeError: obj.fn1 is not a constructor
const y = new obj.fn2(); // fn2 {}
```

## 9. this 的问题

- 第 5 行**是在普通方法里面**

```javascript hl:5,8,14
var name = 123;
var obj = {
  name: 456,
  print: function () {
    // 这里的 this 指向 obj，作为对象的方法被调用
    console.log(this.name); // 456
    function a() {
      console.log(this.name); // 123
    }
    a();
  },
};

// 普通函数的 this 指向取决于在何处被调用，这里 a 函数是在全局作用域被调用的，所以 this 指向全局对象
obj.print(); // 123

```

> **a 函数是再全局作用域被调用的，因为它在 15 行调用的**

### a 函数为什么打印出 123

这是因为函数 `a` 是作为==普通函数调用的，而不是作为对象的方法调用==。

1. **函数调用的位置决定 this**：

```javascript
var name = 123;
var obj = {
    name: 456,
    print: function() {
        console.log(this.name); // 456
        function a() {
            console.log(this.name); // 123
        }
        a(); // 关键在这里！这是一个普通函数调用
    }
};
```

在这个例子中：
- `obj.print()` 是作为对象方法调用，所以 `print` 函数中的 `this` 指向 `obj`
- 但内部函数 `a()` 是作为普通函数调用的，相当于直接调用 `a()`，此时 `this` 指向全局对象（非严格模式下）

2. **解决方案**：
如果想让内部函数 `a` 中的 `this` 也指向 `obj`，有几种方法：

```javascript
// 方法1：使用变量保存外部的 this
var obj = {
    name: 456,
    print: function() {
        var that = this; // 保存外部 this
        function a() {
            console.log(that.name); // 456
        }
        a();
    }
};

// 方法2：使用箭头函数
var obj = {
    name: 456,
    print: function() {
        const a = () => {
            console.log(this.name); // 456
        }
        a();
    }
};

// 方法3：使用 bind
var obj = {
    name: 456,
    print: function() {
        function a() {
            console.log(this.name); // 456
        }
        a.bind(this)();
    }
};
```

3. **为什么会这样？**
JavaScript 中的 this 绑定规则如下：

```javascript
// 1. 默认绑定（普通函数调用）
function foo() {
    console.log(this); // window
}
foo();

// 2. 隐式绑定（作为对象方法调用）
const obj = {
    foo: function() {
        console.log(this); // obj
    }
};
obj.foo();

// 3. 显式绑定（使用 call, apply, bind）
function foo() {
    console.log(this);
}
foo.call(obj); // obj

// 4. new 绑定
function Foo() {
    console.log(this); // Foo 实例
}
new Foo();
```

4. **this 绑定的优先级**：
```
new 绑定 > 显式绑定 > 隐式绑定 > 默认绑定
```

在你的例子中：
```javascript
var name = 123;
var obj = {
    name: 456,
    print: function() {
        function a() {
            // 这里是默认绑定，因为是普通函数调用
            console.log(this.name); // 123
        }
        a(); // 普通函数调用，this 指向全局对象
    }
};
```

这就是为什么内部函数 `a` 中的 `this.name` 会打印 `123` 而不是 `456` 的原因。

这是 JavaScript 中常见的一个"陷阱"，需要特别注意函数的调用方式来确定 `this` 的指向。

在实际开发中，为了避免这种问题：
1. 使用箭头函数
2. 使用 `bind`
3. 使用变量保存外部 `this` →  ==that== 
4. 使用类的方法（类中的方法默认是严格模式）

