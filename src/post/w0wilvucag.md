
# 最后 K 个数的乘积


`#算法/前缀积` 

>  [1352. 最后 K 个数的乘积](https://leetcode.cn/problems/product-of-the-last-k-numbers/)


```javascript
var ProductOfNumbers = function () {
    this.preProduct = [1];
};

ProductOfNumbers.prototype.add = function (num) {
    if (num === 0) {
        // 如果添加的元素是 0，则前面的元素积都废了
        this.preProduct = [1];
        return;
    }
    let n = this.preProduct.length;
    // 前缀积数组中每个元素
    this.preProduct.push(this.preProduct[n - 1] * num);
};

ProductOfNumbers.prototype.getProduct = function (k) {
    let n = this.preProduct.length;
    if (k > n - 1) {
        // 不足 k 个元素，是因为最后 k 个元素存在 0
        return 0;
    }
    // 计算最后 k 个元素积
    return this.preProduct[n - 1] / this.preProduct[n - k - 1];
};
```