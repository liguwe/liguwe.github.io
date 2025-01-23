/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    return sort(nums);
    function sort(nums) {
        let n = nums.length;
        if (n < 2) return nums;
        // 递归划分阶段
        const mid = Math.floor(n / 2);
        let leftArr = nums.slice(0, mid);
        let rightArr = nums.slice(mid);
        let left = sort(leftArr);
        let right = sort(rightArr);
        // 后序位置：合并阶段
        return mergeSortArr(left, right);
    }
    function mergeSortArr(arr1, arr2) {
        let m = arr1.length;
        let n = arr2.length;
        let left = 0;
        let right = 0;
        let res = [];
        while (left < m && right < n) {
            if (arr1[left] <= arr2[right]) {
                res.push(arr1[left]);
                left++;
            } else {
                res.push(arr2[right]);
                right++;
            }
        }
        if (left < n) {
            res.push(...arr1.slice(left));
        }
        if (right < n) {
            res.push(...arr2.slice(right));
        }
        return res;
    }
};
