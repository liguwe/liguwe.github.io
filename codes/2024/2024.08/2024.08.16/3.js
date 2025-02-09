/**
 * @description 贪心算法解法
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    const len = nums.length;
    // 当前位置，表示当前所在的位置，已经跳到了哪里，即索引
    let currentPosition = 0;
    // 步数，不是数组，而是一个数
    let stepsNum = 0;
    // 能跳的最远距离
    let maxJump = 0;

    // 注意这里是小于 len - 1, 因为最后一个位置不用跳
    // 每次跳跃都选择【下一个位置】能跳的最远的地方
    for (let i = 0; i < len - 1; i++) {
        // 更新 maxJump
        // 下个跳跃位置能够到达的最远距离为 【i + nums[i]】
        maxJump = Math.max(maxJump, i + nums[i]);
        // 到达当前位置的时候，更新 currentPosition
        if (i === currentPosition) {
            currentPosition = maxJump;
            stepsNum++;
        }
    }
    // 返回结果
    return stepsNum;
};
