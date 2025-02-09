/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    // 处理奇数长度的回文串
    // 以 s[i] 为中心的最长回文子串
    let s1 = fn(s, i, i);
    // 处理偶数长度的回文串
    // 以 s[i] 和 s[i+1] 为中心的最长回文子串
    let s2 = fn(s, i, i + 1);

    // 比较当前找到的回文串和已保存的最长回文串
    res = res.length > s1.length ? res : s1;
    res = res.length > s2.length ? res : s2;
  }
  return res;
};

// 在 s 中寻找以 s[l] 和 s[r] 为中心的最长回文串
function fn(s, l, r) {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--;
    r++;
  }
  return s.slice(l + 1, r);
}
