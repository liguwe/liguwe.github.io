
# 面向前端的 python 指南 01：远程下载文件到本地

`#python`  `#done` 

>  其实类似于 [6. 面向前端的 python 指南 01：从远程 URL 下载训练文本文件](/post/8xp2srgrp6.html) 但都读读，加深记忆


## 目录
<!-- toc -->
 ## 源代码 

```python
# 远程下载文件到本地
import os
import requests

# 获取当前脚本文件所在的绝对目录
# __file__ 是当前文件的路径
# os.path.dirname(__file__) 获取该文件所在的文件夹路径
curr_dir = os.path.dirname(os.path.abspath(__file__))
file_path = os.path.join(curr_dir, "the-verdict.txt")

print(f"当前工作目录 (CWD): {os.getcwd()}")
print(f"脚本所在目录: {curr_dir}")
print(f"文件将保存至: {file_path}")

# 如果文件不存在，下载文件
if not os.path.exists(file_path):
    print("正在从远程下载...")
    url = "https://raw.githubusercontent.com/rasbt/LLMs-from-scratch/main/ch02/01_main-chapter-code/the-verdict.txt"

    # 注意：这是同步阻塞操作，执行完这一行才会跑下一行
    response = requests.get(url) 
    
    if response.status_code == 200:
        # 使用 with 语句打开文件（上下文管理器）
        # 优势：任务完成后会自动关闭文件，即使发生异常也能确保资源释放
        # "as f" 表示将打开的文件对象赋值给变量 f，
        # 这样在缩进块内部就可以通过 f 来操作文件（如 f.write）
        # 类似于js 的  const f = fs.openSync(filePath, "w")
        with open(file_path, "wb") as f:
            f.write(response.content)
    else:
        print(f"下载失败，状态码: {response.status_code}")
    
    # 读取文件内容
    with open(file_path, "r", encoding="utf-8") as f:
        print("下载成功，预览内容：")
        print(f.read()[:200])
else:
    print(f"文件已存在，直接读取...")
    with open(file_path, "r", encoding="utf-8") as f:
        print(f.read()[:200])

```

本文档通过对比 JavaScript 和 Python，帮助你快速理解 Python 的核心概念

## 1. 模块导入 (import)

### Python

```python
import os
import requests
```

### JavaScript

```javascript
// ES6 模块导入
import os from 'os';
import requests from 'requests';

// 或者 CommonJS
const os = require('os');
const requests = require('requests');
```

**区别：**
- Python 的 `import` 直接导入整个模块
- 不需要显式的路径（Python 会在 sys.path 中查找模块）
- 使用 `from module import something` 可以只导入特定功能

---

## 2. 魔法变量 `__file__`

### Python

```python
curr_dir = os.path.dirname(os.path.abspath(__file__))
```

`__file__` 是 Python 的特殊变量，表示**当前脚本的完整路径**

### JavaScript 等价写法

```javascript
// Node.js 中没有直接等价的 __file__
// 可以使用：
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 或者 CommonJS
const __filename = __filename;
const __dirname = __dirname;
```

---

## 3. 路径操作

### Python

```python
curr_dir = os.path.dirname(os.path.abspath(__file__))
file_path = os.path.join(curr_dir, "the-verdict.txt")
```

### JavaScript (Node.js)

```javascript
const path = require('path');

const currDir = path.dirname(path.resolve(__filename));
const filePath = path.join(currDir, "the-verdict.txt");

// 或者使用 path.resolve (更简洁)
const filePath = path.resolve(currDir, "the-verdict.txt");
```

**说明：**
- Python: `os.path.join()` - 智能拼接路径（自动处理分隔符）
- JS: `path.join()` - 功能相同

---

## 4. 字符串格式化 (f-string)

### Python

```python
print(f"当前工作目录 (CWD): {os.getcwd()}")
print(f"脚本所在目录: {curr_dir}")
print(f"文件将保存至: {file_path}")
```

### JavaScript

```javascript
// 模板字符串 (ES6)
console.log(`当前工作目录 (CWD): ${process.cwd()}`);
console.log(`脚本所在目录: ${currDir}`);
console.log(`文件将保存至: ${filePath}`);

// 或者旧的方式
console.log("当前工作目录 (CWD): " + process.cwd());
```

**说明：**
- Python 3.6+ 支持 f-string: `f"变量: {variable}"`
- f 是 format 的缩写
- 比 `.format()` 或 `%` 更简洁直观

