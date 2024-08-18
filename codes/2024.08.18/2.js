/**
 * @description 最大子数组和，动态规划思路
 * @param {number[]} nums
 * @return {number} 返回最大子数组和
 */
var maxSubArray = function (nums) {

    // 返回结果
    let res = -10000 * 100000;

    // ①  dp[i] 表示以 nums[i] 结尾的连续子数组的最大和
    let dp = new Array(nums.length);

    // ②  base case
    dp[0] = nums[0];

    // ③ 遍历，使用状态转移方程得到 dp 数组
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
    }


    // 遍历 dp 数组，找到最大值
    // ④  遍历 dp 数组，找到最大值
    for (let i = 0; i < dp.length; i++) {
        res = Math.max(res, dp[i]);
    }
    return res;

};
