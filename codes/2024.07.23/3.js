/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  // 前缀和数组
  // 注意：前缀和数组的长度为 nums.length + 1，第一个元素为 0，表示前 0 个元素的和
  // preSum[i] 表示前 i 个元素的和
  // 这种方式可以：避免判断边界条件
  let preSum = new Array(nums.length + 1).fill(0);
  // 初始化前缀和数组
  for (let i = 1; i <= nums.length; i++) {
    // 当前元素的前缀和 = 前一个元素的前缀和 + 当前元素
    preSum[i] = preSum[i - 1] + nums[i - 1];
  }

  // 根据前缀和判断左半边数组和右半边数组的元素和是否相同
  for (let i = 0; i < nums.length; i++) {
    // 当前元素之前的元素和 = 当前元素之后的元素的和
    // 当前元素右边的元素和 = 当前元素之前的元素的和，
    // 注意①：当前元素不参与计算
    // 注意②：preSum[nums.length] 表示整个数组的和，当前元素右边的元素和 = 整个数组的和 - 当前元素之后的元素的前缀和
    if (preSum[i] === preSum[nums.length] - preSum[i + 1]) {
      return i;
    }
  }

  return -1;
};
