/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let left = 0; // 左指针
  let right = 0; // 右指针
  let zeroCount = 0; // 0 的个数
  let res = 0; // 最长的连续的 1 的个数

  // 使用快指针，遍历数组
  for (; right < nums.length; right++) {
    // 如果当前元素是 0，就增加 0 的个数
    if (nums[right] === 0) {
      zeroCount++;
    }

    // 如果 0 的个数大于 1，就需要移动左指针,来减少0的数量
    // 说明窗口内 0 的数量超过了允许的最大值，这时需要收缩窗口
    while (zeroCount > 1) {
      // 如果左指针对应的元素是 0，就减少 0 的个数
      if (nums[left] === 0) {
        zeroCount--;
      }
      // 左指针右移
      left++;
    }

    // 在每次迭代中更新最大窗口长度
    res = Math.max(res, right - left + 1);
  }

  // 题目要求返回的是 1 的个数，所以需要减去 1
  // 如果整个数组都是1，我们仍然需要删除一个元素
  return res < nums.length ? res - 1 : nums.length - 1;
};
