
# 面向前端的 python 指南 03：文本分词（Tokenization）


`#2026/01/04` `#python` 


## 目录
<!-- toc -->
 ## 📝 功能说明 

将原始文本分割成独立的 tokens（单词/标点符号），这是 NLP 和 LLM 训练的基础步骤。

```python
"""
步骤 3: 分词 (Tokenization)
功能: 将文本分割成 tokens
"""

import re
from typing import List

def tokenize(raw_text: str) -> List[str]:
    """
    将文本分割成 tokens

    参数:
        raw_text: 原始文本字符串

    返回:
        tokens: 分词后的列表
    """

    print("正在进行分词...")

    # 使用正则表达式进行分词
    preprocessed = re.split(r'([,.:;?_!"()\']|--|\s)', raw_text)

    # 清理分词结果：
    # - item.strip(): 去除每个 token 两端的空白字符
    # - if item.strip(): 过滤掉空字符串（只包含空白的项）
    tokens = [item.strip() for item in preprocessed if item.strip()]

    print(f"✓ 分词完成！")
    print(f"  总 token 数: {len(tokens)}")
    print(f"  前 50 个 tokens:")

    # 打印前 50 个 tokens，每行 10 个
    for i in range(0, min(50, len(tokens)), 10):
        batch = tokens[i : i + 10]
        print(f"    [{i:3d}-{i + len(batch) - 1:3d}] {batch}")

    return tokens

if __name__ == "__main__":
    print("=" * 60)
    print("步骤 3: 分词")
    print("=" * 60)

    # 导入步骤 2 的函数
    from read_file import read_file

    # 读取文件
    raw_text = read_file()
    print()

    # 进行分词
    tokens = tokenize(raw_text)

    print("\n" + "=" * 60)
    print("步骤 3 完成！")
    print("=" * 60)
```

---

## 🔍 核心概念

### 1. 正则表达式（Regular Expression）

#### Python 实现

```python
import re

# 使用正则表达式分割文本
preprocessed = re.split(r'([,.:;?_!"()\']|--|\s)', raw_text)
```

#### JavaScript 等价实现

```javascript
// JavaScript 正则表达式
const preprocessed = raw_text.split(/([,.:;?_!"()\']|--|\s)/);
```

**正则表达式详解：**

```python
import re

# 模式分解
pattern = r'([,.:;?_!"()\']|--|\s)'
#         ^^^^^^^^^^^^^^^^     ^   ^
#         ①字符类/捕获组    ②字符串 ③字符类

# ① [,.:;?_!"()\'] - 字符类（Character Class）
# 匹配方括号内的任意一个字符
# 包括：逗号、句号、冒号、分号、问号、下划线、感叹号、双引号、单引号、括号

# ② |-- - 匹配双连字符
# 或运算符

# ③ \s - 匹配任意空白字符
# 包括：空格、制表符(\t)、换行符(\n)、回车符(\r)

# (...) - 捕获组
# 括号内的内容会被保留在结果中
```

**测试正则表达式：**

```python
import re

text = "Hello, world! How are you?"

# 不使用捕获组（分隔符会丢失）
tokens1 = re.split(r'[,.:;?_!"()\']|--|\s', text)
print(tokens1)
# ['Hello', '', 'world', '', 'How', 'are', 'you', '']
# 注意：空字符串和分隔符都丢失了

# 使用捕获组（保留分隔符）
tokens2 = re.split(r'([,.:;?_!"()\']|--|\s)', text)
print(tokens2)
# ['Hello', ', ', 'world', '! ', 'How', ' ', 'are', ' ', 'you', '?']
# 分隔符被保留

# 对比 JavaScript
// JavaScript
const text = "Hello, world! How are you?";
const tokens = text.split(/([,.:;?_!"()\']|--|\s)/);
console.log(tokens);
// ['Hello', ', ', 'world', '! ', 'How', ' ', 'are', ' ', 'you', '?', '']
```

---

### 2. re 模块核心方法

> [!success] 总结
> - sub → replace
> - split → split
> - findAll → macth g

#### Python 实现

