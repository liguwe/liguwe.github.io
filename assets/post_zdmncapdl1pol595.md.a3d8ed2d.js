import{_ as s,o as l,c as a,b as o}from"./app.c60a45d1.js";const A=JSON.parse('{"title":"0004.FE.长列表渲染优化的一些思路","description":"","frontmatter":{"title":"0004.FE.长列表渲染优化的一些思路","urlname":"zdmncapdl1pol595","date":"2023-03-18 12:32:06 +0800","tags":[],"categories":[]},"headers":[{"level":2,"title":"先说导致长列表性能及体现不佳的原因","slug":"先说导致长列表性能及体现不佳的原因","link":"#先说导致长列表性能及体现不佳的原因","children":[]},{"level":2,"title":"一些常见的优化思路","slug":"一些常见的优化思路","link":"#一些常见的优化思路","children":[{"level":3,"title":"1、分页","slug":"_1、分页","link":"#_1、分页","children":[]},{"level":3,"title":"2、虚拟滚动、虚拟列表","slug":"_2、虚拟滚动、虚拟列表","link":"#_2、虚拟滚动、虚拟列表","children":[]}]},{"level":2,"title":"3、其他的思路","slug":"_3、其他的思路","link":"#_3、其他的思路","children":[]},{"level":2,"title":"最后","slug":"最后","link":"#最后","children":[]}],"relativePath":"post/zdmncapdl1pol595.md"}'),n={name:"post/zdmncapdl1pol595.md"},e=o(`<p>#fe  #前端性能</p><h1 id="长列表渲染优化的一些思路" tabindex="-1">长列表渲染优化的一些思路 <a class="header-anchor" href="#长列表渲染优化的一些思路" aria-hidden="true">#</a></h1><h2 id="先说导致长列表性能及体现不佳的原因" tabindex="-1">先说导致长列表性能及体现不佳的原因 <a class="header-anchor" href="#先说导致长列表性能及体现不佳的原因" aria-hidden="true">#</a></h2><p>需要 <code>渲染大量的DOM节点</code> 及 <code>频繁的DOM操作</code> ，展开说就是 每个节点都需要浏览器 进行<code>计算</code>、<code>布局</code>和<code>绘制</code> 等。 如果总结，那么其实就是 所谓的 <strong>CPU 的瓶颈</strong></p><p>另外，就是一些网络原因了，毕竟请求总是需要耗费时间的，这就是所谓的 <strong>IO 的瓶颈</strong> （这里主要指<code>网络IO</code>）</p><h2 id="一些常见的优化思路" tabindex="-1">一些常见的优化思路 <a class="header-anchor" href="#一些常见的优化思路" aria-hidden="true">#</a></h2><h3 id="_1、分页" tabindex="-1">1、分页 <a class="header-anchor" href="#_1、分页" aria-hidden="true">#</a></h3><p>最简单且见效的方法，但需要与 <code>用户体验</code> 做平衡</p><h3 id="_2、虚拟滚动、虚拟列表" tabindex="-1">2、虚拟滚动、虚拟列表 <a class="header-anchor" href="#_2、虚拟滚动、虚拟列表" aria-hidden="true">#</a></h3><p>比较常见且大规模应用的思路，具体的一些<code>要点</code>：</p><ul><li><code>可视区域</code>： 做<code>绝对定位</code>，left、right、top 设置为 0</li><li><code>滚动区域</code>：用于<code>形成滚动条</code>，做绝对定位，<code>left、right、top</code> 设置为 0，<code>z-index:-1</code></li><li><code>真实渲染区域</code>：滚动时使用<code>translate3d(x,y,z)</code></li></ul><p>具体步骤：</p><ol><li>计算当前可见区域起始数据的 <code>startIndex</code></li><li>计算当前可见区域结束数据的 <code>endIndex</code></li><li>计算当前可见区域的数据，并渲染到页面中</li><li>计算 <code>startIndex</code> 对应的数据在整个列表中的偏移位置 <code>startOffset</code>，并设置到列表上</li><li>在滚动的时候，修改<code>真实渲染区域</code>的 <code>transform: translate3d(0, y, 0)</code></li></ol><p>下面是一段示例代码：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">updateVisibleData</span><span style="color:#A6ACCD;">(scrollTop) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">scrollTop</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">scrollTop</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 取得可见区域的可见列表项数量</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">visibleCount</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ceil</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$el</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">clientHeight</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">itemHeight</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 取得可见区域的起始数据索引</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">start</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">floor</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">scrollTop</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">itemHeight</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 取得可见区域的结束数据索引</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">end</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">start</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">visibleCount</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 计算出可见区域对应的数据，让 Vue.js 更新</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">visibleData</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">start</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">end</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 把可见区域的 top 设置为起始元素在整个列表中的位置（使用 transform 是为了更好的性能）</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$refs</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">content</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">webkitTransform</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">translate3d(0, </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;"> start </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">itemHeight </span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">px, 0)</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><code>动态高度</code>的场景：需要在渲染时<code>动态计算</code>每个列表项的高度，并根据<code>实际高度</code>进行渲染，下面是<code>updateVisibleData</code> 的一个思路。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">updateVisibleData</span><span style="color:#A6ACCD;">(scrollTop) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">scrollTop</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">scrollTop</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">start</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">findNearestItemIndex</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">scrollTop</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">end</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">findNearestItemIndex</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">scrollTop</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$el</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">clientHeight</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">visibleData</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">start</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">min</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">end</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 通过具体方法来设计</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$refs</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">content</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">webkitTransform</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">translate3d(0, </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">getItemSizeAndOffset</span><span style="color:#A6ACCD;">(start)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">offset </span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">px, 0)</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>一个细节，<code>ios</code> 没法实时 触发 <code>scroll</code> 的问题？</p><ul><li>使用 <code>iscroll</code> 或者   <code>better-scroll</code> 等成熟的第三方库</li><li><code>ontouchmove</code> 来兼容下</li><li><code>-webkit-overflow-scrolling:touch</code> 设置有<code>回弹效果</code><ul><li><code>auto</code>: 使用普通滚动, 当手指从触摸屏上移开，滚动会立即停止。</li><li><code>touch</code> , 有回弹效果</li></ul></li></ul><p>其他的一些细节优化点：</p><ul><li>使用<code>骨架片</code>优化白屏</li><li>使用新的 API，提高性能 <ul><li><code>scroll</code> 时，使用 <code>requestAnimationFrame</code> 来包装回调</li><li>或者做下<code>节流</code></li></ul></li><li>使用<code>缓存</code>，需要把<code>尺寸、偏移</code>等信息进行一个<code>缓存</code></li><li>图片<code>懒加载</code></li></ul><h2 id="_3、其他的思路" tabindex="-1">3、其他的思路 <a class="header-anchor" href="#_3、其他的思路" aria-hidden="true">#</a></h2><ul><li>使用<code>缓存</code> ，包括数据缓存，也包括重复利用节点等</li><li><code>懒加载</code> 与 <code>预加载</code></li><li>减少 DOM 操作 ，精简 DOM 结构</li><li>使用<code>Web Worker</code>   将页面的<code>渲染</code>和<code>计算逻辑</code>分离开来</li><li>服务器端渲染 ， <code>SSR</code></li><li>CSS 布局优化，减少<code>回流</code>等</li><li>CSS3 硬件加速</li><li>优化渲染性能，比如<code>CSS样式优化</code>和 <code>JS性能优化</code></li><li>图片优化 ， <code>懒加载</code>和<code>预加载</code> 及 <code>压缩</code> ，<code>缩略图</code> ， 图片格式比如 <code>WebP</code> 更小，<code>jpg</code> 更快渲染等</li><li>使用渐进式渲染 ，先渲染关键内容</li><li>新 API 使用，比如 <code>requestIdleCallback</code> 空闲时间再执行</li><li><code>HTTP</code>请求优化等</li></ul><blockquote><p>[!tip] JPEG 格式不支持透明度设置</p></blockquote><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-hidden="true">#</a></h2><p>还是需要根据<code>实际情况</code> 选择 <code>ROI</code> 最大的方案，找 主要矛盾。</p>`,26),p=[e];function c(t,r,F,y,i,D){return l(),a("div",null,p)}const C=s(n,[["render",c]]);export{A as __pageData,C as default};
