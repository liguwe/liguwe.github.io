
# 计算右侧小于当前元素的个数


> [315. 计算右侧小于当前元素的个数](https://leetcode.cn/problems/count-of-smaller-numbers-after-self/)


> 使用归并排序的思路，详见 [15. 归并排序](/post/o424tbplty.html) 总结部分

主要在 `merge` 函数，我们在使用 `merge` 函数合并两个有序数组的时候，其实是可以知道一个元素 `nums[i]` 后边有多少个元素比 `nums[i]` 小的

```javascript
var countSmaller = function (nums) {
    // 新增：创建计数数组和带索引的数组
    const counts = new Array(nums.length).fill(0);
    // 将原数组转换为带索引的数组，方便排序时记录原始位置
    const indexedNums = nums.map((val, idx) => ({ val, idx }));
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
        // 这时候是有序的，所以方便：计算右侧小于当前元素的个数
        return mergeSortArr(left, right);
    }

    function mergeSortArr(arr1, arr2) {
        let m = arr1.length;
        let n = arr2.length;
        let left = 0;
        let right = 0;
        let res = [];

        // 修改：在合并时统计右侧小于当前元素的个数
        while (left < m && right < n) {
            if (arr1[left].val <= arr2[right].val) {
                // 新增：当左边元素小于等于右边元素时，
                // 将右边已经遍历过的小于当前元素的个数加入结果
                counts[arr1[left].idx] += right;
                res.push(arr1[left]);
                left++;
            } else {
                res.push(arr2[right]);
                right++;
            }
        }

        // 修改：处理剩余的左半部分，这些元素都大于右边已经处理的元素
        while (left < m) {
            // 新增：将右边所有元素的个数加入结果
            counts[arr1[left].idx] += right;
            res.push(arr1[left]);
            left++;
        }

        // 处理剩余的右半部分
        while (right < n) {
            res.push(arr2[right]);
            right++;
        }
        return res;
    }

    // 新增：调用排序函数并返回结果
    sort(indexedNums);
    return counts;
};

```