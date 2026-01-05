
# 面向前端的 python 指南 01：从远程 URL 下载训练文本文件

`#done` `#python` 


## 目录
<!-- toc -->
 ## 📝 功能说明 

这个脚本负责从 GitHub 下载小说《The Verdict》的文本文件，用于后续的分词器训练。

```python
"""
步骤 1: 生成/下载 the-verdict.txt 文件
功能: 从远程 URL 下载文本文件到本地
"""

import os
import requests

def generate_file():
    """下载 the-verdict.txt 文件到本地"""

    # 获取当前脚本所在目录
    curr_dir = os.path.dirname(os.path.abspath(__file__))
    file_path = os.path.join(curr_dir, "the-verdict.txt")

    # 如果文件已存在，询问是否重新下载
    if os.path.exists(file_path):
        print(f"✓ 文件已存在: {file_path}")
        return file_path

    # 下载 URL
    url = "https://raw.githubusercontent.com/rasbt/LLMs-from-scratch/main/ch02/01_main-chapter-code/the-verdict.txt"

    print(f"正在从远程下载文件...")
    print(f"URL: {url}")
    print(f"保存到: {file_path}")

    try:
        # 发送 GET 请求
        response = requests.get(url, timeout=30)
        response.raise_for_status()  # 检查请求是否成功

        # 写入文件
        with open(file_path, "wb") as f:
            f.write(response.content)

        print(f"✓ 文件下载成功！")
        print(f"  文件大小: {len(response.content)} 字节")

        # 预览前 200 个字符
        with open(file_path, "r", encoding="utf-8") as f:
            preview = f.read(200)
            print(f"  内容预览:\n{preview}")

        return file_path

    except Exception as e:
        print(f"✗ 下载失败: {e}")
        raise


if __name__ == "__main__":
    print("=" * 60)
    print("步骤 1: 生成文件")
    print("=" * 60)

    file_path = generate_file()

    print("\n" + "=" * 60)
    print("步骤 1 完成！")
    print("=" * 60)

```

---

## 🔍 核心概念

### 1. Python 模块导入

#### Python 实现

```python
import os
import requests
```

#### JavaScript 等价实现

```javascript
// Node.js
const fs = require('fs');
const path = require('path');
const axios = require('axios');  // 第三方库，类似 requests

// 或使用 fetch (Node 18+)
const response = await fetch(url);
```

**对比说明：**
- Python 的 `import` 直接导入模块
- JS 使用 `require()` (CommonJS) 或 `import` (ES6)
- `requests` 是 Python 最流行的 HTTP 库（需 `pip install requests`）
- JS 对应的是 `axios` 或原生 `fetch`

---

### 2. 魔法变量 `__file__`

#### Python 实现

```python
curr_dir = os.path.dirname(os.path.abspath(__file__))
# file_path: /Users/xxx/ch02/01/generate_file.py
# curr_dir:  /Users/xxx/ch02/01/
```

**详细解释：**
1. `__file__` - Python 内置变量，表示**当前脚本的完整路径**
2. `os.path.abspath(__file__)` - 转换为绝对路径
3. `os.path.dirname()` - 获取所在目录

#### JavaScript 等价实现

```javascript
// Node.js (ES Modules)
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Node.js (CommonJS)
const __filename = __filename;
const __dirname = __dirname;

// 浏�览器环境
// 没有 __file__ 的等价物（浏览器没有文件系统）
```

**关键区别：**
- Python: `__file__` 是内置变量
- Node.js: 需要手动计算 `__dirname`
- 浏览器: 不适用（没有文件系统概念）

---

### 3. 路径拼接

#### Python 实现

```python
file_path = os.path.join(curr_dir, "the-verdict.txt")
# curr_dir: /Users/xxx/ch02/01/
# file_path: /Users/xxx/ch02/01/the-verdict.txt
```

#### JavaScript 等价实现

```javascript
const filePath = path.join(currDir, "the-verdict.txt");
// 或
const filePath = path.resolve(currDir, "the-verdict.txt");
```

**为什么使用 `os.path.join()`？**
- ✅ 自动处理路径分隔符（Windows 用 `\`，Linux/Mac 用 `/`）
- ✅ 避免手动拼接字符串的错误
- ✅ 跨平台兼容

**最佳实践：**
```python
# ❌ 不推荐：硬编码分隔符
file_path = curr_dir + "/the-verdict.txt"  # Windows 会出错