```python
import re

text = "Hello, world! 123"

# re.split - 分割
re.split(r',\s*', text)  # ['Hello', 'world! 123']

# re.findall - 查找所有匹配
re.findall(r'\d+', text)  # ['123']

# re.sub - 替换
re.sub(r'world', 'Python', text)  # 'Hello, Python! 123'

# re.match - 从开头匹配
re.match(r'Hello', text)  # <match object>
re.match(r'world', text)  # None

# re.search - 搜索第一个匹配
re.search(r'world', text)  # <match object>

# re.compile - 编译正则（提高性能）
pattern = re.compile(r'\d+')
pattern.findall(text)  # ['123']
```

#### JavaScript 等价实现

```javascript
const text = "Hello, world! 123";

// split - 分割
text.split(/,\s*/)  // ['Hello', 'world! 123']

// match - 查找所有匹配
text.match(/\d+/g)  // ['123']

// replace - 替换
text.replace(/world/g, 'Python')  // 'Hello, Python! 123'

// match - 从开头匹配
text.match(/^Hello/)  // ['Hello', index: 0, ...]
text.match(/^world/)  // null

// search - 搜索第一个匹配
text.search(/world/)  // 7（索引位置）

// 无需编译，正则表达式字面量即编译形式
```

**对比表：**

| 操作 | Python | JavaScript |
|------|--------|-----------|
| 分割 | `re.split(pattern, text)` | `text.split(pattern)` |
| 查找 | `re.findall(pattern, text)` | `text.match(pattern)`（需 `/g`） |
| 替换 | `re.sub(pattern, repl, text)` | `text.replace(pattern, repl)` |
| 搜索 | `re.search(pattern, text)` | `text.search(pattern)` |
| 编译 | `re.compile(pattern)` | 正则字面量 `/.../` |

---

### 3. 列表推导式（List Comprehension）

> 另外可参考 [5. Python 字典推导式与 enumerate 用法详解](/post/vzrcmybi1t.html)

#### Python 实现

```python
tokens = [item.strip() for item in preprocessed if item.strip()]
```

#### JavaScript 等价实现

```javascript hl:2
// 使用 map + filter
const tokens = preprocessed
  .map(item => item.trim())
  .filter(item => item.length > 0);

// 或使用 flatMap（更高效）
const tokens = preprocessed
  .flatMap(item => {
    const trimmed = item.trim();
    return trimmed ? [trimmed] : [];
  });
```

**列表推导式语法：**

```python hl:19,2
# 基本语法
# [表达式 for 变量 in 可迭代对象 if 条件]

# 示例 1: 基本列表推导
numbers = [1, 2, 3, 4, 5]
squares = [x**2 for x in numbers]  # 计算每个数字的平方
# 结果: [1, 4, 9, 16, 25]

# JavaScript 等价
const squares = numbers.map(x => x**2); // 计算每个数字的平方

# 示例 2: 带过滤
evens = [x for x in numbers if x % 2 == 0]  # 筛选出偶数
# 结果: [2, 4]

# JavaScript 等价
const evens = numbers.filter(x => x % 2 === 0); // 筛选出偶数

# 示例 3: 带条件表达式 → 三元表达式
result = [(x if x > 0 else -x) for x in numbers]  # 将正数保持不变，负数取其相反数
# 结果: [1, 2, 3, 4, 5]

# JavaScript 等价
const result = numbers.map(x => x > 0 ? x : -x); // 将正数保持不变，负数取其相反数

```

**复杂的列表推导式：**

```python
# 嵌套循环
matrix = [1, 2, 3], [4, 5, 6], [7, 8, 9](/post/hzlaypj4lb.html#1,-2,-3],-[4,-5,-6],-[7,-8,-9)
flattened = [x for row in matrix for x in row]
# [1, 2, 3, 4, 5, 6, 7, 8, 9]

# JavaScript 等价
const flattened = matrix.flat();

# 带索引
words = ['apple', 'banana', 'cherry']
indexed = [(i, word) for i, word in enumerate(words)]
# [(0, 'apple'), (1, 'banana'), (2, 'cherry')]

# JavaScript 等价
const indexed = words.map((word, i) => [i, word]);
```