---

## 5. with 语句 (上下文管理器)

### Python

```python
with open(file_path, "wb") as f:
    f.write(response.content)
```

### JavaScript

```javascript
// Node.js 旧版本 (需要手动关闭)
const fs = require('fs');
const f = fs.openSync(file_path, 'w');
try {
  fs.writeSync(f, response.content);
} finally {
  fs.closeSync(f);
}

// Node.js 新版本 (自动关闭)
fs.promises.writeFile(file_path, response.content);

// 或使用 async/await
await fs.promises.writeFile(file_path, response.content);
```

**关键理解：**

| Python | JavaScript |
|--------|-----------|
| `with open() as f:` | 自动资源管理 |
| 缩进块内部使用 `f` | `try/finally` 包裹 |
| 退出缩进块自动关闭 | 需要手动 `close()` 或使用 promise 版本 |

**`with` 语句的优势：**
1. **自动关闭资源** - 即使发生异常也会执行清理
2. **更简洁** - 不需要显式的 try/finally
3. **Python 哲学** - "显式优于隐式"，但资源管理是例外

---

## 6. 文件读写

### Python

```python
# 写入二进制
with open(file_path, "wb") as f:
    f.write(response.content)

# 读取文本
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()
    print(content[:200])  # 切片操作
```

### JavaScript (Node.js)

```javascript
const fs = require('fs').promises;

// 写入文件
await fs.writeFile(file_path, response.content);

// 读取文件
const content = await fs.readFile(file_path, 'utf-8');
console.log(content.substring(0, 200));
```

**文件打开模式对比：**

| Python | JavaScript | 说明 |
|--------|-----------|------|
| `"r"` | `'r'` | 读取文本 |
| `"rb"` | 读取 Buffer | 读取二进制 |
| `"w"` | `'w'` | 写入文本 |
| `"wb"` | 写入 Buffer | 写入二进制 |
| `"a"` | `'a'` | 追加 |

---

## 7. HTTP 请求

### Python

```python
import requests

response = requests.get(url)
if response.status_code == 200:
    content = response.content  # 二进制内容
    text = response.text        # 文本内容
```

### JavaScript

```javascript
// Fetch API (浏览器原生)
fetch(url)
  .then(response => {
    if (response.ok) {
      return response.text(); // 或 response.blob()
    }
  });

// Node.js
const axios = require('axios');
const response = await axios.get(url);
const content = response.data;

// 或使用原生 fetch (Node 18+)
const response = await fetch(url);
if (response.ok) {
  const content = await response.text();
}
```

**区别：**
- Python 的 `requests` 是第三方库（需 `pip install requests`）
- 同步阻塞操作（与 JS 的 Promise/async 不同）
- `.content` 是 bytes，`.text` 是 str

---

## 8. 字符串切片

### Python

```python
text = "Hello World"
print(text[:200])   # 前 200 个字符
print(text[0:5])    # "Hello"
print(text[6:])     # "World"
print(text[-3:])    # "rld"
```

### JavaScript

```javascript
const text = "Hello World";
console.log(text.substring(0, 200));  // 前 200 个字符
console.log(text.substring(0, 5));    // "Hello"
console.log(text.substring(6));       // "World"
console.log(text.slice(-3));          // "rld"

// 或使用 slice
console.log(text.slice(0, 200));
```

**关键区别：**
- Python: `[start:end]` - **不包含** end 索引
- JS: `.substring(start, end)` - **不包含** end 索引
- Python: 支持负数索引（从末尾计数）
- JS: `.slice()` 也支持负数，但 `.substring()` 不支持

---

## 9. 条件语句和缩进

### Python

```python
if not os.path.exists(file_path):
    print("正在下载...")
    # 缩进的代码块
    with open(file_path, "wb") as f:
        f.write(data)
else:
    print("文件已存在")
```

### JavaScript

```javascript
if (!fs.existsSync(file_path)) {
  console.log("正在下载...");
  // 使用花括号包裹代码块
  fs.writeFileSync(file_path, data);
} else {
  console.log("文件已存在");
}
```

**关键理解：**
- **Python 用缩进代替花括号 `{}`**
- 标准缩进是 **4 个空格**（不是 Tab）
- 同一级缩进属于同一个代码块

---

## 10. 布尔取反

### Python

