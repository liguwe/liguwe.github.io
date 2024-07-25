/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  // 使用集合存储数组中的元素，方便查找，判断是否存在
  const set = new Set(nums);
  // 用于记录最长连续序列的长度
  let longest = 0;
  // 遍历数组中的元素
  // 直接遍历 set 集合，去重也没关系
  for (const num of set) {
    // 当前元素的前一个元素不存在时，才开始计算连续序列的长度
    // 这样可以避免重复计算
    if (!set.has(num - 1)) {
      // 当前元素
      let currentNum = num;
      // 当前连续序列的长度
      let currentStreak = 1;
      // 当前元素的后一个元素存在时，就继续计算连续序列的长度
      while (set.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }
      // 更新最长连续序列的长度
      longest = Math.max(longest, currentStreak);
    }
  }
  return longest;
};
