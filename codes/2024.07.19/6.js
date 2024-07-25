/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // 1、去除首尾空格，并将多个空格替换为单个空格
  s = s.trim().replace(/\s+/g, " ");
  // 2、将字符串反转
  s = s.split("").reverse().join("");
  // 3、将字符串按空格分割为数组
  const words = s.split(" ");
  // 4、遍历数组，将每个单词反转
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("").reverse().join("");
  }
  // 5、将反转后的单词数组重新组合成字符串
  return words.join(" ");
};
