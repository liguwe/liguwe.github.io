/**
 * @description 区间列表的删除：区间问题
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {
  let res = 0;
  // ① 按照区间的起始位置排序，升序排序,如果起始位置相同，则按照结束位置降序排序
  intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

  // ②  初始化左指针，右指针,
  //      左指针指向第一个区间的起始位置
  //      右指针指向第一个区间的结束位置
  let left = intervals[0][0];
  let right = intervals[0][1];

  // ③  遍历区间数组
  for (let i = 1; i < intervals.length; i++) {
    let currInterval = intervals[i];
    // 情况一：有重叠
    if (left <= currInterval[0] && right >= currInterval[1]) {
      res++;
    }
    // 情况二：可以合并
    if (right < currInterval[1]) {
      left = currInterval[0];
      right = currInterval[1];
    }
    // 情况三：完全不相交
    if (right < currInterval[0]) {
      left = currInterval[0];
      right = currInterval[1];
    }
  }

  // 返回结果：区间列表的删除，即总区间数减去可以删除的区间数
  // ::::题设中需要返回【剩余区间的数目】
  return intervals.length - res;
};
