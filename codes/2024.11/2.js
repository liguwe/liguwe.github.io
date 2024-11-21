var checkInclusion = function (t, s) {
  var need = new Map();
  var window = new Map();
  for (var c of t) {
    need.set(c, (need.get(c) || 0) + 1);
  }

  var left = 0,
    right = 0;
  var valid = 0;
  while (right < s.length) {
    var c = s[right];
    right++;
    // 进行窗口内数据的一系列更新
    if (need.has(c)) {
      window.set(c, (window.get(c) || 0) + 1);
      if (window.get(c) === need.get(c)) valid++;
    }

    // 判断左侧窗口是否要收缩
    while (right - left >= t.length) {
      // 在这里判断是否找到了合法的子串
      if (valid === need.size) return true;
      var d = s[left];
      left++;
      // 进行窗口内数据的一系列更新
      if (need.has(d)) {
        if (window.get(d) === need.get(d)) valid--;
        window.set(d, window.get(d) - 1);
      }
    }
  }
  // 未找到符合条件的子串
  return false;
};
