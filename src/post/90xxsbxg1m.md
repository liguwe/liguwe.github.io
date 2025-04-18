
# 调研：各类大会对低代码的分享


## 目录
<!-- toc -->
 ## 1. 低代码开发流程 

### 1.1. 搭建体验？

- 不同于**传统工程模式**，
	- 使用的**文件目录+文件方式维护工程**  
- 低代码更多会用交互式、GUI的方式来维护配置以及工程产物 
- 对于可维护性的提升，我们应追求“可视化”配套的完整度

问题：
![图片](https://832-1310531898.cos.ap-beijing.myqcloud.com/999.%20Obsidian@832/files/20241215-30.png)

### 1.2. 底码体验

- 比如数据源某个字段，快速定位到绑定改数据源的组件
- 选中某个组件时，数据面板跟着出现
- 搜索 + 跳转到对应配置项，`cmd + j`
- devTools ： 
	- 内置 Vue 开发者工具

### 1.3. 协助问题

- 大对象的层级多、语义差、难比较?
	- 打散大对象，转化为“节点”+“关系” 
		- 基于它，做 Diff/撤销重做/多人协同
	- 但本质还是需要结合 Git 的分支能力
	- 或者后端单独存一个v0.1，专门用于调试，
		- 不影响线上的版本

### 1.4. 数据中台？

数据源，甚至可以做成一个**数据中台**
- 一个专业的数据中台管理系统  
- 用于数据源、数据字段等相关存储与服务管理(元信息、调试、接入、管控等) 
- 支持多租户接入、权限隔离、多环境切换

## 2. 低代码平台

- 标准化跨端组件 ？
- 平台上创建组件
	- 组件分类
	- 组件 ID
- 组件本地开发
- 组件版本管理

### 2.1. 编辑器

- 独立编辑器应用，为什么要独立，方便嵌入到其他地方去？
- 随着编辑器功能的丰富，接入场景的增多，编辑器的体积也变得拥肿起来，维护成本日日益俱增。
	- 为满足各场景定制化需求，同时能满足对外提供可视化⻚面设计能力。
	- 对编辑器解耦，将功能插件化，提升编辑器扩展性和维护效率。 
- **设计器本质也配置出来了，协议驱动的，里面包含不同的插件，插件都是通过 cdn 获取的，和组件一样，有版本号，按需加载，需要注册**等等
	- 插件版本
	- ![图片](https://832-1310531898.cos.ap-beijing.myqcloud.com/999.%20Obsidian@832/files/20241215-31.png)
- 插件数据共享通过`模块联邦`实例共享
	- 共享 `vue`
	- 共享公共类库 `loadsh`
	- 共享基础组件库等
	- 模块加载器，我们用的是模块联邦的方式加载
		- `SystemJS` 是一个通用的模块加载器，支持加载多种模块格式
- 通过特定的脚手架来开发
	- ![图片](https://832-1310531898.cos.ap-beijing.myqcloud.com/999.%20Obsidian@832/files/20241215-32.png)
	- `pnpm` 多包管理插件
- 通讯机制
	- 编辑器/插件消息(发布订阅)
	- 基于 `PostMessage机制` 简化**编辑器与业务侧**通信
	- 共享数据流示例 
	- 插件之间通信
- 插件有不同的类型
	- 数据流
- 编辑器插槽设计
	- ![图片](https://832-1310531898.cos.ap-beijing.myqcloud.com/999.%20Obsidian@832/files/20241215-33.png)
	- ![图片](https://832-1310531898.cos.ap-beijing.myqcloud.com/999.%20Obsidian@832/files/20241215-34.png)

 

编辑器抽象成 `JSON Schema`

![图片](https://832-1310531898.cos.ap-beijing.myqcloud.com/999.%20Obsidian@832/files/20241215-35.png)

### 2.2. 编辑器架构图

![图片](https://832-1310531898.cos.ap-beijing.myqcloud.com/999.%20Obsidian@832/files/20241215-36.png)

## 3. 无极低代码与 AI

![图片](https://832-1310531898.cos.ap-beijing.myqcloud.com/999.%20Obsidian@832/files/20241215-37.png)

- TypeScript类型: 
	- 能保留完整的类型定义和注释，在不泄露数据前提下能保留更多对 变量和方法的描述，
		- 而且大大降低 `Prompt token` 的消耗
- 使用无极DSL : 
	- 对 Prompt 结构影响小，从而减少 `Prompt` 改动对 AI 生成的影响
- **lowcode 平台**可以搞一个 `text2dsl 模型`彻底从配置式升级成对话式吗?
	- 理论可行，实际很难，需要 **lots of money**

![图片](https://832-1310531898.cos.ap-beijing.myqcloud.com/999.%20Obsidian@832/files/20241215-38.png)

- 运行时：**想想 AI 浏览插件干的事情，它基本都能干**
	- 主要是**内置的 AI 插件**
	- 比如和图片对话
	- 表单帮忙提示填写等

## 4. 低代码运行时的生命周期

![图片](https://832-1310531898.cos.ap-beijing.myqcloud.com/999.%20Obsidian@832/files/20241215-39.png)

- 监听数据变化，则组件需要更新
- 组件出错了
