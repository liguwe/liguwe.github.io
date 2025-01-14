
# 常见面试题：篇二

`#前端面试` 


## 目录
<!-- toc -->
 ## 1. `??` 与 `||` 的区别？ 

- `||` 运算符在左侧为任何 `false` 值时都会返回右侧的值。
- `??` 运算符只在左侧为 **null 或 undefined时**才会返回右侧的值。
	- 为 null
	- 或者 undefined

```javascript hl:2,5,8
console.log(0 || 42);     // 输出: 42
console.log(0 ?? 42);     // 输出: 0

console.log('' || 'default');  // 输出: "default"
console.log('' ?? 'default');  // 输出: ""

console.log(false || true);    // 输出: true
console.log(false ?? true);    // 输出: false
```

## 2. 下面代码的输出是？

```javascript
console.log(typeof typeof typeof null);

console.log(typeof console.log(1));
```

```javascript hl:5,10
// 分析
// 1. typeof null 返回的是 "object"
// 2. typeof typeof null：即 typeof "object" 返回的是 "string"
// 3. typeof typeof typeof null：即 typeof "string" 返回的 "string"
console.log(typeof typeof typeof null);  // string

// 分析：
// 1. console.log(1) 返回的是 undefined
// 2. typeof undefined 返回的是 "undefined"
console.log(typeof console.log(1)); // undefined

// 所以 output:
// string
// 1  因为 console.log(1) 会执行的，输出 1，然后返回 undefined
// undefined

```

## 3. 下面代码的执行顺序

- 立即执行函数的变量**只在函数内部有效**

```javascript hl:12,1,9
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

## 4. 浏览器缓存的优先级

- → sw 
- → 强制缓存（缓存没有过期，不发请求）
-  → 协商缓存（本地未命中，向服务器发送请求，返回 304 Not Modified，告诉浏览器使用缓存）
- → 第 4 个表述有问题，离线可使用 manifest 

--- 

![图片&文件](./files/20241111-45.png)

## 5. generator 函数是如何做到中断和恢复执行的？

### 5.1. 基本原理

Generator 函数的核心机制包括：

- **函数状态保存**：
	- Generator 函数可以保存其内部状态。
- **yield 关键字**：
	- 用于暂停函数执行并可能返回一个值
- **迭代器对象**：
	- Generator 函数返回一个迭代器对象，用于控制函数的执行。

### 5.2. 详细实现机制

#### 5.2.1. 函数对象和执行上下文

当定义一个 Generator 函数时，JavaScript 引擎会创建一个特殊的函数对象。这个对象包含：

- 函数体代码
- 闭包变量
- 一个**内部指针**，指向当前的执行位置

#### 5.2.2. yield 语句的作用

`yield` 语句在 Generator 函数中起到关键作用：

- 它标记了函数的暂停点
- 可以返回一个值给调用者
- 保存当前的执行状态，包括局部变量和表达式的值

#### 5.2.3. 迭代器对象

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

#### 5.2.4. 执行过程

1. **初始化**：调用 `Generator 函数`创建迭代器对象，但不执行函数体。
2. **执行**：每次调用 `next()` 方法，函数从当前位置执行到下一个 `yield` 语句。
3. **暂停**：遇到 `yield` 时，函数执行暂停，保存当前状态，并返回 `yield` 后的表达式值。
4. **恢复**：下一次调用 `next()` 时，从上次暂停的位置继续执行。

### 5.3. 内部实现细节

虽然具体实现可能因 JavaScript 引擎而异，但基本原理如下：

#### 5.3.1. 状态机

Generator 函数内部实际上是一个状态机，每个 `yield` 语句对应一个状态：

```javascript hl:7
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

#### 5.3.2. 闭包和上下文保存

Generator 使用闭包来保存函数的执行上下文，包括局部变量和执行位置：

```javascript hl:3
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

#### 5.3.3. 异步操作处理

Generator 特别适合处理异步操作，通过与 Promise 结合使用：

```javascript hl:17
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

### 5.4. 性能考虑

- Generator 函数的中断和恢复操作比普通函数调用要慢一些。
- 但在处理大量数据或复杂异步流程时，`Generator` 可以提供更好的内存效率和代码组织。

### 5.5. 总结

