var findTargetSumWays = function (nums, target) {
    if (nums.length === 0) return 0;
    var result = 0;
    function backtrack(nums, i, remain) {
        if (i === nums.length) {
            if (remain === 0) {
                result++;
            }
            return;
        }
        remain += nums[i];
        backtrack(nums, i + 1, remain);
        remain -= nums[i];
        remain -= nums[i];
        backtrack(nums, i + 1, remain);
        remain += nums[i];
    }
    backtrack(nums, 0, target);
    return result;
};
