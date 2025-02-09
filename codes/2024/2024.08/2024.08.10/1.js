/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    // 当前遍历的候选人, 初始化为 null,
    // 刚开始，还没遍历任何元素，所以候选人是 null
    let target = null;
    // 该候选人 target 的票数
    let count = 0;

    for (const num of nums) {
        // 如果 count 为 0 ，说明之前的票数抵消完了，需要重新设置候选人
        if (count === 0) {
            target = num;
            count = 1;
        } else {
            // 如果当前的数字和候选人相同，票数 + 1
            if (num === target) {
                count++;
            } else {
                // 如果当前的数字和候选人不同，票数 - 1
                count--;
            }
        }
    }
    return target;
};
