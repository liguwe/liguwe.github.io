
# React 的源码结构分析

`#react` 

## 目录
<!-- toc -->
 ## 总结 

- 使用 yarn 的多包管理
- 再读一遍

## 1. 主要目录结构
```bash
react/
├── fixtures/        # 测试固件，包含一些测试用例
├── packages/        # 核心包目录，包含主要源码
├── scripts/        # 构建和开发脚本
└── docs/           # 文档（已迁移到独立仓库）
```

## 2. packages 目录（核心代码）

```bash
packages/
├── react/                     # React 核心库
├── react-dom/                 # DOM 渲染器
├── react-reconciler/          # 协调器实现
├── react-native-renderer/     # React Native 渲染器
├── scheduler/                 # 调度器
├── shared/                    # 共享工具代码
└── react-is/                  # 类型检查工具
```

## 3. 各个核心包的功能分析

### 3.1. react 包（packages/react/）

```bash
react/
├── src/
│   ├── React.js              # React 对外接口
│   ├── ReactElement.js       # createElement 实现
│   ├── ReactHooks.js        #  Hooks 实现
│   └── ReactContext.js      # Context 实现
```
功能：
- 提供核心 API
- 定义组件基类
- 实现 Hooks
- 提供 Context 功能

### 3.2. react-dom 包（packages/react-dom/）

```bash
react-dom/
├── src/
│   ├── client/              # 客户端渲染相关
│   ├── server/              # 服务端渲染相关
│   └── events/              # 事件系统
```

功能：
- 处理 DOM 操作
- 实现事件系统
- 提供服务端渲染
- 管理生命周期

### 3.3. react-reconciler 包（packages/react-reconciler/）

```bash
react-reconciler/
├── src/
│   ├── ReactFiber.js           # Fiber 节点结构
│   ├── ReactFiberWorkLoop.js   # 工作循环
│   ├── ReactUpdateQueue.js     # 更新队列
│   └── ReactFiberReconciler.js # 协调器实现
```

功能：
- 实现虚拟 DOM
- Fiber 架构实现
- Diff 算法
- 更新调度

### 3.4. scheduler 包（packages/scheduler/）

```bash
scheduler/
├── src/
│   ├── Scheduler.js            # 调度器实现
│   ├── SchedulerPriorities.js  # 优先级管理
│   └── SchedulerHostConfig.js  # 宿主环境配置
```

功能：
- 任务调度
- 优先级管理
- 时间分片
- 并发模式支持

## 4. shared 包（packages/shared/）

```bash
shared/
├── ReactSymbols.js        # React 内部 Symbol 定义
├── ReactTypes.js          # 类型定义
└── ReactFeatureFlags.js   # 特性开关
```

功能：
- 共享常量
- 工具函数
- 类型定义
- 特性标记

## 5. 核心流程和关系

![图片](https://832-1310531898.cos.ap-beijing.myqcloud.com/999.%20Obsidian@832/files/20241031-26.png)

````mermaid
  graph TB
    subgraph Application
        App[应用代码]
    end
    
    subgraph React Core
        ReactAPI[React API]
        Hooks[Hooks]
        Context[Context]
    end
    
    subgraph Reconciliation
        Reconciler[Reconciler]
        Fiber[Fiber Tree]
        Diff[Diff 算法]
    end
    
    subgraph Rendering
        ReactDOM[React DOM]
        RNRenderer[RN Renderer]
    end
    
    subgraph Scheduling
        Scheduler[Scheduler]
        Priority[Priority Queue]
    end
    
    App --> ReactAPI
    ReactAPI --> Reconciler
    Hooks --> Reconciler
    Context --> Reconciler
    Reconciler --> Fiber
    Fiber --> Diff
    Diff --> Scheduler
    Scheduler --> Priority
    Priority --> ReactDOM
    Priority --> RNRenderer
    
    style Application fill:#f9f,stroke:#333,stroke-width:2px
    style React Core fill:#bbf,stroke:#333,stroke-width:2px
    style Reconciliation fill:#bfb,stroke:#333,stroke-width:2px
    style Rendering fill:#fbb,stroke:#333,stroke-width:2px
    style Scheduling fill:#ffb,stroke:#333,stroke-width:2px
````

- 应用层：即 **React 入口**
	- 开发者编写的应用代码
	- 使用 React API 创建组件和元素
- React 核心层：
	- 处理组件定义和基础抽象
	- 管理 Hooks 和 Context
	- 提供核心 API 接口
- **协调层**：
	- 维护 Fiber 树结构
	- 执行 **Diff 算法**
	- 计算更新内容
- 调度层：
	- 管理任务优先级
	- 控制更新时机
	- 实现**时间分片**
- 渲染层：
	- 执行实际的 DOM 操作
	- 处理平台特定的渲染逻辑

## 6. 重要概念和实现

- Fiber 架构：
	- 实现可中断的更新
	- 支持优先级调度
	- 更好的性能和用户体验
- 并发模式：
	- 支持任务中断和恢复
	- 实现时间切片
	- 优化用户交互体验
- 调度系统：
	- 基于优先级的任务调度
	- 支持**异步渲染**
	- 实现**可中断更新**