# ✅ 推荐：使用 os.path.join
file_path = os.path.join(curr_dir, "the-verdict.txt")

# ✅ Python 3.4+：使用 pathlib（更现代）
from pathlib import Path
file_path = Path(__file__).parent / "the-verdict.txt"
```

---

### 4. 文件存在性检查

#### Python 实现

```python
if os.path.exists(file_path):
    print(f"✓ 文件已存在: {file_path}")
    return file_path
```

#### JavaScript 等价实现

```javascript
// Node.js
const fs = require('fs');

if (fs.existsSync(filePath)) {
  console.log(`✓ 文件已存在: ${filePath}`);
  return filePath;
}

// 或使用 async/await
if (await fs.promises.access(filePath).then(() => true).catch(() => false)) {
  // 文件存在
}
```

**关键区别：**
- Python: 
	- 同步操作，直接检查
- Node.js: 有同步 (`existsSync`) 和异步 (`access`) 两种
- 浏览器: 
	- 不适用

---

### 5. HTTP GET 请求

#### Python 实现

```python hl:4
import requests

response = requests.get(url, timeout=30)
response.raise_for_status()  # 如果状态码不是 2xx，抛出异常
```

#### JavaScript 等价实现

```javascript
// 使用 axios
const axios = require('axios');

const response = await axios.get(url, { timeout: 30000 });
// axios 自动在状态码不是 2xx 时抛出异常

// 使用原生 fetch (Node 18+)
const response = await fetch(url);
if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
}
```

**requests vs axios/fetch：**

| 特性 | Python requests | JS axios/fetch |
|------|----------------|----------------|
| API 风格 | 同步（阻塞） | 异步（Promise） |
| 超时设置 | `timeout=30` | `{ timeout: 30000 }` |
| 错误处理 | `raise_for_status()` | 需手动检查 `response.ok` |
| JSON 解析 | `response.json()` | `await response.json()` |

**Python HTTP 库推荐：**
1. **requests** - 最流行，API 简洁（同步）
2. **httpx** - 支持 HTTP/2 和异步（现代替代品）
3. **urllib3** - 底层库，requests 依赖它

---

### 6. with 语句（上下文管理器）

#### Python 实现

```python
with open(file_path, "wb") as f:
    f.write(response.content)
```

#### JavaScript 等价实现

```javascript
// Node.js 旧版本（手动管理）
const fs = require('fs');
const f = fs.openSync(filePath, 'w');
try {
  fs.writeSync(f, data);
} finally {
  fs.closeSync(f);  // 必须手动关闭
}

// Node.js 现代（自动管理）
await fs.promises.writeFile(filePath, data);
```

**`with` 语句的核心价值：**

```python
# Python 的 with 语句
with open(file_path, "wb") as f:
    f.write(data)  # 即使这里抛出异常
    # ... 其他操作
# 离开缩进块时，文件自动关闭

# 等价于 JS 的 try...finally
let f;
try {
  f = fs.openSync(filePath, 'w');
  fs.writeSync(f, data);
} finally {
  if (f) fs.closeSync(f);  // 确保关闭
}
```

**为什么 `with` 语句很重要？**

1. **自动资源释放** - 即使发生异常
2. **代码简洁** - 不需要显式 `close()`
3. **Python 哲学** - "资源管理应该是自动的"

**支持 `with` 的对象：**
- 文件 (`open()`)
- 线程锁 (`threading.Lock()`)
- 数据库连接
- 自定义上下文管理器（使用 `@contextmanager` 装饰器）

---

### 7. 文件读写模式

#### Python 实现

```python
# 写入二进制
with open(file_path, "wb") as f:
    f.write(response.content)

# 读取文本
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read(200)
```

#### JavaScript 等价实现

```javascript
// Node.js
const fs = require('fs');

// 写入二进制
await fs.promises.writeFile(filePath, Buffer.from(data));

