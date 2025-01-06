/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let left = 0;
  let right = 0;
  let win = {};
  let need = {};
  let res = [];
  for (let c of p) {
    need[c] = (need[c] || 0) + 1;
  }
  while (right < s.length) {
    let c = s[right];
    win[c] = (win[c] || 0) + 1;
    right++;
    while (right - left > p.length) {
      if (fn()) {
        res.push(left);
      }
      let c = s[left];
      win[c] = (win[c] || 0) - 1;
      if (win[c] == 0) {
        delete win[c];
      }
      left++;
    }
    if (right - left === p.length && fn()) {
      res.push(left);
    }
  }

  return res;

  function fn() {
    for (let k of Object.keys(win)) {
      if (win[k] !== need[k]) {
        return false;
      }
    }
    for (let k of Object.keys(need)) {
      if (win[k] !== need[k]) {
        return false;
      }
    }
    return true;
  }
};
