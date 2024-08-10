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
