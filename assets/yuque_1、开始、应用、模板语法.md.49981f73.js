import{_ as n,c as t,b as e,d as a,t as i,a as l,o}from"./app.42f21419.js";const C=JSON.parse('{"title":"1、开始、应用、模板语法","description":"","frontmatter":{"title":"1、开始、应用、模板语法","urlname":"nfxyupggsyy365uf","date":"2023-03-09 10:01:55 +0800","tags":[],"categories":[]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"几个关键词","slug":"几个关键词","link":"#几个关键词","children":[]},{"level":2,"title":"API 风格","slug":"api-风格","link":"#api-风格","children":[{"level":3,"title":"选项式 API (Options API)","slug":"选项式-api-options-api","link":"#选项式-api-options-api","children":[]},{"level":3,"title":"组合式 API (Composition API)","slug":"组合式-api-composition-api","link":"#组合式-api-composition-api","children":[]}]},{"level":2,"title":"ONLINE DEMO","slug":"online-demo","link":"#online-demo","children":[]},{"level":2,"title":"类似于 unpkg 的东西","slug":"类似于-unpkg-的东西","link":"#类似于-unpkg-的东西","children":[]},{"level":2,"title":"Vue2 与 Vue3 的区别","slug":"vue2-与-vue3-的区别","link":"#vue2-与-vue3-的区别","children":[]},{"level":2,"title":"1、每个 Vue 应用都是通过 createApp 函数创建一个新的 应用实例","slug":"_1、每个-vue-应用都是通过-createapp-函数创建一个新的-应用实例","link":"#_1、每个-vue-应用都是通过-createapp-函数创建一个新的-应用实例","children":[]},{"level":2,"title":"2、根组件","slug":"_2、根组件","link":"#_2、根组件","children":[]},{"level":2,"title":"3、挂载应用","slug":"_3、挂载应用","link":"#_3、挂载应用","children":[]},{"level":2,"title":"4、应用配置","slug":"_4、应用配置","link":"#_4、应用配置","children":[]},{"level":2,"title":"5、多个应用实例","slug":"_5、多个应用实例","link":"#_5、多个应用实例","children":[{"level":3,"title":"","slug":"-1","link":"#-1","children":[]}]},{"level":2,"title":"1、{{}}","slug":"_1、","link":"#_1、","children":[]},{"level":2,"title":"2、rawHtml 与 v-html 指令","slug":"_2、rawhtml-与-v-html-指令","link":"#_2、rawhtml-与-v-html-指令","children":[]},{"level":2,"title":"3、v-bind:attrName 与 简写:attrName 或 v-bind:obj 动态绑定多个值","slug":"_3、v-bind-attrname-与-简写-attrname-或-v-bind-obj-动态绑定多个值","link":"#_3、v-bind-attrname-与-简写-attrname-或-v-bind-obj-动态绑定多个值","children":[]},{"level":2,"title":"4、{{}} 仅支持表达式，不支持语句","slug":"_4、-仅支持表达式-不支持语句","link":"#_4、-仅支持表达式-不支持语句","children":[]},{"level":2,"title":"5、受限的全局访问，可以通过 [app.config.globalProperties](https://cn.vuejs.org/api/application.html#app-config-globalproperties) 配置","slug":"_5、受限的全局访问-可以通过-app-config-globalproperties-https-cn-vuejs-org-api-application-html-app-config-globalproperties-配置","link":"#_5、受限的全局访问-可以通过-app-config-globalproperties-https-cn-vuejs-org-api-application-html-app-config-globalproperties-配置","children":[]},{"level":2,"title":"6、指令 Directives","slug":"_6、指令-directives","link":"#_6、指令-directives","children":[{"level":3,"title":"1、v-on 有一个相应的缩写，即 @ 字符 ， 如 @click <=> v-on:click","slug":"_1、v-on-有一个相应的缩写-即-字符-如-click-v-on-click","link":"#_1、v-on-有一个相应的缩写-即-字符-如-click-v-on-click","children":[]},{"level":3,"title":"2、v-bind:href 等价于 :href","slug":"_2、v-bind-href-等价于-href","link":"#_2、v-bind-href-等价于-href","children":[]},{"level":3,"title":"3、动态参数的说明如下：","slug":"_3、动态参数的说明如下","link":"#_3、动态参数的说明如下","children":[]},{"level":3,"title":"4、指令的修饰符","slug":"_4、指令的修饰符","link":"#_4、指令的修饰符","children":[]}]}],"relativePath":"yuque/1、开始、应用、模板语法.md"}'),s={name:"yuque/1、开始、应用、模板语法.md"},r=l('<h1 id="此笔记包括以下内容" tabindex="-1">此笔记包括以下内容： <a class="header-anchor" href="#此笔记包括以下内容" aria-hidden="true">#</a></h1><h1 id="" tabindex="-1"><img src="https://blog-1310531898.cos.ap-beijing.myqcloud.com//FuV5LrRceAermejktyjSxzPKhEBd.png" alt=""> <a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="_0、开始" tabindex="-1">0、开始 <a class="header-anchor" href="#_0、开始" aria-hidden="true">#</a></h1><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-hidden="true">#</a></h2><h2 id="几个关键词" tabindex="-1">几个关键词 <a class="header-anchor" href="#几个关键词" aria-hidden="true">#</a></h2><p>Vue 的两个核心功能：</p><ul><li><code>**声明式渲染**</code>：Vue 基于标准 HTML 拓展了一套模板语法，使得我们可以声明式地描述最终输出的 HTML 和 JavaScript 状态之间的关系。</li><li><code>**响应性**</code>：Vue 会自动跟踪 JavaScript 状态并在其发生变化时响应式地更新 DOM。</li></ul><p><code>单文件组件</code> (也被称为 <code>*.vue</code> 文件，英文 Single-File Components，缩写为 SFC)</p><ul><li>顾名思义，Vue 的单文件组件会将一个组件的逻辑 (JavaScript)，模板 (HTML) 和样式 (CSS) 封装在同一个文件里</li></ul><h2 id="api-风格" tabindex="-1">API 风格 <a class="header-anchor" href="#api-风格" aria-hidden="true">#</a></h2><p>Vue 的组件可以按两种不同的风格书写：选项式 API 和 组合式 API。</p><h3 id="选项式-api-options-api" tabindex="-1">选项式 API (Options API) <a class="header-anchor" href="#选项式-api-options-api" aria-hidden="true">#</a></h3><p>即<code>vue2</code>的写法</p><h3 id="组合式-api-composition-api" tabindex="-1">组合式 API (Composition API) <a class="header-anchor" href="#组合式-api-composition-api" aria-hidden="true">#</a></h3><p>即新的<code>vue3</code>的写法</p><h2 id="online-demo" tabindex="-1">ONLINE DEMO <a class="header-anchor" href="#online-demo" aria-hidden="true">#</a></h2><blockquote><p>很重要，重要功能或者 feature 可以直接在线体验</p></blockquote><ul><li>想要快速体验 Vue，你可以直接试试我们的 <a href="https://sfc.vuejs.org/#eNo9j01qAzEMha+iapMWOjbdDm6gu96gG2/cjJJM8B+2nBaGuXvlpBMwtj4/JL234EfO6toIRzT1UObMexvpN6fCMNHRNc+w2AgwOXbPL/caoBC3EjcCCPU0wu6TvE/wlYqfnnZ3ae2PXHKMfiwQYArZOyYhAHN+2y9LnwLrarTQ7XeOuTFch5Am8u8WRbcoktGPbnzFOXS3Q3BZXWqKkuRmy/4L1eK4GbUoUTtbPDPnOmpdj4ee/1JVKictlSot8hxIUQ3Dd0k/lYoMtrglwfUPkXdoJg==" target="_blank" rel="noreferrer">演练场</a>。</li><li>如果你更喜欢不用任何构建的原始 HTML，可以使用 <a href="https://jsfiddle.net/yyx990803/2ke1ab0z/" target="_blank" rel="noreferrer">JSFiddle</a> 入门。</li><li>如果你已经比较熟悉 Node.js 和构建工具等概念，还可以直接在浏览器中打开 <a href="https://vite.new/vue" target="_blank" rel="noreferrer">StackBlitz</a> 来尝试完整的构建设置。</li></ul><h2 id="类似于-unpkg-的东西" tabindex="-1">类似于 unpkg 的东西 <a class="header-anchor" href="#类似于-unpkg-的东西" aria-hidden="true">#</a></h2><ul><li><a href="https://unpkg.com/" target="_blank" rel="noreferrer">unpkg</a></li><li><a href="https://www.jsdelivr.com/package/npm/vue" target="_blank" rel="noreferrer">jsdelivr</a> 或 <a href="https://cdnjs.com/libraries/vue" target="_blank" rel="noreferrer">cdnjs</a></li></ul><h2 id="vue2-与-vue3-的区别" tabindex="-1">Vue2 与 Vue3 的区别 <a class="header-anchor" href="#vue2-与-vue3-的区别" aria-hidden="true">#</a></h2><ul><li>Vue 2 在 2023 年底将到达它的截止维护日期</li><li>vue3 仅支持 IE11 及以上。Vue 3 用到了一些 IE11 不支持的现代 JavaScript 特性</li><li>vue3 只支持 <a href="https://caniuse.com/es6" target="_blank" rel="noreferrer">原生支持 ES2015 的浏览器</a> ，即 es6</li></ul><h1 id="_1、应用" tabindex="-1">1、应用 <a class="header-anchor" href="#_1、应用" aria-hidden="true">#</a></h1><h2 id="_1、每个-vue-应用都是通过-createapp-函数创建一个新的-应用实例" tabindex="-1">1、每个 <code>Vue</code> 应用都是通过 <a href="https://cn.vuejs.org/api/application.html#createapp" target="_blank" rel="noreferrer">createApp</a> 函数创建一个新的 <code>应用实例</code> <a class="header-anchor" href="#_1、每个-vue-应用都是通过-createapp-函数创建一个新的-应用实例" aria-hidden="true">#</a></h2><h2 id="_2、根组件" tabindex="-1">2、根组件 <a class="header-anchor" href="#_2、根组件" aria-hidden="true">#</a></h2><p><img src="https://blog-1310531898.cos.ap-beijing.myqcloud.com//FjX-cVaWjilI-pckvqFhF1FTOFsl.png" alt=""></p><h2 id="_3、挂载应用" tabindex="-1">3、挂载应用 <a class="header-anchor" href="#_3、挂载应用" aria-hidden="true">#</a></h2><p><img src="https://blog-1310531898.cos.ap-beijing.myqcloud.com//FvRBFL122i0IFI9OG8oXdWe9G-S0.png" alt=""></p><h2 id="_4、应用配置" tabindex="-1">4、应用配置 <a class="header-anchor" href="#_4、应用配置" aria-hidden="true">#</a></h2><p><img src="https://blog-1310531898.cos.ap-beijing.myqcloud.com//FpPW4_O5HJDFwwMaM2Y_PLjkWZ-X.png" alt=""></p><h2 id="_5、多个应用实例" tabindex="-1">5、多个应用实例 <a class="header-anchor" href="#_5、多个应用实例" aria-hidden="true">#</a></h2><p><img src="https://blog-1310531898.cos.ap-beijing.myqcloud.com//FqNREoXOz6ZgxCr_v7XMQC21Cok1.png" alt=""></p><h1 id="_2、模板语法" tabindex="-1">2、模板语法 <a class="header-anchor" href="#_2、模板语法" aria-hidden="true">#</a></h1><h3 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a></h3>',34),c={id:"_1、",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#_1、","aria-hidden":"true"},"#",-1),d=l('<p><img src="https://blog-1310531898.cos.ap-beijing.myqcloud.com//FgWM7jrCslTQBKaQPOTcKNZRPoms.png" alt=""></p><h2 id="_2、rawhtml-与-v-html-指令" tabindex="-1">2、rawHtml 与 <code>v-html</code> 指令 <a class="header-anchor" href="#_2、rawhtml-与-v-html-指令" aria-hidden="true">#</a></h2><p><img src="https://blog-1310531898.cos.ap-beijing.myqcloud.com//FtgdeyA7fgO-9BkgDVp2GlQfI8ms.png" alt=""></p><h2 id="_3、v-bind-attrname-与-简写-attrname-或-v-bind-obj-动态绑定多个值" tabindex="-1">3、<code>v-bind:attrName</code> 与 简写<code>:attrName</code> 或 <code>v-bind:obj</code> 动态绑定多个值 <a class="header-anchor" href="#_3、v-bind-attrname-与-简写-attrname-或-v-bind-obj-动态绑定多个值" aria-hidden="true">#</a></h2><p><img src="https://blog-1310531898.cos.ap-beijing.myqcloud.com//FumkRsjRbQOq3xoxo2eT0yo587pB.png" alt=""> 简写： <code>:attrName</code><img src="https://blog-1310531898.cos.ap-beijing.myqcloud.com//FibNNJtFxEkVT7sAnaWi9XhC8KvL.png" alt=""></p><p><img src="https://blog-1310531898.cos.ap-beijing.myqcloud.com//FqAypYDy6dEQWShf0BDOYSwTVwfN.png" alt=""></p>',6),h={id:"_4、-仅支持表达式-不支持语句",tabindex:"-1"},u=e("code",null,"表达式",-1),_=e("code",null,"语句",-1),g=e("a",{class:"header-anchor",href:"#_4、-仅支持表达式-不支持语句","aria-hidden":"true"},"#",-1),b=l(`<p><img src="https://blog-1310531898.cos.ap-beijing.myqcloud.com//FsqL9MDvRkE_roEmDK_UUqrUslIh.png" alt=""></p><h2 id="_5、受限的全局访问-可以通过-app-config-globalproperties-https-cn-vuejs-org-api-application-html-app-config-globalproperties-配置" tabindex="-1">5、受限的全局访问，可以通过 <code>[app.config.globalProperties](https://cn.vuejs.org/api/application.html#app-config-globalproperties)</code> 配置 <a class="header-anchor" href="#_5、受限的全局访问-可以通过-app-config-globalproperties-https-cn-vuejs-org-api-application-html-app-config-globalproperties-配置" aria-hidden="true">#</a></h2><p>模板中的表达式将被沙盒化，仅能够访问到<a href="https://github.com/vuejs/core/blob/main/packages/shared/src/globalsWhitelist.ts#L3" target="_blank" rel="noreferrer">有限的全局对象列表</a>。该列表中会暴露常用的内置全局对象，比如 <code>Math</code> 和 <code>Date</code>。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">makeMap</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./makeMap</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> GLOBALS_WHITE_LISTED </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isGloballyWhitelisted </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/*#__PURE__*/</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">makeMap</span><span style="color:#A6ACCD;">(GLOBALS_WHITE_LISTED)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>没有显式包含在列表中的全局对象将不能在模板内表达式中访问，例如用户附加在 window 上的属性。然而，你也可以自行在 <code>[app.config.globalProperties](https://cn.vuejs.org/api/application.html#app-config-globalproperties) </code>上** **<code>**显式地添加它们\\*\\*</code>，供所有的 Vue 表达式使用。</p><h2 id="_6、指令-directives" tabindex="-1">6、指令 Directives <a class="header-anchor" href="#_6、指令-directives" aria-hidden="true">#</a></h2><h3 id="_1、v-on-有一个相应的缩写-即-字符-如-click-v-on-click" tabindex="-1">1、<code>v-on</code> 有一个相应的缩写，即 <code>@</code> 字符 ， 如 <code>@click &lt;=&gt; v-on:click</code> <a class="header-anchor" href="#_1、v-on-有一个相应的缩写-即-字符-如-click-v-on-click" aria-hidden="true">#</a></h3><h3 id="_2、v-bind-href-等价于-href" tabindex="-1">2、<code>v-bind:href</code> 等价于 <code>:href</code> <a class="header-anchor" href="#_2、v-bind-href-等价于-href" aria-hidden="true">#</a></h3><h3 id="_3、动态参数的说明如下" tabindex="-1">3、动态参数的说明如下： <a class="header-anchor" href="#_3、动态参数的说明如下" aria-hidden="true">#</a></h3><ul><li>动态属性</li><li>动态事件名称</li><li>动态参数值的限制：为 null 或者 字符串，否则编译警告</li><li>动态参数的语法限制：大小写，注意空格等</li></ul><p>具体看下面： <img src="https://blog-1310531898.cos.ap-beijing.myqcloud.com//FihYTjYuc_ttiMmJYr6BuLz2LZJC.png" alt=""></p><p>动态参数的语法限制： <img src="https://blog-1310531898.cos.ap-beijing.myqcloud.com//FthN-cp2um2xEL2sLOvZ3x_MPPJ3.png" alt=""></p><h3 id="_4、指令的修饰符" tabindex="-1">4、指令的修饰符 <a class="header-anchor" href="#_4、指令的修饰符" aria-hidden="true">#</a></h3><p><img src="https://blog-1310531898.cos.ap-beijing.myqcloud.com//FokmrYmvI69FPCB9NARoPRPpp5G0.png" alt=""></p>`,14);function m(v,f,y,D,k,F){return o(),t("div",null,[r,e("h2",c,[a("1、"),e("code",null,i(),1),a(),p]),d,e("h2",h,[a("4、"),e("code",null,i(),1),a(" 仅支持"),u,a("，不支持"),_,a(),g]),b])}const j=n(s,[["render",m]]);export{C as __pageData,j as default};
