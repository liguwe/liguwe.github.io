import{_ as e,o,c as d,V as a}from"./chunks/framework.c7a3dc5c.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"post/0013.md"}'),c={name:"post/0013.md"},i=a('<p>#算法/动态规划</p><h2 id="一、如何判断是否复合-最优子结构" tabindex="-1">一、如何判断是否复合 <code>最优子结构</code> <a class="header-anchor" href="#一、如何判断是否复合-最优子结构" aria-label="Permalink to &quot;一、如何判断是否复合 `最优子结构`&quot;">​</a></h2><ul><li>找<code>全校最高分</code>， ==&gt; 那么<code>每个班的最高分</code>，这是复合<code>最优子结构</code>的</li><li>找<code>全校最大分差</code>，并不能 通过找<code>每个班最大分差</code>来实现，这<code>不符合最优子结构</code><ul><li>最优子结构失效情况 =&gt; <strong>改造问题</strong> ，即找出全校最高分 和 最低分 ，不就可以<code>转化为第一个问题吗？</code></li></ul></li></ul><blockquote><p>一棵二叉树的最大值，通过分解为求<code>左右子树（子问题</code>）的最大值，所以也是<code>符合最优子结构</code>的，但是它不是动态规划问题。 <code>最优子结构</code>是动态规划的<code>必要条件</code>，即动态规划一定是<code>有最优子结构</code>的，一定是让你<code>求最值</code>的。</p></blockquote><h2 id="二、-如何判断是否有重叠子问题" tabindex="-1">二、 如何判断是否有<code>重叠子问题</code> <a class="header-anchor" href="#二、-如何判断是否有重叠子问题" aria-label="Permalink to &quot;二、 如何判断是否有`重叠子问题`&quot;">​</a></h2><p>1、画图，递归图，看看有没有<code>重复节点</code>，如 <code>fib</code> 问题，如下图：</p><p><img src="https://od-1310531898.cos.ap-beijing.myqcloud.com/202303270921755.png" alt="image.png"></p><p>2、通过<code>递归框架</code>判断，比如<code>状态 (i, j)</code> 转移到 <code>(i-1, j-1)</code> ，有<code>几种路径</code>？</p><ul><li>→ <code>dp(i - 1, j)</code> → <code>dp(i - 1, j-1)</code></li><li>→ <code>dp(i, j - 1)</code> → <code>dp(i - 1, j - 1)</code></li></ul><p><img src="https://od-1310531898.cos.ap-beijing.myqcloud.com/202303290855506.png" alt="image.png"></p><p>所以 <code>dp(i-1, j-1)</code> 会被多次计算，一定存在 <code>重叠子问题</code>，可以通过 <code>「备忘录」</code>或者<code>「DP table」</code> 来优化。</p><h2 id="三、为什么经常看到将-dp-数组的大小设置为-n-1-而不是-n" tabindex="-1">三、为什么经常看到将 <code>dp 数组</code>的大小设置为 <code>n + 1</code> 而不是 <code>n</code> ? <a class="header-anchor" href="#三、为什么经常看到将-dp-数组的大小设置为-n-1-而不是-n" aria-label="Permalink to &quot;三、为什么经常看到将 `dp 数组`的大小设置为 `n + 1` 而不是 `n` ?&quot;">​</a></h2><p>参考，[[0014.最小编辑距离@算法]] ，其实 dp数组大小设置多大，<strong>取决于是否能够正确处理 base case</strong> , 另外，其实设置大一点也是可以的。</p><h2 id="四、为什么动态规划遍历-dp-数组的方式五花八门-有的正着遍历-有的倒着遍历-有的斜着遍历。" tabindex="-1">四、为什么动态规划遍历 <code>dp 数组</code>的方式五花八门，有的<code>正着遍历</code>，有的<code>倒着遍历</code>，有的<code>斜着遍历</code>。 <a class="header-anchor" href="#四、为什么动态规划遍历-dp-数组的方式五花八门-有的正着遍历-有的倒着遍历-有的斜着遍历。" aria-label="Permalink to &quot;四、为什么动态规划遍历 `dp 数组`的方式五花八门，有的`正着遍历`，有的`倒着遍历`，有的`斜着遍历`。&quot;">​</a></h2><p>其实只需要关注<code>两点</code>：</p><p>1、<code>遍历的过程中</code>，所需的状态必须是已经计算出来的。 2、<code>遍历结束后</code>，存储结果的那个位置必须已经被计算出来。</p><p>比如还是 [[0014.最小编辑距离@算法]] 的示例，<code>dp[m][n]</code> 结果是通过 <code>dp[i-1][j]</code>, <code>dp[i][j-1],</code> <code>dp[i-1][j-1]</code> 转移而来，所以肯定是<code>正着遍历</code> ，如下图：</p><p><img src="https://od-1310531898.cos.ap-beijing.myqcloud.com/202304082004717.png" alt="image.png"></p><h3 id="正着遍历的场景有哪些" tabindex="-1">正着遍历的场景有哪些？ <a class="header-anchor" href="#正着遍历的场景有哪些" aria-label="Permalink to &quot;正着遍历的场景有哪些？&quot;">​</a></h3><p>待补充</p><h3 id="倒着遍历的场景有哪些" tabindex="-1">倒着遍历的场景有哪些？ <a class="header-anchor" href="#倒着遍历的场景有哪些" aria-label="Permalink to &quot;倒着遍历的场景有哪些？&quot;">​</a></h3><p>待补充</p><h3 id="斜着遍历的场景有哪些" tabindex="-1">斜着遍历的场景有哪些？ <a class="header-anchor" href="#斜着遍历的场景有哪些" aria-label="Permalink to &quot;斜着遍历的场景有哪些？&quot;">​</a></h3><p>待补充</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://labuladong.github.io/algo/di-er-zhan-a01c6/dong-tai-g-a223e/zui-you-zi-fbef6/" target="_blank" rel="noreferrer">https://labuladong.github.io/algo/di-er-zhan-a01c6/dong-tai-g-a223e/zui-you-zi-fbef6/</a></li></ul><hr><div class="liguwe-doc-footer"><p class="liguwe-doc-footer-update-time"><i>Last updated：2023.03.27</i></p><div class="liguwe-doc-footer-edit-link"><a href="https://www.yuque.com/liguwe/post/0013" target="_blank" class="liguwe-doc-footer-edit-link-a">View this page on Yuque（语雀）</a><a href="https://github.com/liguwe/liguwe.github.io/issues/new?title=0013.最优子结构原理 和 DP 数组遍历方向@算法&amp;labels=liguwe.site" target="_blank" class="liguwe-doc-footer-edit-link-a">Comment this page on GitHub Issues</a></div></div>',28),t=[i];function l(p,r,n,s,h,u){return o(),d("div",null,t)}const m=e(c,[["render",l]]);export{b as __pageData,m as default};
