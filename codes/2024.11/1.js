var slidingPuzzle = function (board) {
  let m = 2,
    n = 3;

  let sb = "";
  let target = "123450";
  // 将 2x3 的数组转化成字符串作为 BFS 的起点
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      sb += board[i][j];
    }
  }
  let start = sb;

  // 记录一维字符串的相邻索引
  let neighbor = [
    [1, 3],
    [0, 4, 2],
    [1, 5],
    [0, 4],
    [3, 1, 5],
    [4, 2],
  ];

  // ******* BFS 算法框架开始 *******
  let q = [start];
  let visited = new Set();

  let step = 0;
  while (q.length) {
    let sz = q.length;
    for (let i = 0; i < sz; i++) {
      let cur = q.shift();
      // 判断是否达到目标局面
      if (target === cur) {
        return step;
      }
      // 找到数字 0 的索引
      let idx = 0;
      while (cur[idx] !== "0") {
        idx++;
      }
      // 将数字 0 和相邻的数字交换位置
      for (let adj of neighbor[idx]) {
        let new_board = swap(cur, adj, idx);
        // 防止走回头路
        if (!visited.has(new_board)) {
          q.push(new_board);
          visited.add(new_board);
        }
      }
    }
    step++;
  }
  // ******* BFS 算法框架结束 *******

  return -1;
};

function swap(s, i, j) {
  let chars = s.split("");
  [chars[i], chars[j]] = [chars[j], chars[i]];
  return chars.join("");
}
