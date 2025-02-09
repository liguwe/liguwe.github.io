var numTrees = function (n) {
  // meme[i][j] 代表 i 到 j 的二叉搜索树的个数
  const memo = [];
  for (let i = 0; i < n + 1; i++) {
    memo[i] = [];
    for (let j = 0; j < n + 1; j++) {
      memo[i][j] = 0;
    }
  }
  function count(lo, hi) {
    if (lo > hi) {
      return 1;
    }
    // 先查找备忘录
    if (memo[lo][hi] !== 0) {
      return memo[lo][hi];
    }
    let res = 0;
    for (let i = lo; i <= hi; i++) {
      let left = count(lo, i - 1);
      let right = count(i + 1, hi);
      res += left * right;
    }
    return res;
  }

  return count(1, n);
};
