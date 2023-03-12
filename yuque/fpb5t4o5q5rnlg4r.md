---
title: FE.001.前端框架设计里的”权衡“与选择
urlname: fpb5t4o5q5rnlg4r
date: '2023-03-12 10:25:05 +0800'
tags: []
categories: []
---

## 1、命令式框架与声明式框架

- `Jquery` 就是典型的 **命令式框架**，关注`过程`
- Vue 暴露给用户使用的是 `声明式` ，但底层内部实现肯定也是 `命令式` ，如下示例：面向用户的是声明式的

```vue
<template>
  <div @click="hello()"></div>
</template>
```

但问题是，**声明式的代码性能 不会高于 命令式代码的性能 ，所以这是一个选择 或者权衡**

## 2、性能 与 维护性 的平衡

![](https://blog-1310531898.cos.ap-beijing.myqcloud.com/FkPqA2uVDAvzBIJAIjpDRdxhQsyp.png)

## 3、运行时 与 编译时

### 纯运行时，即直接`Render`即可

![](https://blog-1310531898.cos.ap-beijing.myqcloud.com/Fg50nk8zQ1iWJbRkEKmVDMyNO4bZ.png)

### 运行时 + 编译时 ，如下图，常用的 Vue/Angular/React 都属于这类框架

### ![](https://blog-1310531898.cos.ap-beijing.myqcloud.com/Fq1iu91nLCuPM-w-HHaPfXLX9Bxh.png)

### 纯编译时框架，代表`Svelte`

![](https://blog-1310531898.cos.ap-beijing.myqcloud.com/FhVc9j0TN1GNOR6dW_jxUMDygi_n.png)

## 4、原生 JS 操作 DOM、InnerHTML 与 虚拟 DOM 快慢对比

可从以下三个方面来度量

- 理解成本上，**原生 JS 操作 DOM > InnerHTML > 虚拟 DOM**
- 维护性上，**原生 JS 操作 DOM 、 InnerHTML < 虚拟 DOM**
- 性能上，取决于`页面大小`，`页面变更大小，`是`新建页面` 还是` 更新页`面 甚至是`更新策略`等，都有关系，不同场景下有不同结论。

## 5、最后

无论是`命令式`还`是声明式`，或者框架需要设计成`运行时`、`编译时`或`运行时+编译时`，都需要结合 `性能`、`理解成本`、`维护性`上做权衡选择。

## 参考

- 《Vue.js 设计与实现》