// 读取文本
const content = await fs.promises.readFile(filePath, 'utf-8');
const preview = content.substring(0, 200);
```

**文件模式对比：**

| Python 模式 | 说明 | Node.js 等价 |
|------------|------|-------------|
| `"r"` | 读取文本 | `'r'` + `'utf8'` |
| `"rb"` | 读取二进制 | 读取 Buffer |
| `"w"` | 写入文本 | `'w'` + `'utf8'` |
| `"wb"` | 写入二进制 | 写入 Buffer |
| `"a"` | 追加文本 | `'a'` |

**最佳实践：**
```python
# ✅ 推荐：指定编码
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# ❌ 不推荐：依赖系统默认编码（可能出错）
with open(file_path, "r") as f:
    content = f.read()
```

---

### 8. f-string 字符串格式化

#### Python 实现

```python
print(f"✓ 文件已存在: {file_path}")
print(f"  文件大小: {len(response.content)} 字节")
```

#### JavaScript 等价实现

```javascript
console.log(`✓ 文件已存在: ${filePath}`);
console.log(`  文件大小: ${data.length} 字节`);
```

**f-string 特性：**

- 对齐文本 `>`
- 格式化 3.2415

```python hl:15,18
name = "Alice"
age = 25

# 基本用法
print(f"我的名字是 {name}")  # 我的名字是 Alice

# 表达式计算
print(f"明年我 {age + 1} 岁")  # 明年我 26 岁

# 调用方法
print(f"名字长度: {len(name)}")  # 名字长度: 5

# 格式化数字
pi = 3.14159
print(f"π ≈ {pi:.2f}")  # π ≈ 3.14

# 对齐文本
print(f"{name:>10}")  # "     Alice" (右对齐，宽度 10)
print(f"{name:<10}")  # "Alice     " (左对齐，宽度 10)
print(f"{name:^10}")  # "  Alice   " (居中，宽度 10)
```

**字符串格式化演进：**

```python
# Python 1.x - % 格式化（老式）
name = "Alice"
print("我的名字是 %s" % name)

# Python 2.6+ - str.format() (过渡)
print("我的名字是 {}".format(name))

# Python 3.6+ - f-string (推荐)
print(f"我的名字是 {name}")
```

---

### 9. 异常处理

#### Python 实现

```python
try:
    response = requests.get(url, timeout=30)
    response.raise_for_status()
    # ... 处理响应
except Exception as e:
    print(f"✗ 下载失败: {e}")
    raise  # 重新抛出异常
```

#### JavaScript 等价实现

```javascript
try {
  const response = await axios.get(url, { timeout: 30000 });
  // ... 处理响应
} catch (error) {
  console.error(`✗ 下载失败: ${error.message}`);
  throw error;  // 重新抛出
}
```

**Python 异常处理最佳实践：**

```python hl:1,15
# ✅ 推荐：捕获具体异常
try:
    response = requests.get(url, timeout=30)
    response.raise_for_status()
except requests.Timeout:
    print("请求超时")
except requests.ConnectionError:
    print("连接失败")
except requests.HTTPError as e:
    print(f"HTTP 错误: {e}")
except Exception as e:
    print(f"未知错误: {e}")
    raise

# ❌ 不推荐：捕获所有异常（难以调试）
try:
    response = requests.get(url, timeout=30)
except Exception as e:
    print(f"错误: {e}")
```

---

### 10. `if __name__ == "__main__"` 模式

#### Python 实现

```python
def generate_file():
    """下载文件"""
    # ... 函数逻辑
    pass

if __name__ == "__main__":
    print("=" * 60)
    print("步骤 1: 生成文件")
    print("=" * 60)

    file_path = generate_file()

    print("\n" + "=" * 60)
    print("步骤 1 完成！")
    print("=" * 60)
```

#### JavaScript 等价实现

```javascript
// Node.js (CommonJS)
function generateFile() {
  // ... 函数逻辑
}

// 只有直接运行此文件时才执行
if (require.main === module) {
  console.log("=".repeat(60));
  console.log("步骤 1: 生成文件");
  console.log("=".repeat(60));

  const filePath = generateFile();

  console.log("\n" + "=".repeat(60));
  console.log("步骤 1 完成！");
  console.log("=".repeat(60));
}

// ES Modules
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

if (process.argv[1] === __filename) {
  // 直接运行时执行
}
```

**`if __name__ == "__main__"` 解释：**

```python hl:4,8
# 假设这个文件名是 generate_file.py

