
# 面试题



## 目录
<!-- toc -->
 ## 1. PC端通过二维码扫描登录 

- pc 展示展示二维码后，会一直**轮询**，请求二维码扫描的状态

## 2. `toFixed()` 和 `toPrecision()` 的区别

### 2.1. toFixed()

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

### 2.2. toPrecision()

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

### 2.3. 主要区别

1. 精度范围：
   - `toFixed()` 只处理小数部分
   - `toPrecision()` 考虑整个数字的位数

2. 结果格式：
   - `toFixed()` 始终返回固定小数点格式
   - `toPrecision()` 可能返回科学记数法格式

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
1. 两种方法都可能因为四舍五入导致精度损失。
2. 返回的都是字符串，如果需要进行数学运算，要先转换回数字。
3. 在处理金融数据时，要特别注意 JavaScript 的浮点数精度问题，可能需要使用专门的库来处理高精度计算。

## 3. JS 如何组阻止事件冒泡

- `return false`
	- 代表同时调用了 `e.stopPropagation` 和 `e.preventDefault`

## 4. `123['toString'].length + 123` 的输出值为多少？

- `123['toString'] ` 是个 toString 函数
-  fn.length 代表`第一个具有默认值之前`的参数个数
	- ![图片&文件](./files/20241112-20.png)
	- ![图片&文件](./files/20241112-21.png)

![图片&文件](./files/20241112-22.png)

说明 `toString` 方法的形参个数为 1 

## 5. 如何延迟脚本执行

- defer：js 下载和文档解析同步，文档解析好了后再执行脚本
- async：异步下载脚本，不阻塞文档解析，但脚本下载好了后，暂停解析文档，执行脚本
- 动态 DOM 插入脚本
- setTimeout
- 脚本放最后

## 6. 构造函数属性

![图片&文件](./files/20241112-23.png)

## 7. 再说说 Reflect 

![图片&文件](./files/20241112-24.png)

## 8. 尾递归优化

![图片&文件](./files/20241112-25.png)

## 9. 简述 Iterator

![图片&文件](./files/20241112-26.png)

要点：
- next()
	- {done,value}
- for-of

## 10. 如何中断 promise

promise一旦创建，是无法终止，但以下几种方式可以中断
- then中抛错
- then 返回一个新的 Promise，且已知是 pending 状态，也算是中断了
- 总之：在合适的时候，把 pending的状态给 reject 也就中断了

## 11. 箭头函数

- 不能用作 generator 函数，不用使用 yield 关键字
- 没有原型
- 没有 arguments 对象，如果有，指向当前外层函数
- 不能使用构造函数使用
- 不会创建自己的 `this`

## 12. 如何判断一个对象是空对象

- `keys`
- JSON

## 13. Object.is 与 == 、=== 的区别

## 14. + 0.2 !== 0.3 

在计算机中，数字都是以二进制形式存储的。某些十进制小数在转换成二进制时会产生无限循环小数。

由于存储位数有限，这些无限循环的二进制数必须在某个位置截断，这就导致了**精度损失**。

```javascript
0.1 + 0.2 = 0.30000000000000004
```

### 14.1. 解决方案

#### 14.1.1. 使用 toFixed() 进行显示
```javascript
(0.1 + 0.2).toFixed(1) === '0.3' // true
```

#### 14.1.2. 使用一个极小的误差范围（epsilon）来比较

```javascript
const epsilon = 0.00000000001;
Math.abs((0.1 + 0.2) - 0.3) < epsilon // true
```

#### 14.1.3. 使用专门的库

- decimal.js
- big.js
- bignumber.js