- Generator 函数**通过巧妙的状态管理和闭包机制，实现了函数执行的中断和恢复**。
- 这种机制为处理复杂的同步和异步流程提供了强大而灵活的工具，尽管在某些情况下可能会带来轻微的性能开销。

理解 Generator 的工作原理有助于更好地利用这一强大特性，特别是在处理异步操作和复杂数据流时。

## 6. 列举浏览器的几个宏任务和微任务

- **dom 事件**
	- 的回调
- **script 标签的加载与执行**
- Ajax 的回调
- fetch 的回调

![图片&文件](./files/20241111-48.png)

> 但==宏任务也有不同的优先级，比如优先级最高的是 input 表单事件==

## 7. 说说 toPrimitive 的理解

`toPrimitive` 是 JavaScript 中一个重要的内部操作，用于**将对象转换为原始值**

### 7.1. 基本概念

`Symbol.toPrimitive` 是一个内置的 Symbol 值，它指定了一个方法，该方法将对象转换为原始值。当需要将对象转换为原始值时，JavaScript 引擎会自动调用这个方法。

### 7.2. 转换规则

对象转换为原始值时有三种模式（`hint`）：

1. **"number"** - 期望得到一个数字
2. **"string"** - 期望得到一个字符串
3. **"default"** - 没有明确期望，由对象自行决定

如下代码：

```javascript hl:3
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

### 7.3. 默认转换过程

如果没有实现 `Symbol.toPrimitive`，JavaScript 会按照以下顺序尝试转换：

#### 7.3.1. 对于 hint "string"

1. 先调用 `toString()`
2. 如果返回的不是原始值，则调用 `valueOf()`
3. 如果还不是原始值，则抛出 `TypeError`

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

#### 7.3.2. 对于 hint "number" 或 "default"

1. 先调用 `valueOf()`
2. 如果返回的不是原始值，则调用 `toString()`
3. 如果还不是原始值，则抛出 `TypeError`

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

### 7.4. 常见使用场景

#### 7.4.1. 数学运算

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

#### 7.4.2. 字符串拼接

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

### 7.5. 日期对象示例

Date 对象是一个很好的内置 `toPrimitive` 实现示例：==因为三种 `hint` 都有==

```javascript
const date = new Date();

// string hint
console.log(String(date)); // 当前日期的字符串表示

// number hint
console.log(+date); // 时间戳

// default hint
console.log(date + ''); // 当前日期的字符串表示
```

### 7.6. 总结

![图片&文件](./files/20241111-49.png)

## 8. 下面函数的执行情况

在具名函数表达式中，**函数名标识符在函数内部是只读的**（read-only）

```javascript hl:3
var b = 10;
(function b() {
  // 在具名函数表达式中，函数名标识符在函数内部是只读的（read-only）
  // 严格模式下会报错 // TypeError: Assignment to constant variable
  // 所以这里修改 b 的值是无效的
  b = 20;
  console.log(b);
});

console.log(b); // 10
```

![图片&文件](./files/20241111-52.png)

### 8.1. 严格模式下的行为

在严格模式下，尝试修改只读标识符会抛出错误：

```javascript
var b = 10;
(function b() {
    'use strict';
    b = 20;  // TypeError: Assignment to constant variable
    console.log(b);
})();
```

### 8.2. 使用不同的变量名

```javascript
var b = 10;
(function c() {
    b = 20;
    console.log(b);  // 输出 20
})();
console.log(b);  // 输出 20
```

### 8.3. 在函数内部声明同名变量

```javascript hl:3
var b = 10;
(function b() {
    var b = 20;  // 创建新的局部变量
    console.log(b);  // 输出 20
})();
console.log(b);  // 输出 10
```

## 9. 请简述 Reflect 作用

`Reflect` 是 ES6 (ECMAScript 2015) 引入的一个新的全局对象，它提供了一组方法来操作对象。Reflect 的主要作用可以概括如下：

### 9.1. 统一操作对象的 API

Reflect 提供了**一套统一的方法**来执行 JavaScript 对象的常见操作，
- 如属性的读取、设置、删除等。
- 这些方法与对应的 **Object 方法** 相似，但更加规范化和功能统一。

### 9.2. 简化代理（Proxy）的创建

Reflect 的方法与 `Proxy` 的处理程序（handler）方法**一一对应**
- 使得在实现代理时更加方便和直观。

### 9.3. 提供函数式编程风格的对象操作

Reflect 的方法都是函数，可以作为参数传递，有利于函数式编程。

### 9.4. 替代一些 Object 的方法

某些 Object 上的方法在 Reflect 中有对应的、更合理的实现。

### 9.5. 返回更合理的结果

某些操作（如 defineProperty）在 `Reflect` 中会返回布尔值表示成功与否，而不是抛出异常。

### 9.6. 让我们通过一些例子来具体说明 Reflect 的作用：

```javascript
// 1. 获取属性
const obj = { x: 1, y: 2 };
console.log(Reflect.get(obj, 'x')); // 1

