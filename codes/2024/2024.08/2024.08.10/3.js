/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 数组分割
var rotate = function (nums, k) {
    const n = nums.length;
    // 处理 k 大于数组长度的情况
    k %= n;

    // 如果 k 为 0 或数组长度为 0 或 1，无需旋转
    if (k === 0 || n <= 1) {
        return;
    }

    const part1 = nums.slice(-k);
    const part2 = nums.slice(0, n - k);

    // nums.length = 0;
    // nums = [...part1, ...part2];

    // 直接修改原数组
    // 从 0 到 n 删除 n 个元素，然后插入 part1 和 part2
    nums.splice(0, n, ...part1, ...part2)

};
