
# 使括号有效的最少添加


>  [921. 使括号有效的最少添加](https://leetcode.cn/problems/minimum-add-to-make-parentheses-valid/)


思路：
- 以左括号为基准，通过维护对右括号的需求数 `need`，来计算`最小的插入次数`
-  `res` 记录的左括号的插入次数，`need` 记录了右括号的需求
	- 当 for 循环结束后，若 `need` 不为 0，那么就意味着`右括号`还不够，需要插入
	- 所以 返回 `res + need`

```javascript
var minAddToMakeValid = function (s) {
    let res = 0;
    let need = 0; // 右括号的需求量
    for (let c of s) {
        if (c === '(') {
            // 对右括号的需求 + 1
            need++;
        }
        if (c === ')') {
            // 对右括号的需求 - 1
            need--;
            if (need === -1) {
                res++; // 需插入一个左括号
                need = 0; // 重置右括号的需求量为 0
            }
        }
    }
    return res + need;
};
```