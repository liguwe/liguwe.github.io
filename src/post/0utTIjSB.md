
# 归并排序


`#算法/排序` 


## 目录
<!-- toc -->
 ## 1. 总结 

![cos-blog-832-34-20241012|712](https://blog-1310531898.cos.ap-beijing.myqcloud.com/832-34-20241012/Pasted%20image%2020240928110206.png)

- 重点：
	- 两个阶段：
		- 递归划分阶段
		- 合并阶段
			- 合并两个有序数组
				- 使用双指针

```javascript hl:6,12
var sortArray = function (nums) {
    return sort(nums);
    function sort(nums) {
        let n = nums.length;
        if (n < 2) return nums;
        // 递归划分阶段
        const mid = Math.floor(n / 2);
        let leftArr = nums.slice(0, mid);
        let rightArr = nums.slice(mid);
        let left = sort(leftArr);
        let right = sort(rightArr);
        // 后序位置：合并阶段
        return mergeSortArr(left, right);
    }
    function mergeSortArr(arr1, arr2) {
        let m = arr1.length;
        let n = arr2.length;
        let left = 0;
        let right = 0;
        let res = [];
        while (left < m && right < n) {
            if (arr1[left] <= arr2[right]) {
                res.push(arr1[left]);
                left++;
            } else {
                res.push(arr2[right]);
                right++;
            }
        }
        if (left < n) {
            res.push(...arr1.slice(left));
        }
        if (right < n) {
            res.push(...arr2.slice(right));
        }
        return res;
    }
};

```

## 2. 如何理解`归归排序`是`二叉树的后序遍历`

所有`递归`的算法，本质上都是在遍历一棵（递归）树，然后在节点（前中后序位置）上执行代码，你要写递归算法，本质上就是要告诉每个节点需要做什么。

- 首先，一句话描述 归并排序？
	- 先把`左半边数组`排好序，再把`右半边数组`排好序，最后`merge` 两个有序数组。

下图是，遍历通过`二叉树遍历思路`，即非线性的方式，二叉树的前序遍历，来遍历数组，然后再离开节点的时候，做merge操作，如下图：

![image.png|728](https://832-1310531898.cos.ap-beijing.myqcloud.com/347117ca1383f1435bdc75dd5a50aa2b.png)

下面是 merge 的`动图`：

![4.gif](https://832-1310531898.cos.ap-beijing.myqcloud.com/c6b314119f840e94f23b110c6f04cc72.gif)

完全流程：`先`拆解，拆到叶子节点，`然后`再merge ，如下图：

![image.png|675](https://832-1310531898.cos.ap-beijing.myqcloud.com/e9bf2abb5511f922a3c70ef49e278d4d.png)

### 2.1. 代码部分

测试用例：看 [ 力扣（LeetCode）](https://leetcode.cn/problems/sort-an-array/)

```javascript
/**
 * https://leetcode.cn/problems/sort-an-array/
 * */

function sort(nums, left, right) {
    if (left === right) {
        return;
    }
    const mid = Math.floor((left + right) / 2);
    // 利用定义，排序 nums[left..mid]
    sort(nums, left, mid);
    // 利用定义，排序 nums[mid+1..right]
    sort(nums, mid + 1, right);
    // ::::后序位置::::
    /*************************************************
     * ::::即，此时两部分子数组已经被排好序
     * ::::   合并两个有序数组，使 nums[left..right] 有序
     ************************************************/
    merge(nums, left, mid, right);
}

// 使用 【数组双指针技巧】，合并两个有序数组
function merge(nums, left, mid, right) {
    //  copy 到 temp 数组
    // ::::notice 不是 temp=[...nums]
    const temp = []
    for (let i = left; i <= right; i++) {
        temp[i] = nums[i];
    }
    //// ::::使用 【数组双指针技巧】，合并两个有序数组
    let i = left, j = mid + 1;
    for (let p = left; p <= right; p++) {
        // 左半边数组已全部被合并
        if (i === mid + 1) { // :::: notice i === mid + 1    
            nums[p] = temp[j++];
         // 右半边数组已全部被合并   
        } else if (j === right + 1) {
            nums[p] = temp[i++];
        } else if (temp[i] > temp[j]) {
            nums[p] = temp[j++];
        } else {
            nums[p] = temp[i++];
        }
    }
};

const arr = [5, 12, 13, 14, 4, 3, 15, 16, 2, 1, 2, 0, 2, 3, 9, 10, 11, 9, 17, 18, 19, 20, 21, 22];
sort(arr, 0, arr.length - 1);
console.log(arr);

```

- 都是`原地`排序
- 注意，`sort` 和 `merge` 函数的`入参`分别是什么？

### 2.2. 真正理解上面代码的`双指针技巧`吗？

对于 `merge` 的双指针，不一定真的的理解，下面梳理下：

以下图为例：

![image.png](https://832-1310531898.cos.ap-beijing.myqcloud.com/a3cde51c1457f331092c5bb9fbed1230.png)

总之:
- 都是原地直接修改 `nums`
- left , right , mid 都是递归函数传入的，固定的
- `双指针`根据 `left` 和 `mid` 来初始化
- `左指针i` 根据 `mid` 来判断 边界条件
- `j右指针` 根据 `right` 来判断判断边界条件

> [!info]
> 对于 `递归的理解`，还是一样，记住`模板`搞就是了，小脑袋瓜子，能递归几次？

### 2.3. 另外一种解法：使用 `js` 的语法特性

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

    const leftArr = mergeSort(left);
    const rightArr = mergeSort(right);
    
    // ::::后序位置
    return merge(leftArr, rightArr);
};

// 合并两个已经排好序的数组，无论left或者right里有多少元素
const merge = (left, right) => {
    const result = [];
    // :::: left和right都有元素，这判断大小后，取最小的放入结果集，注意使用shift了的副作用
    while (left.length && right.length) {
        //// :::: 注意: 判断的条件是小于或等于，如果只是小于，那么排序将不稳定.
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    // 走到这里，说明left和right其中一个为空，另一个不为空，遍历剩下的元素，放入结果集
    // :::: 每次都取最小的放入结果集，注意使用shift了的副作用
    while (left.length) result.push(left.shift());
    while (right.length) result.push(right.shift());
    return result;
};

const array = [5, 4, 3, 2, 1, 32, 2, 1, 0];
console.log('mergeSort ', mergeSort(array));

```

> [!bug]
> 当初面试，就写不出来，不知道是 `shift` ，还是 `left` ,`right` 这几个变傻分不清了

### 2.4. 下面，分析一下复杂度

![image.png](https://832-1310531898.cos.ap-beijing.myqcloud.com/9a65219541e4465dd0511a68ce401a66.png)

![image.png](https://832-1310531898.cos.ap-beijing.myqcloud.com/c5edbd21aa83ab7bc69c4efc19d786d1.png)

## 3. 附

### 3.1. 归并排序

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
