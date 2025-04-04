
# Tailland CSS 的使用


`#前端/CSS` 


## 目录
<!-- toc -->
 ## 1. 主要特点 

- 原子级类：每个类通常只做一件事。
- 组合使用：通过组合多个类来实现复杂的样式。
- 直接在 HTML 中应用：样式直接在 HTML 元素上应用，而不是在单独的 CSS 文件中。
- 预定义类：使用框架提供的预定义类，而不是自定义 CSS。

## 2. 优势解释

- 快速开发：
	- **不需要切换到 CSS 文件**，直接在 HTML 中应用样式。
- 一致性：
	- 使用预定义的类确保整个项目的样式一致。
- 响应式设计：
	- 可以轻松添加响应式前缀（如 `md:`, `lg:`）来适应不同屏幕尺寸。
- 避免命名困难：
	- 不需要为每个元素想独特的类名。

## 3. 问题

- HTML 膨胀、可维护性
- **语义化问题**
- 可能不适合小项目
- 设计一致性的挑战

## 4. 最后

- 深度使用才知道好处
- 结合 LLM 有好处，LLM上下文的 token 有限制