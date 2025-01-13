
# 删除有序数组中的重复项

`#数组/快慢指针` 

> [26. 删除有序数组中的重复项](https://leetcode.cn/problems/remove-duplicates-from-sorted-array/)


- 删除有序数组中的重复项
	- 使用 ==for 循环==
		- `if` 快慢指针指向的元素不相等时
			- `slow++`
			- `nums[slow] = nums[fast];`

```javascript
var removeDuplicates = function (nums) {
    let slow = 0,
        fast = 0;
    for (let i = 0; i < nums.length; i++) {
        fast = i;
        if (nums[fast] !== nums[slow]) {
           slow++;
           nums[slow] = nums[fast];
        }
    }
    return slow + 1;
};
```