// 2. 设置属性
Reflect.set(obj, 'z', 3);
console.log(obj); // { x: 1, y: 2, z: 3 }

// 3. 删除属性
Reflect.deleteProperty(obj, 'y');
console.log(obj); // { x: 1, z: 3 }

// 4. 检查对象是否有某个属性
console.log(Reflect.has(obj, 'x')); // true

// 5. 获取对象的所有属性
console.log(Reflect.ownKeys(obj)); // ['x', 'z']

// 6. 创建新对象
const newObj = Reflect.construct(function(a, b) {
  this.sum = a + b;
}, [1, 2]);
console.log(newObj.sum); // 3

// 7. 调用函数并指定 this
function greet() {
  return `Hello, ${this.name}!`;
}
console.log(Reflect.apply(greet, { name: 'Alice' }, [])); // "Hello, Alice!"

// 8. 定义新属性
Reflect.defineProperty(obj, 'w', {
  value: 4,
  writable: true,
  enumerable: true,
  configurable: true
});
console.log(obj.w); // 4
```

### 9.7. 其他

1. **Reflect 主要用于操作普通对象，不直接支持 Map、Set 等集合类型**
2. Map 等集合类型有自己的实例方法进行操作
3. 如果需要使用 Reflect 操作 Map，可以：
    - 通过 Reflect.apply 调用 `Map 的原型方法`
    - 使用 `Proxy` 代理 Map 的操作

## 10. 代码执行

```javascript hl:11
Promise.reject(1)
  .then(
    (res) => {
      console.log(2, res);
    },
    (err) => {
      console.log(3, err);
    },
  )
  .catch((err) => {
    // 这里不会执行，因为前面已经有了错误处理
    console.log(4, err);
  });

```

## 11. 如何把一个对象变成可迭代对象

部署 `[Symbol.iterator]` 接口

![图片&文件](./files/20241112-7.png)

## 12. 在 JavaScript 中获取字符串的字节长度，尤其是要支持表情符号（emoji）

### 12.1. 使用 Blob 对象（最简单推荐的方式）

```javascript hl:3,2
function getByteLength(str) {
    // 创建一个 Blob 对象，并指定编码为 UTF-8
    const blob = new Blob([str], { type: 'text/plain' });
    return blob.size;
}

// 测试
console.log(getByteLength('hello')); // 5
console.log(getByteLength('你好')); // 6
console.log(getByteLength('👨‍👩‍👧‍👦')); // 25
console.log(getByteLength('🌞')); // 4
```

### 12.2. 使用 `TextEncoder`（现代浏览器推荐）

```javascript hl:2
function getByteLength(str) {
    return new TextEncoder().encode(str).length;
}

// 测试
console.log(getByteLength('hello')); // 5
console.log(getByteLength('你好')); // 6
console.log(getByteLength('👨‍👩‍👧‍👦')); // 25
console.log(getByteLength('🌞')); // 4
```

### 12.3. 手动计算（兼容性最好，但不推荐）

```javascript
function getByteLength(str) {
    let length = 0;
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        if (code <= 0x7f) {
            length += 1;
        } else if (code <= 0x7ff) {
            length += 2;
        } else if (code <= 0xffff) {
            length += 3;
        } else {
            length += 4;
        }
    }
    return length;
}

