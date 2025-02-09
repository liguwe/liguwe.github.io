/**
 * @description 合并区间
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let res = [];
  //:::: ① 先按照区间的起始位置排序，升序排序,如果起始位置相同，则按照结束位置降序排序
  intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

  // 因为已经按照区间的起始位置排序了，所以可以直接将第一个区间放入结果数组中
  res.push(intervals[0]);
  //:::: ② 遍历区间数组
  for (let i = 1; i < intervals.length; i++) {
    let currInterval = intervals[i];
    // 获取结果数组中最后一个区间
    let lastInterval = res[res.length - 1];

    //:::: ③ 判断当前区间的起始位置是否小于等于结果数组中最后一个区间的结束位置
    // 如果小于等于，则说明两个区间有重叠，可以合并
    if (currInterval[0] <= lastInterval[1]) {
      //:::: ④ 更新结果数组中最后一个区间的结束位置
      // 更新为当前区间的结束位置和结果数组中最后一个区间的结束位置的最大值
      lastInterval[1] = Math.max(lastInterval[1], currInterval[1]);
    } else {
      //:::: ⑤ 如果不重叠，则直接将当前区间放入结果数组中
      res.push(currInterval);
    }
  }
  return res;
};
