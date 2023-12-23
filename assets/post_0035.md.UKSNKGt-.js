import{_ as i,o as a,c as n,R as t,k as s}from"./chunks/framework.nnvru9hF.js";const F=JSON.parse('{"title":"Vue3 组件的实现原理","description":"","frontmatter":{},"headers":[],"relativePath":"post/0035.md","filePath":"post/0035.md"}'),p={name:"post/0035.md"},h=t(`<hr><p>#vue #vue3</p><h1 id="vue3-组件的实现原理" tabindex="-1">Vue3 组件的实现原理 <a class="header-anchor" href="#vue3-组件的实现原理" aria-label="Permalink to &quot;Vue3 组件的实现原理&quot;">​</a></h1><h2 id="一、渲染器、组件与-vdom-之间的关系" tabindex="-1">一、渲染器、组件与 vdom 之间的关系 <a class="header-anchor" href="#一、渲染器、组件与-vdom-之间的关系" aria-label="Permalink to &quot;一、渲染器、组件与 vdom 之间的关系&quot;">​</a></h2><p>前文 [[0032.vue3 的渲染器原理]] 实现了对单个 <code>vdom</code> 的渲染，比如对下面 <code>vdom</code> 的渲染：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Fragment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> newVnode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;div&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  children: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      type: Fragment,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      children: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        { type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;p&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, children: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;text 1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        { type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;p&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, children: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;text 2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        { type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;p&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, children: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;text 3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;section&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, children: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;分割线&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>但实际页面，会包括很多 <code>vdom</code> 甚至是各种嵌套的 <code>vdom</code>， 那么，<strong>如何使用 <code>vdom</code> 来描述页面，描述 UI 呢？</strong></p><p>这里直接给出答案：如下结构</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> C1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;C1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;div&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            children: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                { type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;p&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, children: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;text 1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                { type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;p&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, children: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;text 2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                { type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;p&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, children: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;text 3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>两个要点：</p><ul><li>包含 <code>render</code></li><li><code>return</code> 一个 <code>vnode</code></li></ul><p>下图展示了： <code>渲染器、组件 、 vnode 的关系</code>：</p><p><a href="https://www.figma.com/file/hT9k2YbVvV1UIITtUmbJ0C/2023.05.LOG?type=whiteboard&amp;node-id=201-996&amp;t=x2AAJuGlw9iHBGmM-4" target="_blank" rel="noreferrer">https://www.figma.com/file/hT9k2YbVvV1UIITtUmbJ0C/2023.05.LOG?type=whiteboard&amp;node-id=201-996&amp;t=x2AAJuGlw9iHBGmM-4</a></p><p>总结下就是，渲染器会根据vdom 的类型，来判断它是否是否是<code>组件</code>，如果是，则会继续递归使用 <code>mountComponent</code> 或者 <code>patchComponent</code>来完成组件的挂载和更新，部分代码如下：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;string&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n1) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		mountElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(n2, container, anchor)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		patchElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(n1, n2)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Text) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n1) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> el</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n2.el </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createText</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(n2.children)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		insert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(el, container)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> el</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n2.el </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n1.el</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (n2.children </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n1.children) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">			setText</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(el, n2.children)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Fragment) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n1) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		n2.children.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">c</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> patch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, c, container))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		patchChildren</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(n1, n2, container)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;object&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;function&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// component</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n1) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		mountComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(n2, container, anchor)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		patchComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(n1, n2, anchor)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="二、如何保存组件状态-以及-状态改变了同步更新组件" tabindex="-1">二、如何保存组件状态，以及 状态改变了同步更新组件 <a class="header-anchor" href="#二、如何保存组件状态-以及-状态改变了同步更新组件" aria-label="Permalink to &quot;二、如何保存组件状态，以及 状态改变了同步更新组件&quot;">​</a></h2><p>如果保存组件状态呢？答案是 <code>data()</code> ，并且 需要让 data 数据是响应式的，所以代码应该如下</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> state</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> reactive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span></code></pre></div><p>所以，每次更新 data ，会重新渲染，但是浏览器渲染是<code>同步任务</code>，所以需要有个调度器来调度，它通过<code>promise</code> 实现了一个<code>微任务队列</code>，避免重复渲染，去重任务队列等。</p><blockquote><p>关于调度器微任务队列的实现，更多参考 [[0012.Vue 的响应式的系统设计原理#微任务队列]]</p></blockquote><p>部分代码如下：注意下面的 <code>scheduler</code></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> state</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> reactive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> effect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> subTree</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> render.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(renderContext, renderContext)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	scheduler: queueJob</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h2 id="三、组件实例与组件的生命周期" tabindex="-1">三、组件实例与组件的生命周期 <a class="header-anchor" href="#三、组件实例与组件的生命周期" aria-label="Permalink to &quot;三、组件实例与组件的生命周期&quot;">​</a></h2><p>组件实例，本质就是一个对象，存储着组件运行过程的所有信息，比如 组件状态，是否卸载、组件的子树、生命周期等，如下：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> instance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		state,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		props: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">shallowReactive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(props),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		isMounted: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		subTree: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		slots,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		mounted: []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>各类生命周期，就在具体位置上添加即可，如下：</p><p><img src="https://od-1310531898.cos.ap-beijing.myqcloud.com/202306101223326.png" alt="image.png|600"></p><blockquote><p>一个组件可能存在多个同类型的组件，比如<code> mixin</code> 进来的组件，这时候就需要数组了。但核心原理不变</p></blockquote><h2 id="四、props-与组件的被动更新" tabindex="-1">四、props 与组件的被动更新 <a class="header-anchor" href="#四、props-与组件的被动更新" aria-label="Permalink to &quot;四、props 与组件的被动更新&quot;">​</a></h2><p><code>副作用自更新</code>所引起的子组件更新叫作<code>子组件的被动更新</code>。我们需要检查是否需要真的更新，比如 <code>props</code> 如果根本就没变？如果需要更新，需要同步更新子组件的 <code>props</code> 、<code>slots</code> 等内容，其实要 <strong>完善 vue 中的 props 机制，需要编写大量的边界代码</strong></p><p>由于 props 数据与组件自身的状态数据都需要暴露到<code>渲染函数</code>中，并使得渲染函数能够通过 this 访问它们，因此我们需要封装一个<code>渲染上下文对象</code>， 渲染上下文（renderContext），它实际上是组件实例的代理对象。在渲染函数内访问组件实例所暴露的数据都是通过该代理对象实现的。</p><blockquote><p>vue中，没有在 <code>props 选项</code>中的 props 数据都将存储到 <code>attrs</code> 对象中，</p></blockquote><h2 id="五、setup-函数的作用-与-实现" tabindex="-1">五、setup 函数的作用 与 实现 <a class="header-anchor" href="#五、setup-函数的作用-与-实现" aria-label="Permalink to &quot;五、setup 函数的作用 与 实现&quot;">​</a></h2><p><code>setup</code> 函数，它只会在挂载时执行一次，该函数是为了<code>组合式 API</code> 而生 的，所以我们要避免将其与 <code>Vue.js 2 中的“传统”组件选项（如 methods watch data）</code> 混合使用。 <code>setup</code> 函数的返回值可以是两种类型</p><ul><li>如果返回<code>函数</code>，则将该函数作为组件的渲染函数；</li><li>如果返回<code>数据对象</code>，则将该对象暴露到渲染上下文中，暴露给模板使用。</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> InnerComp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;InnerComp&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * expose: 暴露给父组件的属性</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">props</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">emit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">slots</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">attrs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">expose</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> count</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 返回一个【数据对象】</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            count,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 返回一个【渲染函数】</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;span&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            children: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;inner&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="六、组件事件与-emit" tabindex="-1">六、组件事件与 emit <a class="header-anchor" href="#六、组件事件与-emit" aria-label="Permalink to &quot;六、组件事件与 emit&quot;">​</a></h2><p>emit 函数包含在 <code>setupContext 对象</code>中，可以通过 emit 函数 发射组件的自定义事件。通过 <code>v-on</code> 指令为组件绑定的事件在经过<code>编译</code>后，会以 <code>onXxx</code> 的形式存储到 <code>props 对象</code>中。当 emit 函数执行时，会在 props 对象中寻找对应的事件处理函数并执行它。</p><h2 id="七、插槽-slot" tabindex="-1">七、插槽 slot <a class="header-anchor" href="#七、插槽-slot" aria-label="Permalink to &quot;七、插槽 slot&quot;">​</a></h2><p>它借鉴了 Web Component 中 <code>&lt;slot&gt; 标签</code>的概念。<strong>插槽内容会被编译为插槽函数，插槽函数的返回值就是向槽位填充的内容</strong>。<code>&lt;slot&gt;</code> 标签则会被编译为插槽函数的调用，通过执行对应的插槽函数，得到外部向槽位填充的内容（即虚拟 DOM），最后将该内容渲染到<code>槽位</code>中。</p><p>我们以 <code>MyComponent</code> 组件为例，它的模板如下：</p><p><img src="https://od-1310531898.cos.ap-beijing.myqcloud.com/202306101327730.png" alt="image.png|535"></p><p>上面的代码会编译成如下：</p><p><img src="https://od-1310531898.cos.ap-beijing.myqcloud.com/202306101329712.png" alt="image.png|301"></p><p>具体使用 <code>MyComponent</code> 组件</p><p><img src="https://od-1310531898.cos.ap-beijing.myqcloud.com/202306101327662.png" alt="image.png|288"></p><p>上面的模板，会编译成如下<code>渲染函数</code>：</p><p><img src="https://od-1310531898.cos.ap-beijing.myqcloud.com/202306101328116.png" alt="image.png|444"></p><p><strong>插槽的实现是不是和 React render props 的概念很像？</strong>，如下图：</p><p><img src="https://od-1310531898.cos.ap-beijing.myqcloud.com/202306101333060.png" alt="image.png|600"></p><h2 id="八、注册生命周期" tabindex="-1">八、注册生命周期 <a class="header-anchor" href="#八、注册生命周期" aria-label="Permalink to &quot;八、注册生命周期&quot;">​</a></h2><p>先看代码，下面注册两个 <code>onMounted</code></p><p><img src="https://od-1310531898.cos.ap-beijing.myqcloud.com/202306101337074.png" alt="image.png|483"></p><p>所以通过 <code>onMounted</code> 注册的生命周期函数会被注册到当前组件实例的 <code>instance.mounted 数组</code>中。为了维护当前正在初始化的组件实例，我们定义了<code>全局变量 currentinstance</code>，以及用来设置该变量的 <code>setCurrentInstance</code> 函数。</p><p>其他生命周期同理。</p><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后&quot;">​</a></h2><p>一些具体代码实现细节，没有太抠，知道大致的原理即可，真有应用场景再仔细研究一下具体代码实现细节。</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li>《Vue 设计与实现》</li></ul><hr>`,60),l=s("div",{class:"liguwe-doc-footer"},[s("div",{class:"liguwe-doc-footer-edit-link"},[s("p",{class:"liguwe-doc-footer-p"},[s("svg",{t:"1687912573060",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1498"},[s("path",{d:"M854.6 370.6c-9.9-39.4 9.9-102.2 73.4-124.4l-67.9-3.6s-25.7-90-143.6-98c-117.8-8.1-194.9-3-195-3 0.1 0 87.4 55.6 52.4 154.7-25.6 52.5-65.8 95.6-108.8 144.7-1.3 1.3-2.5 2.6-3.5 3.7C319.4 605 96 860 96 860c245.9 64.4 410.7-6.3 508.2-91.1 20.5-0.2 35.9-0.3 46.3-0.3 135.8 0 250.6-117.6 245.9-248.4-3.2-89.9-31.9-110.2-41.8-149.6z m-204.1 334c-10.6 0-26.2 0.1-46.8 0.3l-23.6 0.2-17.8 15.5c-47.1 41-104.4 71.5-171.4 87.6-52.5 12.6-110 16.2-172.7 9.6 18-20.5 36.5-41.6 55.4-63.1 92-104.6 173.8-197.5 236.9-268.5l1.4-1.4 1.3-1.5c4.1-4.6 20.6-23.3 24.7-28.1 9.7-11.1 17.3-19.9 24.5-28.6 30.7-36.7 52.2-67.8 69-102.2l1.6-3.3 1.2-3.4c13.7-38.8 15.4-76.9 6.2-112.8 22.5 0.7 46.5 1.9 71.7 3.6 33.3 2.3 55.5 12.9 71.1 29.2 5.8 6 10.2 12.5 13.4 18.7 1 2 1.7 3.6 2.3 5l5 17.7c-15.7 34.5-19.9 73.3-11.4 107.2 3 11.8 6.9 22.4 12.3 34.4 2.1 4.7 9.5 20.1 11 23.3 10.3 22.7 15.4 43 16.7 78.7 3.3 94.6-82.7 181.9-182 181.9z","p-id":"1499"})]),s("a",{href:"https://www.yuque.com/liguwe/post/0035",target:"_blank",class:"liguwe-doc-footer-edit-link-a"}," View this page on Yuque ")]),s("p",{class:"liguwe-doc-footer-p"},[s("svg",{t:"1687927073703",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1464"},[s("path",{d:"M512 96l480 832H32z","p-id":"1465"})]),s("a",{href:"https://liguwe.vercel.app/post/0035.html",target:"_blank",class:"liguwe-doc-footer-edit-link-a"}," View this page on Vercel ")]),s("p",{class:"liguwe-doc-footer-p"},[s("svg",{t:"1687913054251",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5173"},[s("path",{d:"M853.333333 501.333333c-17.066667 0-32 14.933333-32 32v320c0 6.4-4.266667 10.666667-10.666666 10.666667H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667V213.333333c0-6.4 4.266667-10.666667 10.666667-10.666666h320c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32H170.666667c-40.533333 0-74.666667 34.133333-74.666667 74.666666v640c0 40.533333 34.133333 74.666667 74.666667 74.666667h640c40.533333 0 74.666667-34.133333 74.666666-74.666667V533.333333c0-17.066667-14.933333-32-32-32z","p-id":"5174"}),s("path",{d:"M405.333333 484.266667l-32 125.866666c-2.133333 10.666667 0 23.466667 8.533334 29.866667 6.4 6.4 14.933333 8.533333 23.466666 8.533333h8.533334l125.866666-32c6.4-2.133333 10.666667-4.266667 14.933334-8.533333l300.8-300.8c38.4-38.4 38.4-102.4 0-140.8-38.4-38.4-102.4-38.4-140.8 0L413.866667 469.333333c-4.266667 4.266667-6.4 8.533333-8.533334 14.933334z m59.733334 23.466666L761.6 213.333333c12.8-12.8 36.266667-12.8 49.066667 0 12.8 12.8 12.8 36.266667 0 49.066667L516.266667 558.933333l-66.133334 17.066667 14.933334-68.266667z","p-id":"5175"})]),s("a",{href:"https://github.com/liguwe/liguwe.github.io/blob/master/docs/0035.md",target:"_blank",class:"liguwe-doc-footer-edit-link-a"},"Edit this page on Github")]),s("p",{class:"liguwe-doc-footer-p"},[s("svg",{t:"1687912510038",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2280"},[s("path",{d:"M746.666667 106.666667a192 192 0 0 1 192 192v373.333333a192 192 0 0 1-192 192h-107.925334l-97.749333 90.496a42.666667 42.666667 0 0 1-57.984 0L385.28 864H277.333333a192 192 0 0 1-192-192V298.666667a192 192 0 0 1 192-192h469.333334z m0 64H277.333333a128 128 0 0 0-128 128v373.333333a128 128 0 0 0 128 128h107.925334a64 64 0 0 1 43.477333 17.045333L512 894.122667l83.264-77.077334a64 64 0 0 1 43.477333-17.045333H746.666667a128 128 0 0 0 128-128V298.666667a128 128 0 0 0-128-128zM512 426.666667a54.677333 54.677333 0 0 1 54.634667 54.698666A54.677333 54.677333 0 0 1 512 536.064a54.677333 54.677333 0 0 1-54.634667-54.698667A54.677333 54.677333 0 0 1 512 426.666667z m-196.693333 0a54.677333 54.677333 0 0 1 54.634666 54.698666 54.677333 54.677333 0 0 1-54.613333 54.698667 54.677333 54.677333 0 0 1-54.634667-54.698667A54.677333 54.677333 0 0 1 315.306667 426.666667z m393.386666 0a54.677333 54.677333 0 0 1 54.613334 54.698666 54.677333 54.677333 0 0 1-54.613334 54.698667 54.677333 54.677333 0 0 1-54.634666-54.698667A54.677333 54.677333 0 0 1 708.672 426.666667z","p-id":"2281"})]),s("a",{href:"https://github.com/liguwe/liguwe.github.io/issues/new?title=0035.Vue3%20%E7%BB%84%E4%BB%B6%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86&labels=liguwe.site",target:"_blank",class:"liguwe-doc-footer-edit-link-a"}," Comment this page on GitHub Issues ")]),s("p",{class:"liguwe-doc-footer-p"},[s("svg",{t:"1687912510038",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2280"},[s("path",{d:"M746.666667 106.666667a192 192 0 0 1 192 192v373.333333a192 192 0 0 1-192 192h-107.925334l-97.749333 90.496a42.666667 42.666667 0 0 1-57.984 0L385.28 864H277.333333a192 192 0 0 1-192-192V298.666667a192 192 0 0 1 192-192h469.333334z m0 64H277.333333a128 128 0 0 0-128 128v373.333333a128 128 0 0 0 128 128h107.925334a64 64 0 0 1 43.477333 17.045333L512 894.122667l83.264-77.077334a64 64 0 0 1 43.477333-17.045333H746.666667a128 128 0 0 0 128-128V298.666667a128 128 0 0 0-128-128zM512 426.666667a54.677333 54.677333 0 0 1 54.634667 54.698666A54.677333 54.677333 0 0 1 512 536.064a54.677333 54.677333 0 0 1-54.634667-54.698667A54.677333 54.677333 0 0 1 512 426.666667z m-196.693333 0a54.677333 54.677333 0 0 1 54.634666 54.698666 54.677333 54.677333 0 0 1-54.613333 54.698667 54.677333 54.677333 0 0 1-54.634667-54.698667A54.677333 54.677333 0 0 1 315.306667 426.666667z m393.386666 0a54.677333 54.677333 0 0 1 54.613334 54.698666 54.677333 54.677333 0 0 1-54.613334 54.698667 54.677333 54.677333 0 0 1-54.634666-54.698667A54.677333 54.677333 0 0 1 708.672 426.666667z","p-id":"2281"})]),s("a",{href:"https://github.com/liguwe/liguwe.github.io/discussions/new?category=general&labels=liguwe.site&title=0035.Vue3%20%E7%BB%84%E4%BB%B6%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86",target:"_blank",class:"liguwe-doc-footer-edit-link-a"}," Discuss this page on GitHub Discussions ")])]),s("p",{class:"liguwe-doc-footer-update-time"},[s("i",null,"Last updated：2023.06.10")]),s("div",{id:"liguwe-comment"})],-1),e=[h,l];function k(E,d,r,c,o,g){return a(),n("div",null,e)}const u=i(p,[["render",k]]);export{F as __pageData,u as default};
