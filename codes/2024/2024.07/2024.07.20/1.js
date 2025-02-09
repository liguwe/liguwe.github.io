/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  // base case
  if (nums.length < 3) {
    return false;
  }

  // 先定义两个最大值
  // first 为第一个最大值
  let first = Number.MAX_SAFE_INTEGER;
  // second 为第二个最大值
  let second = Number.MAX_SAFE_INTEGER;

  // 遍历数组
  for (let i = 0; i < nums.length; i++) {
    // ① 当当前元素小于第一个最大值时，确保 first 是遍历到当前元素之前的最小值
    if (nums[i] <= first) {
      // 更新第一个最大值
      first = nums[i];
      //②  用于更新第二小值 second，确保 second 是遍历到当前元素之前的第二小值，并且大于 first。
    } else if (nums[i] <= second) {
      // 当当前元素小于第二个最大值时
      // 更新第二个最大值
      second = nums[i];
      //③ 否则， 当 num 大于 second 时，说明找到了一个递增的三元组，返回 true
    } else {
      // 当当前元素大于第二个最大值时
      // 返回 true
      return true;
    }
  }

  return false;
};
