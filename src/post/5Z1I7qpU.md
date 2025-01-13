
# 移除元素：移除指定元素


>  [27. 移除元素](https://leetcode.cn/problems/remove-element/)

- 移除数组中的指定元素
	- for 循环一次即可
		- `if(nums[i] !== val){` 
			- slow++

```javascript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let fast = 0;
    let slow = 0;
    while (fast < nums.length){
        if(nums[fast] !== val){
            // ::::关键，快指针的值给slow的值即可
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    return slow;
};
```