**代码解析（我们的例子）：**

```python
tokens = [item.strip() for item in preprocessed if item.strip()]

# 分解步骤：
# 1. for item in preprocessed - 遍历列表
# 2. if item.strip() - 过滤条件（只保留非空）
# 3. item.strip() - 映射操作（去除空白）

# 等价于以下代码：
tokens = []
for item in preprocessed:
    if item.strip():  # 检查去除空白后是否非空
        tokens.append(item.strip())

# JavaScript 等价
const tokens = preprocessed
  .filter(item => item.trim().length > 0)
  .map(item => item.trim());
```

---

### 4. 字符串方法（strip）

#### Python 实现

```python hl:6,10,14
text = "  Hello, World!  "

# strip() - 去除两端空白
text.strip()  # "Hello, World!"

# lstrip() - 去除左端空白
text.lstrip()  # "Hello, World!  "

# rstrip() - 去除右端空白
text.rstrip()  # "  Hello, World!"

# 去除特定字符
text = "***Hello***"
text.strip('*')  # "Hello"
```

#### JavaScript 等价实现

```javascript
const text = "  Hello, World!  ";

// trim() - 去除两端空白
text.trim();  // "Hello, World!"

// trimStart() / trimLeft() - 去除左端空白
text.trimStart();  // "Hello, World!  "

// trimEnd() / trimRight() - 去除右端空白
text.trimEnd();  // "  Hello, World!"

// 去除特定字符（需要正则）
const text2 = "***Hello***";
text2.replace(/^\*+|\*+$/g, '');  // "Hello"
```

**对比表：**

| 操作 | Python | JavaScript |
|------|--------|-----------|
| 去除两端空白 | `.strip()` | `.trim()` |
| 去除左端空白 | `.lstrip()` | `.trimStart()` / `.trimLeft()` |
| 去除右端空白 | `.rstrip()` | `.trimEnd()` / `.trimRight()` |
| 去除指定字符 | `.strip('*')` | `.replace(/^\*+|\*+$/g, '')` |

---

### 5. range() 函数

#### Python 实现

```python
# 打印前 50 个 tokens，每行 10 个
for i in range(0, min(50, len(tokens)), 10):
    batch = tokens[i:i+10]
    print(f"    [{i:3d}-{i+len(batch)-1:3d}] {batch}")
```

#### JavaScript 等价实现

```javascript
// JavaScript 没有直接的 range 函数
for (let i = 0; i < Math.min(50, tokens.length); i += 10) {
  const batch = tokens.slice(i, i + 10);
  console.log(`[${i}-${i + batch.length - 1}] ${batch}`);
}

// 或使用 Array.from
const indices = Array.from(
  {length: Math.ceil(Math.min(50, tokens.length) / 10)},
  (_, k) => k * 10
);
```

**range() 详解：**

```python hl:7
# range(stop) - 0 到 stop-1
list(range(5))  # [0, 1, 2, 3, 4]

# range(start, stop) - start 到 stop-1
list(range(2, 5))  # [2, 3, 4]

# range(start, stop, step) - 带步长
list(range(0, 10, 2))  # [0, 2, 4, 6, 8]

# 负步长（倒序）
list(range(10, 0, -1))  # [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

# range vs JavaScript
// JavaScript: 使用 for...of 或扩展运算符
[...Array(5).keys()]  // [0, 1, 2, 3, 4]

Array.from({length: 5}, (_, i) => i)  // [0, 1, 2, 3, 4]
```

---

### 6. 列表切片（Slicing）

#### Python 实现

```python
batch = tokens[i:i+10]
# tokens[0:10]   # 前 10 个元素
# tokens[10:20]  # 第 10-19 个元素
# tokens[-10:]   # 最后 10 个元素
```

#### JavaScript 等价实现

```javascript
const batch = tokens.slice(i, i + 10);
// tokens.slice(0, 10)   // 前 10 个元素
// tokens.slice(10, 20)  // 第 10-19 个元素
// tokens.slice(-10)     // 最后 10 个元素
```

