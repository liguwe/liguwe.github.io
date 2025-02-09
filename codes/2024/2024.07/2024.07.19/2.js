/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  // 如果str1和str2的长度拼接不相等, 则返回空字符串
  if (str1 + str2 !== str2 + str1) {
    return "";
  }
  // 代码走到这里，说明 str1 和 str2 是符合条件的
  // m 和 n 一定是有最大公约数的
  const m = str1.length;
  const n = str2.length;
  const max = gcd(m, n); // 求最大公约数
  return str1.substring(0, max); // 返回str1的前max个字符
};

/**
 * 求最大公约数
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var gcd = function (a, b) {
  // a % b的结果赋值给a, b的值赋值给a, 直到b为0
  // 为什么 b 为 0 时, a 就是最大公约数呢?
  while (b !== 0) {
    const temp = a % b;
    a = b;
    b = temp;
  }
  return a;
};