# 直接运行：python generate_file.py
# __name__ = "__main__"
# if 条件为 True，执行测试代码

# 导入运行：import generate_file
# __name__ = "generate_file"
# if 条件为 False，不执行测试代码
```

**为什么需要这个模式？**
- ✅ 允许文件作为脚本**直接运行**
- ✅ 也允许作为模块**被导入**
- ✅ 测试代码不会在导入时自动执行

**示例：**

```python
# generate_file.py
def generate_file():
    print("函数被调用")

if __name__ == "__main__":
    print("脚本直接运行")
    generate_file()

# 其他文件中
import generate_file

# 输出：（只有函数调用时才会打印）
generate_file.generate_file()  # "函数被调用"
```

---

## 🎯 Python 最佳实践

### 1. 文档字符串（`Docstring`）

```python
# ✅ 推荐：使用三引号文档字符串
def generate_file():
    """
    下载 the-verdict.txt 文件到本地

    返回:
        str: 文件的完整路径

    异常:
        requests.RequestException: 下载失败时抛出
    """
    pass

# ❌ 不推荐：使用 # 注释
def generate_file():
    # 下载文件
    pass
```

**访问文档字符串：**

```python hl:2
help(generate_file)
print(generate_file.__doc__)
```

### 2. 类型提示（Type Hints）

```python
# Python 3.5+ 推荐
from typing import Optional

def generate_file() -> str:
    """下载文件并返回路径"""
    return "/path/to/file"

def process_data(data: list[str]) -> dict[str, int]:
    """处理数据"""
    return {"count": len(data)}

# 可选参数
def fetch(url: str, timeout: int = 30) -> Optional[str]:
    """获取数据，可能返回 None"""
    try:
        return requests.get(url, timeout=timeout).text
    except:
        return None
```

### 3. 错误处理原则

```python
# ✅ EAFP：Easier to Ask for Forgiveness than Permission
# 请求原谅比许可更容易（Python 哲学）
try:
    with open(file_path, "r") as f:
        content = f.read()
except FileNotFoundError:
    print("文件不存在")

# ❌ LBYL：Look Before You Leap
# 三思而后行（不 Pythonic）
if os.path.exists(file_path):
    with open(file_path, "r") as f:
        content = f.read()
```

### 4. 导入顺序

```python
# ✅ 推荐：标准库 → 第三方库 → 本地模块
import os          # 标准库
import sys         # 标准库

import requests    # 第三方库
import numpy       # 第三方库

from my_module import my_function  # 本地模块

# ❌ 不推荐：混乱顺序
import requests
import os
from my_module import my_function
import sys
```

### 5. 使用 pathlib（现代 Python）

```python
# Python 3.4+ 推荐
from pathlib import Path

# 获取目录
curr_dir = Path(__file__).parent

# 拼接路径
file_path = curr_dir / "the-verdict.txt"

# 检查存在
if file_path.exists():
    content = file_path.read_text(encoding="utf-8")

# 写入文件
file_path.write_bytes(data)

# 遍历目录
for file in Path(".").glob("*.py"):
    print(file)
```

---

## 📚 总结：JavaScript vs Python

| 概念 | JavaScript | Python |
|------|-----------|--------|
| **异步模型** | 原生异步（Promise/async） | 主要是同步（有 async/await 但不如 JS 普及） |
| **模块导入** | `import` / `require()` | `import` |
| **当前文件路径** | `__filename` / `import.meta.url` | `__file__` |
| **路径拼接** | `path.join()` | `os.path.join()` / `Path` |
| **HTTP 请求** | `fetch` / `axios` | `requests` |
| **文件操作** | `fs.promises` (异步) | `open()` (同步) |
| **资源管理** | `try...finally` | `with` 语句 |
| **字符串格式化** | 模板字符串 `` ` `` | f-string |
| **异常处理** | `try...catch` | `try...except` |
| **类型系统** | 弱类型，动态 | 强类型，动态（可选类型提示） |

---

## 🚀 下一步学习

1. **练习**：修改这个脚本，下载你自己的文本文件
2. **扩展**：添加进度条显示（使用 `tqdm` 库）
3. **优化**：使用 `pathlib` 重写路径操作
4. **错误处理**：添加重试机制（使用 `tenacity` 库）
``