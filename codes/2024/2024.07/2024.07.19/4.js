/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  // ① 找到candies中的最大值
  const max = Math.max(...candies);
  // ② 遍历candies数组，判断是否满足条件
  return candies.map((candy) => candy + extraCandies >= max);
};
