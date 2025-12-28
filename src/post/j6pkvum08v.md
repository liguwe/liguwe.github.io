
# 文本嵌入（用于句子和整篇文档）：代码详解篇

`#2025/12/28` `#ai` 


## 目录
<!-- toc -->
 ## 承接前文：从词元到文本的跨越 

前文：
- 我们学会了"如何把`单个词元`变成向量"  
- 现在要解决"如何把`整句话、整篇文档`变成一个向量"

```python
# 问题演进  
词元 "Python" → [0.1, 0.5, 0.8, ...]  # 2.2节：词元嵌入 ✅  

句子 "I love Python" → [0.3, 0.7, 0.2, ...]  # 2.3节：文本嵌入 ✅  
文档 "整篇博客文章..." → [0.5, 0.1, 0.9, ...]  # 2.3节：文本嵌入 ✅  
```

---

## 核心问题：为什么需要文本嵌入？

### 🎯 实际应用场景驱动

```python hl:1,10,14
# 场景1：搜索引擎  
用户查询 = "如何学习Python编程？"  
文档库 = [  
    "Python入门教程...",  
    "JavaScript框架介绍...",   
    "Python数据分析实战..."  
]  
# 需要：把查询和每个文档都变成向量，然后计算相似度  

# 场景2：文档分类  
email = "尊敬的客户，您的订单已发货..."  
# 需要：把整封邮件变成一个向量，然后判断是"商务邮件"还是"垃圾邮件"  

# 场景3：语义去重  
评论1 = "这个产品很棒！"  
评论2 = "这东西真不错！"  
评论3 = "这个手机怎么用？"  
# 需要：把每条评论变成向量，找出意思相近的（评论1和评论2）  
```

如果`只用词元嵌入`：

```python
# ❌ 问题：一句话有多个词元  
"I love Python" → [  
    [0.2, 0.8, ...],  # "I"  
    [0.5, 0.3, ...],  # "love"  
    [0.1, 0.7, ...]   # "Python"  
]  
# 这是3个向量，无法直接用于相似度计算！  
```

文本嵌入解决方案： → `整句话变成一个向量`   

```python
# ✅ 目标：整句话变成一个向量  
"I love Python" → [0.4, 0.6, 0.5, ...]  # 一个768维向量  
```

## 实现方法1：朴素平均（不推荐）

### 📐 简单粗暴的做法

```python
# 步骤1：获取每个词元的嵌入  
tokens = ["I", "love", "Python"]  
token_embeddings = [  
    [0.2, 0.8, 0.1],  # "I"  
    [0.5, 0.3, 0.9],  # "love"  
    [0.1, 0.7, 0.2]   # "Python"  
]  

# 步骤2：直接求平均  
import numpy as np  
sentence_embedding = np.mean(token_embeddings, axis=0)  
# 结果：[0.27, 0.6, 0.4]  
```

问题：

- ❌ 信息丢失严重（"`love`"和"`hate`"平均后可能差不多）
- ❌ 忽略`词序`（"`Python loves me`" 和 "`I love Python`" 完全一样）
- ❌ 无法捕捉复杂语义

---

## 实现方法2：专用模型（推荐）

### 🚀 Sentence Transformers 登场

```python hl:10
from sentence_transformers import SentenceTransformer  

# 加载专门训练的文本嵌入模型  
model = SentenceTransformer("sentence-transformers/all-mpnet-base-v2")  

# 一行代码搞定！  
text = "Best movie ever!"  
vector = model.encode(text)  

# 打印出一个 768 维向量
print(vector.shape)  # (768,) — 一个768维向量  
```

与`词元嵌入`的对比：

| 维度  | 词元嵌入                         | 文本嵌入                                |
| --- | ---------------------------- | ----------------------------------- |
| 输入  | 单个词元                         | 整句话/文档                              |
| 输出  | 多个向量（每个词元一个）                 | 一个向量                                |
| 用途  | LLM内部处理                      | 应用层任务                               |
| 例子  | "Python" → `[0.1, 0.5, ...]` | "I love Python" → `[0.3, 0.7, ...]` |

---

## 代码实战：文本嵌入的完整流程

### 🔧 Step 1：安装依赖

```bash
pip install sentence-transformers  
```

### 🔧 Step 2：生成嵌入 

```python hl:15
from sentence_transformers import SentenceTransformer  

# 加载模型（第一次会自动下载）  
model = SentenceTransformer("all-MiniLM-L6-v2")  # 轻量级模型  

# 准备文本  
sentences = [  
    "Python is a programming language",  
    "I love coding in Python",   
    "Pizza is delicious",  
    "Programming is fun"  
]  

# 生成嵌入
# （批量处理）  
embeddings = model.encode(sentences)  

print(embeddings.shape)  
# 输出：(4, 384)   
# 含义：4个句子，每个句子384维向量  
```

### 🔧 Step 3：计算相似度 → 句子语义相似度

