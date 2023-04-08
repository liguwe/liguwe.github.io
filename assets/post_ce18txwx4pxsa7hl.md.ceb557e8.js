import{_ as e,o,c,N as d}from"./chunks/framework.1f285265.js";const x=JSON.parse('{"title":"0003.FE.如何检测一个页面是否在前台运行或如何检测页面的可见性","description":"","frontmatter":{"title":"0003.FE.如何检测一个页面是否在前台运行或如何检测页面的可见性","urlname":"ce18txwx4pxsa7hl","date":"2023-03-17 08:36:00 +0800","tags":[],"categories":[]},"headers":[],"relativePath":"post/ce18txwx4pxsa7hl.md"}'),a={name:"post/ce18txwx4pxsa7hl.md"},t=d('<h1 id="如何检测一个页面是否在前台运行或如何检测页面的可见性" tabindex="-1">如何检测一个页面是否在前台运行或如何检测页面的可见性 <a class="header-anchor" href="#如何检测一个页面是否在前台运行或如何检测页面的可见性" aria-label="Permalink to &quot;如何检测一个页面是否在前台运行或如何检测页面的可见性&quot;">​</a></h1><h2 id="首先说说为什么需要检测" tabindex="-1">首先说说为什么需要检测 <a class="header-anchor" href="#首先说说为什么需要检测" aria-label="Permalink to &quot;首先说说为什么需要检测&quot;">​</a></h2><p>页面被<code>最小化</code>或<code>隐藏</code>或者在<code>后台运行</code>，那么<code>轮询服务器</code>或<code>更新动画</code>等动作就不必要了。</p><h2 id="常见的几种方法" tabindex="-1">常见的几种方法 <a class="header-anchor" href="#常见的几种方法" aria-label="Permalink to &quot;常见的几种方法&quot;">​</a></h2><p>1、<code>document.hidden</code> 只读属性</p><p>2、<code>document.visibilityState</code> 检测页面可见性，返回只读属性</p><p>3、<code>visibilitychange</code> 事件</p><p>4、<code>window.addEventListener()</code>方法监听 <code>blur</code> 和 <code>focus</code> 事件来检测页面是否在前台或后台。当页面失去焦点时触发 <code>blur</code> 事件，而当页面重新获得焦点时触发 <code>focus</code> 事件。亲测可以</p><p>5、<code>document.hasFocus()</code> 检测页面是否在前台，即是否获得焦点</p><p>6、一些页面生命周期的方法也可以</p><ul><li><code>pagehide</code></li><li><code>beforeunload</code></li><li><code>unload</code></li><li><code>pageshow</code></li></ul><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-label="Permalink to &quot;最后&quot;">​</a></h2><p>注意兼容性，另外整体可以分为两类</p><ul><li><code>document</code>上的<code>属性值</code>或者<code>具体方法</code></li><li>监听特定事件</li></ul>',14),i=[t];function l(r,s,n,p,h,u){return o(),c("div",null,i)}const m=e(a,[["render",l]]);export{x as __pageData,m as default};
