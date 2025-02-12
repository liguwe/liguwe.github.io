// 单调递增队列的标准 API
class MonotonicQueue {
    constructor() {
        this.q = [];
    }
    push(item) {
        while (this.q.length > 0 && this.q[this.q.length - 1] < item) {
            this.q.pop();
        }
        this.q.push(item);
    }
    max() {
        return this.q[0];
    }
    pop(item) {
        if (this.q[0] === item) {
            this.q.shift();
        }
    }
}

var maxSlidingWindow = function (nums, k) {
    let window = new MonotonicQueue();
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if (i < k - 1) {
            window.push(nums[i]);
        } else {
            window.push(nums[i]);
            res.push(window.max());
            window.pop(nums[i - k + 1]);
        }
    }
    return res;
};
