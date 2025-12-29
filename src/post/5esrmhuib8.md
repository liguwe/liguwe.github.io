
# LLM 的内部机制

`#2025/12/29` `#ai` 

我们将探讨 Transformer LLM 的主要工作原理。我们将重点关注`文本生成模型`，以便更深入地理解`生成式 LLM`。

我们将探讨相关概念并通过一些代码示例来演示这些概念。
- 我们先加载一个语言模型，并定义流水线，以备生成文本。
- 在第一次阅读时，你可以跳过代码部分，专注于理解概念。
- 然后在第二次阅读时，通过代码来动手应用这些概念。

```python
import torch
from transformers import AutoModelForCausalLM, AutoTokenizer, pipeline

# 加载模型和分词器
tokenizer = AutoTokenizer.from_pretrained("microsoft/Phi-3-mini-4k-instruct")

model = AutoModelForCausalLM.from_pretrained(
    "microsoft/Phi-3-mini-4k-instruct",
    device_map="cuda",
    torch_dtype="auto",
    trust_remote_code=True,
)

# 创建流水线
generator = pipeline(
    "text-generation",
    model=model,
    tokenizer=tokenizer,
    return_full_text=False,
    max_new_tokens=50,
    do_sample=False,
)
```


## 目录
<!-- toc -->
 ## Transformer 模型概述 

### 已训练 Transformer LLM 的输入和输出

> [!abstract]
>
> > 更直观简洁版本详见
>  - [301. 已训练 Transformer LLM 的输入和输出：篇一](/post/6q7ewj0xgp.html)
>
>  - [302. 已训练 Transformer LLM 的输入和输出：篇二](/post/ptc1hxblfm.html)



### 3.1.2　前向传播的组成

除了循环之外，前向传播还有两个关键的内部组件：分词器和语言建模头（language modeling head，LM head）。图 3-4 展示了这些组件在系统中的位置。在上一章中，我们看到了分词器如何将文本分解成词元 ID 序列，然后用作模型的输入。

分词器之后是神经网络，由一系列 Transformer 块堆叠而成，负责执行所有的处理工作。在这些堆叠的块之后是语言建模头，它将 Transformer 块的输出转换为预测下一个词元的概率分数。

