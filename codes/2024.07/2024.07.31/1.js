var twoSum = function (nums, target) {
    // ① 先排序
    nums.sort((a, b) => a - b);
    let res = [];

    // ② 定义左右指针，分别指向数组的头和尾
    let lo = 0, hi = nums.length - 1;

    // ③ 循环条件，从两端向中间靠拢
    while (lo < hi) {
        let sum = nums[lo] + nums[hi];
        // 根据 sum 和 target 的比较，移动左右指针
        // Move left and right pointers based on the comparison between sum and target
        if (sum < target) {
            lo++;
        } else if (sum > target) {
            hi--;
        } else {
            res.push([nums[lo], nums[hi]]);
            lo++;
            hi--;
        }
    }
    return res;
};