// 注意：这种方法对于某些特殊的emoji可能不够准确
```

### 12.4. 完整的测试示例

```javascript
function compareByteLength() {
    const testStrings = [
        'hello',                    // 普通英文
        '你好',                     // 中文
        '👨‍👩‍👧‍👦',                      // 复杂emoji（家庭）
        '🌞',                       // 简单emoji
        '你好👋world',              // 混合字符串
        '❤️',                       // 特殊emoji
        '🏳️‍🌈'                     // 彩虹旗emoji
    ];

    const methods = {
        'Blob方法': str => new Blob([str]).size,
        'TextEncoder方法': str => new TextEncoder().encode(str).length
    };

    console.log('字符串\t\t字符长度\tBlob字节\tEncoder字节');
    console.log('----------------------------------------');

    testStrings.forEach(str => {
        console.log(
            `${str}\t\t` +
            `${str.length}\t\t` +
            `${methods['Blob方法'](str)}\t\t` +
            `${methods['TextEncoder方法'](str)}`
        );
    });
}

compareByteLength();
```

### 12.5. 重要说明

#### 12.5.1. **编码说明**

   - 以上方法都是基于 `UTF-8` 编码计算字节长度
   - UTF-8 是一种变长编码：
     - ASCII 字符占 1 字节
     - 中文字符**通常占 3 字节**
     - `emoji` 可能**占 4 字节或更多**

#### 12.5.2. **方法选择建议**

   - 优先使用 `TextEncoder`，它是专门用于处理文本编码的标准 API
   - 如果需要考虑兼容性，可以使用 `Blob` 方法
   - 避免使用手动计算的方法，因为它可能在处理某些特殊字符时不够准确

#### 12.5.3. **注意事项**

   - 某些复杂的 emoji（如家庭 emoji）实际上是多个 emoji 组合而成的
   - 某些 emoji 可能包含变体选择符（VS16）等特殊字符
   - 在实际应用中，建议根据具体需求选择合适的方法并进行充分测试

#### 12.5.4. **浏览器兼容性**

   - `TextEncoder`: 现代浏览器都支持
   - `Blob`: IE10+ 都支持
   - 手动计算方法: 所有浏览器都支持，但准确性可能有限

## 13. Map、WeakMap、Object 的区别

![图片&文件](./files/20241112-9.png)

## 14. 如何判断是 PC 还是移动端

- ua
- touch 事件是否在 document中
- 横竖屏幕
- 特定属性，比如通过 js 判断媒体查询是否生效
- 最好还是使用三方工具包
- 等等

## 15. js 如何动态生成海报

- dom - canvas - image
- dom - svg - canvas - image
- nodejs 调用 pupper **无头浏览器**
	- 即通过编程的方式，操作 Chrome 浏览器
		- 比如调用 print pdf 
		- 比如调取浏览器的截屏

## 16. `["1", "2", "3"].map(parseInt)`

- 没有**一进制**
- 3 不是**二进制**

### 16.1. 分析

```javascript hl:8,14,15
["1", "2", "3"].map(parseInt); // ==> 1, NaN, NaN


// parseInt() 函数接受两个参数，第一个是要被解析的字符串，第二个是进制数。
// map() 方法会给回调函数传递三个参数：当前元素、当前索引、整个数组。

// parseInt("1", 0, ["1", "2", "3"]); // 1 ， 0进制，自动判断
// // 第二个参数传 0 的规则：
// 1. 如果字符串以 "0x" 或 "0X" 开头，按 16 进制解析
// 2. 在现代 JavaScript（ES5+）中，其他情况一律按 10 进制解析
// 3. 在老版本 JavaScript 中，如果字符串以 "0" 开头，会按 8 进制解析
// 4. 如果第二个参数不是一个数值，会按 10 进制解析，和不传第二个参数一样

// parseInt("2", 1, ["1", "2", "3"]); // NaN, 没有1进制，必须取值范围在2-36之间
// parseInt("3", 2, ["1", "2", "3"]); // NaN ，3不是2进制数

```

### 16.2. 关于 parseInt 的第二个参数

```javascript hl:1,13
// 进制必须在 2-36 之间
console.log(parseInt("123", 1));    // NaN
console.log(parseInt("123", 37));   // NaN

// 不同进制的解析
console.log(parseInt("100", 2)); // 4 (二进制)
console.log(parseInt("100", 8)); // 64 (八进制)
console.log(parseInt("100", 10)); // 100 (十进制)
console.log(parseInt("100", 16)); // 256 (十六进制)

