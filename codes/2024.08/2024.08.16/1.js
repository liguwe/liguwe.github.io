/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // 代表当前能到达的最远位置
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    // 如果当前位置大于最远位置，说明无法到达
    // maxReach 是当前能到达的最远位置
    // 例如 [3, 2, 1, 0, 4]，当 i = 4 时，maxReach = 3，无法到达
    // 例如 [2, 3, 1, 1, 4]，当 i = 4 时，maxReach = 4，可以到达
    if (i > maxReach) {
      return false;
    }
    // 更新最远位置
    // i + nums[i] 代表当前位置能到达的最远位置,i 是当前位置，nums[i] 是当前位置的值
    // question: 为什么要取最大值？
    // answer: 因为当前位置的值是当前位置能到达的最远位置，所以要取最大值
    maxReach = Math.max(maxReach, i + nums[i]);
  }

  // 如果最远位置大于等于数组长度，说明可以到达
  return true;
};
