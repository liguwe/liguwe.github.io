/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let n = nums.length;
  // 从 nums[i] 跳到最后，至少需要 dp[i] 步
  let dp = new Array(n).fill(Number.MAX_VALUE);

  // 站在最后一个位置，不需要跳
  dp[n - 1] = 0;

  for (let i = n - 2; i >= 0; i--) {
    // 站在当前位置，最多能跳 i + num[i] ，但也不能超过数组长度
    let m = Math.min(i + nums[i], n - 1);
    // 从所有可能的跳跃中选择最小步数
    for (let j = i + 1; j <= m; j++) {
      dp[i] = Math.min(dp[i], dp[j] + 1);
    }
  }
  return dp[0];
};
