/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {

    const len = nums.length;
    // 默认值是 len, 因为最坏的情况就是每次只跳 1 步,最大步数就是 len - 1
    // len 代表不可达
    const memo = new Array(len).fill(len);

    return dp(nums, 0, memo);

};


/**
 * @description dp(nums, i, memo) 表示从第 i 个位置跳到最后一个位置所需要的最少步数
 * @param {number[]} nums 跳跃数组
 * @param {number} i 当前位置
 * @param {number[]} memo 备忘录
 * */
function dp(nums, i, memo) {
    // base case
    const len = nums.length;
    if (i >= len - 1) {
        return 0;
    }
    // 之前已经计算过，直接返回备忘录的值
    if (memo[i] !== len) {
        return memo[i];
    }
    // 当前位置最多能跳的步数
    const steps = nums[i];
    // 从当前位置跳 steps 步
    for (let step = 1; step <= steps; step++) {
        // 下一个位置
        const next = i + step;
        // 递归求解
        const subProblem = dp(nums, next, memo);
        // 更新 memo
        memo[i] = Math.min(memo[i], 1 + subProblem);
    }

    // 返回 memo[i]
    return memo[i];
}
