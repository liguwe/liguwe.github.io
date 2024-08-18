/**
 * @description 最大子数组和，滑动窗口思路
 * @param {number[]} nums
 * @return {number} 返回最大子数组和
 */
var maxSubArray = function (nums) {
  let res = -10000 * 100000;
  // ①  初始化左指针，右指针，窗口内元素的和
  let left = 0; // 左指针
  let right = 0; // 右指针
  let windowSum = 0; // 窗口内元素的和

  // ②  遍历，使用滑动窗口思路
  while (right < nums.length) {
    // ③  更新 windowSum
    windowSum += nums[right];
    // ④  更新右指针
    right++;
    // ⑤  更新结果
    res = Math.max(res, windowSum);
    // ⑥  判断是否需要收缩左指针
    while (windowSum < 0) {
      // ⑦  更新 windowSum
      windowSum -= nums[left];
      left++;
    }
  }
  return res;
};
