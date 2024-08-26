/**
 * @param {number[]} prices
 * @return {number}
 */

/**
 * @description 解题思路
 * ① base case: 如果 prices 为空，返回 0
 * ② 初始化买入价格 buy 为 prices[0]，初始化利润 profit 为 0
 * ③ 遍历 prices
 *    1、如果当前价格比买入价格低，就更新买入价格
 *    2、否则，更新利润
 * ④ 返回利润
 *
 * */
var maxProfit = function(prices) {
    // base case
    if (prices.length === 0) {
        return 0;
    }
    // 买入价格
    let buy = prices[0];
    // 利润
    let profit = 0;
    // 遍历
    for (let i = 1; i < prices.length; i++) {
        // 如果当前价格比买入价格低，就更新买入价格
        if (prices[i] < buy) {
            buy = prices[i];
        } else {
            // 否则，计算利润
            profit = Math.max(profit, prices[i] - buy);
        }
    }
    return profit;
};
