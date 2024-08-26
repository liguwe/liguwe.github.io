/**
 * @description 区间列表的交集
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  let res = [];
  // 双指针
  let i = 0,
    j = 0;

  while (i < firstList.length && j < secondList.length) {
    let a1 = firstList[i][0],
      a2 = firstList[i][1];

    let b1 = secondList[j][0],
      b2 = secondList[j][1];

    // ① 交集存在的情况：
    //   即 b 区间的起始位置小于等于 a 区间的结束位置
    // 并且 a 区间的起始位置小于等于 b 区间的结束位置
    if (b2 >= a1 && a2 >= b1) {
      res.push([Math.max(a1, b1), Math.min(a2, b2)]);
    }

    // ② 更新指针
    //   如果 a 区间的结束位置小于 b 区间的结束位置，则 a 区间的指针向后移动
    if (a2 < b2) {
      i++;
      //  如果 b 区间的结束位置小于 a 区间的结束位置，则 b 区间的指针向后移动
    } else {
      j++;
    }
  }

  return res;
};
