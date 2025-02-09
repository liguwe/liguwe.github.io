function setZeroes(matrix) {
  const rows = new Set();
  const cols = new Set();
  const m = matrix.length;
  const n = matrix[0].length;
  // 第一次遍历，记录0的位置
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }
  // 第二次遍历，置零
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rows.has(i) || cols.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
}
