
# 搜索旋转排序数组：从两个有序组成的数组中找目标值


>  [33. 搜索旋转排序数组](https://leetcode.cn/problems/search-in-rotated-sorted-array/)



## 目录
<!-- toc -->
 ## 思路 

1. 虽然数组被旋转，但是可以发现数组被分成了两个有序的部分
2. 通过二分查找
	- **先确定目标值在哪一部分**
	- 然后在对应部分继续二分查找


## 代码

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // base cace
  if (nums.length === 0) return -1;

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // 判断左半部分是否有序：判断target是否在左半部分的范围内
    if (nums[left] <= nums[mid]) {
      // 目标值在左半部分
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    // 右半部分有序
    else {
      // 目标值在右半部分
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};

```
