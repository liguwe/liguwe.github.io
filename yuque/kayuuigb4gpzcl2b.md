---
title: 算法.Programs Are Translated by Other Programs into Different Forms
urlname: kayuuigb4gpzcl2b
date: '2023-03-11 13:01:03 +0800'
tags: []
categories: []
---

The hello program begins life as a high-level C program because it can be read and understood by human beings in that form. However, in order to run `hello.c` on the system, the individual 单独的 C statements must be translated by other programs into a sequence of low-level machine-language instructions.

These instructions are then packaged in a form called an executable object program and stored as a binary disk ﬁle.

Object programs are also referred to as 也称为 executable object ﬁles.

On a Unix system, the translation from source ﬁle to object ﬁle is performed by a compiler driver:

![](https://blog-1310531898.cos.ap-beijing.myqcloud.com//Fo76v2W7a6BPmhq2GpKOkypj-EPL.png)
Here, the gcc compiler driver reads the source ﬁle `hello.c` and translates it into an executable object ﬁle `hello`. The translation is performed in the sequence of four phases shown in Figure 1.3. The programs that perform the four phases (preprocessor, compiler, assembler, and linker) are known collectively as the compilation system.

- Preprocessing phase. The preprocessor (cpp) modiﬁes the original C program according to directives that begin with the `‘#’` character. For example, the `#include <stdio.h>` command in line 1 of `hello.c` tells the preprocessor to read the contents of the system header ﬁle `stdio.h` and insert it directly into the program text. The result is another C program, typically with the `.i` sufﬁx.
- Compilation phase. The compiler (cc1) translates the text ﬁle `hello.i` into the text ﬁle hello.s, which contains an assembly-language program. This program includes the following deﬁnition of function main:

      ![](https://blog-1310531898.cos.ap-beijing.myqcloud.com//FqKhvKNsOvpxEXb0ZYknExL7At5-.png)
       Each of lines 2–7 in this deﬁnition describes one low-level machine-language instruction in a textual form. Assembly language is useful because  it provides a common output language  for  different compilers  for different high-level languages.  For example, C compilers and Fortran compilers both generate output ﬁles in the same assembly language.

- Assembly phase. Next, `the assembler S` (as) translates v `hello.s` into machine-language instructions, packages v them in a form known as a relocatable object program 可重定位的目标程序, and stores the result in the object ﬁle `hello.o`. This ﬁle is a binary ﬁle （containing 17 bytes） to encode 动词不定时？ the instructions for function main. If we were to view hello.o with a text editor, it would appear to be gibberish.
