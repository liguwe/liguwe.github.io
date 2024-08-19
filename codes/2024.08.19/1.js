/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let res = 0;
  // ① 先排序，降序排序
  citations.sort((a, b) => b - a);

  // ③ 遍历数组
  for (let i = 0; i < citations.length; i++) {
    // ④ 计算 h 值
    //  如果当前引用数大于等于当前下标值，则 h 值为当前下标值
    if (citations[i] >= i + 1) {
      res = i + 1;
      // 否则，直接跳出循环
    } else {
      break;
    }
  }

  return res;
};
