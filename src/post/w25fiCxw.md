
# 双指针更多习题

`#算法/双指针` 


## 目录
<!-- toc -->
 ## [删除排序链表中的重复元素 II](https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/) 

![image.png|504](https://832-1310531898.cos.ap-beijing.myqcloud.com/d0f092f1eda08b43a7a59eacb1079d02.png)

### 方法一

一个简单粗暴的解法就是借助像`哈希表`这样的数据结构记录哪些节点重复了，然后去掉它们

### 方法二

链表是有序的，这意味着 **重复元素都靠在一起**，其实不用额外的空间复杂度来辅助，用两个指针就可以达到去重的目的，只是细节有点多

```javascript
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let dummy = new ListNode(-1);
    // 虚拟头结点
    let p = dummy;
    let q = head;
     // 循环整个链表
    while (q != null) {
        if (q.next != null && q.val === q.next.val) {
            // ::::让指针q 跳过重复元素 start
            // 发现重复节点，跳过这些重复节点
            // 循环重复的节点
            while (q.next != null && q.val === q.next.val) {
                q = q.next;
            }
            q = q.next;
            // 此时 q 跳过了这一段重复元素
            // ::::让指针q 跳过重复元素 end
            // 如果这时候q为空了，说明已经走到最后了，p指针也指向null，遍历完成
            if (q == null) {
                p.next = null;
            }
            // 不过下一段元素也可能重复，等下一轮 while 循环判断
        } else {
            // 不是重复节点，接到 dummy 后面
            p.next = q;

            // p/q指针分别前进
            p = p.next;
            q = q.next;
        }
    }
    return dummy.next;
};
```

### 方法三：递归

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    // base case
    if (head == null || head.next == null) {
        return head;
    }
    if (head.val !== head.next.val) {
        // 如果头结点和身后节点的值不同，则对之后的链表去重即可
        head.next = deleteDuplicates(head.next);
        return head;
    }
    // 如果如果头结点和身后节点的值相同，则说明从 head 开始存在若干重复节点
    // 越过重复节点，找到 head 之后那个不重复的节点
    while (head.next != null && head.val === head.next.val) {
        head = head.next;
    }
    // 直接返回那个不重复节点开头的链表的去重结果，就把重复节点删掉了
    return deleteDuplicates(head.next);
};


```

## [从未排序的链表中移除重复元素](https://leetcode.cn/problems/remove-duplicates-from-an-unsorted-linked-list)  @ing

![image.png|560](https://832-1310531898.cos.ap-beijing.myqcloud.com/1a305abba2163247d43e842f88c73e60.png)

思路：

- 遍历两次链表，第一次记录哪些值出现重复，然后第二次将无重复的节点分解出来。

## [丑数 II](https://leetcode.cn/problems/ugly-number-ii/) :  即找从1开始的，第n个丑数是？ @ing

![image.png|584](https://832-1310531898.cos.ap-beijing.myqcloud.com/c483bd00f16f8c3f0cc899a1cab96a62.png)

思路：
![image.png|552](https://832-1310531898.cos.ap-beijing.myqcloud.com/d4d28ccaba7cb7ec3609e77d56b7b95e.png)

> 边走边构造数组！

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    // 可以理解为三个指向有序链表头结点的指针
    let p2 = 1, p3 = 1, p5 = 1;

    // 可以理解为 三个有序链表的头节点的值
    let product2 = 1, product3 = 1, product5 = 1;

    // 可以理解为最终合并的有序链表（结果链表）
    let ugly = [];
    // 可以理解为结果链表上的指针
    let p = 1;

    // 开始合并三个有序链表
    while (p <= n) {
        // 取三个链表的最小结点
        let min = Math.min(Math.min(product2, product3), product5);
        // 接到结果链表上
        ugly[p] = min;
        p++;
        // 前进对应有序链表上的指针
        if (min === product2) {
            product2 = 2 * ugly[p2];
            p2++;
        }
        if (min === product3) {
            product3 = 3 * ugly[p3];
            p3++;
        }
        if (min === product5) {
            product5 = 5 * ugly[p5];
            p5++;
        }
    }
    // 返回第 n 个丑数
    return ugly[n];
};
```

## [有序矩阵中第 K 小的元素](https://leetcode.cn/problems/kth-smallest-element-in-a-sorted-matrix) @ing
![image.png](https://832-1310531898.cos.ap-beijing.myqcloud.com/e2e3ff2f0ca4352e5732a855acaeab67.png)

> **思路：**
> 其实是  [23. 合并K个升序链表](https://leetcode.cn/problems/merge-k-sorted-lists) 的变体。
> 矩阵中的每一行都是排好序的，就好比多条有序链表，你用优先级队列施展合并多条有序链表的逻辑就能找到第 k 小的元素了。

## [查找和最小的 K 对数字](https://leetcode.cn/problems/find-k-pairs-with-smallest-sums) @todo

![image.png|568](https://832-1310531898.cos.ap-beijing.myqcloud.com/64f054491b8734f8e9bc7bbf8d2abc00.png)

