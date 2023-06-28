import{_ as o,o as a,c,V as d,C as e}from"./chunks/framework.5e406744.js";const w=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"post/0013.md","filePath":"post/0013.md"}'),i={name:"post/0013.md"},t=d('<p>#算法/动态规划</p><h2 id="一、如何判断是否复合-最优子结构" tabindex="-1">一、如何判断是否复合 <code>最优子结构</code> <a class="header-anchor" href="#一、如何判断是否复合-最优子结构" aria-label="Permalink to &quot;一、如何判断是否复合 `最优子结构`&quot;">​</a></h2><ul><li>找<code>全校最高分</code>， ==&gt; 那么<code>每个班的最高分</code>，这是复合<code>最优子结构</code>的</li><li>找<code>全校最大分差</code>，并不能 通过找<code>每个班最大分差</code>来实现，这<code>不符合最优子结构</code><ul><li>最优子结构失效情况 =&gt; <strong>改造问题</strong> ，即找出全校最高分 和 最低分 ，不就可以<code>转化为第一个问题吗？</code></li></ul></li></ul><blockquote><p>一棵二叉树的最大值，通过分解为求<code>左右子树（子问题</code>）的最大值，所以也是<code>符合最优子结构</code>的，但是它不是动态规划问题。 <code>最优子结构</code>是动态规划的<code>必要条件</code>，即动态规划一定是<code>有最优子结构</code>的，一定是让你<code>求最值</code>的。</p></blockquote><h2 id="二、-如何判断是否有重叠子问题" tabindex="-1">二、 如何判断是否有<code>重叠子问题</code> <a class="header-anchor" href="#二、-如何判断是否有重叠子问题" aria-label="Permalink to &quot;二、 如何判断是否有`重叠子问题`&quot;">​</a></h2><p>1、画图，递归图，看看有没有<code>重复节点</code>，如 <code>fib</code> 问题，如下图：</p><p><img src="https://od-1310531898.cos.ap-beijing.myqcloud.com/202303270921755.png" alt="image.png"></p><p>2、通过<code>递归框架</code>判断，比如<code>状态 (i, j)</code> 转移到 <code>(i-1, j-1)</code> ，有<code>几种路径</code>？</p><ul><li>→ <code>dp(i - 1, j)</code> → <code>dp(i - 1, j-1)</code></li><li>→ <code>dp(i, j - 1)</code> → <code>dp(i - 1, j - 1)</code></li></ul><p><img src="https://od-1310531898.cos.ap-beijing.myqcloud.com/202303290855506.png" alt="image.png"></p><p>所以 <code>dp(i-1, j-1)</code> 会被多次计算，一定存在 <code>重叠子问题</code>，可以通过 <code>「备忘录」</code>或者<code>「DP table」</code> 来优化。</p><h2 id="三、为什么经常看到将-dp-数组的大小设置为-n-1-而不是-n" tabindex="-1">三、为什么经常看到将 <code>dp 数组</code>的大小设置为 <code>n + 1</code> 而不是 <code>n</code> ? <a class="header-anchor" href="#三、为什么经常看到将-dp-数组的大小设置为-n-1-而不是-n" aria-label="Permalink to &quot;三、为什么经常看到将 `dp 数组`的大小设置为 `n + 1` 而不是 `n` ?&quot;">​</a></h2><p>参考，[[0014.最小编辑距离@算法]] ，其实 dp数组大小设置多大，<strong>取决于是否能够正确处理 base case</strong> , 另外，其实设置大一点也是可以的。</p><h2 id="四、为什么动态规划遍历-dp-数组的方式五花八门-有的正着遍历-有的倒着遍历-有的斜着遍历。" tabindex="-1">四、为什么动态规划遍历 <code>dp 数组</code>的方式五花八门，有的<code>正着遍历</code>，有的<code>倒着遍历</code>，有的<code>斜着遍历</code>。 <a class="header-anchor" href="#四、为什么动态规划遍历-dp-数组的方式五花八门-有的正着遍历-有的倒着遍历-有的斜着遍历。" aria-label="Permalink to &quot;四、为什么动态规划遍历 `dp 数组`的方式五花八门，有的`正着遍历`，有的`倒着遍历`，有的`斜着遍历`。&quot;">​</a></h2><p>其实只需要关注<code>两点</code>：</p><p>1、<code>遍历的过程中</code>，所需的状态必须是已经计算出来的。 2、<code>遍历结束后</code>，存储结果的那个位置必须已经被计算出来。</p><p>比如还是 [[0014.最小编辑距离@算法]] 的示例，<code>dp[m][n]</code> 结果是通过 <code>dp[i-1][j]</code>, <code>dp[i][j-1],</code> <code>dp[i-1][j-1]</code> 转移而来，所以肯定是<code>正着遍历</code> ，如下图：</p><p><img src="https://od-1310531898.cos.ap-beijing.myqcloud.com/202304082004717.png" alt="image.png"></p><h3 id="正着遍历的场景有哪些" tabindex="-1">正着遍历的场景有哪些？ <a class="header-anchor" href="#正着遍历的场景有哪些" aria-label="Permalink to &quot;正着遍历的场景有哪些？&quot;">​</a></h3><p>待补充</p><h3 id="倒着遍历的场景有哪些" tabindex="-1">倒着遍历的场景有哪些？ <a class="header-anchor" href="#倒着遍历的场景有哪些" aria-label="Permalink to &quot;倒着遍历的场景有哪些？&quot;">​</a></h3><p>待补充</p><h3 id="斜着遍历的场景有哪些" tabindex="-1">斜着遍历的场景有哪些？ <a class="header-anchor" href="#斜着遍历的场景有哪些" aria-label="Permalink to &quot;斜着遍历的场景有哪些？&quot;">​</a></h3><p>待补充</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://labuladong.github.io/algo/di-er-zhan-a01c6/dong-tai-g-a223e/zui-you-zi-fbef6/" target="_blank" rel="noreferrer">https://labuladong.github.io/algo/di-er-zhan-a01c6/dong-tai-g-a223e/zui-you-zi-fbef6/</a></li></ul><hr>',27),l=e("div",{class:"liguwe-doc-footer"},[e("div",{class:"liguwe-doc-footer-edit-link"},[e("p",{class:"liguwe-doc-footer-p"},[e("svg",{t:"1687912573060",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1498"},[e("path",{d:"M854.6 370.6c-9.9-39.4 9.9-102.2 73.4-124.4l-67.9-3.6s-25.7-90-143.6-98c-117.8-8.1-194.9-3-195-3 0.1 0 87.4 55.6 52.4 154.7-25.6 52.5-65.8 95.6-108.8 144.7-1.3 1.3-2.5 2.6-3.5 3.7C319.4 605 96 860 96 860c245.9 64.4 410.7-6.3 508.2-91.1 20.5-0.2 35.9-0.3 46.3-0.3 135.8 0 250.6-117.6 245.9-248.4-3.2-89.9-31.9-110.2-41.8-149.6z m-204.1 334c-10.6 0-26.2 0.1-46.8 0.3l-23.6 0.2-17.8 15.5c-47.1 41-104.4 71.5-171.4 87.6-52.5 12.6-110 16.2-172.7 9.6 18-20.5 36.5-41.6 55.4-63.1 92-104.6 173.8-197.5 236.9-268.5l1.4-1.4 1.3-1.5c4.1-4.6 20.6-23.3 24.7-28.1 9.7-11.1 17.3-19.9 24.5-28.6 30.7-36.7 52.2-67.8 69-102.2l1.6-3.3 1.2-3.4c13.7-38.8 15.4-76.9 6.2-112.8 22.5 0.7 46.5 1.9 71.7 3.6 33.3 2.3 55.5 12.9 71.1 29.2 5.8 6 10.2 12.5 13.4 18.7 1 2 1.7 3.6 2.3 5l5 17.7c-15.7 34.5-19.9 73.3-11.4 107.2 3 11.8 6.9 22.4 12.3 34.4 2.1 4.7 9.5 20.1 11 23.3 10.3 22.7 15.4 43 16.7 78.7 3.3 94.6-82.7 181.9-182 181.9z","p-id":"1499",fill:"#10b981"})]),e("a",{href:"https://www.yuque.com/liguwe/post/0013",target:"_blank",class:"liguwe-doc-footer-edit-link-a"}," View this page on Yuque ")]),e("p",{class:"liguwe-doc-footer-p"},[e("svg",{t:"1687913054251",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5173"},[e("path",{d:"M853.333333 501.333333c-17.066667 0-32 14.933333-32 32v320c0 6.4-4.266667 10.666667-10.666666 10.666667H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667V213.333333c0-6.4 4.266667-10.666667 10.666667-10.666666h320c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32H170.666667c-40.533333 0-74.666667 34.133333-74.666667 74.666666v640c0 40.533333 34.133333 74.666667 74.666667 74.666667h640c40.533333 0 74.666667-34.133333 74.666666-74.666667V533.333333c0-17.066667-14.933333-32-32-32z",fill:"#10b981","p-id":"5174"}),e("path",{d:"M405.333333 484.266667l-32 125.866666c-2.133333 10.666667 0 23.466667 8.533334 29.866667 6.4 6.4 14.933333 8.533333 23.466666 8.533333h8.533334l125.866666-32c6.4-2.133333 10.666667-4.266667 14.933334-8.533333l300.8-300.8c38.4-38.4 38.4-102.4 0-140.8-38.4-38.4-102.4-38.4-140.8 0L413.866667 469.333333c-4.266667 4.266667-6.4 8.533333-8.533334 14.933334z m59.733334 23.466666L761.6 213.333333c12.8-12.8 36.266667-12.8 49.066667 0 12.8 12.8 12.8 36.266667 0 49.066667L516.266667 558.933333l-66.133334 17.066667 14.933334-68.266667z",fill:"#10b981","p-id":"5175"})]),e("a",{href:"https://github.com/liguwe/liguwe.github.io/blob/master/docs/0013.md",target:"_blank",class:"liguwe-doc-footer-edit-link-a"},"Edit this page on Github")]),e("p",{class:"liguwe-doc-footer-p"},[e("svg",{t:"1687912510038",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2280"},[e("path",{d:"M746.666667 106.666667a192 192 0 0 1 192 192v373.333333a192 192 0 0 1-192 192h-107.925334l-97.749333 90.496a42.666667 42.666667 0 0 1-57.984 0L385.28 864H277.333333a192 192 0 0 1-192-192V298.666667a192 192 0 0 1 192-192h469.333334z m0 64H277.333333a128 128 0 0 0-128 128v373.333333a128 128 0 0 0 128 128h107.925334a64 64 0 0 1 43.477333 17.045333L512 894.122667l83.264-77.077334a64 64 0 0 1 43.477333-17.045333H746.666667a128 128 0 0 0 128-128V298.666667a128 128 0 0 0-128-128zM512 426.666667a54.677333 54.677333 0 0 1 54.634667 54.698666A54.677333 54.677333 0 0 1 512 536.064a54.677333 54.677333 0 0 1-54.634667-54.698667A54.677333 54.677333 0 0 1 512 426.666667z m-196.693333 0a54.677333 54.677333 0 0 1 54.634666 54.698666 54.677333 54.677333 0 0 1-54.613333 54.698667 54.677333 54.677333 0 0 1-54.634667-54.698667A54.677333 54.677333 0 0 1 315.306667 426.666667z m393.386666 0a54.677333 54.677333 0 0 1 54.613334 54.698666 54.677333 54.677333 0 0 1-54.613334 54.698667 54.677333 54.677333 0 0 1-54.634666-54.698667A54.677333 54.677333 0 0 1 708.672 426.666667z",fill:"#10b981","p-id":"2281"})]),e("a",{href:"https://github.com/liguwe/liguwe.github.io/issues/new?title=0013.最优子结构原理 和 DP 数组遍历方向@算法&labels=liguwe.site",target:"_blank",class:"liguwe-doc-footer-edit-link-a"}," Comment this page on GitHub Issues ")]),e("p",{class:"liguwe-doc-footer-p"},[e("svg",{t:"1687912510038",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2280"},[e("path",{d:"M746.666667 106.666667a192 192 0 0 1 192 192v373.333333a192 192 0 0 1-192 192h-107.925334l-97.749333 90.496a42.666667 42.666667 0 0 1-57.984 0L385.28 864H277.333333a192 192 0 0 1-192-192V298.666667a192 192 0 0 1 192-192h469.333334z m0 64H277.333333a128 128 0 0 0-128 128v373.333333a128 128 0 0 0 128 128h107.925334a64 64 0 0 1 43.477333 17.045333L512 894.122667l83.264-77.077334a64 64 0 0 1 43.477333-17.045333H746.666667a128 128 0 0 0 128-128V298.666667a128 128 0 0 0-128-128zM512 426.666667a54.677333 54.677333 0 0 1 54.634667 54.698666A54.677333 54.677333 0 0 1 512 536.064a54.677333 54.677333 0 0 1-54.634667-54.698667A54.677333 54.677333 0 0 1 512 426.666667z m-196.693333 0a54.677333 54.677333 0 0 1 54.634666 54.698666 54.677333 54.677333 0 0 1-54.613333 54.698667 54.677333 54.677333 0 0 1-54.634667-54.698667A54.677333 54.677333 0 0 1 315.306667 426.666667z m393.386666 0a54.677333 54.677333 0 0 1 54.613334 54.698666 54.677333 54.677333 0 0 1-54.613334 54.698667 54.677333 54.677333 0 0 1-54.634666-54.698667A54.677333 54.677333 0 0 1 708.672 426.666667z",fill:"#10b981","p-id":"2281"})]),e("a",{href:"https://github.com/liguwe/liguwe.github.io/discussions/new?category=general&labels=liguwe.site?title=0013.最优子结构原理 和 DP 数组遍历方向@算法",target:"_blank",class:"liguwe-doc-footer-edit-link-a"}," Discuss this page on GitHub Discussions ")])]),e("p",{class:"liguwe-doc-footer-update-time"},[e("i",null,"Last updated：2023.03.27")]),e("div",{id:"liguwe-comment"})],-1),s=[t,l];function p(r,n,h,u,g,b){return a(),c("div",null,s)}const f=o(i,[["render",p]]);export{w as __pageData,f as default};
