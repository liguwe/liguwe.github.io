// 注意：javascript 代码由 chatGPT🤖 根据我的 java 代码翻译。
// 本代码的正确性已通过力扣验证，如有疑问，可以对照 java 代码查看。

var searchMatrix = function (matrix, target) {
  let m = matrix.length,
    n = matrix[0].length;
  // 初始化在右上角
  let i = 0,
    j = n - 1;
  while (i < m && j >= 0) {
    if (matrix[i][j] === target) {
      return true;
    }
    if (matrix[i][j] < target) {
      // 需要大一点，往下移动
      i++;
    } else {
      // 需要小一点，往左移动
      j--;
    }
  }
  // while 循环中没有找到，则 target 不存在
  return false;
};
