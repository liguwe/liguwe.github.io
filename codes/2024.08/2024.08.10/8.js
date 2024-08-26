/**
 * @description: 438. 找到字符串中所有字母异位词
 *  ① 先定义 need 和 win 两个 Map，用于记录目标字符串 p 中字符出现的次数和窗口中字符出现的次数
 *  ② 遍历字符串 s，先移动右指针，当窗口中的字符满足条件时，开始移动左指针
 *  ③ 当窗口中的字符不满足条件时，继续移动右指针
 *  ④ 当窗口中的字符满足条件时，开始移动左指针
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  // 用于存放结果
  const res = [];

  // 记录【窗口】中的字符出现的次数
  const win = new Map();
  // 记录 p 中所有字符出现的次数
  const need = new Map();

  // 看每个字符出现的次数
  for (let c of p) {
    need.set(c, (need.get(c) || 0) + 1);
  }

  let left = 0;
  let right = 0;

  // 记录窗口中已经匹配的字符个数
  // 如果 valid 和 need.size 的大小相同，则说明窗口已满足条件，已经完全匹配
  let valid = 0;

  // 遍历字符串，先移动右指针，当窗口内的字符符合要求时，再移动左指针
  while (right < s.length) {
    let c = s[right];
    right++;
    // 进行窗口内数据的一系列更新
    // 判断右侧窗口是否要扩大，need 中是否有这个字符, 有的话就加入窗口
    if (need.has(c)) {
      // 更新窗口内数据，每个字符出现的次数
      win.set(c, (win.get(c) || 0) + 1);
      // 判断窗口内的字符出现的次数是否符合要求
      // 这个时候 valid 用来记录符合要求的字符个数
      if (win.get(c) === need.get(c)) {
        valid++;
      }
    }

    // 判断左侧窗口是否要收缩
    // 当窗口大小大于 p 的长度时，就要收缩
    while (right - left >= p.length) {
      // 当窗口符合条件时，把起始索引 left 加入结果
      if (valid === need.size) {
        res.push(left);
      }
      // d 是将移出窗口的字符
      let d = s[left];
      left++;
      // 如果 d 是需要的字符，这个时候就要更新窗口，因为要移出窗口了
      // valid 用来记录符合要求的字符个数
      // 如果 d 的次数和 need 中的次数相同，说明符合要求的字符个数要减少了
      if (need.has(d)) {
        if (win.get(d) === need.get(d)) {
          valid--;
        }
        win.set(d, win.get(d) - 1);
      }
    }
  }

  return res;
};
