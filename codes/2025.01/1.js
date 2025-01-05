/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let res = new Array(n).fill().map(() => {
    return new Array(n).fill(0);
  });

  let top = 0;
  let left = 0;
  let right = n - 1;
  let bottom = n - 1;
  let cur = 1;

  while (cur <= n * n) {
    if (top <= bottom) {
      // 在顶部从左向右遍历
      for (let j = left; j <= right; j++) {
        cur++;
        res[top][j] = cur;
      }
      // 上边界下移
      top++;
    }
    if (left <= right) {
      // 在右侧从上向下遍历
      for (let i = top; i <= bottom; i++) {
        cur++;
        res[i][right] = cur;
      }
      // 右边界左移
      right--;
    }
    if (top <= bottom) {
      // 在底部从右向左遍历
      for (let j = right; j >= left; j--) {
        cur++;
        res[bottom][j] = cur;
      }
      // 下边界上移
      bottom--;
    }
    if (left <= right) {
      // 在左侧从下向上遍历
      for (let i = bottom; i >= top; i--) {
        cur++;
        res[i][left] = cur;
      }
      // 左边界右移
      left++;
    }
  }
  return res;
};

console.log("8888", generateMatrix(3));
