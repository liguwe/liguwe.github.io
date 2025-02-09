/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let right = 0;
  // 最长子串的长度
  let res = 0;

  // 滑动窗口, 用来记录窗口中的字符出现的次数，key为字符，value为字符出现的次数
  // 当字符出现的次数大于1时，说明重复了，需要收缩窗口，即 left++
  // 当字符出现的次数等于1时，说明没有重复，可以扩大窗口，即 right++
  let win = new Map();

  while (right < s.length) {
    let c = s[right];
    right++;
    // 进行窗口内数据的一系列更新, 例如增加字符的次数
    win.set(c, (win.get(c) || 0) + 1);

    // 判断左侧窗口是否需要收缩
    // 当字符的数量大于1时, 说明重复了, 需要收缩
    while (win.get(c) > 1) {
      let d = s[left];
      left++;
      // 进行窗口内数据的一系列更新, 例如减少字符的次数
      win.set(d, win.get(d) - 1);
    }
    // 在这里更新答案
    res = Math.max(res, right - left);
  }

  return res;
};
