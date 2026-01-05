
# Claude Code 常见工作流程指南

`#2026/01/05`


## 目录
<!-- toc -->
 ## 1. 理解新代码库 

当你刚加入一个新项目时，使用以下流程快速上手。

### 1.1. 快速获取代码库概览

```bash
# 1. 导航到项目根目录
cd /path/to/project

# 2. 启动 Claude Code
claude

# 3. 请求高级概览
> give me an overview of this codebase # 给我这个代码库的概览

# 4. 深入了解特定组件
> explain the main architecture patterns used here # 解释这里使用的主要架构模式
> what are the key data models? # 关键的数据模型有哪些？
> how is authentication handled? # 认证是如何处理的？
```

**提示：**

- 从`广泛`的问题开始，然后逐步缩小范围。
- 询问项目中使用的`编码约定和模式`。
- 请求项目特定术语的词汇表。

### 1.2. 查找相关代码

定位与特定功能相关的代码文件。

```bash
# 查找处理用户认证的文件
> find the files that handle user authentication

# 获取有关组件如何交互的上下文
> how do these authentication files work together? # 这些认证文件如何协同工作？

# 理解执行流程：从前端到数据库追踪登录过程
> trace the login process from front-end to database
```

**提示：**

- 明确说明要查找的内容。
- 使用项目中的领域语言（Domain Language）。

---

## 2. 编码与维护

### 2.1. 高效修复错误 (Bug Fixing)

遇到报错时，利用 Claude 定位并修复源头。

```bash
# 1. 分享错误信息（包含运行命令）
I am seeing an error when I run npm test # 运行 npm test 时看到一个错误

# 2. 请求修复建议
> suggest a few ways to fix the @ts-ignore in user.ts # 建议几种修复 user.ts 中 @ts-ignore 的方法

# 3. 应用修复
> update user.ts to add the null check you suggested # 更新 user.ts，添加你建议的空值检查
```

**提示：**

- 提供用于重现问题的命令及堆栈跟踪（Stack Trace）。
- 说明重现步骤以及错误是间歇性还是持续性的。

### 2.2. 重构代码 (Refactoring)

更新旧代码以适应现代模式。

```bash
# 1. 识别需要重构的遗留代码
> find deprecated API usage in our codebase # 查找代码库中已弃用的 API 用法

# 2. 获取重构建议
> suggest how to refactor utils.js to use modern JavaScript features # 建议如何重构 utils.js 以使用现代 JS 特性

# 3. 安全地应用更改（保持行为一致）
> refactor utils.js to use ES2024 features while maintaining the same behavior

# 4. 验证重构
> run tests for the refactored code # 为重构后的代码运行测试
```

### 2.3. 使用测试 (Testing)

为未覆盖的代码添加测试用例。

```bash
# 1. 识别未测试的代码
> find functions in NotificationsService.swift that are not covered by tests # 查找该文件中未被测试覆盖的函数

# 2. 生成测试框架
> add tests for the notification service # 为通知服务添加测试

# 3. 添加边界条件测试
> add test cases for edge conditions in the notification service # 添加边界条件测试用例

# 4. 运行并验证
> run the new tests and fix any failures # 运行新测试并修复失败项
```

### 2.4. 处理文档 (Documentation)

添加或更新代码文档。

```bash
# 1. 识别未文档化的代码
> find functions without proper JSDoc comments in the auth module # 查找 auth 模块中没有 JSDoc 注释的函数

# 2. 生成文档
> add JSDoc comments to the undocumented functions in auth.js # 为 auth.js 中的未文档化函数添加注释

# 3. 审查并增强
> improve the generated documentation with more context and examples # 用更多上下文和示例改进生成的文档

# 4. 验证文档标准
> check if the documentation follows our project standards # 检查文档是否符合项目标准
```

---

## 3. 高级功能模式

### 3.1. 使用专门的子代理 (Sub-agents)

将特定任务委派给专门的 AI 代理。

- **查看代理**：输入 `/agents` 查看可用代理或创建新代理。
- **自动使用**：Claude 会自动委派，例如：
    ```bash
    > review my recent code changes for security issues # 审查最近更改的安全性
    > run all tests and fix any failures # 运行测试并修复失败
    ```