```python
if not os.path.exists(file_path):
    # ...

if not response.ok:
    # ...
```

### JavaScript

```javascript
if (!fs.existsSync(file_path)) {
  // ...
}

if (!response.ok) {
  // ...
}
```

**对比：**

| Python | JavaScript |
|--------|-----------|
| `not x` | `!x` |
| `x is None` | `x === null` 或 `x === undefined` |
| `x is not None` | `x !== null && x !== undefined` |
| `x and y` | `x && y` |
| `x or y` | `x \|\| y` |

---

## 11. 完整代码对比

### Python 版本 (01.py)

```python
import os
import requests

curr_dir = os.path.dirname(os.path.abspath(__file__))
file_path = os.path.join(curr_dir, "the-verdict.txt")

if not os.path.exists(file_path):
    url = "https://raw.githubusercontent.com/..."
    response = requests.get(url)

    if response.status_code == 200:
        with open(file_path, "wb") as f:
            f.write(response.content)

with open(file_path, "r", encoding="utf-8") as f:
    print(f.read()[:200])
```

### JavaScript 等价版本

```javascript
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'the-verdict.txt');

async function main() {
  try {
    await fs.access(filePath);
  } catch {
    const url = "https://raw.githubusercontent.com/...";
    const response = await axios.get(url, { responseType: 'arraybuffer' });

    if (response.status === 200) {
      await fs.writeFile(filePath, response.data);
    }
  }

  const content = await fs.readFile(filePath, 'utf-8');
  console.log(content.substring(0, 200));
}

main();
```

---

## 12. 核心概念速查表

| 概念 | Python | JavaScript |
|------|--------|-----------|
| 变量声明 | `x = 1` | `let x = 1;` 或 `const x = 1;` |
| 函数定义 | `def func():` | `function func() {}` |
| 箭头函数 | `lambda x: x * 2` | `x => x * 2` |
| 列表/数组 | `[1, 2, 3]` | `[1, 2, 3]` |
| 字典/对象 | `{"key": "value"}` | `{key: "value"}` |
| None/null | `None` | `null` / `undefined` |
| 真值判断 | `if x:` | `if (x)` |
| 循环 | `for x in list:` | `for (const x of list)` |
| 类定义 | `class MyClass:` | `class MyClass` |

---

## 13. 常见陷阱

### 1. 缩进错误

```python
# ❌ 错误
if True:
print("Hello")  # 缩进不足

# ✅ 正确
if True:
    print("Hello")  # 4 个空格缩进
```

### 2. 混用 Tab 和空格

```python
# ❌ 可能出错
if True:
	print("Tab 缩进")
    print("空格缩进")

# ✅ 统一使用 4 个空格
if True:
    print("统一使用空格")
    print("代码更清晰")
```

### 3. 忘记 `self` (类方法)

```python
# ❌ 错误
class MyClass:
    def my_method(self):
        print(self.value)  # 如果没有 self 参数会报错

# ✅ 正确
class MyClass:
    def my_method(self):
        print(self.value)
```

### 4. 可变默认参数

```python
# ❌ 危险
def append_to(item, list=[]):
    list.append(item)
    return list  # 多次调用会共享同一个 list！

# ✅ 正确
def append_to(item, list=None):
    if list is None:
        list = []
    list.append(item)
    return list
```

---

## 14. 推荐学习路径

1. **基础语法** - 变量、类型、运算符
2. **控制流** - if/else、for/while
3. **数据结构** - 列表、字典、集合、元组
4. **函数** - 定义、参数、返回值、lambda
5. **文件操作** - open、read、write
6. **面向对象** - 类、继承、多态
7. **异常处理** - try/except/finally
8. **模块和包** - import、**init**.py

## 总结

对于前端工程师来说：

✅ **容易上手：**
- 语法简洁，没有分号、花括号
- 列表/字典操作类似 JS 数组/对象
- f-string 类似模板字符串  
⚠️ **需要注意：**
- **缩进很重要**（不是花括号）
- **同步 vs 异步** - Python 主要是同步的
- **None 不是 null/undefined**
- **布尔运算符不同** (`not`/`and`/`or`)  
💡 **学习建议：**
- 多写代码，感受 Python 的"Pythonic"风格
- 使用 type hints 提高代码可读性
- 遵循 PEP 8 代码风格指南
- 善用列表推导式、生成器等 Python 特性
