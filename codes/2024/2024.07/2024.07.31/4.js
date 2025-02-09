/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {

    // 双指针
    let left = 0;
    let right = height.length - 1;

    // 当前遍历的元素的 左边的最大值
    let leftMax = 0;
    // 当前遍历的元素的 右边的最大值
    let rightMax = 0;
    // 结果
    let res = 0;

    // 遍历, 双向遍历，从两边向中间靠拢
    while (left < right) {
        // 更新左边的最大值
        leftMax = Math.max(leftMax, height[left]);
        // 更新右边的最大值
        rightMax = Math.max(rightMax, height[right]);

        // 说明最小值在左边，当前元素的水量 = 左边最大值 - 当前元素的高度
        if (leftMax < rightMax) {
            // 更新结果
            res += leftMax - height[left];
            // 左指针向右移动
            left++;
            // 说明最小值在右边，当前元素的水量 = 右边最大值 - 当前元素的高度
        } else {
            // 更新结果
            res += rightMax - height[right];
            // 右指针向左移动
            right--;
        }
    }

    // 返回结果
    return res;

};