- **明确请求**：
    ```python
    > use the code-reviewer subagent to check the auth module # 使用代码审查子代理检查认证模块
    > have the debugger subagent investigate why users can not log in # 让调试子代理调查用户无法登录的原因
    ```
- **创建自定义代理**：使用 `/agents` -> "Create new sub-agent"。建议在 `.claude/agents/` 中创建以便团队共享。

### 3.2. 计划模式 (Plan Mode)

通过只读操作分析代码库并制定计划，适合复杂更改或探索。

#### 3.2.1. 何时使用

- **多步实现**：需要编辑许多文件时。
- **代码探索**：在更改前彻底研究代码。
- **交互式开发**：需要迭代开发方向时。

#### 3.2.2. 如何使用

1. **会话中切换**：按 `Shift+Tab` 循环切换（正常 -> 自动接受 -> **计划模式**）。显示 `⏸ plan mode on`。
2. **启动新会话**：
    
    ```
    claude --permission-mode plan # 以计划模式启动
    ```
    
3. **无头模式查询**：
    
    ```
    claude --permission-mode plan -p "Analyze the authentication system and suggest improvements"
    ```
    
4. **配置为默认**：
    
    ```
    // .claude/settings.json
    {
      "permissions": {
        "defaultMode": "plan"
      }
    }
    ```

#### 3.2.3. 示例：规划复杂重构

```
# 1. 启动计划模式
claude --permission-mode plan

# 2. 提出复杂需求
> I need to refactor our authentication system to use OAuth2. Create a detailed migration plan.

# 3. 通过追问细化计划
> What about backward compatibility? # 向后兼容性如何？
> How should we handle database migration? # 数据库迁移怎么处理？
```

### 3.3. 使用扩展思考 (Extended Thinking)

对于复杂的架构决策或深层推理，Claude 可以展示其思考过程。

- **启用方式**：
    - 在会话中按 `Tab` 切换。
    - 在提示词中使用触发词：`think`, `think hard`, `think deeply`。
    - 设置环境变量 `MAX_THINKING_TOKENS` 永久启用。

```
# 提供上下文并要求思考
> I need to implement a new authentication system using OAuth2 for our API. Think deeply about the best approach for implementing this in our codebase.
# Claude 将显示斜体灰色的思考过程

# 细化思考
> think about potential security vulnerabilities in this approach # 思考潜在的安全漏洞
> think hard about edge cases we should handle # 认真思考我们需要处理的边界情况
```

---

## 4. 上下文与多媒体

### 4.1. 引用文件和目录

使用 `@` 快速将文件或目录加入上下文。

- **引用单个文件**：
    
    ```
    > Explain the logic in @src/utils/auth.js # 解释该文件中的逻辑
    # 注意：包含文件的完整内容
    ```
    
- **引用目录**：
    
    ```
    > What's the structure of @src/components? # 该目录的结构是什么？
    # 注意：仅显示文件列表，不含内容
    # 若目录中有 CLAUDE.md，也会被添加到上下文
    ```
    
- **引用 MCP 资源**：
    
    ```
    > Show me the data from @github:repos/owner/repo/issues
    ```

### 4.2. 使用图像

Claude Code 支持图像分析（架构图、报错截图、UI 设计稿）。

- **添加方式**：拖放图片、粘贴图片 (Ctrl+V)、或提供路径。
- **示例**：
    
    ```
    > What does this image show? # 这张图显示了什么？
    > Here's a screenshot of the error. What's causing it? # 这是报错截图，什么原因导致的？
    > Generate CSS to match this design mockup # 生成匹配此设计稿的 CSS
    ```

---

## 5. 工作流集成与管理

### 5.1. 恢复之前的对话

Claude 会在本地保存完整的消息历史和工具状态。

```
# 自动继续最近的对话
claude --continue

# 在非交互模式下继续（适合脚本）
claude --continue --print "Continue with my task"

# 显示交互式对话选择器（列表视图）
claude --resume
```

### 5.2. 使用 Git Worktrees 并行工作

在隔离的环境中同时处理多个任务。

