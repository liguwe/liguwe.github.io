/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {

    const n = nums.length;
    // Step 1: 将所有小于等于0或大于n的数替换为n+1
    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0 || nums[i] > n) {
            nums[i] = n + 1;
        }
    }
    // Step 2: 使用原地哈希，将每个数放到对应的位置
    // ::::放他的负数，表示这个数出现过，如果大于 0 说明没出现过 ::::
    for (let i = 0; i < n; i++) {
        let num = Math.abs(nums[i]);
        // 如果 num <= n，将 nums[num-1] 变为负数
        // 说明 num 出现过
        if (num <= n) {
            nums[num - 1] = -Math.abs(nums[num - 1]);
        }
        // 还是正数，说明 num 没出现过
    }

    // Step 3: 找到第一个正数，其索引 +1 就是缺失的最小正数
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }

    // 如果没有找到，则返回n+1
    return n + 1;

};
