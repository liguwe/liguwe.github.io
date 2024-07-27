/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let res = ""; // 保存结果
  const m = word1.length;
  const n = word2.length;
  const max = Math.max(m, n); // 取最大长度

  for (let k = 0; k < max; k++) {
    // 如果k小于m, 则将word1的第k个字符加入到res中
    if (k < m) {
      res += word1[k];
    }
    // 如果k小于n, 则将word2的第k个字符加入到res中
    if (k < n) {
      res += word2[k];
    }
  }

  return res;
};
