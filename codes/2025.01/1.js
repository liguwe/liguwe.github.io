/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }
  if (strs.length === 1) {
    return strs[0];
  }

  let p = 0;
  let m = strs.length;
  let n = strs[0].length || 0;

  for (let j = 0; j < n; j++) {
    let isSame = true;
    let s = strs[0][j];
    for (let i = 0; i < m; i++) {
      // 检查是否超出字符串长度
      if (j >= strs[i].length) {
        return strs[0].slice(0, p);
      }
      if (strs[i][j] !== s) {
        isSame = false;
        return strs[0].slice(0, p);
      }
    }
    if (isSame) {
      p++;
    }
  }

  return strs[0].slice(0, p);
};
