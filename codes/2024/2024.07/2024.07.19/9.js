/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 快慢指针,都从0开始
  let fast = 0;
  let slow = 0;
  // 快指针遍历数组
  while (fast < nums.length) {
    // 当快指针对应的元素不等于慢指针对应的元素时
    if (nums[fast] !== nums[slow]) {
      // 将快指针对应的元素赋值给慢指针对应的元素
      slow++;
      nums[slow] = nums[fast];
    }
    // 快指针，每遍历一个元素，就向后移动一次
    fast++;
  }
  // 删除后面的元素
  nums.splice(slow + 1);

  return slow + 1;
};
