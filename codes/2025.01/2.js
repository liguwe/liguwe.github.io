/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const MAX_VAL = 10 ** 4 + 1;

  function dp(n) {
    let res = MAX_VAL;
    if (n === 0) return 0;
    if (n < 0) return -1;
    for (let coin of coins) {
      let sub = dp(n - coin);
      if (sub === -1) continue;
      res = Math.min(sub + 1, res);
    }
    return res === MAX_VAL ? -1 : res;
  }

  return dp(amount);
};
