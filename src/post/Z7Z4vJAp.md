
# TS的常见问题



## 目录
<!-- toc -->
 ## 1. typescript 中 unknown、any、void 的区别 

### 1.1. **类型安全性**

- `any`: 完全不安全，跳过类型检查
- `unknown`: 类型安全，需要类型检查才能使用
- `void`: 类型安全，只能赋值 undefined 或 null
	- `void`其实可以理解为`null`和`undefined`的`联合类型`，它表示空值
### 1.2. **使用场景**

- `any`: 当你不确定类型，或者需要快速迁移 JavaScript 代码时使用
- `unknown`: 当你不确定输入类型，但想保持类型安全时使用
- `void`: 主要用于表示函数没有返回值
### 1.3. **操作限制**

- `any`: 没有任何限制
- `unknown`: 必须先进行类型检查或断言
- `void`: 只能赋值 undefined 或 null
### 1.4. **最佳实践**

- 尽量避免使用 `any`，因为它会失去 TypeScript 的类型检查优势
- 如果不确定类型，优先使用 `unknown` 而不是 `any`
- `void` 主要用于函数返回类型声明

## 2. ts 的类型保护

类型保护主要的想法是尝试检测属性、方法或原型，以弄清楚如何处理一个值。有四种使用类型保护的主要方法，分别是 `in`，`typeof`，`instanceof`，`类型谓词is`

- `typeof` 类比于 js 的`typeof`
- `instanceof` 类比于 js 的`instanceof`
- `in` 如下检查某个对象上是否存在某个属性
	- ![图片&文件](./files/20241114-21.png)
- is 
	- ![图片&文件](./files/20241114-22.png)

## 3. implements 与 extends 的区别

![图片&文件](./files/20241114-23.png)

## 4. TypeScript 中 Interface 与 Type 的区别

- `interface` 只能定义`对象类型`
- `type` 声明可以声明任何类型。
- `interface` 能够声明 **合并**，两个相同接口会 **合并**。`Type`声明合并会报错
- `type`可以`类型推导`
	- ![图片&文件](./files/20241114-24.png)

## 5. ts 中的 const 、 readonly 的区别

- 一个用于变量，一个用于属性
- `readonly` 修饰的**属性**能确保自身不能修改属性，