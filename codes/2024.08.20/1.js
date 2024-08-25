/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

    // ①  1. 翻转整个数组
    // ①  2. 翻转前 k 个元素
    // ①  3. 翻转后 n-k 个元素

    // ①  1. 翻转整个数组
    reverse(nums, 0, nums.length - 1);
    // ①  2. 翻转前 k 个元素
    reverse(nums, 0, k % nums.length - 1);
    // ①  3. 翻转后 n-k 个元素
    reverse(nums, k % nums.length, nums.length - 1);

};

function reverse(nums, start, end) {
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}