![{%}|952](https://www.ituring.com.cn/figures/2025/HandsonLLM/055.jpg)

图 3-4：Transformer LLM 由分词器、堆叠的 Transformer 块和语言建模头组成

回顾第 2 章的内容，分词器包含一个词元表，即分词器的 词表 。模型为词表中的每个词元都关联了一个向量表示（词元嵌入）。图 3-5 展示了一个拥有 50 000 个词元的词表及其对应的词元嵌入。

![{%}|600](https://www.ituring.com.cn/figures/2025/HandsonLLM/056.jpg)

图 3-5：分词器拥有 50 000 个词元的词表，模型为这些词元关联了词元嵌入

计算流按照箭头方向从上到下进行。对于每个生成的词元，处理过程会按顺序依次经过堆叠成一列的所有 Transformer 块，然后到达语言建模头，最后输出下一个词元的概率分布，如图 3-6 所示。

![{%}|592](https://www.ituring.com.cn/figures/2025/HandsonLLM/057.jpg)

图 3-6：在前向传播结束时，模型为词表中的每个词元预测一个概率分数

语言建模头本身是一个简单的神经网络层。它可以连接到堆叠的 Transformer 块上的多种可能的“头”之一，用于构建不同类型的系统。其他类型的 Transformer 头包括序列分类头和词元分类头。

我们只需打印模型变量，就可以按顺序显示所有层。对于这个模型，我们得到：

```
Phi3ForCausalLM(
  (model): Phi3Model(
    (embed_tokens): Embedding(32064, 3072, padding_idx=32000)
    (embed_dropout): Dropout(p=0.0, inplace=False)
    (layers): ModuleList(
      (0-31): 32 x Phi3DecoderLayer(
        (self_attn): Phi3Attention(
          (o_proj): Linear(in_features=3072, out_features=3072, bias=False)
          (qkv_proj): Linear(in_features=3072, out_features=9216, bias=False)
          (rotary_emb): Phi3RotaryEmbedding()
        )
        (mlp): Phi3MLP(
          (gate_up_proj): Linear(in_features=3072, out_features=16384, bias=False)
          (down_proj): Linear(in_features=8192, out_features=3072, bias=False)
          (activation_fn): SiLU()
        )
        (input_layernorm): Phi3RMSNorm()
        (resid_attn_dropout): Dropout(p=0.0, inplace=False)
        (resid_mlp_dropout): Dropout(p=0.0, inplace=False)
        (post_attention_layernorm): Phi3RMSNorm()
      )
    )
    (norm): Phi3RMSNorm()
  )
  (lm_head): Linear(in_features=3072, out_features=32064, bias=False)
)
```

观察这个结构，我们可以注意到以下几个重点。

- 这个结构展示了模型的各种嵌套层。模型的主要部分标记为 `model` ，随后是 `lm_head` 。
- 在 `Phi3Model` 内部，我们可以看到嵌入矩阵 `embed_tokens` 及其维度。它有 32 064 个词元，每个词元的向量大小为 3072。
- 暂时跳过 dropout 层，我们可以看到下一个主要组件是堆叠的 Transformer 解码器层。它包含 32 个 `Phi3DecoderLayer` 类型的块。
- 这些 Transformer 块中的每一个都包含一个注意力层和一个前馈神经网络（也称为 MLP 或多层感知器）。我们将在本章后面详细介绍这些内容。
- 最后，我们看到 `lm_head` 接收一个大小为 3072 的向量，并输出一个大小等于模型所知词元数量的向量。该输出是每个词元的概率分数，帮助我们选择输出词元。

### 3.1.3　从概率分布中选择单个词元（采样/解码）

在处理结束时，模型会为词表中的每个词元输出一个概率分数，正如我们在图 3-6 中看到的那样。从概率分布中选择单个词元的方法称为 解码策略 。图 3-7 展示了示例是如何选择词元 Dear 的。

![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/058.jpg)

图 3-7：经过模型前向传播后，基于上下文，模型可能输出的概率最高的几个词元。我们的解码策略通过基于概率的采样来决定输出哪个词元

最简单的解码策略就是始终选择概率分数最高的词元。但在实践中，对于大多数使用场景来说，这种方法往往无法产生最佳输出。一个更好的方法是引入一些随机性，有时选择概率第二高或第三高的词元。用统计学家的话来说，这种思想就是根据概率分数对概率分布进行 采样 。

对于图 3-7 中的例子来说，如果 Dear 作为下一个词元的概率为 40%，那么它被选中的概率就是 40%（而不是像贪心搜索那样，直接选择这个得分最高的词元）。这样，其他词元也有机会根据其分数被选中。

每次都选择概率分数最高的词元的策略被称为 贪心解码 。这就是在 LLM 中将温度（temperature）参数设为零时会发生的情况。我们将在第 6 章讨论温度的概念。

让我们仔细看看演示这个过程的代码。在这个代码块中，我们将输入词元传递给模型，然后传给 `lm_head` ：

```
prompt = "The capital of France is"

# 对输入提示词进行分词
input_ids = tokenizer(prompt, return_tensors="pt").input_ids

# 将词元ID移动到GPU上
input_ids = input_ids.to("cuda")

# 获取模型在lm_head之前的输出
model_output = model.model(input_ids)

# 获取lm_head的输出
lm_head_output = model.lm_head(model_output[0])
```

现在， `lm_head_output` 的形状是 `[1, 5, 32064]` 。我们可以使用 `lm_head_output[0,-1]` 来访问最后生成的词元的概率分数，其中索引 0 用于批次维度，表示一批数据中的第一个，索引 -1 用于获取序列中的最后一个词元。现在我们得到了全部 32 064 个词元的概率分数列表。接下来我们可以获取得分最高的词元 ID，然后解码，以得到生成的输出词元的文本：

```
token_id = lm_head_output[0,-1].argmax(-1)
tokenizer.decode(token_id)
```

结果是：

```
Paris
```

### 3.1.4　并行词元处理和上下文长度

Transformer 最引人注目的特性之一是，它比之前的语言处理神经网络架构更适合并行计算。在文本生成中，观察每个词元是如何处理的，就能初步了解这一点。我们从上一章知道，分词器会将文本分解成词元。然后每个输入词元都会流经自己的计算路径（这种直觉有助于我们更轻松地理解）。我们可以在图 3-8 中看到这些独立的计算流（也可以理解为处理路径）。

![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/059.jpg)

图 3-8：每个词元都通过自己的计算流进行处理（之后我们会看到，它们在注意力步骤中会有一些交互）

当前的 Transformer 模型对一次可以处理的词元数量有限制，这个限制被称为模型的上下文长度。一个具有 4K 上下文长度的模型只能处理 4000 个词元，也就是只有 4000 条这样的流。

每条计算流都从一个输入向量开始（包括嵌入向量和一些位置信息。我们将在本章后面讨论位置嵌入）。在流的末尾，另一个向量作为模型处理的结果出现，如图 3-9 所示。

![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/060.jpg)

图 3-9：每条处理流接收一个向量作为输入，并生成一个大小相同的最终结果向量（这一大小通常称为模型维度）

对于文本生成来说，只有最后一条计算流的输出结果用于预测下一个词元。当语言建模头计算下一个词元的概率时，该输出向量是唯一的输入。

你可能会疑惑，既然最终只用到最后一个词元的输出，为什么还需要所有的计算流？答案是，之前的流的计算结果是最终的流所必需的。没错，我们不会使用它们的最终输出向量，但会在每个 Transformer 块的注意力机制中使用其早期输出。

如果你在跟着代码示例学习，回想一下， `lm_head` 的输出形式为 `[1, 5, 32064]` ，这是因为它的输入形式为 `[1, 5, 3072]` ，代表一个批次中包含一个输入字符串，该字符串包含 5 个词元，每个词元都由一个大小为 3072 的向量表示，这些向量对应着堆叠的 Transformer 块处理后的输出向量。

我们可以打印这些矩阵，以查看它们的维度：

```
model_output[0].shape
```

输出结果为：

```
torch.Size([1, 5, 3072])
```

同样，我们可以打印语言建模头的输出：

```fortran
lm_head_output.shape
```

输出结果为：

```
torch.Size([1, 5, 32064])
```

### 3.1.5　通过缓存键-值加速生成过程

回想一下，在生成第二个词元时，我们只是简单地将输出词元追加到输入的末尾，然后再次通过模型进行前向传播。如果模型能够缓存之前的计算结果（特别是注意力机制中的一些特定向量），就不需要重复计算之前的流，而只需要计算最后一条流了。这种优化技术被称为键 - 值（key-value，KV）缓存，它能显著加快生成过程。键和值是注意力机制的核心组件，我们将在本章后面详细介绍。

如图 3-10 所示，在生成第二个词元时，由于我们缓存了之前流的结果，只有一条计算流是活跃的。

![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/061.jpg)

图 3-10：在生成文本时，重要的是缓存之前词元的计算结果，而不是反复进行相同的计算

在 Hugging Face Transformers 中，缓存默认是启用的，可以将 `use_cache` 设置为 `False` 来禁用。我们可以请求一个较长的生成任务，并对比启用和禁用缓存的生成时间，从而感受差异：

```
prompt = "Write a very long email apologizing to Sarah for the tragic gardening
mishap. Explain how it happened."
# 对输入提示词进行分词
input_ids = tokenizer(prompt, return_tensors="pt").input_ids
input_ids = input_ids.to("cuda")
```

然后我们测量启用缓存后生成 100 个词元所需的时间。我们可以在 Jupyter 或 Colab 中使用 `%%timeit` 魔法命令来计时（它会多次运行命令并取用时的平均值）：

```
%%timeit -n 1
# 生成文本
generation_output = model.generate(
  input_ids=input_ids,
  max_new_tokens=100,
  use_cache=True
)
```

在配备 T4 GPU 的 Colab 上，这需要 4.5 秒。如果我们禁用缓存，需要多长时间呢？

```
%%timeit -n 1
# 生成文本
generation_output = model.generate(
  input_ids=input_ids,
  max_new_tokens=100,
  use_cache=False
)
```

用时变成了 21.8 秒，差异非常显著。事实上，从用户体验的角度来看，即使是 4 秒的生成时间，对于正盯着屏幕等待模型输出的用户来说也是很长的。这就是为什么 LLM API 会在模型生成过程中流式输出词元，而不是等待整个生成过程完成再输出。

### 3.1.6　Transformer 块的内部结构

现在我们来讨论 Transformer 模型的核心处理单元——Transformer 块。如图 3-11 所示，Transformer LLM 由一系列 Transformer 块组成（在原始 Transformer 论文中约为 6 个，而在许多 LLM 中超过 100 个）。每个块处理其输入，然后将其处理结果传递给下一个块。

![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/062.jpg)

图 3-11：Transformer LLM 的大部分处理过程发生在一系列 Transformer 块中，每个块将其处理结果作为输入传递给下一个块

Transformer 块由以下两个首尾相接的组件构成（图 3-12）。

- 自注意力层 ，主要负责整合来自其他输入词元和位置的相关信息。
- 前馈神经网络层 ，包含模型的主要处理能力。

![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/063.jpg)

图 3-12：Transformer 块由一个自注意力层和一个前馈神经网络层组成

1. 前馈神经网络层概览  
	让我们用一个简单的例子来理解前馈神经网络的工作原理：我们向语言模型输入“The Shawshank”，期望它生成“Redemption”（指 1994 年的电影《肖申克的救赎》）。  
	如图 3-13 所示，前馈神经网络（分布在所有模型层中）就是这些信息的来源。当模型在大规模文本数据（包含大量对“The Shawshank Redemption”的引用）上完成训练后，它学习并存储了完成这项任务所需的信息（和行为）。  
	![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/064.jpg)  
	图 3-13：Transformer 块中的前馈神经网络层可能承担了模型大部分的记忆和插值工作  
	要想成功训练一个 LLM，需要让它记住大量信息。但它并不仅仅是一个大型数据库。记忆只是生成出色文本的众多要素之一。模型能够利用相同的机制在数据点之间进行插值，识别更复杂的模式，从而实现泛化，这意味着它能够很好地处理以前从未见过、不在训练数据集中的输入。

	> 　当你使用现代商用 LLM 时，你得到的输出并不是前文中严格意义上的“语言模型”的输出。如果向 GPT-4 这样的对话型 LLM 输入“The Shawshank”，它会输出：
	> 
	> ```applescript
	> "The Shawshank Redemption" is a 1994 film directed
	> by Frank Darabont and is based on the novella "Rita
	> Hayworth and Shawshank Redemption" written by Stephen
	> King. ...etc.
	> ```
	> 
	> 这是因为原始语言模型（如 GPT-3）对用户来说很难用，因此语言模型需要通过指令微调和基于人类偏好与反馈的微调，来满足人们对模型输出的期望。

2. 自注意力层概览  
	上下文对于正确建模语言至关重要。仅仅依靠基于前一个词元的简单记忆和插值是远远不够的。我们能得出这个结论，是因为这是神经网络出现之前构建语言模型的主要方法之一（参见 Daniel Jurafsky 和 James H. Martin 的 *Speech and Language Processing* 第 3 章“ *N* -gram Language Models”）。  
	注意力机制帮助模型在处理特定词元时整合上下文信息。考虑以下提示词：

	> The dog chased the squirrel because it （狗追松鼠，因为 它 ）  
	为了预测 it 之后的内容，模型需要知道 it 指代什么，是狗还是松鼠？  
	在已训练的 Transformer LLM 中，注意力机制负责做出这种判断。注意力机制将上下文信息添加到 it 词元的表示中。我们可以在图 3-14 中看到一个简单的示例。  
	![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/065.jpg)  
	图 3-14：自注意力层整合了来自前序位置的相关信息，用于处理当前词元  
	模型是基于从训练数据集中观察和学习到的模式来实现这一点的。前文中的句子可能提供了更多线索，比如前文中用 she 指代狗，那就表明 it 指代的是松鼠。

3. 注意力机制的重要性  
	我们有必要深入地了解注意力机制。图 3-15 展示了注意力机制的极简版本。它显示了多个进入自注意力层的词元位置，最后一个是当前正在处理的位置（粉色箭头）。注意力机制作用于该位置的输入向量，它将上下文中的相关信息整合到该位置的输出向量中。  
	![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/066.jpg)  
	图 3-15：注意力机制的简化示意图：一个输入序列和当前正在处理的位置。由于我们主要关注的是这个位置，图中显示了一个输入向量和一个输出向量，其中输出向量基于注意力机制整合了序列中前面元素的信息  
	注意力机制包含以下两个主要步骤。
	- 对当前处理的词元（粉色箭头所示）与之前输入词元的相关性评分。
	- 利用这些分数，将不同位置的信息组合成单一的输出向量。  
	图 3-16 展示了这两个步骤。  
	![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/067.jpg)  
	图 3-16：注意力机制由两个主要步骤组成：对每个位置进行相关性评分，然后基于这些评分进行信息组合  
	为了赋予 Transformer 更强大的注意力能力，注意力机制被复制多份，并行执行。这些并行的注意力执行过程被称为 注意力头 （attention head）。这提高了模型对输入序列中复杂模式的建模能力，使其能够同时关注不同的模式。  
	图 3-17 直观地展示了多个注意力头如何并行运行，包括前面的信息分割步骤和后面的所有注意力头的结果合并步骤。  
	![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/068.jpg)  
	图 3-17：通过并行执行多次注意力计算来获得更好的 LLM，提高模型关注不同类型的信息的能力
4. 注意力的计算方式  
	让我们来看看单个注意力头内的注意力是如何计算的。在开始计算之前，我们先观察以下起始状态。
	- （生成式 LLM 中的）注意力层正在为单个位置处理注意力。
	- 该层的输入包括：
		- 当前位置或词元的向量表示
		- 前序词元的向量表示
	- 目标是为当前位置生成一个新的表示，其中包含来自前序词元的相关信息。例如，我们正在处理句子“Sarah fed the cat because it”（Sarah 喂了猫，因为它）的最后一个位置，我们希望 it 表示那只猫，所以注意力机制会融入来自 cat 词元的“猫的信息”。
	- 训练过程会产生三个投影矩阵，用于生成参与计算的组件：
		- 查询投影矩阵
		- 键投影矩阵
		- 值投影矩阵  
	图 3-18 展示了注意力计算开始前这些组件的起始状态。为简单起见，我们只考察一个注意力头，因为其他注意力头进行的是同样的计算，只是使用各自的投影矩阵。  
	注意力首先将输入与投影矩阵相乘，得到三个新矩阵，称为查询矩阵、键矩阵和值矩阵。这些矩阵包含了投影到三个不同空间的输入词元信息，用于执行注意力的两个步骤：
	- 相关性评分
	- 信息组合  
	![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/069.jpg)  
	图 3-18：在开始注意力计算之前，该层的输入和查询、键、值的投影矩阵已准备就绪  
	图 3-19 展示了这三个新矩阵，以及三个矩阵的最后一行如何与当前位置相关联，而上面的行则与前序位置相关联。  
	![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/070.jpg)  
	图 3-19：注意力是通过查询矩阵、键矩阵和值矩阵的交互来执行的。这些矩阵是将层的输入与投影矩阵相乘得到的
5. 自注意力：相关性评分  
	在生成式 Transformer 中，一次生成一个词元意味着一次处理一个位置。因此，注意力机制在这里只关注这一个位置（当前位置），以及如何从其他位置提取信息来为当前位置提供参考。  
	注意力机制的相关性评分步骤是通过将当前位置的查询向量与键矩阵相乘来实现的。这一操作会产生一组分数，用以衡量当前位置之前的每一个词元的相关性。接下来，通过 softmax 操作对这些分数进行归一化，使它们的和为 1。图 3-20 展示了计算得到的相关性分数。  
	![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/071.jpg)  
	图 3-20：将与当前位置相关的查询向量和键矩阵相乘，以完成对前序词元的相关性评分
6. 自注意力：信息组合  
	有了相关性分数，我们用每个词元对应的值向量乘以该词元的分数，然后将这些结果向量相加，就得到了注意力步骤的输出，如图 3-21 所示。  
	![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/072.jpg)  
	图 3-21：注意力将前序位置的相关性分数与其对应的值向量相乘，来组合相关信息

## 3.2　Transformer 架构的最新改进

自 Transformer 架构发布以来，已经有大量工作致力于对其进行改进，以提升模型性能和效率。这些改进包括在更大的数据集上进行训练、优化训练过程和学习率，以及对架构本身的调整。截至本书撰写之时，原始 Transformer 的一些核心架构理念依旧沿用，同时，有几个新的架构理念被提出并已经被证明是很有价值的，为提升 Llama 2 等 Transformer 模型的性能做出了贡献。在本章的最后一节，我们将回顾关于 Transformer 架构的一些重要的近期发展。

### 3.2.1　更高效的注意力机制

Transformer 的自注意力层是学术界最关注的部分。这是因为注意力计算是整个过程中计算开销最大的部分。

1. 稀疏注意力  
	随着 Transformer 规模越来越大，稀疏注意力（参见论文“Generating Long Sequences with Sparse Transformers”）和滑动窗口注意力（参见论文“Longformer: The Long-Document Transformer”）等理念提高了注意力计算的效率。如图 3-22 所示，稀疏注意力限制了模型可以关注的前序词元的上下文。  
	![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/073.jpg)  
	图 3-22：稀疏注意力通过只关注少量前序位置来提升性能  
	GPT-3 就是一个集成了这种机制的模型。但它并不是在所有 Transformer 块中都使用这种机制——如果模型只能看到少量的前序词元，生成质量会大幅下降。GPT-3 架构交替使用全注意力和稀疏注意力的 Transformer 块。因此，Transformer 块在全注意力（如模块 1 和模块 3）和稀疏注意力（如模块 2 和模块 4）之间交替。  
	图 3-23 展示了不同类型的注意力机制的工作方式，其中每张图显示了在处理当前词元（深蓝色）时可以关注哪些前序词元（浅蓝色）。  
	![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/074.jpg)  
	图 3-23：全注意力与稀疏注意力的对比。图 3-24 解释了颜色的含义（图片来源：论文“Generating Long Sequences with Sparse Transformers”）  
	图 3-23 的每一行对应正在处理一个词元。颜色编码表示模型在处理深蓝色单元格中的词元时能够关注哪些词元。图 3-24 更清晰地描述了这一点。  
	图 3-24 还展示了（构成大多数文本生成模型的）解码器 Transformer 块的自回归特性：它们只能关注前序词元。与此相比，BERT 可以关注两个方向（BERT 中的 B 代表 bidirectional，即“双向”）。  
	![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/075.jpg)  
	图 3-24：注意力机制的工作方式，图中显示正在处理的词元，以及注意力机制允许它关注的前序词元
2. 多查询注意力和分组查询注意力  
	关于 Transformer 中的注意力，最近一项提高效率的改进是分组查询注意力（grouped-query attention，GQA，参见论文“GQA: Training Generalized Multi-Query Transformer Models from Multi-Head Checkpoints”），它被 Llama 2 和 Llama 3 等模型使用。图 3-25 展示了这些不同类型的注意力，下一节将进一步解释。  
	![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/076.jpg)  
	图 3-25：不同类型注意力的比较：原始的多头注意力、分组查询注意力和多查询注意力（图片来源：论文“Fast Transformer Decoding: One Write-Head is All You Need”）  
	分组查询注意力建立在多查询注意力（参见“Fast Transformer Decoding: One Write-Head is All You Need”）的基础之上。这些方法通过减小涉及的矩阵的大小来提高大模型推理的可扩展性。
3. 优化注意力机制：从多头到多查询再到分组查询  
	在本章前面，我们展示了 Transformer 的论文如何描述多头注意力。“The Illustrated Transformer”一文详细讨论了如何使用查询矩阵、键矩阵和值矩阵来进行注意力计算。图 3-26 展示了每个注意力头如何为给定输入计算其独特的查询矩阵、键矩阵和值矩阵。  
	![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/077.jpg)  
	图 3-26：注意力机制通过查询矩阵、键矩阵和值矩阵来实现。在多头注意力中，每个注意力头都有一组独立的查询矩阵、键矩阵和值矩阵  
	多查询注意力通过在所有注意力头之间共享键矩阵和值矩阵来实现优化。如图 3-27 所示，每个注意力头只保留独特的查询矩阵。  
	![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/078.jpg)  
	图 3-27：多查询注意力通过在所有注意力头之间共享键矩阵和值矩阵，提供了一种更高效的注意力机制  
	然而，随着模型规模的增长，这种优化可能会带来过大的性能损失，此时我们可以牺牲一些内存来提升模型质量。这就是分组查询注意力的用武之地。它不是将键矩阵和值矩阵的数量减少到各一个，而是允许使用更多的矩阵（但少于注意力头的数量）。图 3-28 展示了这些分组，以及每组注意力头如何共享键矩阵和值矩阵。  
	![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/079.jpg)  
	图 3-28：分组查询注意力利用多组共享的键矩阵和值矩阵，牺牲了一些多查询注意力的效率来换取质量的大幅提升。每个分组都有其对应的注意力头集合
4. Flash Attention  
	Flash Attention 是一种广受欢迎的方法和实现，可以显著提升 GPU 上 Transformer LLM 的训练和推理速度。它通过优化 GPU 共享内存（GPU's shared memory，SRAM）和高带宽内存（high bandwidth memory，HBM）之间的数据加载和迁移来加速注意力计算。详细内容可参见论文“FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness”以及后续的“FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning”。

### 3.2.2　Transformer 块

回顾一下，Transformer 块的两个主要组成部分是自注意力层和前馈神经网络层。如图 3-29 所示，深入 Transformer 块的细节，还能发现残差连接和层归一化操作。

![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/080.jpg)

图 3-29：原始 Transformer 论文中的 Transformer 块

在撰写本书时，最新的 Transformer 模型仍然保留了主要组件，但进行了一些调整，如图 3-30 所示。

![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/081.jpg)

图 3-30：2024 年的 Transformer（如 Llama 3）的 Transformer 块有一些新的改进，如预归一化（通过 RMSNorm 实现），以及通过分组查询注意力和旋转位置嵌入优化的注意力机制

在这个版本的 Transformer 块中，我们看到的一个区别是归一化发生在自注意力层和前馈神经网络层之前。据称，这种方式可以减少所需的训练时间（参见论文“On Layer Normalization in the Transformer Architecture”）。这里对归一化的另一个改进是使用 RMSNorm，它比原始 Transformer 中使用的 LayerNorm 更简单、更高效（参见论文“Root Mean Square Layer Normalization”）。最后，相比原始 Transformer 的 ReLU 激活函数，现在像 SwiGLU 这样的新变体（参见论文“GLU Variants Improve Transformer”）更为常见。

### 3.2.3　位置嵌入：RoPE

位置嵌入自原始 Transformer 以来一直是关键组件。它们使模型能够跟踪序列 / 句子中词元 / 词的顺序，这是语言中不可或缺的信息来源。在过去几年提出的众多位置编码方案中，旋转位置嵌入（rotary position embedding，RoPE，参见论文“RoFormer: Enhanced Transformer with Rotary Position Embedding”）尤其值得关注。

原始 Transformer 论文和一些早期变体采用绝对位置嵌入，本质上是将第一个词元标记为位置 1，第二个标记为位置 2，以此类推。这些方法可以是静态的（使用几何函数生成位置向量）或可学习的（模型在训练过程中为它们赋值）。当我们将模型扩展到更大的规模时，这些方法会带来一些挑战，这要求我们找到提高其效率的途径。

举例来说，在训练长上下文模型时的一个挑战是，训练集中有很多文档的长度都远小于上下文长度。如果为一个只有 10 个词的短句分配整个 4K 的上下文空间，这显然是很低效的。因此在模型训练过程中，多个文档会被一同打包到每个训练批次的上下文中，如图 3-31 所示。

![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/082.jpg)

图 3-31：打包是一个将短训练文档高效组织到上下文中的过程，包括在单个上下文中对多个文档进行分组，同时最小化上下文末尾的填充

如需了解更多关于打包的信息，可以参考论文“Efficient Sequence Packing without Cross-Contamination: Accelerating Large Language Models without Impacting Performance”，以及“Introducing Packed BERT for 2X Training Speed-up in Natural Language Processing”视频和文章中的精彩可视化内容。

除了必须适应打包过程，位置嵌入方法还需要考虑实践中的其他因素。如果文档 50 从位置 50 开始，那么告诉模型第一个词元是第 50 个就会误导模型，并影响其性能（因为它会假设存在前文，而实际上前面的词元属于另一个无关的文档，模型应该忽略）。

与在前向传播开始时添加的静态绝对嵌入不同，旋转位置嵌入是一种以捕获绝对和相对词元位置信息的方式来编码位置信息的方法，其思想的基础是嵌入空间中旋转的向量。在前向传播中，旋转位置嵌入是在注意力步骤中添加的，如图 3-32 所示。

![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/083.jpg)

图 3-32：旋转位置嵌入是应用在注意力步骤中的，而不是应用在前向传播的开始

在注意力步骤中，我们特意把位置信息混合到查询矩阵和键矩阵中。这个混合过程发生在我们将查询向量和键矩阵相乘，进行相关性评分之前，如图 3-33 所示。

![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/084.jpg)

图 3-33：旋转位置嵌入在自注意力中的相关性评分步骤之前，被添加到词元的表示中

### 3.2.4　其他架构实验和改进

学术界持续提出和研究了许多 Transformer 的改进方案。论文“A Survey of Transformers”介绍了这些改进方案的一些主要方向。Transformer 架构也在不断适应 LLM 之外的领域。计算机视觉是一个有大量 Transformer 架构研究参与的领域（参见论文“Transformers in Vision: A Survey”和“A Survey on Vision Transformer”）。其他领域包括机器人技术（参见论文“Open X-Embodiment: Robotic Learning Datasets and RT-X Models”）和时间序列（参见论文“Transformers in Time Series: A Survey”）。

## 3.3　小结

在本章中，我们讨论了 Transformer 的核心工作原理，以及最新的 Transformer LLM 背后的技术进展。我们介绍了许多新概念，下面总结一下本章讨论的关键概念。

- Transformer LLM 每次生成一个词元 。
- 生成的词元会 被追加到提示词中 ，然后，这个更新后的提示词会再次被输入模型进行下一次前向传播，以生成下一个词元。
- Transformer LLM 的 三个主要组件 是分词器、一系列 Transformer 块和语言建模头。
- 分词器包含模型的 词元词表 。模型中包含与这些词元相关联的 词元嵌入 。将文本分解成词元，然后使用这些词元的嵌入向量，是词元生成过程的第一步。
- 前向传播会 依次 经过所有阶段。
- 在处理接近尾声时，语言建模头会对 下一个可能的词元进行概率评分 。解码策略决定了在这一生成步骤中选择哪个实际词元作为输出（有时是概率最高的下一个词元，但并非总是如此）。
- Transformer 表现出色的原因之一是它能够并行处理词元。每个输入词元都流入其 独立的计算流 （也称为处理路径）。这些流的数量就是模型的“上下文长度”，代表模型可以处理的最大词元数量。
- 由于 Transformer LLM 通过循环来一次生成一个词元的文本，因此 缓存 每个步骤的处理结果是一种很好的策略，这样可以避免重复处理工作（这些结果以各种矩阵的形式存储在层中）。
- 大部分处理发生在 Transformer 块 中。这些块由两个组件组成，其中一个是 前馈神经网络 ，它能够存储信息，并根据训练数据进行预测和插值。
- Transformer 块的另一个主要组件是 自注意力 。自注意力整合了上下文信息，使模型能够更好地捕捉语言的细微差别。
- 注意力过程分为两个主要步骤：相关性评分；信息组合。
- Transformer 的自注意力层并行执行多个注意力操作，每个操作都发生在 注意力头 内，它们的输出被聚合成自注意力层的输出。
- 通过在所有注意力头或一组注意力头（ 分组查询注意力 ）之间共享键矩阵和值矩阵，可以加速注意力计算。
- Flash Attention 等方法通过优化在 GPU 不同显存系统上的操作方式来加速注意力计算。

Transformer 架构在不断发展和创新，研究人员持续提出改进方案，使其能更好地适应语言模型以及其他领域和应用场景。

在本书的第二部分，我们将介绍 LLM 的一些实际应用。在第 4 章中，我们从文本分类这一语言人工智能中的常见任务开始，介绍生成模型和表示模型的应用。
