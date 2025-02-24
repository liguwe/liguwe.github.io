
# LangChain 概述

`#2024/09/13` `#langchain`  `#agi/langchain`


## 目录
<!-- toc -->
 ## 1. 前置知识点  

- 基本来说，各大厂大模型发布的时间，都在 2023 年上半年
	- 腾讯：混元
- ChatGPT 需要分成两部分
	- GPT
	- Chat 是一种对话的方式，即针对对话应用
- 通用的**提示词模板**：
	- 定义角色 +  背景信息 + 任务目标 + 输出要求
- Token
	- 类似于字符是编程语言的最小单位
	- Token 大模型的基本单位
		- 英语中的一个简单句子可能会被拆分成多个标记
		- 而中文由于字符的特性，通常一个字符就是一个标记
- 模型支持的上下文长度
	- 8k：8000 个标记（token） × 0.75 ≈ 6000 个英文单词
		- 注意：标点符号、特殊符号，数字等等都会影响 token 数量
	-  GPT-4 Turbo：支持最多 128,000 个 token
	- GPT-4：有两个版本
	    - 8K 版本：支持最多 8,192 个 token
	    - 32K 版本：支持最多 32,768 个 token
- 大模型幻觉
	- 大模型的“幻觉”是指它们在缺乏理解能力的情况下生成不准确或虚假的信息。
	- 本质源于其基于统计学习的生成机制，缺乏事实验证和真正的理解能力
- 大模型预训练与微调
	- **预训练**：在大规模通用数据集上训练模型，学习语言的广泛模式和结构。
	- **微调**：在特定任务的数据上进一步训练，以适应特定应用需求。

## 2. LangChain 简介

- 定义：是大模型的**编程框架**
	- 连接 开发者 和复杂的 LLM 应用
- LangChain 提供开发过程中的一序列工具（百宝箱），比如
	- **SQL提示词模板**，方便查询
- 组件与链
	- 组件：具有明确功能和用途的**单元**
	- 链：链定义了**组件的调用序列** 
	- 例子：问“今天天气如何？同事告诉我量子力学是什么？”
		- `链`会**确保**调用 `搜索工具组件` 和 `维基百科组件` 
- Langchain 的应用场景
	- 数据查询和分析：
		- LangChain 可以与数据库集成，允许用**自然语言**进行复杂的数据查询和分析
	- 代码生成理解
	- 自动问答机器人


## LangChain 的 6 大模块

- 模型 I/O
	- 不提供大模型，而是提供各大模型的统一接口
- 数据增强：
	- 能够有效地补充LLM的知识库，解决其知识更新滞后的问题 
	- LangChain 的数据增强模块也被称为 LEDVR 工作流，这是一个多功能的数据增强集成工具。LEDVR 代表：
		- L: Loader (加载器)
		- E: Text Embedding Model (嵌入模型包装器)
		- D: Document Transformer (文档转换器)
		- V: Vector Store (向量存储)
		- R: Retriever (检索器)
- 链
	- 多个 LLM 模型和其他多个组件进行连接
- 记忆
	- 链会读取和写入数据到记忆中
	- 又分为短期记忆和长期记忆
		- 短期记忆主要用于处理最近的对话
		- 而长期记忆则帮助系统从历史记录中提取有用的信息，以便在对话中提供更丰富的上下文支
- 代理（Agents）：强调动态、智能
	- 功能：实现动态决策和工具使用。
	- 类型：
		- 自我提问代理（Self-ask agent）：能够提出和回答自己的问题
		- 计划和执行代理（Plan and execute agent）：制定计划并执行任务
		- **ReAct** 代理：结合推理和行动。
- 回调处理器（Callback）
	- 对各个阶段干预

## LangChain 的开发流程

###  获取 open ai key

- 淘宝买吧，使用 `gpt-4o-mini`  最经济实惠
- 秘钥保存，记得别提交了

### 第一个程序：让 OpenAI 帮忙翻译

```python
# 导入 os 模块, 用于设置环境变量，但已经将环境变量设置到了 .zshrc 中了
# 所以这里不需要导入 os 模块
# import os

# 从 langchain_openai 模块中导入 ChatOpenAI
from langchain_openai import ChatOpenAI
from langchain_text_splitters import python
model = ChatOpenAI(model='gpt-4o-mini')

# 导入用于构建对话消息的
from langchain_core.messages import HumanMessage, SystemMessage
messages = [
    # 设置系统指令，要求模型将英语翻译成意大利语
    SystemMessage(content="Translate the following from English into chinese"),
    # 设置人类消息，内容为 "hi!"
    HumanMessage(content="hi!"),
]

# 使用之前创建的模型实例，调用 invoke 方法，传入消息列表
res = model.invoke(messages)

print(res);

# 输出结果如下：
"""
{
    "content": "你好！",
    "additional_kwargs": {
        "refusal": None
    },
    "response_metadata": {
        "token_usage": {
            "completion_tokens": 2,
            "prompt_tokens": 20,
            "total_tokens": 22,
            "completion_tokens_details": {
                "reasoning_tokens": 0
            }
        },
        "model_name": "gpt-4o-mini-2024-07-18",
        "system_fingerprint": "fp_483d39d857",
        "finish_reason": "stop",
        "logprobs": None
    },
    "id": "run-a72df3a8-7229-44cc-86c7-3c555f40ef20-0",
    "usage_metadata": {
        "input_tokens": 20,
        "output_tokens": 2,
        "total_tokens": 22
    }
}
"""

```


## 3. 参考

- 《LangChain  入门指南 · 构建高可复用、可扩展的 LLM 应用程序》