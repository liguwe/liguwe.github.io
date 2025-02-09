/**
 * @param {number[]}  nums
 * @param {number} k  0 的个数
 * @return {number}
 */
var longestOnes = function (nums, k) {
  // 左指针
  let left = 0;
  // 右指针
  let right = 0;

  // 结果：最长的连续的 1 的个数
  let res = 0;

  // 向右移动 right 指针，扩大窗口
  for (; right < nums.length; right++) {
    // 如果遇到 0，就将 k 减 1
    // 如果当前数字是 0，就减少可用的 k
    if (nums[right] === 0) {
      k--;
    }

    // 如果 k 小于 0，需要移动左指针
    // 说明窗口内 0 的数量超过了允许的最大值，这时需要收缩窗口
    if (k < 0) {
      // 如果左指针指向的是 0，增加可用的 k
      if (nums[left] === 0) {
        k++;
      }
      left++;
    }

    // 在每次迭代中更新最大窗口长度
    res = Math.max(res, right - left + 1);
  }

  return res;
};
