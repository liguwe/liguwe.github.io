
# 删除有序数组中的重复项 II：最多允许重复两次


`#数组/快慢指针`

> [80. 删除有序数组中的重复项 II](https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/)


## 目录
<!-- toc -->
 ## 1. 总结 

- base case：数组长度小于 3 时，直接返回
- slow fast 都等于 2
- 从第三个元素开始遍历：`for (; fast < nums.length; fast++) {`
	- `if (nums[fast] !== nums[slow - 2]) {`
		- 说明当前元素最多只重复了一次
			- `nums[slow] = nums[fast];` 即可

>  删除有序数组中的重复元素，一定会有 `nums[slow] = nums[fast];`

## 2. 思路

1. 由于题目允许最多重复两次，所以==前两个元素必定保留==
2. 从第三个元素开始，将当前元素与新数组中倒数第二个元素比较
3. 如果不相同，说明当前元素最多只重复了一次，可以保留
4. 最终 `slow` 指向新数组长度

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 数组长度小于 3 时，无需处理
  if (nums.length <= 2) return nums.length;

  // slow 表示新数组的待插入位置
  // fast 表示当前遍历的位置
  let slow = 2;
  let fast = 2;

  // 从第三个元素开始遍历
  for (; fast < nums.length; fast++) {
    // 如果当前元素与新数组倒数第二个元素不相同
    // 说明当前元素最多只重复了一次
    if (nums[fast] !== nums[slow - 2]) {
      nums[slow] = nums[fast];
      slow++;
    }
  }

  return slow;
};

```