
# 合并两个有序数组


`#2024/07/28` `#leetcode`  `#算法/双指针` 


## 目录
<!-- toc -->
 ## 题目 

![image.png600](https://832-1310531898.cos.ap-beijing.myqcloud.com/202407281626632.png?imageSlim)

> [!danger]
> 注意：nums 后面会使用 `0` 占位

## 解题思路

- 双指针技巧，分别指向数组的最后一个元素
- 注意题设中  `num1` 的长度一定大于 `num2`的长度

## 代码实现

```javascript
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1; // 实际长度，不包括占位
  let p = nums1.length - 1; // 实际长度，包括占位 0 ，游标
  let j = n - 1; // 实际长度

  while (i >= 0 && j >= 0) {
    // 即比较他们之间的最后一个，最后一个肯定是最大的嘛
    if (nums1[i] > nums2[j]) {
      nums1[p] = nums1[i];
      i--;
    } else {
      nums1[p] = nums2[j];
      j--;
    }
    p--;
  }

  // 一定是 j 最大
  while (j >= 0) {
    nums1[p] = nums2[j];
    j--;
    p--;
  }

};
```

## 参考

- [https://leetcode.cn/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150](https://leetcode.cn/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150)

