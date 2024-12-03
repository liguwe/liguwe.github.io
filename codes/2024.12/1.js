// 题目: 给定一个无序的整数数组，找到其中第 k 大的元素。
// 输入: [3,2,1,5,6,4], k = 2
// 输出: 5
//
// 输入: [3,2,3,1,2,4,5,5,6], k = 4
// 输出: 4

function fn(nums, k) {

    nums.sort((a, b) => {
        return b - a;
    })

    return nums[k - 1]
}


fn([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)
fn([3, 2, 1, 5, 6, 4], 2)
