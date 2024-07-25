/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  // 快慢指针,都从0开始
  // write 为慢指针，read 为快指针
  let write = 0;
  let read = 0;
  let n = chars.length;
  // 快指针遍历数组
  while (read < n) {
    // 当前字符
    let c = chars[read];
    // 计数器，用于记录当前字符出现的次数
    let count = 0;
    // 当快指针对应的元素等于快指针对应的元素时，快指针向后移动一位，计数器加一
    while (read < n && chars[read] === c) {
      read++;
      count++;
    }
    // 将当前字符及其出现次数写入数组
    chars[write++] = c;
    // 仅在出现次数大于 1 时，才将次数写入数组
    if (count > 1) {
      // String(count).split("") 将数字转换为字符串，再转换为字符数组,比如 b12 -> ['b','1', '2']
      for (let i of String(count).split("")) {
        chars[write++] = i;
      }
    }
  }

  return write;
};
