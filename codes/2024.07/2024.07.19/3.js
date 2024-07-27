/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    // 检查当前位置及左、右位置是否可以种花，需要满足以下条件：
    // 条件①： 当前元素为0
    if (flowerbed[i] === 0) {
      // 条件②： 第一个元素 或者 前一个元素为0时
      if (i === 0 || flowerbed[i - 1] === 0) {
        // 条件③： 最后一个元素 或者 后一个元素为0时
        if (i === flowerbed.length - 1 || flowerbed[i + 1] === 0) {
          flowerbed[i] = 1;
          n--;
        }
      }
    }
  }
  return n <= 0;
};
