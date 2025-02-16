// 注意：javascript 代码由 chatGPT🤖 根据我的 java 代码翻译。
// 本代码的正确性已通过力扣验证，如有疑问，可以对照 java 代码查看。
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
