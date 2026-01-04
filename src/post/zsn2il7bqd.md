
# 面向前端的 python 指南 04：创建词汇表（Vocabulary）

`#2026/01/04` `#python` 


## 目录
<!-- toc -->
 ## 📝 功能说明 

从分词后的 tokens 创建词汇表，建立 `token → ID` 的映射关系。这是 LLM 训练的关键步骤。

```python
"""
步骤 4: 创建词汇表 (Vocabulary)
功能: 从 tokens 创建词汇表映射
"""

from typing import Dict, List

def create_vocab(tokens: List[str]) -> Dict[str, int]:
    """
    从 tokens 创建词汇表
    参数:
        tokens: 分词后的列表
    返回:
        vocab: {token: id} 字典
    """

    print("正在创建词汇表...")

    # 1. 去重：使用 set 去掉重复单词
    # 2. 排序：使用 sorted 按字母顺序排列
    all_words = sorted(list(set(tokens)))

    # 3. 查看词汇表大小
    vocab_size = len(all_words)
    print(f"✓ 词汇表创建成功！")
    print(f"  词汇表大小: {vocab_size} 个唯一 tokens")

    # 4. 创建字典：{单词: 整数ID}
    vocab = {token: integer for integer, token in enumerate(all_words)}

    # 打印前 15 个词汇表条目
    print(f"\n  词汇表前 15 个条目:")
    for i, (token, idx) in enumerate(list(vocab.items())[:15]):
        print(f"    {idx:4d}: {repr(token)}")

    # 打印后 5 个词汇表条目
    print(f"\n  词汇表后 5 个条目:")
    for i, (token, idx) in enumerate(list(vocab.items())[-5:]):
        print(f"    {idx:4d}: {repr(token)}")

    return vocab

if __name__ == "__main__":
    print("=" * 60)
    print("步骤 4: 创建词汇表")
    print("=" * 60)

    # 导入步骤 2 和 3 的函数
    from read_file import read_file
    from tokenization import tokenize

    # 读取文件
    raw_text = read_file()
    print()

    # 进行分词
    tokens = tokenize(raw_text)
    print()

    # 创建词汇表
    vocab = create_vocab(tokens)

    print("\n" + "=" * 60)
    print("步骤 4 完成！")
    print("=" * 60)

```

---

## 🔍 核心概念

### 1. set 去重

#### Python 实现

```python
tokens = ["hello", "world", "hello", "python", "world"]
unique_tokens = set(tokens)
# {'hello', 'world', 'python'}
```

#### JavaScript 等价实现

```javascript
const tokens = ["hello", "world", "hello", "python", "world"];
const uniqueTokens = new Set(tokens);
// Set(3) { 'hello', 'world', 'python' }

// 转换为数组
const uniqueArray = [...uniqueTokens];
// ['hello', 'world', 'python']
```

**set vs Array：**

```python
# Python set
unique = set([1, 2, 2, 3, 3, 3])
# {1, 2, 3}

# 添加元素
unique.add(4)
# {1, 2, 3, 4}

# 检查存在（O(1)）
if 3 in unique:
    print("存在")

# 集合运算
set1 = {1, 2, 3}
set2 = {3, 4, 5}
set1 | set2  # 并集: {1, 2, 3, 4, 5}
set1 & set2  # 交集: {3}
set1 - set2  # 差集: {1, 2}
```

```javascript
// JavaScript Set
const unique = new Set([1, 2, 2, 3, 3, 3]);
// Set(3) {1, 2, 3}

// 添加元素
unique.add(4);
// Set(4) {1, 2, 3, 4}

// 检查存在（O(1)）
if (unique.has(3)) {
  console.log("存在");
}

// 集合运算（需转换）
const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);
const union = new Set([...set1, ...set2]);  // 并集
// Set(5) {1, 2, 3, 4, 5}
```

---

### 2. sorted 排序

