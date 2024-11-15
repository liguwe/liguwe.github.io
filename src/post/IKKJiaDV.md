
# cjs 与 esm 的使用总结



## 目录
<!-- toc -->
 ## 1. cjm / esm 的区别 

### 1.1. 引用与拷贝

- ESM输出的是`值的引用`，而CJS输出的是`值的拷贝`；

### 1.2. 运行时与编译时

- CJS的输出是`运行时加载`，而ESM是 `编译时` 输出接口；

### 1.3. 同步与异步

- CJS是`同步加载`，ESM是`异步加载`； 
	-  同步是服务器代码都在**本地**，浏览器需要去**异步**拿
	- ![图片&文件](./files/20241027-1.png)

### 1.4. 动态加载

- 都支持  `动态加载`
	- ![图片&文件](./files/20241027-2.png)
### 1.5. 文件扩展名与 `package.json`配置

- ![图片&文件](./files/20241027-3.png)

### 1.6. 顶级 `await` 支持

![图片&文件](./files/20241027-4.png)

### 1.7. `this` 指向

![图片&文件](./files/20241027-5.png)

### 1.8. **循环引用**的处理差异

- CommonJS
	- 模块在首次 require 时会被 `缓存`
		- 因为是`缓存` ，所以避免了 **无限循环**
	- 如果出现循环引用，会返回未完成的导出对象
	- 可能导致获取到部分初始化的对象
- ESM
	- 使用绑定引用而不是值拷贝
	- 提供了`静态分析能力`，可以在`编译`时检测问题
	- `webpack 插件`或者 `vite 插件`检测是否循环引用了

### 1.9. 错误处理机制

#### 1.9.1. cjs 

![图片&文件](./files/20241027.png)

```javascript
// CJS
try {
    require('./non-existent');
} catch (err) {
    console.log(err.code);  // MODULE_NOT_FOUND
}

// ESM
import './non-existent.js'
    .catch(err => {
        console.log(err.code);  // ERR_MODULE_NOT_FOUND
    });

```

## 2. ESM 和 CJS 的混合使用

### 2.1. ESM 中使用 CJS 模块

```javascript hl:1,9
// 方法1：使用 createRequire
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// 现在可以使用 require 了
const fs = require('fs');
const lodash = require('lodash');

// 方法2：使用动态 import 代替 require
// cjs-module.js (CommonJS)
module.exports = { hello: 'world' };

// esm-module.mjs (ESM)
const cjsModule = await import('./cjs-module.js');
console.log(cjsModule.default.hello); // 注意：需要使用 .default
```

### 2.2. CJS 中使用 ESM 模块

```javascript hl:1,12
// 方法1：使用异步 import()
// esm-module.mjs
export const hello = 'world';

// cjs-module.js
async function loadEsm() {
    const esmModule = await import('./esm-module.mjs');
    console.log(esmModule.hello);
}
loadEsm();

// 方法2：使用 async/await 包装
(async () => {
    const { hello } = await import('./esm-module.mjs');
    console.log(hello);
})();
```

### 2.3. 包装 CJS 模块为 ESM

```javascript hl:8
// wrapper.mjs
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// 导入 CJS 模块
const cjsModule = require('./cjs-module');

// 重新导出为 ESM
export const { methodA, methodB } = cjsModule;
export default cjsModule;
```

### 2.4. 在 package.json 中配置双模式支持

```json
{
    "name": "my-package",
    "exports": {
        ".": {
            "import": "./dist/index.mjs",
            "require": "./dist/index.cjs"
        }
    },
    "main": "./dist/index.cjs",
    "module": "./dist/index.mjs",
    "type": "module"
}
```

### 2.5. 条件导出

```javascript
// index.cjs
if (typeof require !== 'undefined') {
    module.exports = require('./cjs/index.js');
}

// index.mjs
export * from './esm/index.js';
```

### 2.6. 处理不同的导出方式

```javascript hl:10
// CJS 模块
// math.cjs
module.exports = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};

// ESM 包装器
// math.mjs
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const cjsMath = require('./math.cjs');

// 重新导出为具名导出
export const { add, subtract } = cjsMath;

// 同时提供默认导出
export default cjsMath;
```

### 2.7. 处理异步操作

```javascript
// async-cjs.cjs
module.exports = async function getData() {
    return Promise.resolve('data');
};

// async-esm.mjs
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const getData = require('./async-cjs.cjs');

// 使用异步函数包装
export async function fetchData() {
    return await getData();
}
```

### 2.8. 类型定义的处理

```typescript
// types.d.ts
declare module 'my-mixed-module' {
    // CJS 风格
    export = {
        method: () => void
    };
    
    // ESM 风格
    export const method: () => void;
}
```

### 2.9. 动态导入处理

- 先尝试 ESM 导入
- 降级到 CJS

```javascript
// dynamic-import.mjs
async function loadModule(modulePath) {
    try {
        // 尝试 ESM 导入
        return await import(modulePath);
    } catch (err) {
        // 降级到 CJS
        const require = createRequire(import.meta.url);
        return require(modulePath);
    }
}
```

### 2.10. 环境检测：`typeof require === 'undefined'`

```javascript
// utils.js
export function isESM() {
    return typeof require === 'undefined';
}

export function isCJS() {
    return typeof require !== 'undefined';
}

// 根据环境使用不同的导入方式
const loader = isESM() ? 
    (m) => import(m) : 
    (m) => Promise.resolve(require(m));
```

### 2.11. 错误处理

```javascript
// error-handler.mjs
export async function safeImport(modulePath) {
    try {
        const module = await import(modulePath);
        return module;
    } catch (err) {
        if (err.code === 'ERR_REQUIRE_ESM') {
            // 处理 ESM 模块的情况
            console.log('This is an ESM module');
        } else if (err.code === 'MODULE_NOT_FOUND') {
            // 处理模块未找到的情况
            console.log('Module not found');
        }
        throw err;
    }
}
```

### 2.12. 构建工具配置

```javascript
// rollup.config.js
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/bundle.cjs.js',
            format: 'cjs'
        },
        {
            file: 'dist/bundle.esm.js',
            format: 'esm'
        }
    ],
    plugins: [
        commonjs() // 转换 CJS 到 ESM
    ]
};
```

### 2.13. 最佳实践建议

1. 尽可能使用 ESM
2. 为旧模块提供 ESM 包装器
3. 在 package.json 中提供双模式支持
4. 使用构建工具处理兼容性
5. 谨慎处理异步操作
6. 提供清晰的类型定义
7. 做好错误处理
8. 考虑向后兼容性

这样的混合使用策略可以帮助你在过渡期间平稳地处理不同模块系统的代码。

## 3. `module.exports` 和 `exports` 的区别

### 3.1. 基本关系

```javascript
// Node.js 模块系统中
exports = module.exports = {};  // 初始时，exports 是 module.exports 的引用
```

### 3.2. 关键区别

```javascript hl:8
// 正确使用
exports.foo = 'bar';           // 添加属性有效

module.exports.foo = 'bar';    // 添加属性有效
module.exports = { foo: 'bar' };// 直接赋值有效

// 错误使用
// 无效！这会断开与 module.exports 的引用
exports = { foo: 'bar' };      
```

### 3.3. 简单记忆

- `exports` 只能通过 `.` 语法添加属性
- `module.exports` 可以直接赋值新对象
- 最终导出的始终是 `module.exports` 的值

### 3.4. 最后

因此，为避免混淆，建议统一使用 `module.exports`。