// 不同进制下的相同字符串可能得到不同结果
console.log(parseInt("19", 10)); // 19 (十进制)
console.log(parseInt("19", 8)); // 1 (八进制，9不是有效的八进制数字)
```

## 17. 函数使用 `bind`连续绑定多次，后面绑定的都无效

![图片&文件](./files/20241112-12.png)

## 18. new fn 与 new fn() 的区别

![图片&文件](./files/20241112-13.png)

> 主要还是**表达式的优先级组合问题**

## 19. ajax fetch axios

- ajax
	- 基于 **XHR 对象**
- fetch 
	- ==没有基于 XHR==，**不是对 XHR 的进一步封装**
	- 使用的**原生的 js** 
	- 基于 `Promise`
- axios
	- 浏览器：基于 XHR
	- nodejs：基于 **http 模块**
	- 其他的包装
		- 比如 promise
	- 安全机制

## 20. 给一个 DOM 元素绑定多次 click，一个捕获，一个冒泡，如何执行？

- 绑定多少次就执行多少次
- 先捕获，后冒泡

## 21. 如何获取一个对象的原型对象

- `构造函数.prototype`
- `实例对象.__proto__`
- `Object.getProtoTypeof(对象实例)`

- ==构造函数==的 prototype
- ==实例对象==的 `__proto__`
- 对象实例的 Object.getProtoTypeof 
	- 当然 也可以使用 Reflect 


> [!danger]
> 注意 
> - 是 ==构造函数==的 `prototype`  
> - ==实例对象==的 `__proto__`

## 22. 移动端适配原理

比如 `flexible.js` 不展开了，和 rem 一个道理

需要注意的事，如何判断是否 `0.5`
- 很简单 `dpr >= 2` 即可

## 23. 如何实现 repeat 实现字符串拼接

```javascript hl:2,5,10
// 最简单直接的方法
const str1 = "abc".repeat(3); // "abcabcabc"

const str2 = Array(4).join("abc"); // "abcabcabc"
// 解释：创建长度为4的数组，join会执行3次，所以重复3次
// Array(4) 创建 [empty × 4]
// join("abc") 会在数组元素之间插入"abc"

const str3 = Array(3).fill("abc").join(""); // "abcabcabc"
// 或者
const str3_2 = new Array(3).fill("abc").join("");

```

## 24. PC端通过二维码扫描登录

- pc 展示展示二维码后，会一直**轮询**，请求二维码扫描的状态

## 25. `toFixed()` 和 `toPrecision()` 的区别

> 记住：都会四舍五入

### 25.1. toFixed()

`toFixed()` 方法用于指定小数点后的位数。

特点：
- 返回一个字符串
- 参数指定小数点后的位数
- 会进行四舍五入
- 如果必要，会用0填充小数部分

示例：
```javascript
let num = 12.3456;

console.log(num.toFixed(2));  // "12.35"
console.log(num.toFixed(0));  // "12"
console.log(num.toFixed(6));  // "12.345600"

let bigNum = 1234.5;
console.log(bigNum.toFixed(2));  // "1234.50"
```

### 25.2. toPrecision()

`toPrecision()` 方法用于指定数字的总位数（包括整数部分和小数部分）。

特点：
- 返回一个字符串
- 参数指定数字的总位数（精度）
- 会进行四舍五入
- 可能会使用科学记数法表示结果

示例：
```javascript
let num = 12.3456;

console.log(num.toPrecision(2));  // "12"
console.log(num.toPrecision(3));  // "12.3"
console.log(num.toPrecision(6));  // "12.3456"

let bigNum = 1234.5;
console.log(bigNum.toPrecision(2));  // "1.2e+3"
console.log(bigNum.toPrecision(4));  // "1235"
```

### 25.3. 主要区别

1. 精度范围：
   - `toFixed()` 只处理**小数部分**
   - `toPrecision()` 考虑**整个数字的位数**
2. 结果格式：
   - `toFixed()` 始终返回固定小数点格式
   - `toPrecision()` 可能返回**科学记数法**格式
3. 参数含义：
   - `toFixed(n)` 中的 n 表示小数点后的位数
   - `toPrecision(n)` 中的 n 表示总的有效数字位数
4. 对整数的处理：
   - `toFixed()` 会在整数后添加小数点和指定数量的零
   - `toPrecision()` 可能会将整数转换为科学记数法
5. 大数处理：
   - `toFixed()` 对于非常大的数字可能会返回指数形式
   - `toPrecision()` 更容易对大数使用科学记数法

示例比较：
```javascript
let num = 123.456;