#### Python 实现

```python hl:7,11
# 基本排序
words = ["banana", "apple", "cherry"]
sorted_words = sorted(words)
# ['apple', 'banana', 'cherry']

# 降序
sorted_words = sorted(words, reverse=True)
# ['cherry', 'banana', 'apple']

# 按长度排序
sorted_words = sorted(words, key=len)
# ['apple', 'banana', 'cherry']

# 按多个条件
words = ["aaa", "b", "aa"]
sorted(words, key=lambda x: (len(x), x))
# ['b', 'aa', 'aaa'] (先按长度，再按字母)
```

#### JavaScript 等价实现

```javascript
// 基本排序
const words = ["banana", "apple", "cherry"];
const sortedWords = [...words].sort();
// ['apple', 'banana', 'cherry']

// 降序
const sortedDesc = [...words].sort((a, b) => b.localeCompare(a));
// ['cherry', 'banana', 'apple']

// 按长度排序
const sortedByLength = [...words].sort((a, b) => a.length - b.length);
// ['apple', 'banana', 'cherry']

// 按多个条件
const words2 = ["aaa", "b", "aa"];
words2.sort((a, b) => {
  if (a.length !== b.length) return a.length - b.length;
  return a.localeCompare(b);
});
// ['b', 'aa', 'aaa']
```

**重要区别：**

>  `sorted()` 返回新列表，不修改原列表 

```python hl:1,7
# Python: sorted() 返回新列表，不修改原列表
words = ["banana", "apple"]
new_words = sorted(words)
print(words)      # ['banana', 'apple'] (不变)
print(new_words)  # ['apple', 'banana']

# .sort() 方法会修改原列表
words.sort()
print(words)  # ['apple', 'banana'] (已修改)
```

```javascript
// JavaScript: .sort() 修改原数组
const words = ["banana", "apple"];
words.sort();
console.log(words);  // ['apple', 'banana'] (已修改)

// 不修改原数组
const newWords = [...words].sort();
console.log(words);    // ['apple', 'banana'] (不变)
console.log(newWords); // ['apple', 'banana']
```

---

### 3. list() 转换

#### Python 实现

```python
# set 转换为 list
unique = {"apple", "banana", "cherry"}
words_list = list(unique)
# ['cherry', 'banana', 'apple'] (顺序不确定)

# 排序后转换
sorted_list = sorted(list(unique))
# ['apple', 'banana', 'cherry']
```

#### JavaScript 等价实现

```javascript
// Set 转换为数组
const unique = new Set(["apple", "banana", "cherry"]);
const wordsArray = Array.from(unique);
// ['apple', 'banana', 'cherry']

// 或使用扩展运算符
const wordsArray2 = [...unique];
// ['apple', 'banana', 'cherry']

// 排序
const sortedArray = [...unique].sort();
// ['apple', 'banana', 'cherry']
```

---

### 4. 字典推导式（Dict Comprehension）

> 另外还可参考 [5. Python 字典推导式与 enumerate 用法详解](/post/vzrcmybi1t.html)

#### Python 实现

```python
all_words = ["apple", "banana", "cherry"]

# 创建字典
vocab = {token: integer for integer, token in enumerate(all_words)}
# {'apple': 0, 'banana': 1, 'cherry': 2}

# 等价于
vocab = {}
for integer, token in enumerate(all_words):
    vocab[token] = integer
```

#### JavaScript 等价实现

```javascript
const allWords = ["apple", "banana", "cherry"];

// 创建对象
const vocab = {};
allWords.forEach((token, integer) => {
  vocab[token] = integer;
});
// { apple: 0, banana: 1, cherry: 2 }

// 或使用 Object.fromEntries
const vocab = Object.fromEntries(
  allWords.map((token, integer) => [token, integer])
);
```

**字典推导式示例：**

