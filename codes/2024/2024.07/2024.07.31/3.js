/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // 求和为 0 的三元组
    return threeSumTarget(nums, 0);
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var threeSumTarget = function (nums, target) {
    //// :::: ① 数组先排个序
    nums.sort(function (a, b) {
        return a - b
    });
    var n = nums.length;
    var res = [];

    // :::: ③ 遍历数组，a + b + c = target ，其中 a = nums[i] ，b + c =  target - nums[i]
    for (var i = 0; i < n; i++) {
        const a = nums[i];
        const twoTarget = target - a;
        // ::::③ 递归计算 b + c = target - nums[i] 的二元组
        var twoSumArr = twoSumTarget(nums, i + 1, twoTarget);

        // ::::④ 遍历二元组，将 nums[i] 加上就是结果三元组
        // 如果存在满足条件的二元组，再加上 nums[i] 就是结果三元组
        for (var j = 0; j < twoSumArr.length; j++) {
            var tuple = twoSumArr[j];
            tuple.push(nums[i]);
            res.push(tuple);
        }
        // ::::⑤ 跳过后面，出现的数字重复的情况，否则会出现重复结果
        // 跳过第一个数字重复的情况，否则会出现重复结果
        while (i < n - 1 && nums[i] === nums[i + 1]) i++;
    }

    return res;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start 从 start 开始找
 * @return {number[][]}
 */
var twoSumTarget = function (nums, start, target) {
    // nums 数组必须有序
    nums.sort((a, b) => a - b);
    let lo = start;
    let hi = nums.length - 1;
    let res = [];
    while (lo < hi) {
        let sum = nums[lo] + nums[hi];
        let left = nums[lo];
        let right = nums[hi];
        // 根据 sum 和 target 的比较，移动左右指针
        if (sum < target) {
            // ① 左边碰到相同的元素，一直向右移动，直到不相同的元素位置
            while (lo < hi && nums[lo] === left) lo++;
        } else if (sum > target) {
            // ② 右边碰到相同的元素，一直向左移动，直到不相同的元素位置
            while (lo < hi && nums[hi] === right) hi--;
        } else {
            res.push([left, right]);
            // ③ 左边碰到相同的元素，一直向右移动，直到不相同的元素位置
            while (lo < hi && nums[lo] === left) lo++;
            // ④ 右边碰到相同的元素，一直向左移动，直到不相同的元素位置
            while (lo < hi && nums[hi] === right) hi--;
        }
    }
    return res;
};
