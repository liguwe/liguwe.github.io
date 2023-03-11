import{_ as e,o,c as t,a}from"./app.69d62d8a.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"yuque/kayuuigb4gpzcl2b.md"}'),r={name:"yuque/kayuuigb4gpzcl2b.md"},s=a(`<p>The hello program begins life as a high-level C program because it can be read and understood by human beings in that form. However, in order to run <code>hello.c</code> on the system, the individual 单独的 C statements must be translated by other programs into a sequence of low-level machine-language instructions.</p><p>These instructions are then packaged in a form called an executable object program and stored as a binary disk ﬁle.</p><p>Object programs are also referred to as 也称为 executable object ﬁles.</p><p>On a Unix system, the translation from source ﬁle to object ﬁle is performed by a compiler driver:</p><p><img src="https://blog-1310531898.cos.ap-beijing.myqcloud.com//Fo76v2W7a6BPmhq2GpKOkypj-EPL.png" alt=""> Here, the gcc compiler driver reads the source ﬁle <code>hello.c</code> and translates it into an executable object ﬁle <code>hello</code>. The translation is performed in the sequence of four phases shown in Figure 1.3. The programs that perform the four phases (preprocessor, compiler, assembler, and linker) are known collectively as the compilation system.</p><ul><li><p>Preprocessing phase. The preprocessor (cpp) modiﬁes the original C program according to directives that begin with the <code>‘#’</code> character. For example, the <code>#include &lt;stdio.h&gt;</code> command in line 1 of <code>hello.c</code> tells the preprocessor to read the contents of the system header ﬁle <code>stdio.h</code> and insert it directly into the program text. The result is another C program, typically with the <code>.i</code> sufﬁx.</p></li><li><p>Compilation phase. The compiler (cc1) translates the text ﬁle <code>hello.i</code> into the text ﬁle hello.s, which contains an assembly-language program. This program includes the following deﬁnition of function main:</p><pre><code>![](https://blog-1310531898.cos.ap-beijing.myqcloud.com//FqKhvKNsOvpxEXb0ZYknExL7At5-.png)
 Each of lines 2–7 in this deﬁnition describes one low-level machine-language instruction in a textual form. Assembly language is useful because  it provides a common output language  for  different compilers  for different high-level languages.  For example, C compilers and Fortran compilers both generate output ﬁles in the same assembly language.
</code></pre></li><li><p>Assembly phase. Next, <code>the assembler S</code> (as) translates v <code>hello.s</code> into machine-language instructions, packages v them in a form known as a relocatable object program 可重定位的目标程序, and stores the result in the object ﬁle <code>hello.o</code>. This ﬁle is a binary ﬁle （containing 17 bytes） to encode 动词不定时？ the instructions for function main. If we were to view hello.o with a text editor, it would appear to be gibberish.</p></li></ul>`,6),i=[s];function n(l,c,p,h,d,m){return o(),t("div",null,i)}const b=e(r,[["render",n]]);export{g as __pageData,b as default};
