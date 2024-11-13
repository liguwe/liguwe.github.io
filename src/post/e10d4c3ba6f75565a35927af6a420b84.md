
# 斐波那契数列


`#算法/动态规划` 

> 它不是`动态规划问题`，但是对`于理解动态规划`很有帮助！


## 目录
<!-- toc -->
 ## 1. 题目 

| LeetCode                                                                 | 力扣                                                           | 难度  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------ | --- |
| [509. Fibonacci Number](https://leetcode.com/problems/fibonacci-number/) | [509. 斐波那契数](https://leetcode.cn/problems/fibonacci-number/) | 🟢  |
|                                                                          |                                                              |     |


![|496](https://od-1310531898.cos.ap-beijing.myqcloud.com/202303181734365.png)

## 2. `自顶向下`的暴力递归解法

```typescript
var fib = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
};
```

算法复杂度，如下图，即`子问题的个数 = O(2^n)`  指数级别，`爆炸`，因为有`重叠子问题` 

![图片&文件](./files/20241111.png)

## 3. `自顶向下`的递归解法：带备忘录优化

所谓自顶向下，即 `原问题` 拆解为`子问题` ，`递归`子问题，最终得出`原问题`的答案

```typescript hl:22

// 解决重叠子问题 - 带备忘录的递归解法
var fib = function (n) {
  // 备忘录全初始化为 0
  let memo = new Array(n + 1).fill(0);
  // 注意，这里利用了闭包，把memo传入，能够保证不销毁
  // 进行带备忘录的递归
  return dp(memo, n);
};

// 带着备忘录进行递归
// 两个参数，传入 memo 数组，添加一个参数
var dp = function (memo, n) {

  // base case
  if (n === 0 || n === 1) return n;
  // 已经计算过，不用再计算了
  if (memo[n] !== 0) return memo[n];
  // 否则，重新计算，并且存到memo中
  
  // 这里利用了闭包，把memo传入
  memo[n] = dp(memo, n - 1) + dp(memo, n - 2);
  return memo[n];
  
};
```

算法的时间复杂度，即 `子问题的个数 = O(n)` ， 空间复杂度 `O(n)`

****

**如下图：**

![1000](#)      

## 4. 自低向上的迭代解法： `dp数组`

![|592](https://cdn.nlark.com/yuque/0/2024/png/687303/1709475955927-3df209e7-9318-4f7d-848f-cc79870f904d.png)

```typescript
/*************************************************
 *</div>:解法3： DP table 【自低向上】dp 数组的迭代（递推）解法
 * //</div>:所谓 【自低向上】 即 推倒过程，从0，1 推倒出 f(2)等
 * 算法的时间复杂度是 O(n) ，空间复杂度O(n)
 ************************************************/
function fib (N) {
  // init var
  if (N === 0) return 0;
  let dp = new Array(N + 1).fill(0);
  
  // base case
  dp[0] = 0;
  dp[1] = 1;
  
  //// 状态转移方程
  for (let i = 2; i <= N; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[N];
};
```

算法的时间复杂度是`O(n)` ，空间复杂度`O(n)`

## 5. 状态转移方程

其实，就是`转态转移方程`的实现，如下：

![图片&文件](./files/20241111-2.png)

## 6. 空间复杂度降为 `O(1)`
```typescript
// 进一步优化，把二维的dp table 压成一维的,即只要维护两个变量 prev  curr
function fib (n) {
  if (n === 0 || n === 1) return n;
  let prev = 1, curr = 1;
  
  for (let i = 2; i < n; i++) {
    let sum = prev + curr;
    prev = curr;
    curr = sum;
  }

  return curr;
};
```

## 7. 最后

1. `dp数组`解法可能进一步压缩空间复杂度，而通过`递归函数解法`不一定能够压缩
2. 说说 `dp数组` 与 `dp函数` 区别 ？

