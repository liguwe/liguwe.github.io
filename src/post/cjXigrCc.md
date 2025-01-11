
# 合并连续的数字




## 目录
<!-- toc -->
 ## 使用快慢指针 

```javascript
function fn(nums) {  
    let res = []  
    let fast = 0;  
    let slow = 0;  
    let n = nums.length;  
    for (let i = 0; i < n; i++) {  
        fast = i;  
        if (fast !== n  && nums[fast + 1] !== nums[fast] + 1) {  
            if(fast === slow){  
                res.push(`${nums[slow]}`)  
            }else {  
                res.push(`${nums[slow]}~${nums[fast]}`)  
            }           
            slow = fast + 1;  
        }  
    }  
    return res.join(',');  
  
}  
  
console.log(fn([1, 2, 3, 7, 8, 22])); // "1~3,7~8,22"  
  
  
console.log(fn([1, 2, 3, 7, 8, 22,23]));
```

## 两个变量 cur 和 prev，遍历一遍

```javascript
function compressNumbers(numbers) {
    // 确保数组是排序的
    numbers.sort((a, b) => a - b);
    const ranges = [];
    let start = numbers[0];
    let prev = numbers[0];
    for (let i = 1; i <= numbers.length; i++) {
        const current = numbers[i];
        // 如果不连续或到达末尾
        if (current !== prev + 1 || i === numbers.length) {
            if (start === prev) {
                ranges.push(`${start}`);
            } else {
                ranges.push(`${start}~${prev}`);
            }
            start = current;
        }
        prev = current;
    }
    return ranges.join(',');
}
// 测试
console.log(compressNumbers([1, 2, 3, 7, 8, 22])); // "1~3,7~8,22"
```