console.log(num.toFixed(2));       // "123.46"
console.log(num.toPrecision(2));   // "1.2e+2"

console.log(num.toFixed(5));       // "123.45600"
console.log(num.toPrecision(5));   // "123.46"

let smallNum = 0.000123;
console.log(smallNum.toFixed(5));       // "0.00012"
console.log(smallNum.toPrecision(5));   // "0.00012300"

let bigNum = 1234567.89;
console.log(bigNum.toFixed(2));       // "1234567.89"
console.log(bigNum.toPrecision(2));   // "1.2e+6"
```

使用建议：
- 当你需要控制小数点后的位数时，使用 `toFixed()`
- 当你需要控制数字的总体精度时，使用 `toPrecision()`
- 对于货币计算，通常使用 `toFixed()`
- 对于科学计算或需要控制有效数字的场景，使用 `toPrecision()`

注意事项：
1. 两种方法都可能因为**四舍五入**导致精度损失。
2. **返回的都是字符串，如果需要进行数学运算，要先转换回数字**。
3. 在处理金融数据时，要特别注意 JavaScript 的**浮点数精度问题**，可能需要使用专门的库来处理高精度计算。


> [!danger]
> 返回的都是字符串

## 26. JS 如何组阻止事件冒泡

- `return false`
	- 代表同时调用了 `e.stopPropagation` 和 `e.preventDefault`
 - `e.stopImmediatePropagation();` ：
	 - ==只阻止元素的同一事件类型的后续处理器执行，不会影响其他类型的事件==
		 1. 阻止事件冒泡
		 2. 阻止当前元素**同一事件的其他事件处理器** 
		 3. 不阻止默认行为

```javascript
const button = document.querySelector('button');

// 同一个事件类型（click）的多个处理器
button.addEventListener('click', function(event) {
    console.log('第一个 click 处理器');
    event.stopImmediatePropagation();
});

button.addEventListener('click', function(event) {
    console.log('第二个 click 处理器'); // 不会执行
});

button.addEventListener('click', function(event) {
    console.log('第三个 click 处理器'); // 不会执行
});

// 点击按钮时只会输出：
// "第一个 click 处理器"



const button = document.querySelector('button');

button.addEventListener('click', function(event) {
    console.log('click 处理器');
    event.stopImmediatePropagation();
});

button.addEventListener('mousedown', function(event) {
    console.log('mousedown 处理器'); // 会正常执行
});

button.addEventListener('mouseup', function(event) {
    console.log('mouseup 处理器');   // 会正常执行
});

// 点击按钮时会依次输出：
// "mousedown 处理器"
// "click 处理器"
// "mouseup 处理器"

