import{_ as e,o,c,V as d}from"./chunks/framework.c7a3dc5c.js";const g=JSON.parse('{"title":"FE.说说回流及重绘","description":"","frontmatter":{},"headers":[],"relativePath":"post/0005.md"}'),i={name:"post/0005.md"},l=d('<p>#fe #渲染 #css</p><h1 id="fe-说说回流及重绘" tabindex="-1">FE.说说回流及重绘 <a class="header-anchor" href="#fe-说说回流及重绘" aria-label="Permalink to &quot;FE.说说回流及重绘&quot;">​</a></h1><h2 id="先看定义" tabindex="-1">先看定义 <a class="header-anchor" href="#先看定义" aria-label="Permalink to &quot;先看定义&quot;">​</a></h2><p><code>回流</code>：布局引擎会根据各种样式计算每个盒子在页面上的大小与位置 <code>重绘</code>：当计算好盒模型的位置、大小及其他属性后，浏览器根据每个盒子特性进行绘制 <code>重绘</code>不一定导致<code>重排</code>，但<code>重排</code>一定会导致<code>重绘</code> ，如下图： <img src="https://od-1310531898.cos.ap-beijing.myqcloud.com/202303181222365.png" alt="image.png"></p><h2 id="导致回流的场景" tabindex="-1">导致<code>回流</code>的场景 <a class="header-anchor" href="#导致回流的场景" aria-label="Permalink to &quot;导致`回流`的场景&quot;">​</a></h2><ul><li>页面<code>首次渲染</code></li><li>浏览器<code>窗口大小</code>发生改变</li><li>元素<code>尺寸或位置</code>发生改变</li><li>元素内容变化（<code>文字数量</code>或<code>图片大小</code>等等）</li><li>元素<code>字体大小</code>变化</li><li><code>添加或者删除</code>可见的DOM元素</li><li>激活CSS伪类（例如：<code>:hover</code>）</li><li><code>calc()</code> 本身不会引起 <code>回流</code>，但是因为需要重新计算布局的属性，比如父元素的宽度改变了，那必然会导致子元素的一个 <code>回流</code></li><li><code>查询某些属性</code>或<code>调用某些方法</code><ul><li><code>dom.style.width/height</code> ，只能取<code>行内样式的宽和高</code>，<code>style</code> 中 <code>link</code> 外链取不到。可写，修改时会导致<code>重排</code></li><li><code>window.getComputedStyle(dom).width/height</code>，指定<code>第二参数</code>指定一个要匹配的伪元素的字符串。必须对普通元素省略（<code>或null</code>） ， <ul><li>读取的样式是<code>最终样式</code>，包括了内联样式、嵌入样式和外部样式</li><li>比如<code>getComputedStyle(h3, &#39;::after&#39;).content</code></li><li>会导致<code>回流</code> 因为它需要获取祖先节点的一些信息进行计算（譬如宽高等），为求一个<code>“即时性”</code>和<code>“准确性”</code>。</li></ul></li><li><code>dom.getBoundingClientRect().width/height 、top/left/right/bottom</code> 得到<code>渲染后的宽和高</code>，及<code>相对于视窗的上下左右</code>的距离</li><li>获取<code>布局信息</code>时，会导致<code>重排</code>。相关的方法属性如 <code>offsetTop</code> <code>getComputedStyle</code> 等</li><li><code>scrollIntoView()</code>、<code>scrollIntoViewIfNeeded()</code> 、 <code>scrollTo()</code> 滚动时，会导致<code>重排</code></li></ul></li></ul><blockquote><p>[!info] 总之， <code>查询某些属性</code>或<code>调用某些方法</code> 是否会导致重排，关键需要看 <code>只读了</code> ，还是有<code>写入</code>操作 `` [!warning] 另外一些容易被忽略的操作：如 getComputedStyle， offsetTop、offsetLeft、 offsetWidth、offsetHeight、scrollTop、scrollLeft、scrollWidth、scrollHeight、clientTop、clientLeft、clientWidth、clientHeight 这些属性有一个共性，就是需要通过<strong>即时计算</strong>得到。因此浏览器为了获取这些值，也会进行<code>回流</code></p></blockquote><h2 id="opacity、display-和-visibility" tabindex="-1">opacity、display 和 visibility <a class="header-anchor" href="#opacity、display-和-visibility" aria-label="Permalink to &quot;opacity、display 和 visibility&quot;">​</a></h2><ul><li>修改 <code>opacity</code> 和 <code>visibility</code> 属性通常只会触发<code>重绘</code>，而不会触发<code>回流</code></li><li>而修改 <code>display</code> 属性则可能会触发<code>回流和重绘</code><img src="https://od-1310531898.cos.ap-beijing.myqcloud.com/202303181135472.png" alt="image.png"></li></ul><h2 id="修改-left-和-right" tabindex="-1">修改 <code>left</code> 和 <code>right</code> <a class="header-anchor" href="#修改-left-和-right" aria-label="Permalink to &quot;修改  `left` 和 `right`&quot;">​</a></h2><p>一般情况下，如果只是修改 <code>left</code> 和 <code>right</code> 的值，不会导致 <code>回流</code>，因为脱离文档流，但同时改变其他属性值，会导致 <code>重排</code></p><h2 id="一些建议" tabindex="-1">一些建议 <a class="header-anchor" href="#一些建议" aria-label="Permalink to &quot;一些建议&quot;">​</a></h2><ul><li><code>transform</code> 代替 <code>top/left</code></li><li><code>position: absolute、fixed </code> 脱离文档流，以避免对其他元素布局的影响。</li><li>避免使用 <code>table</code> 布局</li><li>避免多次回流，尽量<code>批量操作</code><ul><li>使用<code>documentFragment</code> 一次性插入文档中</li><li><code>classList.add/remove/toggle</code> 来切换样式，而不是直接修改 style 属性</li></ul></li><li>避免使用<code>CSS表达式</code>（如：<code>calc()</code>）</li><li>使用<code>css3硬件加速</code>，<code>可以让transform</code>、<code>opacity</code>、<code>filters</code> 这些动画不会引起<code>回流重绘</code></li><li><code>离线操作思路</code> ，及设置 <code>display:none</code> ，其实也是 批量操作的一种思路</li></ul><hr><div class="liguwe-doc-footer"><p class="liguwe-doc-footer-update-time"><i>Last updated：2023.03.17</i></p><div class="liguwe-doc-footer-edit-link"><a href="https://www.yuque.com/liguwe/post/0005" target="_blank" class="liguwe-doc-footer-edit-link-a">View this page on Yuque（语雀）</a><a href="https://github.com/liguwe/liguwe.github.io/issues/new?title=0005.说说回流及重绘@FE&amp;labels=liguwe.site" target="_blank" class="liguwe-doc-footer-edit-link-a">Comment this page on GitHub Issues</a></div></div>',15),t=[l];function a(s,r,n,h,p,u){return o(),c("div",null,t)}const m=e(i,[["render",a]]);export{g as __pageData,m as default};
