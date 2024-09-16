/**
 * @param {character[][]} maze 邻接矩阵
 * @param {number[]} entrance  出口
 * @return {number}  最少的出口需要走几步
 */
var nearestExit = function (maze, entrance) {
  const m = maze.length;
  const n = maze[0].length;
  // 上下左右四个方向 [x,y]，x 和 y 分别表示横纵坐标的增量
  const dirs = [
    [0, 1], // 向右
    [0, -1], // 向左
    [1, 0], // 向下
    [-1, 0], // 向上
  ];

  // BFS 算法的队列和 visited 数组
  const queue = [];
  // 初始化一个 m * n 的 visited 二维数组
  const visited = Array.from({ length: m }, () => Array(n).fill(false));
  // 将入口放入队列
  queue.push(entrance);
  // 标记入口已访问
  visited[entrance[0]][entrance[1]] = true;
  // 启动 BFS 算法从 entrance 开始像四周扩散
  let step = 0;
  while (queue.length) {
    const sz = queue.length;
    step++;
    // 扩散当前队列中的所有节点
    for (let i = 0; i < sz; i++) {
      // 取出队首节点
      const cur = queue.shift();
      // 每个节点都会尝试向上下左右四个方向扩展一步
      for (const dir of dirs) {
        // cur[0] 和 cur[1] 分别为当前节点的横纵坐标
        const x = cur[0] + dir[0];
        const y = cur[1] + dir[1];
        // 如果新坐标 (x, y) 超出边界，或者遇到墙壁，或者已经访问过，都直接跳过
        if (
          x < 0 ||
          x >= m ||
          y < 0 ||
          y >= n ||
          visited[x][y] ||
          maze[x][y] === "+"
        ) {
          continue;
        }
        // 如果走到边界（出口），返回步数
        if (x === 0 || x === m - 1 || y === 0 || y === n - 1) {
          // 走到边界（出口）
          return step;
        }
        // 记录已访问
        visited[x][y] = true;
        // 将新节点加入队列
        queue.push([x, y]);
      }
    }
  }
  return -1;
};
