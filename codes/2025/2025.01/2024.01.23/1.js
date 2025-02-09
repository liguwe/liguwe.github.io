/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
    let n = nums.length;
    let sum = 0;
    for (let item of nums) {
        sum += item;
    }
    let left = 0;
    let right = 0;
    let target = sum - x;
    // 从 "找两端和为x的最少元素" 转化为 "找中间和为 sum-x 的最长子数组"
    let res = -1;
    let winSum = 0; // 窗口和
    while (right < n) {
        winSum += nums[right];
        right++;
        // 缩小窗口
        while (winSum > target) {
            winSum -= nums[left];
            left++;
        }
        // 只在 winSum === target 时更新结果
        if (winSum === target) {
            res = Math.max(res, right - left);
        }
    }
    // 如果没找到符合条件的子数组
    return res === -1 ? -1 : n - res;
};
