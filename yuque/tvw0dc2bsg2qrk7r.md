---
title: 0007.AL.最小硬币数
urlname: tvw0dc2bsg2qrk7r
date: '2023-03-19 10:57:07 +0800'
tags: []
categories: []
---

# 最小硬币数

> [https://leetcode.cn/problems/coin-change/](https://leetcode.cn/problems/coin-change/)

![](https://blog-1310531898.cos.ap-beijing.myqcloud.com//FkATxOO47-UNZ5C3Fa025dwsRiQZ.png)

## 动态规划的要点

这是一个经典的动态规划问题，因为它具有`「最优子结构」`的。即子问题间 `互相独立`

- 动态规划问题的一般形式就是`求最值`
- 求解动态规划的核心问题是`穷举`
- 具备`「最优子结构」`，即是否能够通过`子问题的最值`得到原问题的最值
- 是否 存在`「重叠子问题」`，如果存在需要 使用`「备忘录」`或者`「DP table」`来优化穷举过程
- `重叠子问题`、`最优子结构`、`状态转移方程`就是 **动态规划三要素**

## 如何列出 `状态转移方程`

dp 函数：`dp(n)` 表示，输入一个目标金额 `n`，返回凑出目标金额 `n` 所需的最少硬币数量

![](https://blog-1310531898.cos.ap-beijing.myqcloud.com//Fl-SIbQh_fIw4dTGa7M7m_wKaqQ2.png)

- 第一步、确定 `base case`  , 比如 需要 找零  `0元` ，那么最小的硬币数就为 `0`
- 第二步、确定`状态`， 即`原问题和子问题`中会变化的`变量`  ， 所以，该问题的状态 为 `找零多少钱
- 第三步、确定`选择`  ，即 **导致 状态 变化的行为** ，即 `需要找零多少钱` 会变化呢？因为每次选择了一枚硬币，比如会导致 `状态`的变化
- 第四步、明确 `dp函数`   或者 `dp数组`
  - **dp 函数**，自顶向下`递归`的动态规划 解法 ，看下面模板
  - `dp数组` ， 自底向上`迭代`的动态规划，看下面模板

## 自顶向下的`递归`解法

```javascript
// 模板
function dp('所有可能的选择', '状态 1','状态 2 ...'){
    //</div>:base case
    if('状态' === 1) return 'xxx'
    if('状态' === 1) return 'xxx'
    //</div>:需要返回的最值
    let res = ''
    for (let '选择' of '所有可能的选择'){
        // # 此时的状态已经因为做了选择而改变
        res =  dp('所有可能的选择', '状态 1','状态 2 ...')
    }
    return res;
}

// 对应下面的代码
function dp (coins, amount) {
    // base case
    if (amount === 0) {
        return 0;
    }
    if (amount < 0) {
        return -1
    }
    //</div>:res为最终返回的结果，即最少几枚硬币
    let res = Infinity;
    for (let coin of coins) {
        // 计算子问题的结果
        let subProblem = dp(coins, amount - coin);
        // 子问题无解则跳过
        if (subProblem === -1) continue;
        // 能到这儿，说明能够继续
        // 在子问题中选择最优解，然后加一
        res = Math.min(res, subProblem + 1);
    }
    return res === Infinity ? -1 : res;
};
```

分析一下时间复杂度：

![](https://blog-1310531898.cos.ap-beijing.myqcloud.com//FszSnAjjVLN28wzt7ncyjG2aUsJL.png)

下面看看算法复杂度：

- `子问题`总数为 `递归树的节点个数`，但是如何`剪枝` 依赖于 硬币的`名额`，算出有多少子问题比较困难，所以我们就按照`最坏情况`来估计复杂度，`最坏情况`是`全用面额为 1 的硬币`
  - 类比 `fib 数列` ，如何`剪枝` 就比较方便， 即 `fib(n-1) + fib(n-2)` ,   可参考[[999.AL.斐波那契数列]] 里的`递归树`
- 假设目标金额为 `n`，给定的硬币个数为 `k`，那么`递归树`最坏情况下高度为 `n`（`全用面额为 1 的硬币`） 即 `最终递归完成需要到树的最底部`， 然后再假设这是一 `棵满k叉树` ，则节点的总数在 `k^n` 这个数量级。
- 接下来看`每个子问题的复杂度`，由于每次递归包含一个 for 循，复杂度为 `O(k)`，相乘得到总时间复杂度为 `O(k*k^n) ===> O(k^n)`

> [!info]
> 简单总结就是： 复杂度等于 `子问题个数 * 每个子问题的复杂度`
> 所以，因为这个问题的`子问题个数`就是`指数级别`，所以肯定是指数级别的复杂度

> [!tip]
> 注意以上代码模板的选 `状态` 与 `选择`

## 自顶向下的`递归`解法 - 带备忘录

```javascript
// 具体实现
function fn(coins, amount) {
  const memo = new Array(amount + 1).fill(-999);
  function dp(coins, amount) {
    //</div>: base case
    if (amount === 0) return 0;
    if (amount < 0) return -1;
    //</div>:已经被存储过了，就放在这儿
    if (memo[amount] !== -999) return memo[amount];
    //</div>:res为最终返回的结果，即最少几枚硬币
    let res = Infinity;
    for (let coin of coins) {
      let subProblem = dp(coins, amount - coin);
      if (subProblem === -1) continue;
      res = Math.min(res, subProblem + 1);
    }
    memo[amount] = res === Infinity ? -1 : res;
    return memo[amount];
  }
  return dp(coins, amount);
}

console.log(fn([1, 2, 5], 10)); // 2
console.log(fn([1, 24, 100], 200)); //  2
console.log(fn([5, 10, 20, 50], 201)); // -1
```

很显然「备忘录」大大减小了`子问题数目`，完全消除了`子问题的冗余`，所以子问题总数不会超过金额数 `n`，即子问题数目为 `O(n)`。处理一个子问题的时间不变，仍是 `O(k)`，所以总的时间复杂度是 `O(kn)`

## 自底向上的 dp 数组的迭代解法 -  dp table

- `dp 函数` 体现在`函数参数`
- `dp 数组` 体现在`数组索引`

dp 数组的定义：当目标金额为 `i` 时，至少需要 `dp[i]` 枚硬币凑出

先看看模板：

```javascript
# 自底向上迭代的动态规划
# 初始化 base case
dp[0][0][...] = base case
# 进行状态转移
for 状态1 in 状态1的所有取值：
    for 状态2 in 状态2的所有取值：
        for ...
            dp[状态1][状态2][...] = 求最值(选择1，选择2...)

// 代码实现
function fn(coins, amount) {
    //</div>:第一步：初始化
    //</div>: dp 数组的定义：当目标金额为 `i` 时，至少需要 `dp[i]` 枚硬币凑出
    //</div>: 初始化为 amount + 1 就相当于初始化为正无穷
    //</div>: 因为最多dp[amount] 最大只能等于 amount ,即都找零 1 块钱的
    const dp = new Array(amount + 1).fill(amount + 1);

	//</div>:第二步 base case
    dp[0] = 0;

    //</div>:第三步 嵌套循环
    // 外层 for 循环在遍历所有状态的所有取值
    for (let i = 0; i < dp.length; i++) {
        //</div>:内层 for 循环在求所有选择的最小值
        for (let coin of coins) {
            // 子问题无解，跳过
            if (i - coin < 0) {
                continue;
            }
            dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
        }
    }

    return (dp[amount] === amount + 1) ? -1 : dp[amount];
}

console.log(fn([1, 2, 5], 10));  // 2
console.log(fn([1, 24, 100], 200));  //  2
console.log(fn([5, 10, 20, 50], 201)); // -1
```

- 时间复杂度看`几层遍历`， 所以是  `O(kn)`（假设 `k` 为 硬币数，`n` 为找零多少钱）
- 空间复杂度 `O(n)`

## 最后，总结几个关键点

- `dp 递归函数 - 备忘录`、`dp 数组迭代（DP table）` , 在追求“`如何聪明地穷举`”。`用空间换时间`的思路，是降低时间复杂度的不二法门
- 配合  [[999.AL.斐波那契数列]]   多理解，多动手
- `自顶向下`和`自底向上`
  - `自顶向下` ，本质是递归，即"顶"问题，拆解为"子问题" 去解决，复杂度依赖于 `子问题个数`
  - `自底向上` ，本质是数组迭代，复杂度依赖于`几重迭代`
- 动态规划问题，核心的是写出`暴力解法` ，然后才是 `空间换时间`的优化思路

## 参考

- [https://labuladong.github.io/algo/di-er-zhan-a01c6/dong-tai-g-a223e/dong-tai-g-1e688/](https://labuladong.github.io/algo/di-er-zhan-a01c6/dong-tai-g-a223e/dong-tai-g-1e688/)
