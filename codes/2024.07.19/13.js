/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // 前缀积
  const prefix = new Array(nums.length).fill(1);
  // 后缀积
  const suffix = new Array(nums.length).fill(1);

  // 初始化前缀积
  for (let i = 1; i < nums.length; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  // 初始化后缀积
  for (let i = nums.length - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * nums[i + 1];
  }

  // 结果
  const result = [];
  // 遍历数组，计算结果，即前缀积 * 后缀积
  for (let i = 0; i < nums.length; i++) {
    result.push(prefix[i] * suffix[i]);
  }
  return result;
};
