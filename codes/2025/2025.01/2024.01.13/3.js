var permute = function (nums) {
  let n = nums.length;
  let res = [];
  // 从 i 开始选择
  function backtrack(track) {
    if (track.length === n) {
      res.push([...track]);
      return;
    }
    for (let item of nums) {
      if (!track.includes(item)) {
        track.push(item);
        backtrack(track);
        track.pop();
      }
    }
  }
  backtrack([]);
  return res;
};
