import{_ as s,o as n,c as a,b as l}from"./app.c60a45d1.js";const A=JSON.parse('{"title":"0011.FE.Vue.js 3 的整体设计思路","description":"","frontmatter":{"title":"0011.FE.Vue.js 3 的整体设计思路","urlname":"ycbhape6c66qc536","date":"2023-03-25 07:47:30 +0800","tags":[],"categories":[]},"headers":[{"level":2,"title":"如何描述 UI","slug":"如何描述-ui","link":"#如何描述-ui","children":[]},{"level":2,"title":"渲染函数，即上面的 render 方法","slug":"渲染函数-即上面的-render-方法","link":"#渲染函数-即上面的-render-方法","children":[]},{"level":2,"title":"渲染函数 → 渲染器","slug":"渲染函数-→-渲染器","link":"#渲染函数-→-渲染器","children":[]},{"level":2,"title":"组件的本质？","slug":"组件的本质","link":"#组件的本质","children":[]},{"level":2,"title":"模板编译器：声明式描述 UI →   虚拟 DOM 方式描述 UI","slug":"模板编译器-声明式描述-ui-→-虚拟-dom-方式描述-ui","link":"#模板编译器-声明式描述-ui-→-虚拟-dom-方式描述-ui","children":[]},{"level":2,"title":"最后","slug":"最后","link":"#最后","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"post/ycbhape6c66qc536.md"}'),o={name:"post/ycbhape6c66qc536.md"},p=l(`<h1 id="vue-js-3-的整体设计思路" tabindex="-1">Vue.js 3 的整体设计思路 <a class="header-anchor" href="#vue-js-3-的整体设计思路" aria-hidden="true">#</a></h1><h2 id="如何描述-ui" tabindex="-1">如何描述 UI <a class="header-anchor" href="#如何描述-ui" aria-hidden="true">#</a></h2><p>三种方式：</p><ol><li><code>声明式描述 UI</code>，比如 <code>&lt;div class=&#39;btn&#39; id=&#39;test&#39; @click=&quot;handle&quot;&gt; button &lt;/div&gt;</code>， 包含信息 tag 名，属性，事件，层级关系</li><li>使用 <code>JavaScript对象</code> 来描述 UI，如下代码</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> title </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">tag</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">h1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// tag 名称</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">props</span><span style="color:#89DDFF;">:{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 属性与事件</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">onClick</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">handler</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	children:[ </span><span style="color:#676E95;font-style:italic;">// 子节点</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">tag</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">span</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li><code>虚拟 DOM</code> 描述 UI，比如 vue 中的 <code>渲染函数 - h</code> ，如下代码：</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">h</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#82AAFF;">render</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">		</span><span style="color:#676E95;font-style:italic;">// 虚拟 DOM</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">h</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">h1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,{</span><span style="color:#F07178;"> onClick</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fn</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">		</span><span style="color:#676E95;font-style:italic;">// 或者直接返回 js 对的</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			tag</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">h1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// tag 名称</span></span>
<span class="line"><span style="color:#F07178;">			props</span><span style="color:#89DDFF;">:{</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 属性与事件</span></span>
<span class="line"><span style="color:#F07178;">				onClick</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">handler</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#A6ACCD;">children</span><span style="color:#F07178;">:[ </span><span style="color:#676E95;font-style:italic;">// 子节点</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">tag</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">span</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">			]</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><blockquote><p><code>h</code> 返回的其实就是 <code>js 对象</code>， <code>h函数</code>就是辅助创建虚拟 DOM 的工具函数而已，所<strong>以他俩其实是一个东西</strong></p></blockquote><ul><li>哪种方式更灵活呢？ <ul><li>答案是：<code>JavaScript 对象</code>（或<code>虚拟 DOM</code> ） 的方式， <ul><li>比如表现 <code>H1-H6</code> ，使用 <code>tag:H\${index}</code> 即可</li><li>又比如说，<code>jsx</code>的方式实现 <code>递归树</code>，更方便</li></ul></li></ul></li><li>那种方式更直观呢？当然是 <code>模板</code></li></ul><h2 id="渲染函数-即上面的-render-方法" tabindex="-1">渲染函数，即上面的 <code>render 方法</code> <a class="header-anchor" href="#渲染函数-即上面的-render-方法" aria-hidden="true">#</a></h2><p>如 vue 会根据 返回的<code>虚拟 DOM</code> ， 把组件渲染出来。</p><h2 id="渲染函数-→-渲染器" tabindex="-1">渲染函数 → 渲染器 <a class="header-anchor" href="#渲染函数-→-渲染器" aria-hidden="true">#</a></h2><p><code>渲染器</code>的作用，就是把 <code>虚拟 DOM</code>，如  <code>h(&#39;div&#39;,&#39;hello&#39;)</code>   转成 <code>真实的 DOM</code></p><blockquote><p>这里再强调一下，<code>h(&#39;div&#39;,&#39;hello&#39;)</code> 返回的其实就一个 <code>用于表示 UI 的 js 对象</code></p></blockquote><p>如何实现一个<code>渲染器</code>?</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> vnode </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{};</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 用于描述 UI 的 js 对象。</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">renderer</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">vnode</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">container</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#F78C6C;">1.</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">根据</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vnode</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tag</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">创建元素</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#F78C6C;">2.</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">添加</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">props</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">和</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">事件</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#F78C6C;">3.</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">处理</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">children</span><span style="color:#F07178;">，</span><span style="color:#A6ACCD;">递归调用</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">renderer</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>所以，<code>渲染器</code>的本质是，递归遍历 <code>vdom</code> , 调用<code>原生 DOM API</code> 完成真实的 <code>DOM 创建</code>，但精髓在于，<strong>如何 diff 更新</strong></p><h2 id="组件的本质" tabindex="-1">组件的本质？ <a class="header-anchor" href="#组件的本质" aria-hidden="true">#</a></h2><p>组件是<code>一组虚拟DOM元素</code>的封装，他可以是一个返回虚拟 DOM 的<code>函数</code>，也可以是一个<code>对象</code>，然后再用 <code>渲染器</code> 进行渲染。</p><p>所以，渲染时需要判断 <code>vnode.tag = function | object | string ?</code> ,分别处理。</p><h2 id="模板编译器-声明式描述-ui-→-虚拟-dom-方式描述-ui" tabindex="-1">模板编译器：声明式描述 UI →   虚拟 DOM 方式描述 UI <a class="header-anchor" href="#模板编译器-声明式描述-ui-→-虚拟-dom-方式描述-ui" aria-hidden="true">#</a></h2><p>编译器其实就是把 <code>模板</code> 编译成 <code>渲染函数</code> ，比如：一个标准<code>vue模板</code></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  	</span><span style="color:#82AAFF;">data</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#F07178;">  	</span><span style="color:#82AAFF;">methond</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  		</span><span style="color:#82AAFF;">fn</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F07178;">  	</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">  	</span><span style="color:#82AAFF;">render</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  		</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">h</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,{</span><span style="color:#F07178;">onclick</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">fn</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>最终编译成的样子如下：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#82AAFF;">data</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#82AAFF;">methond</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#82AAFF;">fn</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#82AAFF;">render</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">h</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,{</span><span style="color:#F07178;">onclick</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">fn</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-hidden="true">#</a></h2><ul><li>组件的实现依赖于 <code>渲染器</code></li><li>模板的编译 依赖于 <code>编译器</code></li><li><code>渲染器</code> 和  <code>编译器</code> 是存在<code>信息交流</code>的，比如虚拟 DOM 对象中 的 <code>patchFlages</code> 属性，用于标识是 <code>动态属性</code> 和 <code>静态属性</code>？ 互相配合使得性能得到提升</li></ul><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h2><ul><li>《vue.js 设计与实现》</li></ul>`,29),e=[p];function t(c,r,F,y,i,D){return n(),a("div",null,e)}const C=s(o,[["render",t]]);export{A as __pageData,C as default};
