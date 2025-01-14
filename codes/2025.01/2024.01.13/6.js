/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  let n = candidates.length;
  let res = [];
  function backtrack(track, sum, start) {
    if (sum === target) {
      res.push([...track]);
      return;
    }
    // 剪枝
    if (sum > target) {
      return;
    }
    for (let i = start; i < n; i++) {
      // 去重逻辑
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue;
      }

      track.push(candidates[i]);
      sum += candidates[i];
      backtrack(track, sum, i + 1);
      track.pop();
      sum -= candidates[i];
    }
  }

  backtrack([], 0, 0);

  return res;
};
