/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  // 两个字符串的长度不相等，直接返回 false
  if (word1.length !== word2.length) {
    return false;
  }

  // 用于记录两个字符串中字符出现的次数
  const arr1 = new Array(26).fill(0);
  const arr2 = new Array(26).fill(0);

  // 遍历两个字符串，记录字符出现的次数
  for (let i = 0; i < word1.length; i++) {
    arr1[word1.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < word2.length; i++) {
    arr2[word2.charCodeAt(i) - 97]++;
  }

  // 包含相同字符
  // 转成数组，排序，转成字符串，去重
  const str1 = arr1.sort().join("");
  const str2 = arr2.sort().join("");

  return str1 === str2;
};
