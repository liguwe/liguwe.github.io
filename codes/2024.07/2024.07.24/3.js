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

  // 包含相同字符
  const set1 = new Set(word1);
  const set2 = new Set(word2);
  if (set1.size !== set2.size) {
    return false;
  }
  const arr1 = Array.from(set1).sort();
  const arr2 = Array.from(set2).sort();
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  // 字符出现次数相同
};
