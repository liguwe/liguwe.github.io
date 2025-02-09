/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let max = 0; // 最大高度
  let current = 0; // 当前高度，因为自行车手从海拔为 0 的地方开始骑行，所以当前高度为 0
  for (let i = 0; i < gain.length; i++) {
    //  gain[i] 是点 i 和点 i + 1 的 净海拔高度差（
    //  当前高度 = 当前高度 + gain[i]
    current += gain[i];
    max = Math.max(max, current);
  }

  return max;
};
