/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let queue = []; // 用于存放腐烂的橘子
  let visited = Array.from({ length: m }, () => Array(n).fill(false));
  let fresh = 0;
  // 初始化, 遍历，将腐烂的橘子加入队列, 并标记为已访问
  // 并统计新鲜橘子的数量
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
        visited[i][j] = true;
      } else if (grid[i][j] === 1) {
        fresh++;
      }
    }
  }

  let step = 0;
  while (queue.length) {
    let sz = queue.length;
    step++;
    for (let i = 0; i < sz; i++) {
      //拿出一个烂橘子
      let cur = queue.shift();
      // 将烂橘子的四周的新鲜橘子变为烂橘子
      for (let dir of dirs) {
        let x = cur[0] + dir[0];
        let y = cur[1] + dir[1];
        // 如果新坐标 (x, y) 超出边界，或者遇到墙壁，或者已经访问过，都直接跳过
        if (
          x < 0 ||
          x >= m ||
          y < 0 ||
          y >= n ||
          visited[x][y] ||
          grid[x][y] === 0
        ) {
          continue;
        }
        visited[x][y] = true;
        // 将这个新鲜橘子加入烂橘子队列
        queue.push([x, y]);
        fresh--;
      }
    }
  }
  // 如果还有新鲜橘子，返回-1
  // 如果没有新鲜橘子，返回步数
  return fresh === 0 ? Math.max(0, step - 1) : -1;
};
