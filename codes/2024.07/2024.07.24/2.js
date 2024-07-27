/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }
  const set = new Set();
  for (const value of map.values()) {
    // 如果 set 中已经存在 value，说明出现次数重复,直接返回 false
    if (set.has(value)) {
      return false;
    }
    set.add(value);
  }
  // 如果没有出现次数重复，返回 true
  return true;
};
