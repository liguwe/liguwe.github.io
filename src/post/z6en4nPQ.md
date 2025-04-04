
# 排序算法基础：篇二

`#算法` `#排序`  


## 目录
<!-- toc -->
 ## 1. 堆排序 

`建堆`操作 和 元素`出堆`操作  实现`堆排序`
1. 输入数组并建立`小顶堆`，此时最小元素位于堆顶。
2. 不断执行`出堆`操作，依次记录出堆元素，即可得到从小到大排序的序列。

是`非稳定`

## 2. 桶排序

- 桶排序适用于处理`体量很大的数据`
- 注意下图中颜色
- **非原地排序**：需要借助 k 个桶和总共 n 个元素的额外空间
- 桶排序**是否稳定**取决于排序桶内元素的算法是否稳定

![cos-blog-832-34-20241012](https://blog-1310531898.cos.ap-beijing.myqcloud.com/832-34-20241012/Pasted%20image%2020240928113826.png)

## 3. 计数排序：整数数组

![cos-blog-832-34-20241012](https://blog-1310531898.cos.ap-beijing.myqcloud.com/832-34-20241012/Pasted%20image%2020240928114041.png)

- 只针对非负整数
- 非原地的
- 稳定的？看具体实现，如果倒序遍历 `nums` 可以避免改变相等元素之间的相对位置

## 4. 基数排序

![cos-blog-832-34-20241012](https://blog-1310531898.cos.ap-beijing.myqcloud.com/832-34-20241012/Pasted%20image%2020240928121628.png)

## 5. 对比

![cos-blog-832-34-20241012](https://blog-1310531898.cos.ap-beijing.myqcloud.com/832-34-20241012/Pasted%20image%2020240928121734.png)
