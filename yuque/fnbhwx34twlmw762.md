---
title: FE.Chapter 算法.1  A Tour of Computer Systems
urlname: fnbhwx34twlmw762
date: '2023-03-11 13:00:40 +0800'
tags: []
categories: []
---

# 大标题，的场景

computer system consists of hardware and systems software that work together to run application programs. Speciﬁc implementations of systems change over time, but the underlying concepts do not. All computer systems have similar hardware and software components that perform similar functions. This book is written for programmers who want to get better at their craft 技能，手艺 by understanding how these components work and how they affect the correctness and performance of their programs.

You are poised for an exciting journey. If you dedicate yourself to learning the concepts in this book, then you will be on your way to becoming a rare “power programmer,” enlightened by an understanding of the underlying computer system and its impact on your application programs.

You are going to learn practical skills such as how to avoid strange 奇怪的，仔细看单词 numerical errors caused by `the way` that computers represent numbers.

You will learn how to optimize your C code by using clever tricks that exploit 充分利用 the designs of modern processors and memory systems.

You will learn how the compiler implements procedure calls and how to use this knowledge to avoid the security holes from ` buffer overﬂow vulnerabilities` that plague network and Internet software.

You will learn how to recognize and avoid the nasty errors during linking （ that confound the average 普通的，不是平庸的 programmer. ）

You will learn how to write your own Unix shell, your own dynamic storage allocation package 动态存储分配包 , and even your own Web server.

You will learn the promises and pitfalls of concurrency, a topic of increasing importance as multiple processor cores are integrated onto single chips.
你将学习并发的陷阱和希望，这个主题随着 单个芯片上集成的多核处理器变得越来越重要。

In their classic text on the C programming language [61], Kernighan and Ritchie introduce readers to C using the hello program shown in Figure 1.1.

```typescript
#include <stdio.h>
int main() {

  printf("hello, world\n");

  return 0;
}
```

Although hello is a very simple program, every major part of the system must work in concert 音乐会，使协调 in order （for it） to run to completion.

> 对于这个程序，为了能完整运行，系统的每个主要组成部分，必须协调工作。

In a sense, the goal of this book is to help you understand what happens and why when you run hello on your system.

We begin our study of systems by tracing the lifetime of the hello program, from the time it is created by a programmer, until it runs on a system, prints its simple message, and terminates.

As we follow the lifetime of the program, we will brieﬂy introduce the key concepts, terminology, and components that come into play 发挥作用的组件. Later chapters will expand on these ideas.
