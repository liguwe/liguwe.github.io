/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  let n = nums.length;

  function backtrack(track, start) {
    res.push([...track]);

    for (let i = start; i < n; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      track.push(nums[i]);
      backtrack(track, i + 1);
      track.pop();
    }
  }

  backtrack([], 0);

  return res;
};
