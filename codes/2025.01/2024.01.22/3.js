var minSubArrayLen = function (target, nums) {
    let res = Number.MAX_VALUE;
    let left = 0;
    let right = 0;
    let n = nums.length;
    let winSum = 0; // 维护窗口内元素之和

    while (right < n) {
        winSum += nums[right];
        right++;
        while (winSum >= target && left < right) {
            res = Math.min(res, right - left);
            winSum -= nums[left];
            left++;
        }
    }
    return res == Number.MAX_VALUE ? 0 : res;
};