```python
from sklearn.metrics.pairwise import cosine_similarity  

# 计算所有句子`两两之间`的相似度  
similarities = cosine_similarity(embeddings)  

print(similarities)  
# 输出示例（相似度矩阵）：  
# [
#  [1.00, 0.75, 0.12, 0.34],   # 句子1 vs 所有句子  
#  [0.75, 1.00, 0.08, 0.41],   # 句子2 vs 所有句子  
#  [0.12, 0.08, 1.00, 0.15],   # 句子3 vs 所有句子  
#  [0.34, 0.41, 0.15, 1.00]]   # 句子4 vs 所有句子  

# 观察：  
# 句子1和句子2相似度0.75（都关于Python编程）✅  
# 句子3和其他句子相似度低（讲的是披萨）✅  
```

---

## 实际应用场景

### 🎯 应用1：语义搜索引擎

```python
# 文档库  
documents = [  
    "Python is great for data science",  
    "JavaScript runs in the browser",  
    "Machine learning with Python",  
    "React is a JavaScript library"  
]  

# 生成文档嵌入（提前计算，存入数据库）  
doc_embeddings = model.encode(documents)  

# 用户搜索  
query = "How to do data analysis?"  
query_embedding = model.encode(query)  

# 计算相似度  
from sklearn.metrics.pairwise import cosine_similarity  
scores = cosine_similarity([query_embedding], doc_embeddings)[0]  

# 排序返回最相关的文档  
import numpy as np  
top_index = np.argmax(scores)  
print(f"最相关文档：{documents[top_index]}")  
# 输出：Python is great for data science  
```

### 🎯 应用2：智能去重

```python hl:12
# 用户评论  
reviews = [  
    "This product is amazing!",  
    "This item is fantastic!",      # 和第1条语义重复  
    "How do I return this?",  
    "Where is my order?"  
]  

# 生成嵌入  
embeddings = model.encode(reviews)  

# 设置相似度阈值（例如0.8）  
threshold = 0.8  
duplicates = []  

for i in range(len(reviews)):  
    for j in range(i + 1, len(reviews)):  
        sim = cosine_similarity([embeddings[i]], [embeddings[j]])[0][0]  
        if sim > threshold:  
            duplicates.append((i, j, sim))  
            print(f"重复：\n  [{i}] {reviews[i]}\n  [{j}] {reviews[j]}\n  相似度：{sim:f}\n")  

# 输出：  
# 重复：  
#   [0] This product is amazing!  
#   [1] This item is fantastic!  
#   相似度：0.87  
```

### 🎯 应用3：文档聚类

```python hl:21
from sklearn.cluster import KMeans  

# 大量文档  
documents = [  
    "Python programming tutorial",  
    "Learn JavaScript basics",  
    "Python for beginners",  
    "JavaScript advanced course",  
    "Delicious pizza recipe",  
    "How to make pasta"  
    # ... 更多文档  
]  

# 生成嵌入  
embeddings = model.encode(documents)  

# 聚类（分成3类）  
kmeans = KMeans(n_clusters=3, random_state=42)  
labels = kmeans.fit_predict(embeddings)  

# 查看结果  
for i, label in enumerate(labels):  
    print(f"文档 {i} 属于簇 {label}: {documents[i]}")  

# 输出示例：  
# 文档 0 属于簇 0: Python programming tutorial  
# 文档 1 属于簇 1: Learn JavaScript basics  
# 文档 2 属于簇 0: Python for beginners  
# 文档 3 属于簇 1: JavaScript advanced course  
# 文档 4 属于簇 2: Delicious pizza recipe  
# 文档 5 属于簇 2: How to make pasta  
```

## 文本嵌入模型的内部原理

### 🧠 它是如何训练的？

```python hl:5
# 训练数据：句子对 + 相似度标签  
训练样本 = [  
    ("Python is great", "I love Python", 相似度=0.9),  
    ("Python is great", "Pizza is yummy", 相似度=0.1),  
    # ... 数百万个样本  
]  

# 训练目标：让相似句子的向量靠近，不相似的远离  
```

训练流程：

1. 用BERT/RoBERTa 等模型作为基础
2. 添加特殊的`池化层`（把`多个词元向量`变成一个）
3. 用对比学习训练（Contrastive Learning）
4. 优化目标：
	- 相似句子`余弦相似度高`，`不相似`的低

## 关键技术细节

### 📐 常见模型对比

| 模型                | 维度   | 速度     | 精度    | 适用场景      |
| ----------------- | ---- | ------ | ----- | --------- |
| all-MiniLM-L6-v2  | 384  | 🚀🚀🚀 | ⭐⭐⭐   | 快速原型、实时搜索 |
| all-mpnet-base-v2 | 768  | 🚀🚀   | ⭐⭐⭐⭐  | 通用任务，平衡性能 |
| gte-large         | 1024 | 🚀     | ⭐⭐⭐⭐⭐ | 高精度需求     |

### ⚡ 性能优化技巧

