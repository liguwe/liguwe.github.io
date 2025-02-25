
# 买卖股票的最佳时机 II


`#leetcode`   `#2024/08/09`  `#算法/股票`   `#算法/贪心算法` 


## 目录
<!-- toc -->
 ## 题目及理解 

### 只能买卖一次的场景

前文 [12. 算法/3. 刷题篇/3. LeetCode 经典 150 题/7.  买卖股票的最佳时机|7.  买卖股票的最佳时机](/post/vZqwKUYY.html#12-算法/3-刷题篇/3-LeetCode-经典-150-题/7--买卖股票的最佳时机|7--买卖股票的最佳时机) 有讲只能买卖一次的场景，如果能够买卖多次呢？

### 能够买卖多次的场景：本题

![cos-blog-832-34-20241012](https://blog-1310531898.cos.ap-beijing.myqcloud.com/832-34-20241012/Pasted%20image%2020240809084132.png)

> 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

## 解题思路

### 思路一：贪心算法

**贪心算法** 

- 核心思想是：**只要今天的价格比昨天高，我们就进行买卖**
- 任何上涨的区间分解成若干个**相邻两天的小区间**
	- `Day 1: 10 ， Day 2: 15  ， Day 3: 20`
		- 我们可以看作是： (20 - 10) = (15 - 10) + (20 - 15)

#### 代码实现

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 最大利润
  let res = 0;

  // 遍历 prices
  for (let i = 0; i < prices.length - 1; i++) {
    // 如果当前价格比后一天的价格低，就买入，然后卖出
    if (prices[i] < prices[i + 1]) {
      res += prices[i + 1] - prices[i];
    }
  }

  // 返回最大利润
  return res;
};

```

#### 复杂度分析

- 时间复杂度是 `O(n)`，其中 n 是价格数组的长度，因为我们只遍历了数组一次。 
- 空间复杂度是 `O(1)`，因为我们只使用了一个额外的变量来存储利润。

### 思路二：动态规划

可参考 [12. 算法/3. 刷题篇/4. labuladong 算法刷题/1.  买卖股票的最佳时机 IV|1.  买卖股票的最佳时机 IV](/post/vZqwKUYY.html#12-算法/3-刷题篇/4-labuladong-算法刷题/1--买卖股票的最佳时机-IV|1--买卖股票的最佳时机-IV) ，这里不展开，此题还是建议使用贪心算法比较合适

## 错误记录

