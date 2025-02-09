/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let slow = 0; // 慢指针
  let fast = 0; // 快指针

  // 使用快慢指针，遍历字符串 t
  while (fast < t.length) {
    // 当 s[slow] 与 t[fast] 相等时，慢指针向后移动一位
    if (s[slow] === t[fast]) {
      slow++;
    }
    // 快指针向后移动一位，正常速度移动
    fast++;
  }
  // 如果慢指针的值等于 s 的长度，说明 s 是 t 的子序列
  return slow === s.length;
};
