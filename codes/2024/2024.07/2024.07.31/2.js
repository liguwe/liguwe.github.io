/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var twoSumTarget = function (nums, target) {
    // nums 数组必须有序
    nums.sort((a, b) => a - b);
    let lo = 0, hi = nums.length - 1;
    let res = [];
    while (lo < hi) {
        let sum = nums[lo] + nums[hi];
        let left = nums[lo];
        let right = nums[hi];
        // 根据 sum 和 target 的比较，移动左右指针
        if (sum < target) {
            // ① 左边碰到相同的元素，一直向右移动，直到不相同的元素位置
            while (lo < hi && nums[lo] == left) lo++;
        } else if (sum > target) {
            // ② 右边碰到相同的元素，一直向左移动，直到不相同的元素位置
            while (lo < hi && nums[hi] == right) hi--;
        } else {
            res.push([left, right]);
            // ③ 左边碰到相同的元素，一直向右移动，直到不相同的元素位置
            while (lo < hi && nums[lo] == left) lo++;
            // ④ 右边碰到相同的元素，一直向左移动，直到不相同的元素位置
            while (lo < hi && nums[hi] == right) hi--;
        }
    }
    return res;
};
