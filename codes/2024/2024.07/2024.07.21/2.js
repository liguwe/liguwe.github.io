/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0; // 左指针
  let right = height.length - 1; // 右指针
  let max = 0; // 最大面积

  // 当左指针小于右指针时，执行循环
  // 这里的循环条件是left < right，而不是left <= right
  while (left < right) {
    // 计算当前左右指针对应的面积
    //  [left, right] 之间的矩形面积 为什么是这个公式？
    // 因为矩形的面积是由两个因素决定的：底边和高度，底边是两个指针之间的距离，高度是两个指针对应的元素中的较小值
    const area = Math.min(height[left], height[right]) * (right - left);
    // 更新最大面积
    max = Math.max(max, area);
    // 如果左指针对应的元素小于右指针对应的元素
    if (height[left] < height[right]) {
      // 左指针右移
      left++;
    } else {
      // 右指针左移
      right--;
    }
  }
  return max;
};