```python
# 技巧1：批量处理  
# ❌ 慢：逐个处理  
for text in texts:  
    embedding = model.encode(text)  

# ✅ 快：批量处理（快10倍+）  
embeddings = model.encode(texts, batch_size=32)  

# 技巧2：归一化向量（加速相似度计算）  
from sklearn.preprocessing import normalize  
embeddings_normalized = normalize(embeddings)  
# 然后可以用点积代替余弦相似度  

# 技巧3：降维（用于可视化或减少存储）  
from sklearn.decomposition import PCA  
pca = PCA(n_components=128)  
embeddings_compressed = pca.fit_transform(embeddings)  
```

---

## 文本嵌入 vs 词元嵌入

### 🆚 核心区别

```python
# 词元嵌入（Token Embedding）  
# - LLM内部使用  
# - 一句话 → 多个向量  
text = "I love Python"  
tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")  
model = AutoModel.from_pretrained("bert-base-uncased")  
outputs = model(tokenizer(text, return_tensors="pt"))[0]  
print(outputs.shape)  # torch.Size([1, 5, 768])  
#                              ↑  ↑  ↑  
#                           batch 5个词元 每个768维  

# 文本嵌入（Sentence Embedding）  
# - 应用层使用  
# - 一句话 → 一个向量  
from sentence_transformers import SentenceTransformer  
model = SentenceTransformer("all-MiniLM-L6-v2")  
embedding = model.encode("I love Python")  
print(embedding.shape)  # (384,) — 一个384维向量  
```

### 📊 使用场景对比

| 场景      | 使用词元嵌入 | 使用文本嵌入 |
| ------- | ------ | ------ |
| LLM文本生成 | ✅      | ❌      |
| 语义搜索    | ❌      | ✅      |
| 文档分类    | ❌      | ✅      |
| 聚类/去重   | ❌      | ✅      |
| 问答匹配    | ❌      | ✅      |
| 命名实体识别  | ✅      | ❌      |

---

## 常见误区

### ❌ 误区1：以为`文本嵌入`可以生成文本

```python
# ❌ 错误理解  
embedding = model.encode("Hello")  
new_text = model.decode(embedding)  # 没有这个方法！  

# ✅ 正确理解  
# 文本嵌入是单向的：文本 → 向量  
# 不能反向：向量 → 文本  
```

### ❌ 误区2：以为越长的文本嵌入维度越高

```python
# ❌ 错误认知  
short_text = "Hi"  
long_text = "This is a very long document with many words..."  

embedding1 = model.encode(short_text)  
embedding2 = model.encode(long_text)  

print(embedding1.shape)  # (384,)  
print(embedding2.shape)  # (384,) — 维度相同！  

# ✅ 正确理解  
# 无论文本多长，输出向量维度固定  
```

### ❌ 误区3：以为不同模型的嵌入可以混用

```python
# ❌ 错误  
model1 = SentenceTransformer("all-MiniLM-L6-v2")  # 384维  
model2 = SentenceTransformer("all-mpnet-base-v2")  # 768维  

emb1 = model1.encode("Python")  
emb2 = model2.encode("Java")  

similarity = cosine_similarity([emb1], [emb2])  # 💥 维度不匹配！  

# ✅ 正确  
# 必须用同一个模型生成所有嵌入  
```

---

## 一句话总结

文本嵌入 = `把整句话/文档压缩成一个向量，让电脑能"比较"文本的意思`

核心价值：
- 🎯 词元嵌入：
	- LLM的 "内部语言"（多个向量）
- 🚀 文本嵌入：
	- 应用的 "接口标准"（一个向量）

开发者记住三点：

1. 📦 一个文本 `→` 一个向量（无论文本多长，维度固定）
2. 🔍 主要用于搜索、分类、聚类等任务（不是用于生成文本）
3. ⚡ 用专用模型（sentence-transformers）效果远超简单平均

## 🎁 课后实战

试试这个完整案例，搭建一个迷你搜索引擎：

```python
from sentence_transformers import SentenceTransformer  
from sklearn.metrics.pairwise import cosine_similarity  

# 1. 加载模型  
model = SentenceTransformer("all-MiniLM-L6-v2")  

# 2. 构建知识库  
knowledge_base = [  
    "Python是一种编程语言，广泛用于数据分析和机器学习",  
    "JavaScript主要用于网页开发，可以在浏览器中运行",  
    "机器学习是人工智能的一个分支，让计算机从数据中学习",  
    "深度学习使用神经网络来解决复杂问题"  
]  

# 3. 生成文档嵌入  
doc_embeddings = model.encode(knowledge_base)  

# 4. 用户提问  
query = "如何用Python做数据分析？"  
query_embedding = model.encode(query)  

# 5. 搜索最相关答案  
scores = cosine_similarity([query_embedding], doc_embeddings)[0]  
best_match_idx = scores.argmax()  

print(f"问题：{query}")  
print(f"答案：{knowledge_base[best_match_idx]}")  
print(f"相关度：{scores[best_match_idx]:f}")  
```

运行后你会发现，即使查询和文档用词不完全一样，依然能找到语义最相关的答案——这就是文本嵌入的魔力！✨