```python hl:15
# 基本语法
{key: value for 变量 in 可迭代对象}

# 示例 1: 平方
numbers = [1, 2, 3, 4, 5]
squares = {x: x**2 for x in numbers}
# {1: 1, 2: 4, 3: 9, 4: 16, 5: 16}

# 示例 2: 带条件
even_squares = {x: x**2 for x in numbers if x % 2 == 0}
# {2: 4, 4: 16}

# 示例 3: 字符串处理
words = ["apple", "banana", "cherry"]
word_lengths = {word: len(word) for word in words}
# {'apple': 5, 'banana': 6, 'cherry': 6}

# 示例 4: 双值推导
pairs = [("a", 1), ("b", 2), ("c", 3)]
dict_from_pairs = {k: v for k, v in pairs}
# {'a': 1, 'b': 2, 'c': 3}
```

---

### 5. enumerate 枚举

#### Python 实现

```python
words = ["apple", "banana", "cherry"]

# enumerate 返回 (索引, 值) 元组
for i, word in enumerate(words):
    print(f"{i}: {word}")
# 0: apple
# 1: banana
# 2: cherry

# 指定起始索引
for i, word in enumerate(words, start=1):
    print(f"{i}: {word}")
# 1: apple
# 2: banana
# 3: cherry
```

#### JavaScript 等价实现

```javascript
const words = ["apple", "banana", "cherry"];

// forEach
words.forEach((word, i) => {
  console.log(`${i}: ${word}`);
});
// 0: apple
// 1: banana
// 2: cherry

// entries()
for (const [i, word] of words.entries()) {
  console.log(`${i}: ${word}`);
}
```

**对比表：**

| 操作 | Python | JavaScript |
|------|--------|-----------|
| 枚举 | `enumerate(iterable)` | `array.entries()` |
| 索引起始 | `start=1` 参数 | 手动加 `i + 1` |
| 返回值 | `(index, value)` 元组 | `[index, value]` 数组 |

---

### 6. dict.items() 遍历

#### Python 实现

```python
vocab = {"apple": 0, "banana": 1, "cherry": 2}

# 遍历键值对
for token, idx in vocab.items():
    print(f"{token}: {idx}")

# 只遍历键
for token in vocab.keys():
    print(token)

# 只遍历值
for idx in vocab.values():
    print(idx)
```

#### JavaScript 等价实现

```javascript
const vocab = { apple: 0, banana: 1, cherry: 2 };

// 遍历键值对
Object.entries(vocab).forEach(([token, idx]) => {
  console.log(`${token}: ${idx}`);
});

// 只遍历键
Object.keys(vocab).forEach(token => {
  console.log(token);
});

// 只遍历值
Object.values(vocab).forEach(idx => {
  console.log(idx);
});
```

**对比表：**

> [!danger] 对比，一目了然
> 
> | 操作  | Python          | JavaScript            |
> | --- | --------------- | --------------------- |
> | 键值对 | `dict.items()`  | `Object.entries(obj)` |
> | 键   | `dict.keys()`   | `Object.keys(obj)`    |
> | 值   | `dict.values()` | `Object.values(obj)`  |

### 7. `repr()` vs `str()`

#### Python 实现

```python
token = "hello"
print(str(token))   # hello
print(repr(token))  # 'hello' (带引号)

# 包含特殊字符
token = "hello\nworld"
print(str(token))   # hello
                       # world (换行)
print(repr(token))  # 'hello\nworld' (显示转义字符)
```

#### JavaScript 等价实现

```javascript
const token = "hello";
console.log(token);        // hello
console.log(JSON.stringify(token));  // "hello" (带引号)

// 包含特殊字符
const token2 = "hello\nworld";
console.log(token2);              // hello
                                  // world
console.log(JSON.stringify(token2));  // "hello\nworld"
```

**何时使用哪个？**

```python
# str() - 面向用户
print(f"内容: {text}")  # 内容: Hello, World!

# repr() - 面向开发者
print(f"Token: {repr(token)}")  # Token: 'hello' (调试更清晰)
```

