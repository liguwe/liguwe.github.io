
# 动态规划解题套路框架（最小零钱）

`#算法/动态规划` 


## 目录
<!-- toc -->
 ## 1. 题目 

| LeetCode                                                                 | 力扣                                                           | 难度  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------ | --- |
| [322. Coin Change](https://leetcode.com/problems/coin-change/)           | [322. 零钱兑换](https://leetcode.cn/problems/coin-change/)       | 🟠  |
| [509. Fibonacci Number](https://leetcode.com/problems/fibonacci-number/) | [509. 斐波那契数](https://leetcode.cn/problems/fibonacci-number/) | 🟢  |

![|504](https://od-1310531898.cos.ap-beijing.myqcloud.com/202303181621816.png)

## 2. 动态规划的 `要点`

这是一个经典的动态规划问题，因为它具有`「最优子结构」`的。即子问题间 `互相独立`

+ 动态规划问题的一般形式就是 `求最值`
+ 求解动态规划的核心问题是 `穷举`
+ 具备「最优子结构」，即是否能够通过子问题的最值得到原问题的最值
+ 是否存在`「重叠子问题」`，如果存在需要 使用`「备忘录」`或者 `「DP table」` 来优化穷举过程
+ `重叠子问题`、`最优子结构`、`状态转移方程`就是 **动态规划三要素**

## 3. 如何列出 `状态转移方程`

dp 函数：`dp(n)` 表示，输入一个目标金额 `n`，返回凑出目标金额 `n` 所需的最少硬币数量

![|592](https://od-1310531898.cos.ap-beijing.myqcloud.com/202303170806731.png)

### 3.1. 第一步、确定 `base case`  

比如需要找零  `0元` ，那么最小的硬币数就为 `0`

### 3.2. 第二步、确定`状态` 与 `选择`

+ 状态 ，即`原问题 和 子问题`中会变化的变量  ， 所以，该问题的状态 为 `找零多少钱`
+ 选择  
    - 即 导致状态变化的行为 
    - 即 `需要找零多少钱` 会变化呢？因为每次选择了一枚硬币，比如会导致 `状态`的变化

### 3.3. 第三步、明确 `dp函数` 或 `dp数组` 

+ dp函数
    - 自顶向下 `递归` 的动态规划解法 ，看下面模板
+ dp数组 
    -  自底向上`迭代`的动态规划，看下面模板

## 4. 自顶向下的`递归`解法

### 4.1. 模板代码

```javascript hl:3,11
// 模板
function dp('所有可能的选择', '状态 1','状态 2 ...'){
    // ::::base case
    if('状态' === 1) return 'xxx'
    if('状态' === 1) return 'xxx'
    
    // ::::需要返回的最值
    let res = ''
    for (let '选择' of '所有可能的选择'){
        // # 此时的状态已经因为做了选择而改变
        res =  dp('所有可能的选择', '状态 1','状态 2 ...')
    }
    return res;
}
```

### 4.2. 实际代码

```javascript hl:18
// 参数一：所有可能的选择 coins
// 参数二：状态，会变的东西
function dp (coins, amount) {
    // base case
    if (amount === 0) {
        return 0;
    }
    if (amount < 0) {
        return -1
    }
    // ::::res为最终返回的结果，即最少几枚硬币
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

### 4.3. 分析一下`时间复杂度`

![|584](https://od-1310531898.cos.ap-beijing.myqcloud.com/202303181714402.png)

下面看看`算法复杂度`：

+ `子问题`总数为 `递归树的节点个数`，但是如何`剪枝` 依赖于 硬币的`名额`，算出有多少子问题比较困难，所以我们就按照`最坏情况`来估计复杂度，`最坏情况`是`全用面额为 1 的硬币` 
    - 类比 `fib 数列` ，如何`剪枝` 就比较方便， 即 `fib(n-1) + fib(n-2)` ,  可参考 [斐波那契数列](https://www.yuque.com/liguwe/agorithms/lqm69gi8zhp789mf) 里的 `递归树`
+ 假设目标金额为 `n`，给定的硬币个数为 `k`，那么`递归树`最坏情况下高度为 `n`（全用面额为 1 的硬币） 即 `最终递归完成需要到树的最底部`， 然后再假设这是 一棵满k叉树 ，则节点的总数在 `k^n` 这个数量级。
+ 接下来看`每个子问题的复杂度`，由于每次递归包含一个 for 循环，复杂度为 `O(k)`，相乘得到总时间复杂度为 `O(k*k^n) ===> O(k^n)`

简单总结就是： `复杂度等于子问题个数 * 每个子问题的复杂度`  
所以，因为这个问题的`子问题个数`就是`指数级别`，所以肯定是指数级别的复杂度

>  其实，知道`模板代码`后，只需要选 `状态` 与 `选择`

## 5. 自顶向下的`递归`解法：带备忘录

### 5.1. 具体代码实现

```javascript hl:11
// 具体实现
function fn(coins, amount) {
    const memo = new Array(amount+1).fill(-999);
    function dp(coins, amount) {
        // :::: base case
        if (amount === 0) return 0;
        if (amount < 0) return -1;
        // ::::已经被存储过了，就放在这儿
        if (memo[amount] !== -999) return memo[amount];
        // ::::res为最终返回的结果，即最少几枚硬币
        let res = Infinity;
        for (let coin of coins) {
            let subProblem = dp(coins, amount - coin);
            if (subProblem === -1) continue;
            res = Math.min(res, subProblem + 1);
        }
        memo[amount] = (res === Infinity ? -1 : res);
        return memo[amount];
    }
    return dp(coins, amount);
}

console.log(fn([1, 2, 5], 10));  // 2
console.log(fn([1, 24, 100], 200));  //  2
console.log(fn([5, 10, 20, 50], 201)); // -1
```

### 5.2. 复杂度分析

很显然「备忘录」大大减小了`子问题数目`，完全消除了`子问题的冗余`，所以子问题总数不会超过金额数 `n`，即子问题数目为 `O(n)`。处理一个子问题的时间不变，仍是 `O(k)`，所以总的时间复杂度是 `O(kn)`

## 6. 自底向上的 `dp数组` 的迭代解法

+ `dp 函数` 体现在 `函数参数`
+ `dp 数组` 体现在 `数组索引`

### 6.1. 明确 `dp 数组`的定义

当目标金额为 `i` 时，至少需要 `dp[i]` 枚硬币凑出

### 6.2. 模板代码

```javascript
# 自底向上迭代的动态规划

# 初始化 base case
dp[0][0][...] = base case

# 进行状态转移
for 状态1 in 状态1的所有取值：
    for 状态2 in 状态2的所有取值：
        for ...
            dp[状态1][状态2][...] = 求最值(选择1，选择2...)
```

### 6.3. 具体代码

```javascript hl:22,30
/**
 * @description 最小硬币数
 * @url https://leetcode-cn.com/problems/coin-change/
 * */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {

    // ::::初始化 dp 数组
    // ::::dp[i] 代表需要找零金额为 i 时，需要最小的硬币数
    const dp = [];
    for (let i = 0; i <= amount; i++) {
        dp[i] = Infinity;
    }

    // ::::base case
    dp[0] = 0;

    // ::::根据状态个数，决定嵌套层数，
    // ::::这里的状态个数是金额数，所以是 amount
    for (let i = 0; i <= amount; i++) {
        // :::: 选择：去遍历所有的硬币，然后做选择
        for (let coin of coins) {
            // ::::选择的硬币金额为 coin, 而需要找零金额为 i ，所以 i - coin 代表剩余金额

            // ::::如果剩余金额小于0，说明这个硬币不能用,继续
            if (i - coin < 0) continue;

            // 说明这个硬币可以用，所以需要找零金额为 i 时，需要最小的硬币数为 1 + dp[i - coin]
            // 所以最终需要取最小值，所以是 Math.min(dp[i], 1 + dp[i - coin])
            dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
        }
    }


    // :::::返回结果
    return dp[amount] === Infinity ? -1 : dp[amount];
};

```

### 6.4. 复杂度分析

+ 时间复杂度看`几层遍历`， 所以是  `O(kn)`（假设 `k` 为 硬币数，`n` 为找零多少钱）
+ 空间复杂度 `O(n)`

## 7. 总结

+ 动态规划问题，就两种解决思路
    - `dp 递归函数 - 备忘录`	
    - `dp 数组迭代（DP table`
+  在追求“`如何聪明地穷举`”。`用空间换时间`的思路，是降低时间复杂度的不二法门
+ 配合 [斐波那契数列](https://www.yuque.com/liguwe/agorithms/lqm69gi8zhp789mf) 多理解，多动手
+ `自顶向下`和`自底向上` 
    - `自顶向下` ，本质是递归，即"`顶`"问题，拆解为"子问题" 去解决，复杂度依赖于 `子问题个数`
    - `自底向上` ，本质是数组迭代，复杂度依赖于`几重迭代`
+ 动态规划问题，核心的是写出 `暴力解法` ，然后才是  `空间换时间` 的优化思路

