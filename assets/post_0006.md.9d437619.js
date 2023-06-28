import{_ as a,o,c as l,V as t,C as e}from"./chunks/framework.5e406744.js";const _=JSON.parse('{"title":"前端框架设计里的 权衡 与 选择","description":"","frontmatter":{},"headers":[],"relativePath":"post/0006.md","filePath":"post/0006.md"}'),s={name:"post/0006.md"},c=t('<p>#fe #vue #前端框架</p><h1 id="前端框架设计里的-权衡-与-选择" tabindex="-1">前端框架设计里的 权衡 与 选择 <a class="header-anchor" href="#前端框架设计里的-权衡-与-选择" aria-label="Permalink to &quot;前端框架设计里的 权衡 与 选择&quot;">​</a></h1><h2 id="_1、命令式框架与声明式框架" tabindex="-1">1、命令式框架与声明式框架 <a class="header-anchor" href="#_1、命令式框架与声明式框架" aria-label="Permalink to &quot;1、命令式框架与声明式框架&quot;">​</a></h2><ul><li><code>Jquery</code> 就是典型的 <strong>命令式框架</strong>，关注<code>过程</code></li><li>Vue 暴露给用户使用的是 <code>声明式</code> ，但底层内部实现肯定也是 <code>命令式</code> ，如下示例：面向用户的是声明式的</li></ul><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>但问题是，<strong>声明式的代码性能 不会高于 命令式代码的性能 ，所以这是一个选择 或者权衡</strong></p><h2 id="_2、性能-与-维护性-的平衡" tabindex="-1">2、性能 与 维护性 的平衡 <a class="header-anchor" href="#_2、性能-与-维护性-的平衡" aria-label="Permalink to &quot;2、性能 与 维护性 的平衡&quot;">​</a></h2><p><img src="https://blog-1310531898.cos.ap-beijing.myqcloud.com//FkPqA2uVDAvzBIJAIjpDRdxhQsyp.png" alt=""></p><h2 id="_3、运行时-与-编译时" tabindex="-1">3、运行时 与 编译时 <a class="header-anchor" href="#_3、运行时-与-编译时" aria-label="Permalink to &quot;3、运行时 与 编译时&quot;">​</a></h2><h3 id="纯运行时-即直接render即可" tabindex="-1">纯运行时，即直接<code>Render</code>即可 <a class="header-anchor" href="#纯运行时-即直接render即可" aria-label="Permalink to &quot;纯运行时，即直接`Render`即可&quot;">​</a></h3><p><img src="https://blog-1310531898.cos.ap-beijing.myqcloud.com//Fg50nk8zQ1iWJbRkEKmVDMyNO4bZ.png" alt=""></p><h3 id="运行时-编译时" tabindex="-1">运行时 + 编译时 <a class="header-anchor" href="#运行时-编译时" aria-label="Permalink to &quot;运行时 + 编译时&quot;">​</a></h3><p>如下图，常用的 Vue/Angular/React 都属于这类框架</p><p><img src="https://blog-1310531898.cos.ap-beijing.myqcloud.com//Fq1iu91nLCuPM-w-HHaPfXLX9Bxh.png" alt=""></p><h3 id="纯编译时框架-代表svelte" tabindex="-1">纯编译时框架，代表<code>Svelte</code> <a class="header-anchor" href="#纯编译时框架-代表svelte" aria-label="Permalink to &quot;纯编译时框架，代表`Svelte`&quot;">​</a></h3><p><img src="https://blog-1310531898.cos.ap-beijing.myqcloud.com//FhVc9j0TN1GNOR6dW_jxUMDygi_n.png" alt=""></p><h2 id="_4、原生-js-操作-dom、innerhtml-与-虚拟-dom-快慢对比" tabindex="-1">4、原生 JS 操作 DOM、InnerHTML 与 虚拟 DOM 快慢对比 <a class="header-anchor" href="#_4、原生-js-操作-dom、innerhtml-与-虚拟-dom-快慢对比" aria-label="Permalink to &quot;4、原生 JS 操作 DOM、InnerHTML 与 虚拟 DOM 快慢对比&quot;">​</a></h2><p>可从以下三个方面来度量</p><ul><li>理解成本上，<strong>原生 JS 操作 DOM &gt; InnerHTML &gt; 虚拟 DOM</strong></li><li>维护性上，<strong>原生 JS 操作 DOM 、 InnerHTML &lt; 虚拟 DOM</strong></li><li>性能上，取决于<code>页面大小</code>，<code>页面变更大小，</code>是<code>新建页面</code> 还是<code> 更新页</code>面 甚至是<code>更新策略</code>等，都有关系，不同场景下有不同结论。</li></ul><h2 id="_5、最后" tabindex="-1">5、最后 <a class="header-anchor" href="#_5、最后" aria-label="Permalink to &quot;5、最后&quot;">​</a></h2><p>无论是<code>命令式</code>还<code>是声明式</code>，或者框架需要设计成<code>运行时</code>、<code>编译时</code>或<code>运行时+编译时</code>，都需要结合 <code>性能</code>、<code>理解成本</code>、<code>维护性</code>上做权衡选择。</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li>《Vue.js 设计与实现》</li></ul><hr>',24),i=e("div",{class:"liguwe-doc-footer"},[e("div",{class:"liguwe-doc-footer-edit-link"},[e("p",{class:"liguwe-doc-footer-p"},[e("svg",{t:"1687912573060",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1498"},[e("path",{d:"M854.6 370.6c-9.9-39.4 9.9-102.2 73.4-124.4l-67.9-3.6s-25.7-90-143.6-98c-117.8-8.1-194.9-3-195-3 0.1 0 87.4 55.6 52.4 154.7-25.6 52.5-65.8 95.6-108.8 144.7-1.3 1.3-2.5 2.6-3.5 3.7C319.4 605 96 860 96 860c245.9 64.4 410.7-6.3 508.2-91.1 20.5-0.2 35.9-0.3 46.3-0.3 135.8 0 250.6-117.6 245.9-248.4-3.2-89.9-31.9-110.2-41.8-149.6z m-204.1 334c-10.6 0-26.2 0.1-46.8 0.3l-23.6 0.2-17.8 15.5c-47.1 41-104.4 71.5-171.4 87.6-52.5 12.6-110 16.2-172.7 9.6 18-20.5 36.5-41.6 55.4-63.1 92-104.6 173.8-197.5 236.9-268.5l1.4-1.4 1.3-1.5c4.1-4.6 20.6-23.3 24.7-28.1 9.7-11.1 17.3-19.9 24.5-28.6 30.7-36.7 52.2-67.8 69-102.2l1.6-3.3 1.2-3.4c13.7-38.8 15.4-76.9 6.2-112.8 22.5 0.7 46.5 1.9 71.7 3.6 33.3 2.3 55.5 12.9 71.1 29.2 5.8 6 10.2 12.5 13.4 18.7 1 2 1.7 3.6 2.3 5l5 17.7c-15.7 34.5-19.9 73.3-11.4 107.2 3 11.8 6.9 22.4 12.3 34.4 2.1 4.7 9.5 20.1 11 23.3 10.3 22.7 15.4 43 16.7 78.7 3.3 94.6-82.7 181.9-182 181.9z","p-id":"1499",fill:"#10b981"})]),e("a",{href:"https://www.yuque.com/liguwe/post/0006",target:"_blank",class:"liguwe-doc-footer-edit-link-a"}," View this page on Yuque ")]),e("p",{class:"liguwe-doc-footer-p"},[e("svg",{t:"1687913054251",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5173"},[e("path",{d:"M853.333333 501.333333c-17.066667 0-32 14.933333-32 32v320c0 6.4-4.266667 10.666667-10.666666 10.666667H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667V213.333333c0-6.4 4.266667-10.666667 10.666667-10.666666h320c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32H170.666667c-40.533333 0-74.666667 34.133333-74.666667 74.666666v640c0 40.533333 34.133333 74.666667 74.666667 74.666667h640c40.533333 0 74.666667-34.133333 74.666666-74.666667V533.333333c0-17.066667-14.933333-32-32-32z",fill:"#10b981","p-id":"5174"}),e("path",{d:"M405.333333 484.266667l-32 125.866666c-2.133333 10.666667 0 23.466667 8.533334 29.866667 6.4 6.4 14.933333 8.533333 23.466666 8.533333h8.533334l125.866666-32c6.4-2.133333 10.666667-4.266667 14.933334-8.533333l300.8-300.8c38.4-38.4 38.4-102.4 0-140.8-38.4-38.4-102.4-38.4-140.8 0L413.866667 469.333333c-4.266667 4.266667-6.4 8.533333-8.533334 14.933334z m59.733334 23.466666L761.6 213.333333c12.8-12.8 36.266667-12.8 49.066667 0 12.8 12.8 12.8 36.266667 0 49.066667L516.266667 558.933333l-66.133334 17.066667 14.933334-68.266667z",fill:"#10b981","p-id":"5175"})]),e("a",{href:"https://github.com/liguwe/liguwe.github.io/blob/master/docs/0006.md",target:"_blank",class:"liguwe-doc-footer-edit-link-a"},"Edit this page on Github")]),e("p",{class:"liguwe-doc-footer-p"},[e("svg",{t:"1687912510038",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2280"},[e("path",{d:"M746.666667 106.666667a192 192 0 0 1 192 192v373.333333a192 192 0 0 1-192 192h-107.925334l-97.749333 90.496a42.666667 42.666667 0 0 1-57.984 0L385.28 864H277.333333a192 192 0 0 1-192-192V298.666667a192 192 0 0 1 192-192h469.333334z m0 64H277.333333a128 128 0 0 0-128 128v373.333333a128 128 0 0 0 128 128h107.925334a64 64 0 0 1 43.477333 17.045333L512 894.122667l83.264-77.077334a64 64 0 0 1 43.477333-17.045333H746.666667a128 128 0 0 0 128-128V298.666667a128 128 0 0 0-128-128zM512 426.666667a54.677333 54.677333 0 0 1 54.634667 54.698666A54.677333 54.677333 0 0 1 512 536.064a54.677333 54.677333 0 0 1-54.634667-54.698667A54.677333 54.677333 0 0 1 512 426.666667z m-196.693333 0a54.677333 54.677333 0 0 1 54.634666 54.698666 54.677333 54.677333 0 0 1-54.613333 54.698667 54.677333 54.677333 0 0 1-54.634667-54.698667A54.677333 54.677333 0 0 1 315.306667 426.666667z m393.386666 0a54.677333 54.677333 0 0 1 54.613334 54.698666 54.677333 54.677333 0 0 1-54.613334 54.698667 54.677333 54.677333 0 0 1-54.634666-54.698667A54.677333 54.677333 0 0 1 708.672 426.666667z",fill:"#10b981","p-id":"2281"})]),e("a",{href:"https://github.com/liguwe/liguwe.github.io/issues/new?title=0006.前端框架设计里的”权衡“与选择@Vue&labels=liguwe.site",target:"_blank",class:"liguwe-doc-footer-edit-link-a"}," Comment this page on GitHub Issues ")])]),e("p",{class:"liguwe-doc-footer-update-time"},[e("i",null,"Last updated：2023.03.17")]),e("div",{id:"liguwe-comment"})],-1),n=[c,i];function r(d,p,h,u,g,m){return o(),l("div",null,n)}const D=a(s,[["render",r]]);export{_ as __pageData,D as default};
