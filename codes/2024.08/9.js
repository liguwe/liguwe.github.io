/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  // 前缀和,注意前缀和的长度是 nums.length + 1
  // preSum[i] 表示 nums[0] 到 nums[i - 1] 的和
  const preSum = new Array(nums.length + 1).fill(0);
  // 返回值
  let res = 0;
  // countMap 存储每个前缀和出现的次数
  const countMap = new Map();
  // 前缀和 的第一个元素 0 出现了一次
  countMap.set(0, 1);

  // 边遍历，边计算前缀和
  for (let i = 1; i <= nums.length; i++) {
    // 计算前缀和
    preSum[i] = preSum[i - 1] + nums[i - 1];

    // 如果 preSum[i] - k 在 countMap 中
    // 说明存在 preSum[j] = preSum[i] - k 即 nums[j] 到 nums[i-1] 的和为 k
    const target = preSum[i] - k;
    // 前缀和中有 target
    if (countMap.has(target)) {
      res += countMap.get(target);
    }

    // 更新 countMap
    countMap.set(preSum[i], (countMap.get(preSum[i]) || 0) + 1);
  }

  return res;
};
