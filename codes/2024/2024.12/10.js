let spiralOrder = function (matrix) {
  let m = matrix.length,
    n = matrix[0].length;
  let top = 0,
    bottom = m - 1;
  let left = 0,
    right = n - 1;
  let res = [];
  // res.length == m * n 则遍历完整个数组
  while (res.length < m * n) {
    if (top <= bottom) {
      // 在顶部从左向右遍历
      for (let j = left; j <= right; j++) {
        res.push(matrix[top][j]);
      }
      // 上边界下移
      top++;
    }
    if (left <= right) {
      // 在右侧从上向下遍历
      for (let i = top; i <= bottom; i++) {
        res.push(matrix[i][right]);
      }
      // 右边界左移
      right--;
    }
    if (top <= bottom) {
      // 在底部从右向左遍历
      for (let j = right; j >= left; j--) {
        res.push(matrix[bottom][j]);
      }
      // 下边界上移
      bottom--;
    }
    if (left <= right) {
      // 在左侧从下向上遍历
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left]);
      }
      // 左边界右移
      left++;
    }
  }
  return res;
};
