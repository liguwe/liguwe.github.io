/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands = function (grid) {
  let m = grid.length,
    n = grid[0].length;
  // 记录所有岛屿的序列化结果
  let islands = new Set();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 发现是一个岛屿，淹掉这个岛屿，同时存储岛屿的序列化结果
      if (grid[i][j] === 1) {
        let path = [];
        // 初始的方向可以随便写，不影响正确性，代表首尾
        dfs(i, j, path, 0);
        console.log(path); // 类似于 [999, 2, 4, 1, -1, -4, -2, -999]
        islands.add(path.join(","));
      }
    }
  }
  // 不相同的岛屿数量
  return islands.size;

  function dfs(i, j, path, dir) {
    if (i < 0 || j < 0 || i >= m || j >= n) {
      return;
    }
    if (grid[i][j] === 0) return;
    // 前序遍历位置：进入 (i, j)
    grid[i][j] = 0;
    path.push(dir);
    dfs(i - 1, j, path, 1); // 上
    dfs(i + 1, j, path, 2); // 下
    dfs(i, j - 1, path, 3); // 左
    dfs(i, j + 1, path, 4); // 右
    // 后序遍历位置：离开 (i, j)
    path.push(-dir);
  }
};
