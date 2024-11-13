
# 归并排序



## 目录
<!-- toc -->
 ## 归并排序 
![image.png](https://832-1310531898.cos.ap-beijing.myqcloud.com/f102429e7ca84c46952a0989aea93b85.png)![image.png](https://832-1310531898.cos.ap-beijing.myqcloud.com/71da9e0da956a80bceba467b825b7e4b.png)

```javascript
const mergeSort = arr => {
    // 采用自上而下的递归方法
    const len = arr.length;
    // 递归条件
    if (len < 2) {
        return arr;
    }
    let middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle); // 拆分为两个子数组

    return merge(mergeSort(left), mergeSort(right));
};

// 合并两个已经排好序的数组，无论left或者right里有多少元素
const merge = (left, right) => {
    const result = [];
    while (left.length && right.length) {
        // 注意: 判断的条件是小于或等于，如果只是小于，那么排序将不稳定.
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length) result.push(left.shift());
    while (right.length) result.push(right.shift());
    return result;
};
```
![image.png](https://832-1310531898.cos.ap-beijing.myqcloud.com/895608ee1ddbdd7d2eec7e444ba4a3d4.png)

## 计算右侧小于当前元素的个数

![image.png|512](https://832-1310531898.cos.ap-beijing.myqcloud.com/e53b4dd68d10a86f58d00de2c05d81cc.png)

