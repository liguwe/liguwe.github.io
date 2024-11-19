
# 删除有序数组中的重复项 II


`#算法/双指针`  `#2024/07/28` `#leetcode` 


## 目录
<!-- toc -->
 ## 题目及理解 

![image.png600|696](https://832-1310531898.cos.ap-beijing.myqcloud.com/202407281632176.png?imageSlim)

## 解题思路

- 双指针
	- `count = 0/1/2` ，计算重复次数
	- 记得需要重置为 0  ，当 `nums[fast] !== nums[fast - 1]`

## 代码实现

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 快慢指针,都从0开始
  let slow = 0;
  let fast = 0;
  // 用于记录重复元素的个数，初始值为0，最多只能有两个重复元素
  let count = 0;
  // 快指针遍历数组
  while (fast < nums.length) {
    // 当快指针对应的元素不等于慢指针对应的元素时
    if (nums[fast] !== nums[slow]) {
      // 慢指针向后移动一位
      slow++;
      // 将快指针对应的元素赋值给慢指针对应的元素
      nums[slow] = nums[fast];
      // 此时，对于 nums[0..slow] 来说，nums[fast] 重复次数小于 2，也加进来
    } else if (slow < fast && count < 2) {
      // 慢指针向后移动一位
      slow++;
      // 将快指针对应的元素赋值给慢指针对应的元素
      nums[slow] = nums[fast];
    }
    // 快指针，每遍历一个元素，就向后移动一次
    fast++;
    // 计数器，记录重复元素的个数
    count++;
    // fast 遇到新的不同的元素时，重置 count
    if (fast < nums.length && nums[fast] !== nums[fast - 1]) {
      count = 0;
    }
  }
  // 删除后面的元素
  nums.splice(slow + 1);
  return slow + 1;
};

```

> 记得最后删除元素

## 错误记录