**Python 切片 vs JavaScript slice：**

```python hl:11
# Python 切片语法
tokens[start:stop:step]

# 示例
tokens = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

tokens[2:5]    # [2, 3, 4]
tokens[:5]     # [0, 1, 2, 3, 4]
tokens[5:]     # [5, 6, 7, 8, 9]
tokens[::2]    # [0, 2, 4, 6, 8] (偶数)
tokens[::-1]   # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] (反转)

# JavaScript
const tokens = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

tokens.slice(2, 5);  // [2, 3, 4]
tokens.slice(0, 5);  // [0, 1, 2, 3, 4]
tokens.slice(5);    // [5, 6, 7, 8, 9]
tokens.filter((_, i) => i % 2 === 0);  // [0, 2, 4, 6, 8] (偶数)
tokens.slice().reverse();  // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] (反转)
```

---

### 7. f-string 格式化进阶

#### Python 实现

```python
print(f"    [{i:3d}-{i+len(batch)-1:3d}] {batch}")
#          ^^^  ^^^^^^^^^^^^^^
#          格式说明符
```

**格式说明符详解：**

```python
# 语法：{变量:宽度.精度类型}

# 数字
num = 42
f"{num}"      # "42"
f"{num:5d}"   # "   42" (右对齐，宽度 5)
f"{num:05d}"  # "00042" (补零)
f"{num:<5d}"  # "42   " (左对齐)
f"{num:^5d}"  # " 42  " (居中)

# 浮点数
pi = 3.14159
f"{pi:.2f}"   # "3.14" (保留 2 位小数)
f"{pi:10.2f}" # "      3.14" (宽度 10，2 位小数)

# 字符串
name = "Alice"
f"{name:>10}" # "     Alice" (右对齐)
f"{name:<10}" # "Alice     " (左对齐)
f"{name:^10}" # "  Alice   " (居中)

# 列表
batch = ['a', 'b', 'c']
f"{batch}"    # "['a', 'b', 'c']"
```

#### JavaScript 等价实现

```javascript
// JavaScript 没有内置格式化，需要手动实现
const num = 42;
console.log(`    ${num}`);  // "    42"

// 或使用 padStart
num.toString().padStart(5, ' ');  // "   42"

// 格式化数字（Intl.NumberFormat）
const pi = 3.14159;
new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}).format(pi);  // "3.14"
```

---

### 8. 类型提示（Type Hints）

#### Python 实现

```python
from typing import List

def tokenize(raw_text: str) -> List[str]:
    """
    将文本分割成 tokens

    参数:
        raw_text: 原始文本字符串

    返回:
        tokens: 分词后的列表
    """
    pass
```

#### TypeScript 等价实现

```typescript
function tokenize(rawText: string): string[] {
  /**
   * 将文本分割成 tokens
   *
   * @param rawText 原始文本字符串
   * @returns 分词后的列表
   */
  const tokens: string[] = [];
  return tokens;
}
```

**Python 类型提示详解：**

```python
from typing import List, Dict, Tuple, Optional, Union

# 基本类型
def func1(x: int, y: str) -> bool:
    return True

# 列表
def func2() -> List[str]:
    return ["a", "b", "c"]

# 字典
def func3() -> Dict[str, int]:
    return {"a": 1, "b": 2}

# 元组
def func4() -> Tuple[int, str, float]:
    return (1, "hello", 3.14)

# 可选类型
def func5() -> Optional[str]:
    return None  # 或返回字符串

# 联合类型
def func6() -> Union[int, str]:
    return 42  # 或返回字符串

# Python 3.10+ 简化语法
def func6() -> int | str:
    return 42

# 泛型（Python 3.12+）
from typing import TypeVar

T = TypeVar('T')

def get_first(items: List[T]) -> T:
    return items[0]
```

---

## 🎯 Python 最佳实践

### 1. 正则表达式性能优化

```python hl:4
# ✅ 推荐：预编译正则表达式
import re

TOKEN_PATTERN = re.compile(r'([,.:;?_!"()\']|--|\s)')

def tokenize(text: str) -> List[str]:
    return TOKEN_PATTERN.split(text)

# ❌ 不推荐：每次调用都编译
def tokenize(text: str) -> List[str]:
    return re.split(r'([,.:;?_!"()\']|--|\s)', text)
```

