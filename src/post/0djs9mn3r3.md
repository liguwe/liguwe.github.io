
# 文本分类

`#2025/12/30` `#ai` 


## 目录
<!-- toc -->
 ## 文本分类概述 

文本分类是 NLP 中的一项常见任务。该任务的目标是训练一个模型，为输入的文本分配标签或类别（见图 4-1）。

从情感分析和意图识别，到实体提取和语言检测，文本分类在全球范围内被广泛应用。

表示模型和生成模型在文本分类中的重要作用不容忽视。

![{%}|792](https://www.ituring.com.cn/figures/2025/HandsonLLM/085.jpg)

> 图 4-1：使用语言模型进行文本分类

本章将介绍几种使用语言模型进行文本分类的方法  

我们将重点关注如何利用预训练语言模型（已经在大量数据上训练过的模型）来完成文本分类任务。

![{%}|784](https://www.ituring.com.cn/figures/2025/HandsonLLM/086.jpg)

> 图 4-2：虽然`表示模型`和`生成模型`都可用于分类，但它们的方法不同

## 电影评论的情感分析

>  详见 [1.  电影评论的情感分析](/post/t49sc3xnrb.html)

## 使用表示模型进行文本分类

> 详见 [2.  使用表示模型进行文本分类](/post/zsuxlaghd4.html)

## 4.3　模型选择

> 详见 [3. 模型选择](/post/ck7f37wq5k.html)

## 4.4　使用特定任务模型

现在我们已经选择了特定任务模型，让我们先来加载模型：

```
from transformers import pipeline

# 我们的Hugging Face模型路径
model_path = "cardiffnlp/twitter-roberta-base-sentiment-latest"

# 将模型加载到流水线中
pipe = pipeline(
    model=model_path,
    tokenizer=model_path,
    return_all_scores=True,
    device="cuda:0"
)
```

在加载模型时，我们还加载了 分词器 ，它负责将输入文本转换为单个词元，如图 4-6 所示。尽管这个参数不是必需的（因为它会自动加载），但它展示了底层的行为。

![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/090.jpg)

图 4-6：输入句子首先被送入分词器，然后才能被特定任务模型处理

如第 2 章深入探讨的那样，这些词元是大多数语言模型的核心。词元的一个主要优势是，即使它们不在训练数据中，也可以组合起来，生成语义的表示，如图 4-7 所示。

![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/091.jpg)

图 4-7：通过将未知词分解为词元，仍然可以生成词嵌入

在加载完所有必要组件后，我们就可以在测试集上使用我们的模型了：

```haskell
import numpy as np
from tqdm import tqdm
from transformers.pipelines.pt_utils import KeyDataset

# 运行推理
y_pred = []
for output in tqdm(pipe(KeyDataset(data["test"], "text")),
total=len(data["test"])):
    negative_score = output[0]["score"]
    positive_score = output[2]["score"]
    assignment = np.argmax([negative_score, positive_score])
    y_pred.append(assignment)
```

现在我们已经生成了预测结果，剩下的就是评估了。我们创建一个简单的函数，在本章各个部分均可以方便地使用：

```python
from sklearn.metrics import classification_report

def evaluate_performance(y_true, y_pred):
    """创建并打印分类报告"""
    performance = classification_report(
        y_true, y_pred,
        target_names=["Negative Review", "Positive Review"]
    )
    print(performance)
```

接下来，我们创建分类报告：

```
evaluate_performance(data["test"]["label"], y_pred)
```
```
precision    recall  f1-score   support

Negative Review       0.76      0.88      0.81       533
Positive Review       0.86      0.72      0.78       533

       accuracy                           0.80      1066
      macro avg       0.81       0.80     0.80      1066
   weighted avg       0.81       0.80     0.80      1066
```

要理解生成的分类报告，我们首先探讨如何识别正确和错误的预测。根据预测结果是正确（True）还是错误（False），以及预测的分类是正例（Positive，此处即正面评论）还是负例（Negative，此处即负面评论），有四种组合。我们可以将这些组合用矩阵形式表示，通常称为 混淆矩阵 （confusion matrix），如图 4-8 所示。

![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/092.jpg)

图 4-8：混淆矩阵描述了我们可以做出的四种类型的预测

使用混淆矩阵，我们可以推导出几个评估指标的计算公式来描述模型的质量。在上述分类报告中，我们可以看到四个常用的指标： 精确率 、 召回率 、 准确率 和 F1 分数 。

- 精确率 （precision）衡量模型识别出的结果中有多少是相关的，用来评估相关结果的准确性。
- 召回率 （recall）指的是所有相关类别中有多少被成功识别出来，用来评估模型找到所有相关结果的能力。
- 准确率 （accuracy）指的是模型在所有预测中做出正确预测的比例，用来评估模型的整体准确性。
- F1 分数 （F1 score）平衡了精确率和召回率，用于衡量模型的整体性能。

如图 4-9 所示，上述分类报告描述了这四个指标。

![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/093.jpg)

图 4-9：分类报告描述了评估模型性能的几个指标

在本书的示例中，我们将采用 F1 分数的加权平均值作为评估指标，以确保每个类别被平等对待。我们的预训练 BERT 模型给出了 0.80 的 F1 分数（该数值取自分类报告的 `weighted avg` 行和 `f1-score` 列），对于一个未经过特定领域数据训练的模型来说，这是一个很好的成绩！

为了提升所选模型的性能，我们可以尝试几种方法，包括选择在特定领域数据（在本例中是电影评论）上训练的模型，比如基于大小写不敏感版本的 DistilBERT base 的微调模型 SST-2；也可以将注意力转向另一类表示模型，即嵌入模型。

## 4.5　利用嵌入向量的分类任务

在前面的示例中，我们使用了预训练的特定任务模型进行情感分析。但如果找不到针对这个特定任务预训练的模型呢？是否需要自己微调表示模型？答案是否定的。

如果你有足够的计算资源，可能会有想要自己微调模型的时候（见第 11 章）。然而，并非每个人都能获得大量的计算资源。这就是通用嵌入模型发挥作用的地方。

### 4.5.1　监督分类

与前面的示例不同，我们可以从更传统的角度出发，自己执行部分训练过程。我们不直接使用表示模型进行分类，而是使用嵌入模型生成特征。这些特征随后可以输入到分类器中，从而创建一个如图 4-10 所示的两步法。

![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/094.jpg)

图 4-10：特征提取步骤和分类步骤是分离的

这种分离架构的一个主要优点是，我们不需要微调嵌入模型，耗费大量资源，而是可以在 CPU 上训练逻辑回归等传统分类器。

在第一步中，我们使用嵌入模型将文本输入转换为嵌入向量，如图 4-11 所示。注意，这个模型同样保持冻结状态，在训练过程中不会更新。

![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/095.jpg)

图 4-11：在第一步中，我们使用嵌入模型提取特征并将输入文本转换为嵌入向量

在这一步中，我们可以使用 sentence-transformers 这个流行的包来调用预训练的嵌入模型 8 。创建嵌入向量的过程很简单：

8 Nils Reimers and Iryna Gurevych.“Sentence-BERT: Sentence Embeddings Using Siamese BERT-Networks.” *arXiv preprint arXiv:1908.10084* (2019).

```
from sentence_transformers import SentenceTransformer

# 加载模型
model = SentenceTransformer("sentence-transformers/all-mpnet-base-v2")

# 将文本转换为嵌入向量
train_embeddings = model.encode(data["train"]["text"], show_progress_bar=True)
test_embeddings = model.encode(data["test"]["text"], show_progress_bar=True)
```

正如在第 1 章中所讨论的，这些嵌入向量是输入文本的数值表示。嵌入向量的值的个数（维度）取决于底层的嵌入模型。让我们来探索一下我们的模型：

```fortran
train_embeddings.shape
```
```clojure
(8530, 768)
```

这表明 8530 个输入文档中的每一个文档都有一个 768 维的嵌入向量，因此每个嵌入向量包含 768 个数值。

在第二步中，这些嵌入向量将作为分类器的输入特征，如图 4-12 所示。分类器是可训练的，不限于逻辑回归，可以采用任何形式，只要它能执行分类任务即可。

![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/096.jpg)

图 4-12：使用嵌入向量作为特征，在训练数据上训练逻辑回归模型

我们将在这一步中采用简单的实现方案，直接使用逻辑回归作为分类器。训练过程只需要使用生成的嵌入向量和对应的标签：

```nix
from sklearn.linear_model import LogisticRegression

# 基于训练嵌入向量构建逻辑回归模型
clf = LogisticRegression(random_state=42)
clf.fit(train_embeddings, data["train"]["label"])
```

接下来，我们评估模型：

```
# 预测未见过的样本
y_pred = clf.predict(test_embeddings)
evaluate_performance(data["test"]["label"], y_pred)
```
```
precision     recall  f1-score   support

Negative review       0.85       0.86      0.85       533
Positive review       0.86       0.85      0.85       533

       accuracy                            0.85      1066
      macro avg       0.85       0.85      0.85      1066
   weighted avg       0.85       0.85      0.85      1066
```

通过在嵌入向量之上训练分类器，我们获得了 0.85 的 F1 分数。这展示了在保持底层嵌入模型冻结的前提下，训练轻量级分类器的可行性。

> 　在这个例子中，我们使用 sentence-transformers 提取嵌入向量，它可以利用 GPU 加速推理。我们也可以通过使用外部 API 来生成嵌入向量，从而消除对 GPU 的依赖。Cohere 和 OpenAI 的服务是生成嵌入向量的热门选择。这样一来，整个流程就可以完全在 CPU 上运行。

### 4.5.2　没有标注数据怎么办

在前面的例子中，我们有可以利用的标注数据，但在实践中可能并非总是如此。收集标注数据是一项资源密集型任务，可能需要大量人力。此外，收集这些标注数据是否真的值得？

为了验证这一点，我们可以执行零样本分类（zero-shot classification），即在没有标注数据的情况下探索分类任务是否可行。虽然我们知道标签的定义（它们的名称），但没有支持它们的标注数据。零样本分类尝试在模型未针对这些标签进行训练的情况下预测输入文本的标签，如图 4-13 所示。

![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/097.jpg)

图 4-13：在零样本分类中，我们没有标注数据，只有标签本身。零样本模型决定输入与候选标签的关系

要借助嵌入向量执行零样本分类，我们可以使用一个巧妙的方法：基于标签应该表示的内容来描述它们。例如，电影评论的负例标签可以描述为“一条负面影评”。通过描述标签和文档并生成嵌入向量，我们就有了可用的数据。这个过程如图 4-14 所示，这允许我们在实际上没有任何标注数据的情况下生成目标标签。

![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/098.jpg)

图 4-14：要嵌入标签，我们首先需要给它们一个描述，比如“一条负面影评”，然后可以通过 sentence-transformers 生成嵌入向量

我们可以像之前一样使用 `.encode` 函数生成标签的嵌入向量：

```
# 为标签创建嵌入向量
label_embeddings = model.encode(["A negative review", "A positive review"])
```

为了给文档分配标签，可以计算文档 - 标签对的余弦相似度。余弦相似度是两个向量夹角的余弦值，通过嵌入向量的点积除以它们长度的乘积来计算，如图 4-15 所示。

![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/099.jpg)

图 4-15：余弦相似度是两个嵌入向量夹角的余弦值。在这个例子中，我们计算一个文档与两个候选标签（正例和负例）之间的余弦相似度

我们可以使用余弦相似度来检查给定文档与候选标签描述的相似程度，并选择与文档相似度最高的标签，如图 4-16 所示。

![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/100.jpg)

图 4-16：在为标签描述和文档分别创建嵌入向量之后，计算每个标签 - 文档对的余弦相似度

要对嵌入向量执行余弦相似度计算，我们只需要比较文档嵌入与标签嵌入，并获取最佳匹配对：

```nix
from sklearn.metrics.pairwise import cosine_similarity

# 为每个文档找到最匹配的标签
sim_matrix = cosine_similarity(test_embeddings, label_embeddings)
y_pred = np.argmax(sim_matrix, axis=1)
```

就是这样！我们只需要为标签想出名称就可以执行分类任务了。让我们看看这种方法的效果如何：

```
evaluate_performance(data["test"]["label"], y_pred)
```
```
precision    recall  f1-score   support

Negative review       0.78      0.77      0.78       533
Positive review       0.77      0.79      0.78       533

       accuracy                           0.78      1066
      macro avg       0.78      0.78      0.78      1066
   weighted avg       0.78      0.78      0.78      1066
```

> 　如果你熟悉基于 Transformer 模型的零样本分类，你可能想知道为什么我们选择用嵌入向量而不是其他方式来演示。虽然自然语言推理模型在零样本分类中表现惊人，但这个例子旨在展示嵌入向量在各种任务中的灵活性。正如你将在本书中看到的，嵌入向量几乎存在于所有语言人工智能应用场景中，它们往往被低估，但实际上能够发挥极其重要的作用。

考虑到我们完全没有使用任何标注数据，0.78 的 F1 分数已经相当令人印象深刻了！这恰恰说明了嵌入向量的多功能性和实用性，特别是当你能够创造性地使用它们时。

> 　让我们来测试一下这种创造性。我们之前将标签命名为“一条负面 / 正面影评”，但其实可以进一步优化。针对我们的电影评论数据集，可以使用“一条非常负面 / 正面的影评”这类更具体的表述。这样，嵌入将捕捉到这是关于电影的评论，并更加关注两个标签的极端性。你可以自己试试看这会如何影响结果。

## 4.6　使用生成模型进行文本分类

使用生成模型（如 OpenAI 的 GPT 模型）进行分类的方式，与我们之前所做的有所不同。生成模型接收文本输入并生成文本，因此有时称其为序列到序列模型是很恰当的。这与特定任务模型形成鲜明对比，后者输出的是类别，如图 4-17 所示。

![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/101.jpg)

图 4-17：特定任务模型从词元序列生成数值，而生成模型从词元序列生成词元序列

生成模型通常在多种多样的任务上进行训练，但往往无法直接满足你的场景需求。例如，我们给生成模型一条没有任何上下文的电影评论，它根本不知道该如何处理。

我们需要帮助它理解上下文，并引导它得出我们想要的答案。如图 4-18 所示，这种引导过程主要通过给模型输入指令或 提示词 来完成。迭代改进提示词以获得期望的输出的过程被称为 提示工程 （prompt engineering）。

![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/102.jpg)

图 4-18：提示工程允许更新提示词来改进模型生成的输出

在本节中，我们将演示如何利用不同类型的生成模型，在不使用烂番茄数据集的情况下对影评进行分类。

### 4.6.1　使用 T5

在本书中，我们主要探讨仅编码器（表示）模型（如 BERT）和仅解码器（生成）模型（如 ChatGPT）。然而，正如第 1 章所讨论的，原始 Transformer 架构实际上由编码器 - 解码器架构组成。与仅解码器模型一样，这些编码器 - 解码器模型也是序列到序列模型，通常被归类为生成模型。

T5（Text-to-Text Transfer Transformer，文本到文本迁移 Transformer）模型是一个有趣的模型系列，它利用了这种架构。如图 4-19 所示，其架构与原始 Transformer 类似，将 12 个解码器和 12 个编码器堆叠在一起 9 。

9 Colin Raffel et al.“Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer.” *The Journal of Machine Learning Research* 21.1 (2020): 5485-5551.

![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/103.jpg)

图 4-19：T5 模型与原始 Transformer 模型类似，采用解码器 - 编码器架构

通过这种架构，T5 系列模型首先使用掩码语言建模进行预训练。在训练的第一步，如图 4-20 所示，预训练过程不是仅对单个词元进行掩码，而是对词元集合（也称 词元跨度 ，token span）整体进行掩码。

![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/104.jpg)

图 4-20：在训练的第一步（预训练）中，T5 模型需要预测可能包含多个词元的掩码

在训练的第二步，即微调基础模型过程中，真正的“魔法”才开始发生。模型不是针对单个特定任务进行微调，而是将每个任务转换为序列到序列任务并同时进行训练。如图 4-21 所示，这使得模型可以在多种任务上进行训练。

![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/105.jpg)

图 4-21：通过将特定任务转换为文本指令，T5 模型可以在微调过程中针对各种任务进行训练

这种微调方法在论文“Scaling Instruction-Finetuned Language Models”中得到了进一步扩展，研究人员在微调过程中引入了超过 1000 个任务，这些任务更接近我们所熟知的 GPT 模型中的指令 10 。这最终催生了 FLAN-T5 系列模型，它们即受益于这种大规模多样化的任务。

10 Hyung Won Chung et al.“Scaling Instruction-Finetuned Language Models.” *arXiv preprint arXiv:2210.11416* (2022).

要使用预训练的 FLAN-T5 模型进行分类，先通过 `"text2text-generation"` 任务加载模型，这类任务通常是为编码器 - 解码器模型预留的：

```
# 加载模型
pipe = pipeline(
    "text2text-generation",
    model="google/flan-t5-small",
    device="cuda:0"
)
```

FLAN-T5 模型有多种规模（small/base/large/XL/XXL），为了省时，我们将使用最小的版本。你可以尝试更大的模型，看看是否能改善结果。

与特定任务模型相比，我们不能仅仅给模型一些文本就期望它输出情感分类，而是必须明确指示模型如何做。

因此，我们在每个文档前加上提示词：“Is the following sentence positive or negative?”（以下句子是正面的还是负面的？）。

```
# 准备数据
prompt = "Is the following sentence positive or negative? "
data = data.map(lambda example: {"t5": prompt + example['text']})
data
```
```
DatasetDict({
    train: Dataset({
        features: ['text', 'label', 't5'],
        num_rows: 8530
    })
    validation: Dataset({
        features: ['text', 'label', 't5'],
        num_rows: 1066
    })
    test: Dataset({
        features: ['text', 'label', 't5'],
        num_rows: 1066
    })
})
```

数据更新后，我们可以像之前特定任务的例子一样运行流水线：

```
# 运行推理
y_pred = []
for output in tqdm(pipe(KeyDataset(data["test"], "t5")),
total=len(data["test"])):
    text = output[0]["generated_text"]
    y_pred.append(0 if text == "negative" else 1)
```

由于这个模型生成文本，我们需要将文本输出转换为数值。输出词 negative 映射为 0，而 positive 映射为 1。

有了这些数值，我们可以用与之前相同的方式来检验模型质量：

```
evaluate_performance(data["test"]["label"], y_pred)
```
```
precision    recall  f1-score   support

Negative review       0.83      0.85      0.84       533
Positive review       0.85      0.83      0.84       533

       accuracy                           0.84      1066
      macro avg       0.84      0.84      0.84      1066
   weighted avg       0.84      0.84      0.84      1066
```

F1 分数达到了 0.84，这个结果充分展示了 FLAN-T5 这类生成模型在文本分类任务上的能力。

### 4.6.2　使用 ChatGPT 进行分类

尽管在本书中我们主要关注开源模型，但专有模型（特别是 ChatGPT）是语言人工智能领域另一个不可或缺的部分。

虽然原始 ChatGPT 模型（GPT-3.5）的底层架构并未公开，但从其名称我们可以推测，它是基于我们在 GPT 模型中所见的仅解码器架构的。

幸好，OpenAI 分享了关于训练过程的大体情况，其中涉及一个重要组件，即偏好调优（preference tuning）。如图 4-22 所示，OpenAI 首先手动创建了输入提示词（指令数据）的期望输出，并使用这些数据创建了模型的第一个版本。

![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/106.jpg)

图 4-22：由指令（提示词）和输出组成的手动标注数据被用于执行微调（指令微调）

OpenAI 使用上述过程得到的模型生成多个输出，并手动对这些输出从最好到最差进行排序。如图 4-23 所示，这种排序展示了对某些输出的偏好（偏好数据），并被用于创建最终的模型，即 ChatGPT。

![{%}](https://www.ituring.com.cn/figures/2025/HandsonLLM/107.jpg)

图 4-23：手动排序的偏好数据被用于生成最终的模型 ChatGPT

使用偏好数据而非指令数据的一个主要优势在于，它能够体现细微的差别。通过展示好的输出和更好的输出之间的差异，生成模型学会了生成符合人类偏好的文本。在第 12 章中，我们将探讨这些微调和偏好调优方法的工作原理，以及如何自行实现它们。

使用专有模型的过程与我们迄今所见的开源模型示例很不同。我们无须加载模型，而是通过 OpenAI 的 API 来访问模型。

在进入分类任务之前，需要先在 OpenAI 官网创建一个免费账户，并在 API 密钥管理页面创建一个 API 密钥。完成之后，你就可以使用你的 API 与 OpenAI 的服务器进行通信了 11 。

11 如果你暂时不能使用 OpenAI 提供的服务，可以考虑使用 DeepSeek、豆包、通义、Moonshot、Step、Yi、ChatGLM、混元、文心一言等国内大模型，或使用 SiliconFlow（硅基流动）提供的开源模型。大多数国内大模型兼容 OpenAI API，操作方式可以参考相关大模型平台的文档。获取平台 API 密钥后，通常仅需修改 base\_url 为对应平台的 API 地址，修改 model 为对应模型的名称即可。——译者注

我们可以使用这个密钥创建一个客户端：

```
import openai

# 创建客户端
client = openai.OpenAI(api_key="YOUR_KEY_HERE")
```

使用这个客户端创建 `chatgpt_generation` 函数，该函数允许我们基于特定的提示词、输入文档和选定的模型生成文本：

```python
def chatgpt_generation(prompt, document, model="gpt-3.5-turbo-0125"):
    """基于提示词和输入文档生成输出"""
    messages=[
        {
            "role": "system",
            "content": "You are a helpful assistant."
            },
        {
            "role": "user",
            "content": prompt.replace("[DOCUMENT]", document)
            }
    ]
    chat_completion = client.chat.completions.create(
      messages=messages,
      model=model,
      temperature=0
    )
    return chat_completion.choices[0].message.content
```

接下来，我们需要创建一个提示词模板来要求模型执行分类任务：

```
# 定义一个基础提示词模板
prompt = """Predict whether the following document is a positive or negative
movie review:

[DOCUMENT]
If it is positive return 1 and if it is negative return 0. Do not give any
other answers.
"""

# 使用GPT预测目标
document = "unpretentious , charming , quirky , original"
chatgpt_generation(prompt, document)
```

这个模板仅仅是一个示例，你可以根据需要进行任何修改。目前，我们尽可能保持简单，以说明如何使用这样的模板。

在你使用模型 API 处理大型数据集之前，一定要注意始终追踪使用情况。在使用像 OpenAI 提供的这类外部 API 服务时，如果执行大量请求，费用可能会快速增长。在撰写本书时，使用 gpt-3.5-turbo-0125 模型 12 运行我们的测试数据集花费了 3 美分，这个花费在免费账户额度内，但可能在未来发生变化。

12 目前 gpt-3.5-turbo-0125 模型已经过时。对于对模型能力要求不高的场景，推荐使用 GPT-4o mini 这个成本较低的模型，它的效果比 GPT-3.5 更好，并且成本更低。由于大模型领域发展很快，读者阅读本书时，GPT-4o mini 可能也已经过时，请参考 OpenAI 最新文档。——译者注

> 　在使用外部 API 时，你可能会遇到速率限制错误。调用 API 过于频繁可能会出现这类错误，因为某些 API 可能会限制你每分钟或每小时的使用量。
> 
> 为了避免这些错误，我们可以实现几种重试请求的方法，包括指数退避（exponential backoff），也就是每次遇到速率限制错误时执行短暂的休眠，然后重试未成功的请求。每当再次失败时，休眠时间会增加，直到请求成功或达到最大重试次数。
> 
> 对此，OpenAI 提供了一份很好的入门指南，大家可在 OpenAI Platform 阅读“Rate limits”了解具体的应对策略。

接下来，我们可以对测试数据集中的所有影评运行这个函数来获取预测结果。如果你想为其他任务省下（免费）API 额度，可以跳过这一步。

```
# 如果你想节省模型调用成本，可以跳过这一步
predictions = [
    chatgpt_generation(prompt, doc) for doc in tqdm(data["test"]["text"])
]
```

与前面的例子类似，我们需要将输出从字符串转换为整数以评估其性能：

```
# 提取预测结果
y_pred = [int(pred) for pred in predictions]

# 评估性能
evaluate_performance(data["test"]["label"], y_pred)
```
```
precision    recall  f1-score   support

Negative review       0.87      0.97      0.92       533
Positive review       0.96      0.86      0.91       533

       accuracy                           0.91      1066
      macro avg       0.92      0.91      0.91      1066
   weighted avg       0.92      0.91      0.91      1066
```

0.91 的 F1 分数让我们得以看到 GPT-3.5 模型性能的冰山一角。就是这个模型让生成式 AI 走向了大众。然而，由于我们不知道模型是用什么数据训练的，因此无法轻易使用这类指标来评估模型。就我们所知，它可能在我们所用的数据集上训练过！

在第 12 章中，我们将探索如何在更通用的任务上评估开源模型和专有模型。

## 4.7　小结

在本章中，我们讨论了执行各种分类任务的技术：从对整个模型进行微调，到完全不进行微调。对文本数据进行分类并不像表面上看起来那么简单，且有大量创新的技术可以应用。

在本章中，我们探索了使用生成模型和表示模型进行文本分类。我们的目标是根据输入文本分配标签或类别，用于对评论的情感进行分类。

我们探索了两种类型的表示模型：特定任务模型和嵌入模型。特定任务模型是在大型数据集上专门针对情感分析进行预训练的，它表明预训练模型对文档分类而言是一种很好的技术。嵌入模型用于生成通用嵌入向量，我们将其作为训练分类器的输入。

同样，我们探索了两种类型的生成模型：开源的编码器 - 解码器模型（FLAN-T5）和专有的仅解码器模型（GPT-3.5）。我们在文本分类中使用这些生成模型时，无须在领域数据或标记数据集上进行特定的（额外）训练。

在下一章中，我们将继续讨论分类，但重点是无监督分类。如果拥有一些无标签的文本数据，我们应该怎么做？我们可以提取哪些信息？我们将专注于对数据进行聚类，并使用主题建模技术为聚类结果命名。
