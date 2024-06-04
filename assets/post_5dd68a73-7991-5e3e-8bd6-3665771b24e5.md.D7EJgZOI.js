import{_ as n,D as l,c as h,I as t,w as e,a as i,l as s,a5 as p,o as d}from"./chunks/framework.CzeBWW5X.js";const f=JSON.parse('{"title":"二叉堆与优先级队列的关系","description":"","frontmatter":{},"headers":[],"relativePath":"post/5dd68a73-7991-5e3e-8bd6-3665771b24e5.md","filePath":"post/5dd68a73-7991-5e3e-8bd6-3665771b24e5.md"}'),k={name:"post/5dd68a73-7991-5e3e-8bd6-3665771b24e5.md"},o=s("h1",{id:"二叉堆与优先级队列的关系",tabindex:"-1"},[i("二叉堆与优先级队列的关系 "),s("a",{class:"header-anchor",href:"#二叉堆与优先级队列的关系","aria-label":'Permalink to "二叉堆与优先级队列的关系"'},"​")],-1),c=p(`<h2 id="二叉堆的概念" tabindex="-1">二叉堆的概念 <a class="header-anchor" href="#二叉堆的概念" aria-label="Permalink to &quot;二叉堆的概念&quot;">​</a></h2><p>之前在 [[树的一些基本概念#堆、大顶堆、小顶堆]] 已经讲解过了。这里再看下</p><p>![[树的一些基本概念#堆的基本概念]]</p><p><code>二叉堆</code>在逻辑上其实是一种特殊的<strong>二叉树（完全二叉树）</strong>，只不过存储在<code>数组</code>里。一般的链表二叉树，我们操作节点的<code>指针</code>，而在数组里，我们把<code>数组索引</code>作为指针</p><p>即：<code>链式存储-链表</code> 和 <code>顺序存储-数组</code> ，如下</p><p>![[树的一些基本概念#二叉树的存储方式]]</p><h3 id="二叉堆的存储示意图" tabindex="-1">二叉堆的存储示意图 <a class="header-anchor" href="#二叉堆的存储示意图" aria-label="Permalink to &quot;二叉堆的存储示意图&quot;">​</a></h3><p><img src="https://od-1310531898.cos.ap-beijing.myqcloud.com/202306200806798.png" alt="image.png|645"></p><h3 id="实现小顶堆示例" tabindex="-1">实现小顶堆示例 <a class="header-anchor" href="#实现小顶堆示例" aria-label="Permalink to &quot;实现小顶堆示例&quot;">​</a></h3><p>![[树的一些基本概念#实现一个<code>小顶堆</code>]]</p><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>1、这种<code>二叉树</code>数据结构通过 <code>数组</code> 的方式存储 2、需要维护每个节点的关系，即大于或者小于它的两个子节点，所以有<code>上浮</code>和<code>下沉</code> 两个操作 3、关于循环，使用 while 或者 递归，比如一直<code>下沉</code>到具体什么条件，即递归。</p></div><h2 id="二叉堆与优先级队列的关系-1" tabindex="-1">二叉堆与优先级队列的关系 <a class="header-anchor" href="#二叉堆与优先级队列的关系-1" aria-label="Permalink to &quot;二叉堆与优先级队列的关系&quot;">​</a></h2><p><strong>优先级队列</strong>这种数据结构，在<code>插入或者删除</code>元素的时候，元素会<code>自动排序</code>，这底层的原理就是<code>二叉堆</code>的操作，==就是这关系而已。==</p><p>但真正在一些算法题里，不可能单独还在实现一个二叉堆的数据结构，所以往往只是实现部分逻辑，甚至都不采用这种堆数据结构，完全独立实现。如[[0068.链表的双指针技巧合集#第 3 题：合并 k 个有序链表| 合并 K 个有序链表]] 中的 <strong>优先级入队函数</strong>，其实和<code>二叉堆</code>没有什么区别。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 优先级队列，值最小的先入队，即优先级最高</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> q </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [];</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 优先队列的【入队函数】，值最小的先入队列</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> enqueue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">node</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (q.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		q.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(node);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 是否插入了</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> added </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> q.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">			if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (node.val </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> q[i].val) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				q.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">splice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, node)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				added </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">				break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 没找到合适的插入位置，则添加到末尾</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">added) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			q.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(node);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><blockquote><p>当然，还是因为 <code>JavaScript</code> 没有对应的公共数据结构库。对应 Java 就有 <code>PriorityQueue</code></p></blockquote><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><ul><li><code>二叉堆</code>就是一种 <code>完全二叉树</code>，所以适合存储在<code>数组</code>中，而且二叉堆拥有一些特殊性质。</li><li>二叉堆的操作很简单，主要就是 <code>上浮和下沉</code>，来维护堆的性质（<code>堆有序</code>）</li><li><strong>优先级队列</strong>是基于<code>二叉堆</code>实现的，主要操作是<code>插入和删除</code>。 <ul><li>插入是<strong>先插到最后</strong>，然后<strong>上浮到正确位置</strong>；</li><li>删除是 <strong>调换位置后再删除</strong>，然后<strong>下沉</strong>到正确位置。</li></ul></li></ul><h2 id="优先级队列相关的习题" tabindex="-1">优先级队列相关的习题 <a class="header-anchor" href="#优先级队列相关的习题" aria-label="Permalink to &quot;优先级队列相关的习题&quot;">​</a></h2><blockquote><p>待补充</p></blockquote><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><p><a href="https://labuladong.github.io/algo/di-yi-zhan-da78c/shou-ba-sh-daeca/er-cha-dui-1a386/#%E4%BA%94%E3%80%81%E6%9C%80%E5%90%8E%E6%80%BB%E7%BB%93" target="_blank" rel="noreferrer">https://labuladong.github.io/algo/di-yi-zhan-da78c/shou-ba-sh-daeca/er-cha-dui-1a386/#五、最后总结</a></p><p><a href="https://appktavsiei5995.pc.xiaoe-tech.com/p/t_pc/course_pc_detail/image_text/i_633faa64e4b0eca59c3a1aa3" target="_blank" rel="noreferrer">https://appktavsiei5995.pc.xiaoe-tech.com/p/t_pc/course_pc_detail/image_text/i_633faa64e4b0eca59c3a1aa3</a></p><hr>`,24),r=s("div",{class:"liguwe-doc-footer"},[s("div",{class:"liguwe-doc-footer-edit-link"},[s("p",{class:"liguwe-doc-footer-p"},[s("svg",{t:"1687912573060",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1498"},[s("path",{d:"M854.6 370.6c-9.9-39.4 9.9-102.2 73.4-124.4l-67.9-3.6s-25.7-90-143.6-98c-117.8-8.1-194.9-3-195-3 0.1 0 87.4 55.6 52.4 154.7-25.6 52.5-65.8 95.6-108.8 144.7-1.3 1.3-2.5 2.6-3.5 3.7C319.4 605 96 860 96 860c245.9 64.4 410.7-6.3 508.2-91.1 20.5-0.2 35.9-0.3 46.3-0.3 135.8 0 250.6-117.6 245.9-248.4-3.2-89.9-31.9-110.2-41.8-149.6z m-204.1 334c-10.6 0-26.2 0.1-46.8 0.3l-23.6 0.2-17.8 15.5c-47.1 41-104.4 71.5-171.4 87.6-52.5 12.6-110 16.2-172.7 9.6 18-20.5 36.5-41.6 55.4-63.1 92-104.6 173.8-197.5 236.9-268.5l1.4-1.4 1.3-1.5c4.1-4.6 20.6-23.3 24.7-28.1 9.7-11.1 17.3-19.9 24.5-28.6 30.7-36.7 52.2-67.8 69-102.2l1.6-3.3 1.2-3.4c13.7-38.8 15.4-76.9 6.2-112.8 22.5 0.7 46.5 1.9 71.7 3.6 33.3 2.3 55.5 12.9 71.1 29.2 5.8 6 10.2 12.5 13.4 18.7 1 2 1.7 3.6 2.3 5l5 17.7c-15.7 34.5-19.9 73.3-11.4 107.2 3 11.8 6.9 22.4 12.3 34.4 2.1 4.7 9.5 20.1 11 23.3 10.3 22.7 15.4 43 16.7 78.7 3.3 94.6-82.7 181.9-182 181.9z","p-id":"1499"})]),s("a",{href:"https://www.yuque.com/liguwe/post/5dd68a73-7991-5e3e-8bd6-3665771b24e5",target:"_blank",class:"liguwe-doc-footer-edit-link-a"}," View this page on Yuque（语雀） ")]),s("p",{class:"liguwe-doc-footer-p"},[s("svg",{t:"1687913054251",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5173"},[s("path",{d:"M853.333333 501.333333c-17.066667 0-32 14.933333-32 32v320c0 6.4-4.266667 10.666667-10.666666 10.666667H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667V213.333333c0-6.4 4.266667-10.666667 10.666667-10.666666h320c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32H170.666667c-40.533333 0-74.666667 34.133333-74.666667 74.666666v640c0 40.533333 34.133333 74.666667 74.666667 74.666667h640c40.533333 0 74.666667-34.133333 74.666666-74.666667V533.333333c0-17.066667-14.933333-32-32-32z","p-id":"5174"}),s("path",{d:"M405.333333 484.266667l-32 125.866666c-2.133333 10.666667 0 23.466667 8.533334 29.866667 6.4 6.4 14.933333 8.533333 23.466666 8.533333h8.533334l125.866666-32c6.4-2.133333 10.666667-4.266667 14.933334-8.533333l300.8-300.8c38.4-38.4 38.4-102.4 0-140.8-38.4-38.4-102.4-38.4-140.8 0L413.866667 469.333333c-4.266667 4.266667-6.4 8.533333-8.533334 14.933334z m59.733334 23.466666L761.6 213.333333c12.8-12.8 36.266667-12.8 49.066667 0 12.8 12.8 12.8 36.266667 0 49.066667L516.266667 558.933333l-66.133334 17.066667 14.933334-68.266667z","p-id":"5175"})]),s("a",{href:"https://github.com/liguwe/liguwe.github.io/blob/master/docs/5dd68a73-7991-5e3e-8bd6-3665771b24e5.md",target:"_blank",class:"liguwe-doc-footer-edit-link-a"},"Edit this page on Github")])]),s("div",{id:"liguwe-comment"})],-1);function E(g,y,u,b,_,F){const a=l("Badge");return d(),h("div",null,[o,t(a,{type:"tip"},{default:e(()=>[i("#算法/树")]),_:1}),i(),t(a,{type:"danger"},{default:e(()=>[i("#2023/06/20")]),_:1}),i(),t(a,{type:"info"},{default:e(()=>[i("#算法/二叉树")]),_:1}),i(),c,r])}const A=n(k,[["render",E]]);export{f as __pageData,A as default};