---

### 8. 列表切片（取前 N 个）

#### Python 实现

```python
vocab = {"apple": 0, "banana": 1, "cherry": 2, ...}

# 前 15 个条目
list(vocab.items())[:15]

# 后 5 个条目
list(vocab.items())[-5:]
```

#### JavaScript 等价实现

```javascript
const vocab = { apple: 0, banana: 1, cherry: 2 };

const entries = Object.entries(vocab);

// 前 15 个条目
entries.slice(0, 15);

// 后 5 个条目
entries.slice(-5);
```

---

## 🎯 Python 最佳实践

### 1. 使用集合和排序的链式操作

```python
# ✅ 推荐：链式操作（一行代码）
unique_words = sorted(set(tokens))

# ❌ 不推荐：多行代码
unique_tokens = set(tokens)
unique_words = list(unique_tokens)
sorted_words = sorted(unique_words)
```

### 2. 字典推导式 vs 循环

```python
# ✅ 推荐：字典推导式
vocab = {token: i for i, token in enumerate(sorted_words)}

# ❌ 不推荐：显式循环
vocab = {}
for i, token in enumerate(sorted_words):
    vocab[token] = i
```

### 3. 使用 collections.Counter

```python hl:6
from collections import Counter

tokens = ["hello", "world", "hello", "python"]

# 统计词频
word_counts = Counter(tokens)
# Counter({'hello': 2, 'world': 1, 'python': 1})

# 获取最常见词
most_common = word_counts.most_common(5)
# [('hello', 2), ('world', 1), ('python', 1)]
```

---

## 📚 深入理解：词汇表设计

### 词汇表大小的影响

```python
# 小词汇表 - 训练快，但精度低
small_vocab_size = 1000

# 中等词汇表 - 平衡
medium_vocab_size = 10000  # GPT-2 使用

# 大词汇表 - 精度高，但需要更多内存
large_vocab_size = 50000   # GPT-3 使用
```

### 特殊标记（Special Tokens）

```python
# 添加特殊标记
vocab = {
    "<PAD>": 0,   # 填充
    "<UNK>": 1,   # 未知词
    "<BOS>": 2,   # 句子开始
    "<EOS>": 3,   # 句子结束
    **{token: i+4 for i, token in enumerate(unique_words)}
}
```

---

## 🔄 Python vs JavaScript 完整对比

### 创建词汇表完整实现

#### Python

```python
from typing import List, Dict

def create_vocab(tokens: List[str]) -> Dict[str, int]:
    # 去重并排序
    all_words = sorted(list(set(tokens)))

    # 创建映射
    vocab = {token: i for i, token in enumerate(all_words)}

    return vocab

# 使用
tokens = ["hello", "world", "hello"]
vocab = create_vocab(tokens)
# {'hello': 0, 'world': 1}
```

#### JavaScript

```javascript
function createVocab(tokens) {
  // 去重
  const unique = new Set(tokens);

  // 排序
  const sorted = Array.from(unique).sort();

  // 创建映射
  const vocab = {};
  sorted.forEach((token, i) => {
    vocab[token] = i;
  });

  return vocab;
}

// 使用
const tokens = ["hello", "world", "hello"];
const vocab = createVocab(tokens);
// { hello: 0, world: 1 }
```

---

## 📚 总结

**关键要点：**

1. ✅ **set 去重** - 快速去除重复元素
2. ✅ **sorted 排序** - 稳定排序，可自定义规则
3. ✅ **字典推导式** - Pythonic 的字典创建方式
4. ✅ **enumerate** - 同时获取索引和值
5. ✅ **dict.items()** - 遍历键值对

**Python vs JavaScript：**
- set 几乎相同
- sorted 返回新列表，sort 修改原数组
- 字典推导式 vs Object.fromEntries()
