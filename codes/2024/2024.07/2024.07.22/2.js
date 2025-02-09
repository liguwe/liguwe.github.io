/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var maxVowels = function (s, k) {
  // 辅助函数：判断字符是否为元音
  const isVowel = (c) => {
    return ["a", "e", "i", "o", "u"].includes(c);
  };

  // 结果
  let res = 0;
  // 记录滑动窗口中的元音字母个数，即【滑动窗口】中的元音字母个数，用于更新 res 的值
  let count = 0;

  // 初始化滑动窗口,先统计前 k 个元素中的元音字母个数
  for (let i = 0; i < k; i++) {
    if (isVowel(s[i])) {
      count++;
    }
  }

  // 更新 res 的值
  res = count;

  // 开始滑动窗口，从 k 开始，每次移动一位，动态维护 count 和 res 的值
  for (let i = k; i < s.length; i++) {
    // 先移除滑动窗口的前一个元素，如果是元音字母，则 count 减一
    if (isVowel(s[i - k])) {
      count--;
    }
    // 新添加的元素是元音字母，则 count 加一
    if (isVowel(s[i])) {
      count++;
    }

    // 更新 res 的值
    res = Math.max(res, count);

    // 如果 res 等于 k，直接返回 k,可以提前结束循环
    if (res === k) {
      break;
    }
  }

  return res;
};
