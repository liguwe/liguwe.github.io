var quickSort = function (nums) {
  if (nums.length <= 1) {
    return nums;
  }

  let midIndex = Math.floor(nums.length / 2);

  let left = [];
  let right = [];
  let mid = [];

  let midValue = nums[midIndex];
  // 从数组中删除中间值
  nums.splice(midIndex, 1);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < midValue) {
      left.push(nums[i]);
    } else if (nums[i] > midValue) {
      right.push(nums[i]);
    } else {
      mid.push(nums[i]);
    }
  }

  //////////////////////////////
  /////  前序位置
  //////////////////////////////
  let sortLeft = quickSort(left);
  let sortRight = quickSort(right);

  return [...sortLeft, ...mid, ...sortRight];
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let sorted = quickSort(nums);
  return sorted[sorted.length - k];
};