### 2. 列表推导式 vs 生成器表达式

```python hl:4
# 列表推导式 - 立即创建列表
tokens = [item.strip() for item in items if item.strip()]

# 生成器表达式 - 惰性求值（节省内存）
tokens_gen = (item.strip() for item in items if item.strip())

# 使用生成器
for token in tokens_gen:
    print(token)

# 转换为列表
tokens_list = list(tokens_gen)
```

### 3. 使用命名元组提高可读性

```python hl:3
from typing import NamedTuple

class Token(NamedTuple):
    text: str
    start: int
    end: int

# 使用
token = Token("hello", 0, 5)
print(token.text)   # "hello"
print(token.start)  # 0
print(token.end)    # 5
```

---

## 📚 深入理解：分词策略

### 常见分词方法对比

```python hl:10
# 1. 空格分词（最简单）
text = "Hello, world!"
tokens1 = text.split()  # ['Hello,', 'world!']

# 2. 正则分词（本项目使用）
import re
tokens2 = re.split(r'([,.:;?_!"()\']|--|\s)', text)
# ['Hello', ', ', 'world', '!', '']

# 3. NLTK 分词器
import nltk
tokens3 = nltk.word_tokenize(text)
# ['Hello', ',', 'world', '!']

# 4. spaCy 分词器
import spacy
nlp = spacy.load("en_core_web_sm")
doc = nlp(text)
tokens4 = [token.text for token in doc]
# ['Hello', ',', 'world', '!']

# 5. BPE（字节对编码，GPT 使用）
# 需要训练，能处理未知词
```

---

## 🔄 Python vs JavaScript 完整对比

### 分词函数完整实现

#### Python

```python
import re
from typing import List

def tokenize(raw_text: str) -> List[str]:
    """同步分词"""
    preprocessed = re.split(r'([,.:;?_!"()\']|--|\s)', raw_text)
    tokens = [item.strip() for item in preprocessed if item.strip()]
    return tokens

# 使用
text = "Hello, world!"
tokens = tokenize(text)
```

#### JavaScript

```javascript
function tokenize(text) {
  // 同步分词
  const preprocessed = text.split(/([,.:;?_!"()\']|--|\s)/);
  const tokens = preprocessed
    .map(item => item.trim())
    .filter(item => item.length > 0);
  return tokens;
}

// 使用
const text = "Hello, world!";
const tokens = tokenize(text);
```

---

## 🚀 实战练习

### 练习 1：自定义分词器

```python
import re
from typing import List

class CustomTokenizer:
    def __init__(self, pattern: str):
        self.pattern = re.compile(pattern)

    def tokenize(self, text: str) -> List[str]:
        tokens = self.pattern.split(text)
        return [t.strip() for t in tokens if t.strip()]

# 使用
tokenizer = CustomTokenizer(r'([,.:;?_!"()\']|--|\s)')
tokens = tokenizer.tokenize("Hello, world!")
```

### 练习 2：添加特殊标记

```python
def tokenize_with_special(text: str) -> List[str]:
    """添加 <BOS> <EOS> 标记"""
    tokens = tokenize(text)
    return ['<BOS>'] + tokens + ['<EOS>']

# 使用
tokens = tokenize_with_special("Hello world")
# ['<BOS>', 'Hello', 'world', '<EOS>']
```

---

## 📚 总结

**关键要点：**

1. ✅ **正则表达式** - 强大的文本匹配工具
2. ✅ **列表推导式** - Pythonic 的数据处理方式
3. ✅ **类型提示** - 提高代码可读性和可维护性
4. ✅ **re 模块** - Python 的正则表达式库
5. ✅ **字符串方法** - `.strip()` 清理空白

**Python vs JavaScript：**
- 正则表达式语法几乎相同
- Python 使用 `re` 模块，JavaScript 使用正则字面量
- Python 有列表推导式，JavaScript 使用 `map`/`filter`
