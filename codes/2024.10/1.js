var calculateMinimumHP = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  // 备忘录中都初始化为 -1
  const memo = new Array(m).fill(0).map(() => new Array(n).fill(-1));

  return dp(grid, 0, 0, memo);
};

// 定义：从 (i, j) 到达右下角，需要的初始血量至少是多少
var dp = function (grid, i, j, memo) {
  const m = grid.length;
  const n = grid[0].length;
  // base case
  if (i == m - 1 && j == n - 1) {
    return grid[i][j] >= 0 ? 1 : -grid[i][j] + 1;
  }
  if (i == m || j == n) {
    return Number.MAX_SAFE_INTEGER;
  }
  // 避免重复计算
  if (memo[i][j] != -1) {
    return memo[i][j];
  }
  // 状态转移逻辑
  // 解释：保证哪怕右边或者下边的血量为负，骑士的血量至少为 1
  const res =
    Math.min(
      dp(grid, i, j + 1, memo), // 从 (i, j+1) 出发，到达右下角，需要的最小初始血量
      dp(grid, i + 1, j, memo), // 从 (i+1, j) 出发，到达右下角，需要的最小初始血量
    ) - grid[i][j];
  memo[i][j] = res <= 0 ? 1 : res;

  return memo[i][j];
};
