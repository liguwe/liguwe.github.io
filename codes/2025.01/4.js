/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = [];
  function backtrack(track, start) {
    if (track.length === k) {
      res.push([...track]);
      return;
    }
    for (let i = start; i <= n; i++) {
      track.push(i);
      backtrack(track, i + 1);
      track.pop();
    }
  }

  backtrack([], 1);

  return res;
};