```
# 1. 创建一个新的 worktree (基于新分支 feature-a)
git worktree add ../project-feature-a -b feature-a

# 2. 进入该目录并运行 Claude
cd ../project-feature-a
claude

# 3. 在另一个 worktree 处理不同任务 (互不干扰)
cd ../project-bugfix
claude

# 4. 管理 worktrees
git worktree list # 列出所有
git worktree remove ../project-feature-a # 删除
```

### 5.3. 创建拉取请求 (Pull Request)

```
# 1. 总结更改
> summarize the changes I've made to the authentication module

# 2. 生成 PR
> create a pr

# 3. 优化描述
> enhance the PR description with more context about the security improvements # 增加关于安全改进的上下文
> add information about how these changes were tested # 添加测试详情
```

### 5.4. Unix 风格实用程序集成

将 Claude 集成到 shell 脚本或管道中。

#### 5.4.1. 管道输入输出

```
# 将构建错误通过管道传给 Claude 分析
cat build-error.txt | claude -p 'concisely explain the root cause of this build error' > output.txt
```

#### 5.4.2. 控制输出格式

使用 `--output-format` 标志。

```
# 纯文本（默认）
cat data.txt | claude -p 'summarize this data' --output-format text > summary.txt

# JSON 格式（包含元数据、成本等）
cat code.py | claude -p 'analyze this code for bugs' --output-format json > analysis.json

# 流式 JSON（实时输出）
cat log.txt | claude -p 'parse this log file for errors' --output-format stream-json
```

#### 5.4.3. 验证脚本示例 (Linter)

```
// package.json script 示例
"scripts": {
  "lint:claude": "claude -p 'you are a linter. please look at the changes vs. main and report any issues...'"
}
```

---

## 6. 自定义斜杠命令 (Slash Commands)

### 6.1. 项目特定命令 (共享)

存放在 `.claude/commands` 中，团队成员可用。

```
# 1. 创建目录
mkdir -p .claude/commands

# 2. 创建命令文件 (例如 /optimize)
echo "Analyze the performance of this code and suggest three specific optimizations:" > .claude/commands/optimize.md

# 3. 使用命令
> /optimize
```

### 6.2. 个人命令 (私有)

存放在 `~/.claude/commands` 中，跨项目可用。

```
# 1. 创建个人命令文件 (例如 /security-review)
mkdir -p ~/.claude/commands
echo "Review this code for security vulnerabilities..." > ~/.claude/commands/security-review.md

# 2. 使用命令
> /security-review
```

### 6.3. 使用参数 ($ARGUMENTS)


在命令文件中使用 `$ARGUMENTS` 占位符接受输入。

```
# 创建 fix-issue 命令模板
echo 'Find and fix issue `#$ARGUMENTS.` Follow these steps: ...' > .claude/commands/fix-issue.md

# 使用时传入参数
> /fix-issue 123  # $ARGUMENTS 将被替换为 123
```

---

## 7. 询问 Claude 自身能力

Claude 内置了文档，你可以直接询问它的功能。

```
> can Claude Code create pull requests? # Claude Code 能创建 PR 吗？
> how do I use MCP with Claude Code? # 怎么在 Claude Code 中使用 MCP？
> what are the limitations of Claude Code? # 有什么限制？
```

---

## 8. 总结：关键概念速查

|概念/功能|说明|关键指令/快捷键|
|:--|:--|:--|
|**计划模式 (Plan Mode)**|只读分析模式，用于规划复杂变更，不直接修改代码。|`Shift+Tab` 或 `--permission-mode plan`|
|**子代理 (Sub-agents)**|专门用于测试、审查或设计的专用 AI 代理。|`/agents`|
|**扩展思考 (Extended Thinking)**|让模型进行深层推理，显示思考过程。|`Tab` 切换或提示词 `think hard`|
|**引用 (@ Ref)**|将文件内容或目录结构添加到对话上下文中。|`@filename`, `@directory`|
|**Git Worktrees**|允许在同一仓库的隔离目录中运行并行的 Claude 会话。|`git worktree add`|
|**管道 (Piping)**|支持 Unix 风格的输入输出流，便于脚本集成。|`|
|**自定义命令**|将常用提示词封装为 `/command`，支持项目级和用户级。|`.claude/commands/*.md`|
