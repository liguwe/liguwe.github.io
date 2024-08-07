/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 数组分割
var rotate = function (nums, k) {
  // base 1 : 处理 k 大于数组长度的情况
  k %= nums.length;

  // base 2 : 如果 k 为 0 或数组长度为 0 或 1，无需旋转
  if (k === 0 || nums.length <= 1) {
    return;
  }

  // 翻转 ① : 翻转整个数组
  reverse(nums, 0, nums.length - 1);
  // 翻转 ② : 翻转前 k 个元素
  reverse(nums, 0, k - 1);
  // 翻转 ③ : 翻转后 n - k 个元素
  reverse(nums, k, nums.length - 1);
};

/**
 * @description 翻转数组，从 start 到 end
 * */
function reverse(nums, start, end) {
  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}