```

- **return false 使用场景**：
    - 简单的内联事件处理（虽然不推荐）
    - jQuery 事件处理（历史原因）
    - 表单提交控制
    - 链接点击阻止

## 27. `123['toString'].length + 123` 的输出值为多少？：形参

- `123['toString'] ` 是个 **toString 函数**
- fn.length 代表`第一个具有默认值之前`的参数个数
	- ![图片&文件](./files/20241112-20.png)
	- ![图片&文件](./files/20241112-21.png)

![图片&文件](./files/20241112-22.png)

说明 `toString` 方法的**形参个数为 1** 

## 28. 如何延迟脚本执行

- defer：
	- js 下载和文档解析同步，**文档解析好了后再执行脚本**
	- defer 即延迟的意思，**等文档解析好后执行**，但不延迟下载
- async：
	- 异步下载脚本，不阻塞文档解析，**但脚本下载好了后，先暂停解析文档，执行脚本**
- 动态 DOM 插入脚本
- setTimeout
- 脚本放最后

## 29. 构造函数属性

![图片&文件](./files/20241112-23.png)

## 30. 再说说 Reflect 

![图片&文件](./files/20241112-24.png)

## 31. 尾递归优化

- 空间复杂度能够压缩到：常数级别

![图片&文件](./files/20241112-25.png)

## 32. 简述 Iterator

![图片&文件](./files/20241112-26.png)

要点：
- next()
	- {done,value}
- for-of


## 34. 箭头函数

- 不能用作 `generator` 函数，不用使用 yield `关键字`
- 没有原型
- 没有 `arguments` 对象
	- 如果有，指向当前外层函数
- 不能使用`构造函数`使用
- 不会创建自己的 `this`

## 35. 如何判断一个对象是空对象

- `keys`
- JSON 解析的方式

## 36. Object.is 与 == 、=== 的区别

- Object.is 特点：
    - NaN 等于 NaN
    - +0 不等于 -0
    - **其他情况与 === 相同**
    - 使用场景：
        - 需要区分 +0 和 -0 时
        - 需要正确处理 NaN 比较时
        - 需要最严格的相等性检查时

## 37.  `0.1+ 0.2 !== 0.3` 

在计算机中，数字都是以**二进制形式存储的。某些十进制小数在转换成二进制时会产生无限循环小数**。

由于存储位数有限，**这些无限循环的二进制数必须在某个位置截断**，这就导致了**精度损失**。

```javascript
0.1 + 0.2 = 0.30000000000000004
```

### 37.1. 解决方案

#### 37.1.1. 使用 toFixed() 进行显示

```javascript
(0.1 + 0.2).toFixed(1) === '0.3' // true
```

#### 37.1.2. 使用一个极小的误差范围（epsilon）来比较

```javascript
const epsilon = 0.00000000001;
Math.abs((0.1 + 0.2) - 0.3) < epsilon // true
```

#### 37.1.3. 使用专门的库

- decimal.js
- big.js
- bignumber.js

## 38. mouseenter 与 mouseover 的区别

总结：
- **进入** `enter` , 不会冒泡
- 对应的你开始时间是 `leave` **离开**
- over 对应 out

### 38.1. 事件冒泡行为

   - mouseover：
	   - 会冒泡
   - mouseenter：
	   - **不会冒泡**。它只在鼠标指针进入绑定事件的元素时触发，不会在进入其子元素时重复触发。

### 38.2. 触发频率

   - `mouseover`：当鼠标移动到元素或其子元素上时都会触发。
	   - 这意味着，如果一个元素有子元素，移动到子元素上也会触发父元素的 mouseover 事件。
   - `mouseenter`：
	   - 只有当鼠标从元素外部首次进入元素时才会触发。
	   - 移动到其子元素上不会重复触发该事件，**因为子元素上不会再冒泡了**

### 38.3. 相应的离开事件

   - `mouseover` 对应的离开事件是 `mouseout`
   - `mouseenter` 对应的离开事件是 `mouseleave`

### 38.4. 性能影响

   - mouseover：
	   - 由于其冒泡特性和频繁触发的性质，在复杂的 DOM 结构中可能会导致性能问题。
   - mouseenter：
	   - 通常具有更好的性能，因为它不会在子元素间移动时重复触发。

### 38.5. 使用场景

   - mouseover：
	   - 适用于**需要精确跟踪鼠标在元素内部移动的情况**
	   - 或者当你需要利用事件冒泡来处理大量元素的情况
   - mouseenter：
	   - 适用于只需要知道鼠标是否进入了整个元素区域的情况，而不关心内部的移动。

## 39. 如何使得`var [a,b] = {a:1,b:2}` 解构成功

需要部署 `Symbol.iterator`

![图片&文件](./files/20241111-14.png)

## 40. new 操作具体干了什么

如下图：发生了 4 件事情

![图片&文件](./files/20241111-20.png)

## 41. try-catch 不能捕获异步错误

>  不能，当时可以在 window 上有个类似于 `uncatchpromiseReject` 的错误

![图片&文件](./files/20241111-22.png)

## 42. e.target 和 e.currentTarget 的区别？

需要，反过来理解的
- 正在处理的冒泡或者捕获，是 `target`
- source target：`currentTarget`  
	- 其实更应该叫做 `sourceTarget`

![图片&文件](./files/20241111-24.png)

## 43. 如何确保你的构造函数只能被 `new` 调用

![图片&文件](./files/20241111-25.png)

```javascript hl:2,10,18
function Person(name) {
  if (!new.target) {
    throw new Error("必须使用 new 关键字调用");
  }
  this.name = name;
}


function Person(name) {
  if (!(this instanceof Person)) {
    throw new Error('必须使用 new 关键字调用');
  }
  this.name = name;
}
// or 直接创建
function Person(name) {
  if (!(this instanceof Person)) {
    return new Person(name);
  }
  this.name = name;
}


// 最佳方式
class Person {
  constructor(name) {
    this.name = name;
  }
}
```