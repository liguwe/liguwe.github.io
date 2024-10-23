function mergeSort(arr) {
  // base case: 数组为空或只包含一个元素时
  if (arr.length < 2) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

/**
 * @description: 合并两个有序数组
 * @param {Array} left 左数组，有序
 * @param {Array} right 右数组，有序
 */
function merge(left, right) {
  const result = [];
  // 两个数组都有值
  while (left.length && right.length) {
    // 两个数组的第一个元素进行比较
    // 小的元素出队列，放入结果数组
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  // 两个数组有一个为空, 另一个不为空
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}
