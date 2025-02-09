// 单调递增队列的标准 API
class MonotonicQueue {
  constructor() {
    // 维护其中的元素自尾部到头部单调递增
    this.maxq = [];
  }

  // 在队尾添加元素 item
  // 在尾部添加一个元素 item，维护 maxq 的单调性质
  // 将前面小于自己的元素都删
  push(item) {
    // 将前面小于自己的元素都删除
    while (this.maxq.length > 0 && this.maxq[this.maxq.length - 1] < item) {
      this.maxq.pop();
    }
    this.maxq.push(item);
  }

  // 返回队头元素, 即 maxq 队首元素
  // 队头的元素肯定是最大的
  max() {
    return this.maxq[0];
  }

  // 删除队头元素
  pop(item) {
    // 如果要删除的元素是队头元素，就删除
    // 否则不做任何操作
    // 想删除的队头元素 item 可能已经被「压扁」了
    if (this.maxq[0] === item) {
      this.maxq.shift();
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // 初始化一个单调队列，用来维护窗口的最大值
  // 变量 window 是一个 MonotonicQueue 类型的实例
  let window = new MonotonicQueue();

  let res = [];

  // 遍历 nums
  for (let i = 0; i < nums.length; i++) {
    // 如果 i < k - 1，先填满窗口的前 k - 1
    if (i < k - 1) {
      window.push(nums[i]);
    } else {
      // 窗口向前滑动，加入最后一个元素
      // 每次 push时，window 都会维护一个单调递减队列
      window.push(nums[i]);
      // 记录当前窗口的最大值
      res.push(window.max());
      // 窗口向前滑动，删除第一个元素
      window.pop(nums[i - k + 1]);
    }
  }

  return res;
};
