/**
 * 快速排序
 * @param {number[]} arr
 * @param {number} left 左指针
 * @param {number} right 右指针
 * @return {number[]} 排序后的数组
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

/**
 * 分区函数, 选取一个基准元素，将小于等于基准元素的元素放在左边，大于基准元素的元素放在右边
 * @param {number[]} arr
 * @param {number} left
 * @param {number} right
 * @return {number} 分区点
 */
function partition(arr, left, right) {
  // 为了避免最坏情况，选择一个随机元素作为基准
  const randomIndex = Math.floor(Math.random() * (right - left + 1)) + left;
  swap(arr, randomIndex, right);

  const pivot = arr[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, right);
  return i + 1;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

// 使用示例
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("排序前:", arr);
quickSort(arr);
console.log("排序后:", arr);
