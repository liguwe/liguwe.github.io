/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // 快慢指针,都从0开始
  let fast = 0;
  let slow = 0;
  // 快指针遍历数组
  while (fast < nums.length) {
    // 当快指针对应的元素不等于 val 时
    if (nums[fast] !== val) {
      // 将快指针对应的元素赋值给慢指针对应的元素
      nums[slow] = nums[fast];
      slow++;
    }
    // 快指针，每遍历一个元素，就向后移动一次
    fast++;
  }
  // 修改 nums 后面的元素为 _
  for (let i = slow; i < nums.length; i++) {
    nums[i] = "_";
  }
  return slow;
};
