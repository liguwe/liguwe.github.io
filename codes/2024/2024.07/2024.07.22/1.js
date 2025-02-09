/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  // sum 用于记录滑动窗口中的元素之和
  let sum = 0;
  // 前 k 个元素之和，即滑动窗口的初始值，即【滑动窗口】的前 k 个元素之和
  // 初始化 sum，代表【滑动窗口】的前 k 个元素之和
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  // max 用于记录滑动窗口中元素之和的最大值
  let max = sum;

  // 开始滑动窗口，从 k 开始，每次移动一位，动态维护 sum 和 max 的值
  // 遍历数组，从 k 开始
  for (let i = k; i < nums.length; i++) {
    // 滑动窗口，每次移动一位
    sum = sum + nums[i] - nums[i - k];
    // 比较 sum 和 max 的大小，取最大值
    max = Math.max(max, sum);
  }

  // 最后返回 max / k，即最大平均值
  return max / k;
};
