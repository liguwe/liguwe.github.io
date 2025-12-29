
# 前向传播的组成

`#2025/12/29` `#ai` 

你好！作为 Python 工程师，我们可以把 **3.1.2 节 “前向传播的组成”** 看作是深入剖析那个核心的 `model(input_ids)` 函数内部的 **调用栈 (Call Stack)** 或者 **数据流管道 (Data Pipeline)**。

上一节我们把 LLM 看作一个黑盒函数，这一节我们要打开这个黑盒，看看里面的 **类结构 (Class Structure)** 和 **数据流转**。


## 目录
<!-- toc -->
 ## 1. 整体架构：一个分层的“三明治” 

如果把 LLM 写成一个 Python 类，它的 `forward` 方法大概长这样。数据流从下往上（或从左往右）依次流过三个主要组件：

```
class TransformerLLM(nn.Module):
    def __init__(self):
        # 1. 嵌入层 (Embedding Layer)
        self.embed_tokens = nn.Embedding(vocab_size, hidden_size)

        # 2. 中间层 (The Stack) - 核心逻辑
        self.layers = nn.ModuleList([TransformerBlock() for _ in range(32)])

        # 3. 输出头 (LM Head)
        self.lm_head = nn.Linear(hidden_size, vocab_size)

    def forward(self, input_ids):
        # Step 1: ID -> 向量
        x = self.embed_tokens(input_ids)

        # Step 2: 向量在层与层之间流转 (ResNet风格)
        for layer in self.layers:
            x = layer(x)

        # Step 3: 向量 -> 下一个词的概率
        logits = self.lm_head(x)
        return logits
```

## 2. 深入组件：工程师视角的拆解

书中以 **Phi-3** 模型为例，打印出了它的内部结构。我们可以这样理解这三个部分：

### (1) 嵌入层 (The Mapper)

- **功能：** **类型转换**。
- **逻辑：** 就像我们在 2.2 节学到的，它只是一个巨大的查找表。
- **数据变化：** `input_ids` (整数数组) -> `hidden_states` (浮点数矩阵)。
    - 例如：输入形状 `-> 输出形状`。这里的 `3072` 就是 Phi-3 的**隐藏层维度 (Model Dimension)**，也就是每个词向量的“带宽”。

### (2) Transformer 块堆叠 (The Middleware Stack)

- **功能：** **特征提取与推理**。这是模型最“厚”的部分。
- **逻辑：** 由多个结构相同的 **Transformer Block** 串联而成（Phi-3 有 32 层）。
- **核心组件：** 每个块里主要包含两个东西：
    - **自注意力 (Self-Attention):** 负责“搞关系”，让当前词看看前面的词（处理上下文）。
    - **前馈网络 (MLP/Feed-Forward):** 负责“存知识”，类似于键值存储的记忆网络。
- **数据变化：** 形状不变，但向量的含义变了。输入的是“原始的词义”，输出的是“结合了上下文、推理后的深层语义”。

### (3) 语言建模头 (The LM Head / Adapter)

- **功能：** **接口适配 / 投影**。
- **逻辑：** 这是一个简单的线性层（Linear Layer）。之所以叫“头 (Head)”，是因为它是安在庞大的 Transformer “身体”上的一个末端组件。
- **作用：** Transformer 身体输出的是一个 3072 维的抽象向量，人类看不懂。LM Head 把这个向量**投影 (Project)** 回 32064 维（词表大小）。
- **数据变化：** `->`。
- **结果：** 此时，输出的 32064 个数字代表了词表中每一个词成为“下一个词”的概率得分（Logits）。

## 3. 关键点：并行流与“最后一名”

书中提到了一个对工程师来说很重要的细节：**并行处理**。

当你把一句话 "Write an email"（假设 3 个 token）喂给模型时，模型并不是只计算最后一个词。它是**并行**计算了 3 条流：

1. 输入 "Write" -> 预测下一个词（可能是 "a"）
2. 输入 "Write an" -> 预测下一个词（可能是 "email"）
3. 输入 "Write an email" -> 预测下一个词（可能是 "to"）

**虽然计算了 3 个结果，但在生成文本时（推理阶段），我们通常只关心最后一个 Token 的输出**，因为我们要的是“接着往下写”。

## 总结：给工程师的“太长不看版”

1. **前向传播流水线** = `Lookup Table` (嵌入) + `For Loop` (32层 Transformer) + `Linear Projection` (输出头)。
2. **数据形状 (Shape)** 是理解的关键：从 `Int` 变成 `Vector`，在中间层里一直是这个胖瘦，最后被 Head 映射成 `Vector[Vocab_Size]` 以便查表选词。
3. **LM Head** 就像是一个适配器模式，它决定了模型是用来做文本生成（LM Head），还是做分类（Classification Head）。基础模型通过换“头”，可以适应不同的任务。
