
# 找不同

`#done` `#pass`

> [389. 找不同](https://leetcode.cn/problems/find-the-difference/)

```javascript
var findTheDifference = function (s, t) {
    let S = {};
    for (let c of s) {
        S[c] = (S[c] || 0) + 1;
    }
    let T = {};
    for (let c of t) {
        T[c] = (T[c] || 0) + 1;
    }
    let res = null;
    for (let k of Object.keys(T)) {
        if (S[k] !== T[k]) {
            res = k
        }
    }

    return res;
};
```