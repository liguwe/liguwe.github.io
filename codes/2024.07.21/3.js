/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  // 用于记录重复元素的个数
  let map = new Map();
  // 初始化 map
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // 代表最大操作次数
  let count = 0;

  for (const num of nums) {
    // 需要的另一个数，即 num + need = k
    const need = k - num;
    // 确保 num 和 need 存在的个数都大于 0，才能进行操作
    if (map.get(need) > 0 && map.get(num) > 0) {
      // 如果 num === need，且 map 中的值小于 2，则不满足条件
      if (num === need && map.get(num) < 2) continue;

      // 更新 map 中的值
      map.set(num, map.get(num) - 1);
      map.set(need, map.get(need) - 1);
      // 更新 count
      count++;
    }
  }

  return count;
};
