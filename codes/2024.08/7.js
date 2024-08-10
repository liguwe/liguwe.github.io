/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  let n = prices.length;
  // 利润
  let res = 0;
  // 如果 n 为 0，返回 0, 无需交易，利润为 0
  // 如果 k 为 0，返回 0, 无法交易，利润为 0
  if (n === 0 || k === 0) {
    return 0;
  }

  // 初始化 dp 数组，三维数组
  // dp[i][k][0/1] 表示第 i 天，最多进行 k 次交易，持有/不持有股票时的利润
  let dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = [];
    for (let j = 0; j <= k; j++) {
      dp[i][j] = [];
      for (let l = 0; l < 2; l++) {
        dp[i][j][l] = 0;
      }
    }
  }

  // base case 1
  // 如果 k 为 0 , 且没有股票，利润为 0
  // 如果 k 为 0, 且有股票，利润为 -Infinity，用于表示不可能的情况，方便后续取最大值
  for (let i = 0; i < n; i++) {
    dp[i][0][0] = 0;
    dp[i][0][1] = -Infinity;
  }

  // 遍历 prices
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= k; j++) {
      // base case, i 为 -1 时，越界
      if (i === 0) {
        dp[i][j][0] = 0;
        dp[i][j][1] = -prices[i];
        continue;
      }
      dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]);
      dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i]);
    }
  }

  res = Math.max(dp[n - 1][k][0], dp[n - 1][k][1]);

  // 返回最大利润
  return res;
};
