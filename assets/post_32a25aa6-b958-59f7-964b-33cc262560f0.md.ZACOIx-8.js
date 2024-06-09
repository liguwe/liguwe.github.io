import{_ as e,D as h,c as t,I as n,w as l,a as i,l as s,a5 as p,o as k}from"./chunks/framework.CzeBWW5X.js";const m=JSON.parse('{"title":"反转单链表：反转全部、反转前 N 个节点、反转一部分","description":"","frontmatter":{},"headers":[],"relativePath":"post/32a25aa6-b958-59f7-964b-33cc262560f0.md","filePath":"post/32a25aa6-b958-59f7-964b-33cc262560f0.md"}'),r={name:"post/32a25aa6-b958-59f7-964b-33cc262560f0.md"},d=s("h1",{id:"反转单链表-反转全部、反转前-n-个节点、反转一部分",tabindex:"-1"},[i("反转单链表：反转全部、反转前 N 个节点、反转一部分 "),s("a",{class:"header-anchor",href:"#反转单链表-反转全部、反转前-n-个节点、反转一部分","aria-label":'Permalink to "反转单链表：反转全部、反转前 N 个节点、反转一部分"'},"​")],-1),c=p(`<blockquote><p>原文： <a href="https://labuladong.online/algo/data-structure/reverse-linked-list-recursion/" target="_blank" rel="noreferrer">https://labuladong.online/algo/data-structure/reverse-linked-list-recursion/</a></p></blockquote><h2 id="一、反转单链表" tabindex="-1">一、反转单链表 <a class="header-anchor" href="#一、反转单链表" aria-label="Permalink to &quot;一、反转单链表&quot;">​</a></h2><h3 id="题目" tabindex="-1">题目 <a class="header-anchor" href="#题目" aria-label="Permalink to &quot;题目&quot;">​</a></h3><p><a href="https://leetcode.cn/problems/reverse-linked-list/" target="_blank" rel="noreferrer">https://leetcode.cn/problems/reverse-linked-list/</a></p><p><img src="https://od-1310531898.cos.ap-beijing.myqcloud.com/202307011107707.png" alt="image.png|495"></p><p>这个算法常常拿来显示递归的巧妙和优美</p><p>对于递归算法，<strong>最重要的就是明确递归函数的定义</strong>: 输入一个节点 <code>head</code>，将「以 <code>head</code> 为起点」的链表反转，并返回反转之后的头结点</p><h3 id="代码实现" tabindex="-1">代码实现 <a class="header-anchor" href="#代码实现" aria-label="Permalink to &quot;代码实现&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {ListNode}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> head</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {ListNode}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> reverseList</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ① base case </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(head </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> head.next </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> head;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ② 递归</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> last </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> reverseList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(head.next)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ③ 上面的递归完成后，这时候只需要 \`第二个节点\` 处理后面的节点指向即可</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  head.next.next </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> head;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  head.next </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ④ 返回 last</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> last;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h3 id="分析-见下面的流程图" tabindex="-1">分析：见下面的流程图 <a class="header-anchor" href="#分析-见下面的流程图" aria-label="Permalink to &quot;分析：见下面的流程图&quot;">​</a></h3><p><a href="https://www.figma.com/file/9busNTH6MZx5E6ZU8Xfahx/2023.07?type=whiteboard&amp;node-id=1-159&amp;t=CYZxXXoabx9ztccc-4" target="_blank" rel="noreferrer">https://www.figma.com/file/9busNTH6MZx5E6ZU8Xfahx/2023.07?type=whiteboard&amp;node-id=1-159&amp;t=CYZxXXoabx9ztccc-4</a></p><div class="info custom-block github-alert"><p class="custom-block-title">INFO</p><p></p><ul><li>不要跳进递归（你的脑袋能压几个栈呀？）</li><li>不要想着彻底理解它，仔细看上面的流程图即可</li></ul></div><h2 id="二、反转链表前-n-个节点" tabindex="-1">二、反转链表前 N 个节点 <a class="header-anchor" href="#二、反转链表前-n-个节点" aria-label="Permalink to &quot;二、反转链表前 N 个节点&quot;">​</a></h2><h3 id="迭代解法" tabindex="-1">迭代解法 <a class="header-anchor" href="#迭代解法" aria-label="Permalink to &quot;迭代解法&quot;">​</a></h3><p>两步，如下图</p><ol><li>将 1 2 3 变成 3 2 1 如下图标注中的 <code>①</code></li><li>将 1 指向 4 ，如下图中的 <code>②</code></li></ol><p><img src="https://od-1310531898.cos.ap-beijing.myqcloud.com/202307060901350.png" alt="image.png|510"></p><div class="danger custom-block github-alert"><p class="custom-block-title">DANGER</p><p></p><ul><li>上图标注的红色的 <code>① ②</code> ，然后正常写递归就好了</li><li>注意两个变量 <code>curr</code> 和 <code>prev</code>，你应该就能写出了</li></ul></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> reverseN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">n</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 迭代，解法， </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 第 ① 步：操作链表的指针</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> curr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> head;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> prev </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// 下面两行代码就是更换位置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    curr.next </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> prev; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    prev </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> curr; </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 然后，前进</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    curr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> curr.next;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 第 ② 步：递归完后，还需要处理指向</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  head.next </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> curr;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> prev;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="递归解法" tabindex="-1">递归解法 <a class="header-anchor" href="#递归解法" aria-label="Permalink to &quot;递归解法&quot;">​</a></h3><div class="danger custom-block github-alert"><p class="custom-block-title">DANGER</p><p>再看又不好理解了，pass 吧，看迭代解法即可，时间有限，点到位置</p></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> successor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 后驱节点</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 反转以 head 为起点的 n 个节点，返回新的头结点</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> reverseN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">n</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ① base case</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 反转一个元素，就是它本身，同时要记录后驱节点</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 记录第 n + 1 个节点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        successor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> head.next;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> head;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ② 递归</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 以 head.next 为起点，需要反转前 n - 1 个节点</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> last </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> reverseN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(head.next, n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// ③ 处理递归后的节点指向</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    head.next.next </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> head;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 让反转之后的 head 节点和后面的节点连起来</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    head.next </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> successor;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ④ 返回 last 即可</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> last;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><img src="https://od-1310531898.cos.ap-beijing.myqcloud.com/202307060914626.png" alt="image.png|480"></p><h2 id="三、反转链表的一部分" tabindex="-1">三、反转链表的一部分 <a class="header-anchor" href="#三、反转链表的一部分" aria-label="Permalink to &quot;三、反转链表的一部分&quot;">​</a></h2><p>给一个索引区间 <code>[m, n]</code>（索引从 <code>1</code> 开始），仅仅反转区间中的链表元素</p><ul><li>如果 <code>m == 1</code>，就相当于反转链表开头的 n 个元素，见 [[#二、反转链表前 N 个节点]]</li><li>如果 <code>m != 1</code><ul><li><code>head</code> 的索引视为 <code>1</code>，那么我们是想从<code>第 m 个元素</code>开始反转对吧</li><li><code>head.next</code> 的索引视为 <code>1</code> 呢？那么相对于 <code>head.next</code>，反转的区间应该是从<code>第 m - 1 个元素</code>开始的。</li><li>那么对于 <code>head.next.next</code> 呢？反转的区间应该是从<code>第 m - 2 个元素</code>开始的</li><li>依次往下推，直到</li></ul></li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> reverseBetween</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">m</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">n</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ① base case</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (m </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 反转以head开头的n个节点</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> reverseN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(head, n);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ② 将 head.next 作为起点 反转 前 m-1 个节点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    head.next </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> reverseBetween</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(head.next, m </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> head;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><blockquote><p><strong>这个流程图可以不用看</strong>，直接看上面文本更好理解 ，具体分析过程见： <a href="https://www.figma.com/file/9busNTH6MZx5E6ZU8Xfahx/2023.07?type=whiteboard&amp;node-id=25-107&amp;t=T9anQJy5miIZYOFR-4" target="_blank" rel="noreferrer">https://www.figma.com/file/9busNTH6MZx5E6ZU8Xfahx/2023.07?type=whiteboard&amp;node-id=25-107&amp;t=T9anQJy5miIZYOFR-4</a></p></blockquote><h2 id="四、最后" tabindex="-1">四、最后 <a class="header-anchor" href="#四、最后" aria-label="Permalink to &quot;四、最后&quot;">​</a></h2><ul><li>不要跳进<code>递归</code>， 你的脑袋瓜子能搞几个 <code>递归</code></li><li>递归操作链表并不高效。和<code>迭代解法</code>相比，虽然时间复杂度都是 <code>O(N)</code>，但是迭代解法的<code>空间复杂度是 O(1)</code>，而递归解法需要<code>堆栈</code>，<code>空间复杂度</code>是 <code>O(N)</code></li></ul><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><p><a href="https://labuladong.online/algo/data-structure/reverse-linked-list-recursion/#%E4%B8%89%E3%80%81%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8%E7%9A%84%E4%B8%80%E9%83%A8%E5%88%86" target="_blank" rel="noreferrer">https://labuladong.online/algo/data-structure/reverse-linked-list-recursion/#三、反转链表的一部分</a></p><hr>`,33),E=s("div",{class:"liguwe-doc-footer"},[s("div",{class:"liguwe-doc-footer-edit-link"},[s("p",{class:"liguwe-doc-footer-p"},[s("svg",{t:"1687912573060",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1498"},[s("path",{d:"M854.6 370.6c-9.9-39.4 9.9-102.2 73.4-124.4l-67.9-3.6s-25.7-90-143.6-98c-117.8-8.1-194.9-3-195-3 0.1 0 87.4 55.6 52.4 154.7-25.6 52.5-65.8 95.6-108.8 144.7-1.3 1.3-2.5 2.6-3.5 3.7C319.4 605 96 860 96 860c245.9 64.4 410.7-6.3 508.2-91.1 20.5-0.2 35.9-0.3 46.3-0.3 135.8 0 250.6-117.6 245.9-248.4-3.2-89.9-31.9-110.2-41.8-149.6z m-204.1 334c-10.6 0-26.2 0.1-46.8 0.3l-23.6 0.2-17.8 15.5c-47.1 41-104.4 71.5-171.4 87.6-52.5 12.6-110 16.2-172.7 9.6 18-20.5 36.5-41.6 55.4-63.1 92-104.6 173.8-197.5 236.9-268.5l1.4-1.4 1.3-1.5c4.1-4.6 20.6-23.3 24.7-28.1 9.7-11.1 17.3-19.9 24.5-28.6 30.7-36.7 52.2-67.8 69-102.2l1.6-3.3 1.2-3.4c13.7-38.8 15.4-76.9 6.2-112.8 22.5 0.7 46.5 1.9 71.7 3.6 33.3 2.3 55.5 12.9 71.1 29.2 5.8 6 10.2 12.5 13.4 18.7 1 2 1.7 3.6 2.3 5l5 17.7c-15.7 34.5-19.9 73.3-11.4 107.2 3 11.8 6.9 22.4 12.3 34.4 2.1 4.7 9.5 20.1 11 23.3 10.3 22.7 15.4 43 16.7 78.7 3.3 94.6-82.7 181.9-182 181.9z","p-id":"1499"})]),s("a",{href:"https://www.yuque.com/liguwe/post/32a25aa6-b958-59f7-964b-33cc262560f0",target:"_blank",class:"liguwe-doc-footer-edit-link-a"}," View this page on Yuque（语雀） ")]),s("p",{class:"liguwe-doc-footer-p"},[s("svg",{t:"1687913054251",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5173"},[s("path",{d:"M853.333333 501.333333c-17.066667 0-32 14.933333-32 32v320c0 6.4-4.266667 10.666667-10.666666 10.666667H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667V213.333333c0-6.4 4.266667-10.666667 10.666667-10.666666h320c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32H170.666667c-40.533333 0-74.666667 34.133333-74.666667 74.666666v640c0 40.533333 34.133333 74.666667 74.666667 74.666667h640c40.533333 0 74.666667-34.133333 74.666666-74.666667V533.333333c0-17.066667-14.933333-32-32-32z","p-id":"5174"}),s("path",{d:"M405.333333 484.266667l-32 125.866666c-2.133333 10.666667 0 23.466667 8.533334 29.866667 6.4 6.4 14.933333 8.533333 23.466666 8.533333h8.533334l125.866666-32c6.4-2.133333 10.666667-4.266667 14.933334-8.533333l300.8-300.8c38.4-38.4 38.4-102.4 0-140.8-38.4-38.4-102.4-38.4-140.8 0L413.866667 469.333333c-4.266667 4.266667-6.4 8.533333-8.533334 14.933334z m59.733334 23.466666L761.6 213.333333c12.8-12.8 36.266667-12.8 49.066667 0 12.8 12.8 12.8 36.266667 0 49.066667L516.266667 558.933333l-66.133334 17.066667 14.933334-68.266667z","p-id":"5175"})]),s("a",{href:"https://github.com/liguwe/liguwe.github.io/blob/master/docs/32a25aa6-b958-59f7-964b-33cc262560f0.md",target:"_blank",class:"liguwe-doc-footer-edit-link-a"},"Edit this page on Github")])]),s("div",{id:"liguwe-comment"})],-1);function o(g,y,u,A,F,D){const a=h("Badge");return k(),t("div",null,[d,n(a,{type:"warning"},{default:l(()=>[i("#2023/07/23")]),_:1}),i(),n(a,{type:"tip"},{default:l(()=>[i("#算法/链表")]),_:1}),i(),c,E])}const v=e(r,[["render",o]]);export{m as __pageData,v as default};
