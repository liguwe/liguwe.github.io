import{_ as i,o as a,c as n,R as t,k as s}from"./chunks/framework.nnvru9hF.js";const y=JSON.parse('{"title":"Vue3 的整体设计思路","description":"","frontmatter":{},"headers":[],"relativePath":"post/0011.md","filePath":"post/0011.md"}'),l={name:"post/0011.md"},e=t(`<p>#vue3</p><h1 id="vue3-的整体设计思路" tabindex="-1">Vue3 的整体设计思路 <a class="header-anchor" href="#vue3-的整体设计思路" aria-label="Permalink to &quot;Vue3 的整体设计思路&quot;">​</a></h1><h2 id="如何描述-ui" tabindex="-1">如何描述 UI <a class="header-anchor" href="#如何描述-ui" aria-label="Permalink to &quot;如何描述 UI&quot;">​</a></h2><p>三种方式：</p><ol><li><p><code>声明式描述 UI</code>，比如 <code>&lt;div class=&#39;btn&#39; id=&#39;test&#39; @click=&quot;handle&quot;&gt; button &lt;/div&gt;</code>， 包含信息 tag名，属性，事件，层级关系</p></li><li><p>使用 <code>JavaScript对象 </code> 来描述 UI，如下代码</p></li></ol><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> title</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	tag: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;h1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// tag 名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	props:{ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 属性与事件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		onClick:handler</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	children:[ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 子节点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		{tag: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;span&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ol start="3"><li><code>虚拟 DOM</code> 描述 UI，比如 vue 中的 <code>渲染函数 - h</code> ，如下代码：</li></ol><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {h} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 虚拟 DOM</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> h</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;h1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,{ onClick: fn }); </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">		// 或者直接返回 js 对的</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			tag: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;h1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// tag 名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			props:{ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 属性与事件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				onClick:handler</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			children:[ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 子节点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				{tag: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;span&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><blockquote><p><code>h</code> 返回的其实就是 <code>js 对象</code>， <code>h函数</code>就是辅助创建虚拟 DOM 的工具函数而已，所<strong>以他俩其实是一个东西</strong></p></blockquote><ul><li><p>哪种方式更灵活呢？</p><ul><li>答案是：<code>JavaScript 对象</code>（或<code>虚拟 DOM</code> ） 的方式， <ul><li>比如表现 <code>H1-H6</code> ，使用 <code>tag:H\${index}</code> 即可</li><li>又比如说，<code>jsx</code>的方式实现 <code>递归树</code>，更方便</li></ul></li></ul></li><li><p>那种方式更直观呢？当然是 <code>模板</code></p></li></ul><h2 id="渲染函数-即上面的-render-方法" tabindex="-1">渲染函数，即上面的 <code>render 方法</code> <a class="header-anchor" href="#渲染函数-即上面的-render-方法" aria-label="Permalink to &quot;渲染函数，即上面的 \`render 方法\`&quot;">​</a></h2><p>如 vue 会根据 返回的<code>虚拟 DOM</code> ， 把组件渲染出来。</p><h2 id="渲染函数-→-渲染器" tabindex="-1">渲染函数 → 渲染器 <a class="header-anchor" href="#渲染函数-→-渲染器" aria-label="Permalink to &quot;渲染函数 → 渲染器&quot;">​</a></h2><p><code>渲染器</code>的作用，就是把 <code>虚拟 DOM</code>，如 <code>h(&#39;div&#39;,&#39;hello&#39;)</code> 转成 <code>真实的 DOM</code></p><blockquote><p>这里再强调一下，<code>h(&#39;div&#39;,&#39;hello&#39;)</code> 返回的其实就一个 <code>用于表示 UI 的 js 对象</code></p></blockquote><p>如何实现一个<code>渲染器</code>?</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> vnode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 用于描述 UI 的 js 对象。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> renderer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">vnode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 根据 vnode.tag 创建元素</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 添加 props 和 事件</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 处理 children，递归调用 renderer </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>所以，<code>渲染器</code>的本质是，递归遍历 <code>vdom</code> , 调用<code>原生 DOM API</code> 完成真实的 <code>DOM 创建</code>，但精髓在于，<strong>如何 diff 更新</strong></p><h2 id="组件的本质" tabindex="-1">组件的本质？ <a class="header-anchor" href="#组件的本质" aria-label="Permalink to &quot;组件的本质？&quot;">​</a></h2><p>组件是<code>一组虚拟DOM元素</code>的封装，他可以是一个返回虚拟 DOM 的<code>函数</code>，也可以是一个<code>对象</code>，然后再用 <code>渲染器</code> 进行渲染。</p><p>所以，渲染时需要判断 <code>vnode.tag = function | object | string ? </code> ,分别处理。</p><h2 id="模板编译器-声明式描述-ui-→-虚拟-dom-方式描述-ui" tabindex="-1">模板编译器：声明式描述 UI → 虚拟 DOM 方式描述 UI <a class="header-anchor" href="#模板编译器-声明式描述-ui-→-虚拟-dom-方式描述-ui" aria-label="Permalink to &quot;模板编译器：声明式描述 UI →  虚拟 DOM 方式描述 UI&quot;">​</a></h2><p>编译器其实就是把 <code>模板</code> 编译成 <code>渲染函数</code> ，比如：一个标准<code>vue模板</code></p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @click</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;fn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){},</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	methond</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		fn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	},</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> h</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;div&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,{onclick:fn})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>最终编译成的样子如下：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){},</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	methond</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">		fn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	},</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> h</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;div&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,{onclick:fn})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后&quot;">​</a></h2><ul><li>组件的实现依赖于 <code>渲染器</code></li><li>模板的编译 依赖于 <code>编译器</code></li><li><code>渲染器</code> 和 <code>编译器</code> 是存在<code>信息交流</code>的，比如虚拟 DOM 对象中 的 <code>patchFlages</code> 属性，用于标识是 <code>动态属性</code> 和 <code>静态属性</code>？ 互相配合使得性能得到提升</li></ul><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li>《vue.js 设计与实现》</li><li><a href="https://github.com/liguwe/code-for-vue-3-book/tree/master/course3-Vue3%20%E7%9A%84%E8%AE%BE%E8%AE%A1%E6%80%9D%E8%B7%AF" target="_blank" rel="noreferrer">代码部分</a></li></ul><hr>`,31),h=s("div",{class:"liguwe-doc-footer"},[s("div",{class:"liguwe-doc-footer-edit-link"},[s("p",{class:"liguwe-doc-footer-p"},[s("svg",{t:"1687912573060",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1498"},[s("path",{d:"M854.6 370.6c-9.9-39.4 9.9-102.2 73.4-124.4l-67.9-3.6s-25.7-90-143.6-98c-117.8-8.1-194.9-3-195-3 0.1 0 87.4 55.6 52.4 154.7-25.6 52.5-65.8 95.6-108.8 144.7-1.3 1.3-2.5 2.6-3.5 3.7C319.4 605 96 860 96 860c245.9 64.4 410.7-6.3 508.2-91.1 20.5-0.2 35.9-0.3 46.3-0.3 135.8 0 250.6-117.6 245.9-248.4-3.2-89.9-31.9-110.2-41.8-149.6z m-204.1 334c-10.6 0-26.2 0.1-46.8 0.3l-23.6 0.2-17.8 15.5c-47.1 41-104.4 71.5-171.4 87.6-52.5 12.6-110 16.2-172.7 9.6 18-20.5 36.5-41.6 55.4-63.1 92-104.6 173.8-197.5 236.9-268.5l1.4-1.4 1.3-1.5c4.1-4.6 20.6-23.3 24.7-28.1 9.7-11.1 17.3-19.9 24.5-28.6 30.7-36.7 52.2-67.8 69-102.2l1.6-3.3 1.2-3.4c13.7-38.8 15.4-76.9 6.2-112.8 22.5 0.7 46.5 1.9 71.7 3.6 33.3 2.3 55.5 12.9 71.1 29.2 5.8 6 10.2 12.5 13.4 18.7 1 2 1.7 3.6 2.3 5l5 17.7c-15.7 34.5-19.9 73.3-11.4 107.2 3 11.8 6.9 22.4 12.3 34.4 2.1 4.7 9.5 20.1 11 23.3 10.3 22.7 15.4 43 16.7 78.7 3.3 94.6-82.7 181.9-182 181.9z","p-id":"1499"})]),s("a",{href:"https://www.yuque.com/liguwe/post/0011",target:"_blank",class:"liguwe-doc-footer-edit-link-a"}," View this page on Yuque ")]),s("p",{class:"liguwe-doc-footer-p"},[s("svg",{t:"1687927073703",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1464"},[s("path",{d:"M512 96l480 832H32z","p-id":"1465"})]),s("a",{href:"https://liguwe.vercel.app/post/0011.html",target:"_blank",class:"liguwe-doc-footer-edit-link-a"}," View this page on Vercel ")]),s("p",{class:"liguwe-doc-footer-p"},[s("svg",{t:"1687913054251",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5173"},[s("path",{d:"M853.333333 501.333333c-17.066667 0-32 14.933333-32 32v320c0 6.4-4.266667 10.666667-10.666666 10.666667H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667V213.333333c0-6.4 4.266667-10.666667 10.666667-10.666666h320c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32H170.666667c-40.533333 0-74.666667 34.133333-74.666667 74.666666v640c0 40.533333 34.133333 74.666667 74.666667 74.666667h640c40.533333 0 74.666667-34.133333 74.666666-74.666667V533.333333c0-17.066667-14.933333-32-32-32z","p-id":"5174"}),s("path",{d:"M405.333333 484.266667l-32 125.866666c-2.133333 10.666667 0 23.466667 8.533334 29.866667 6.4 6.4 14.933333 8.533333 23.466666 8.533333h8.533334l125.866666-32c6.4-2.133333 10.666667-4.266667 14.933334-8.533333l300.8-300.8c38.4-38.4 38.4-102.4 0-140.8-38.4-38.4-102.4-38.4-140.8 0L413.866667 469.333333c-4.266667 4.266667-6.4 8.533333-8.533334 14.933334z m59.733334 23.466666L761.6 213.333333c12.8-12.8 36.266667-12.8 49.066667 0 12.8 12.8 12.8 36.266667 0 49.066667L516.266667 558.933333l-66.133334 17.066667 14.933334-68.266667z","p-id":"5175"})]),s("a",{href:"https://github.com/liguwe/liguwe.github.io/blob/master/docs/0011.md",target:"_blank",class:"liguwe-doc-footer-edit-link-a"},"Edit this page on Github")]),s("p",{class:"liguwe-doc-footer-p"},[s("svg",{t:"1687912510038",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2280"},[s("path",{d:"M746.666667 106.666667a192 192 0 0 1 192 192v373.333333a192 192 0 0 1-192 192h-107.925334l-97.749333 90.496a42.666667 42.666667 0 0 1-57.984 0L385.28 864H277.333333a192 192 0 0 1-192-192V298.666667a192 192 0 0 1 192-192h469.333334z m0 64H277.333333a128 128 0 0 0-128 128v373.333333a128 128 0 0 0 128 128h107.925334a64 64 0 0 1 43.477333 17.045333L512 894.122667l83.264-77.077334a64 64 0 0 1 43.477333-17.045333H746.666667a128 128 0 0 0 128-128V298.666667a128 128 0 0 0-128-128zM512 426.666667a54.677333 54.677333 0 0 1 54.634667 54.698666A54.677333 54.677333 0 0 1 512 536.064a54.677333 54.677333 0 0 1-54.634667-54.698667A54.677333 54.677333 0 0 1 512 426.666667z m-196.693333 0a54.677333 54.677333 0 0 1 54.634666 54.698666 54.677333 54.677333 0 0 1-54.613333 54.698667 54.677333 54.677333 0 0 1-54.634667-54.698667A54.677333 54.677333 0 0 1 315.306667 426.666667z m393.386666 0a54.677333 54.677333 0 0 1 54.613334 54.698666 54.677333 54.677333 0 0 1-54.613334 54.698667 54.677333 54.677333 0 0 1-54.634666-54.698667A54.677333 54.677333 0 0 1 708.672 426.666667z","p-id":"2281"})]),s("a",{href:"https://github.com/liguwe/liguwe.github.io/issues/new?title=0011.Vue%20%E7%9A%84%E6%95%B4%E4%BD%93%E8%AE%BE%E8%AE%A1%E6%80%9D%E8%B7%AF&labels=liguwe.site",target:"_blank",class:"liguwe-doc-footer-edit-link-a"}," Comment this page on GitHub Issues ")]),s("p",{class:"liguwe-doc-footer-p"},[s("svg",{t:"1687912510038",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2280"},[s("path",{d:"M746.666667 106.666667a192 192 0 0 1 192 192v373.333333a192 192 0 0 1-192 192h-107.925334l-97.749333 90.496a42.666667 42.666667 0 0 1-57.984 0L385.28 864H277.333333a192 192 0 0 1-192-192V298.666667a192 192 0 0 1 192-192h469.333334z m0 64H277.333333a128 128 0 0 0-128 128v373.333333a128 128 0 0 0 128 128h107.925334a64 64 0 0 1 43.477333 17.045333L512 894.122667l83.264-77.077334a64 64 0 0 1 43.477333-17.045333H746.666667a128 128 0 0 0 128-128V298.666667a128 128 0 0 0-128-128zM512 426.666667a54.677333 54.677333 0 0 1 54.634667 54.698666A54.677333 54.677333 0 0 1 512 536.064a54.677333 54.677333 0 0 1-54.634667-54.698667A54.677333 54.677333 0 0 1 512 426.666667z m-196.693333 0a54.677333 54.677333 0 0 1 54.634666 54.698666 54.677333 54.677333 0 0 1-54.613333 54.698667 54.677333 54.677333 0 0 1-54.634667-54.698667A54.677333 54.677333 0 0 1 315.306667 426.666667z m393.386666 0a54.677333 54.677333 0 0 1 54.613334 54.698666 54.677333 54.677333 0 0 1-54.613334 54.698667 54.677333 54.677333 0 0 1-54.634666-54.698667A54.677333 54.677333 0 0 1 708.672 426.666667z","p-id":"2281"})]),s("a",{href:"https://github.com/liguwe/liguwe.github.io/discussions/new?category=general&labels=liguwe.site&title=0011.Vue%20%E7%9A%84%E6%95%B4%E4%BD%93%E8%AE%BE%E8%AE%A1%E6%80%9D%E8%B7%AF",target:"_blank",class:"liguwe-doc-footer-edit-link-a"}," Discuss this page on GitHub Discussions ")])]),s("p",{class:"liguwe-doc-footer-update-time"},[s("i",null,"Last updated：2023.03.25")]),s("div",{id:"liguwe-comment"})],-1),p=[e,h];function k(d,c,E,o,r,g){return a(),n("div",null,p)}const F=i(l,[["render",k]]);export{y as __pageData,F as default};
