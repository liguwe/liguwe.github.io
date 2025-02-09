/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let n = nums.length;
    let left = 0;
    let right = 0;
    let count = 0; // 当前窗口 1 的个数
    let res = 0;
    while (right < n) {
        if (nums[right] === 1) count++;
        right++;
        while (right - left - count > k) {
            if (nums[left] === 1) count--;
            left++;
        }
        res = Math.max(res, right - left);
    }
    return res;
};
