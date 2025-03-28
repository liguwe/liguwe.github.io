
# 链表的双指针技巧合集


`#算法/链表`


## 目录
<!-- toc -->
 ## 总结 

- 合并两个有序单链表
	- ==四个==变量：p1 p2 d p
	- `while (p1 && p2) {`
	- if (p1) {
	- if (p2) {
	- return d.next
- 分隔链表
	- 注意：不是排序，不是排序，不是排序，需要保持相对顺序
	- 五个变量：d1 d2 p1 p2 p 
		- 小于 `x` 时： p1 前进
		- 否则： `p2` 前进
		- 原链表的指针不断前进 
			- 但不是`p = p.next;`
			- 因为==要断开==原链表中的每个节点的 next 指针
	- 连接两个链表：`p1.next = d2.next`
	- 返回 d1.next
- 

## 第 1 题：合并两个有序单链表

> [https://leetcode.cn/problems/merge-two-sorted-lists/](https://leetcode.cn/problems/merge-two-sorted-lists/)

**仔细重复的** 看下面的`动图`，有`6个`变量

- `l1` 代表链表 `list1` 
- `p1` 指针指向 链表 `list1` 
- `l2` 代表链表 `list2`
- `p2` 指针指向链表 `list2` 
- `dummy 节点` , 「虚拟头结点」
- `p` 指针指向 虚拟头结点

![|536](https://832-1310531898.cos.ap-beijing.myqcloud.com/a95e9523866627037deca38bff57f245.gif)
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let p1 = list1;
  let p2 = list2;
  let d = new ListNode(-1);
  let p = d;
  while (p1 && p2) {
    if (p1.val < p2.val) {
      p.next = p1;
      p1 = p1.next;
    } else {
      p.next = p2;
      p2 = p2.next;
    }
    p = p.next;
  }

  if (p2) {
    p.next = p2;
  }
  if (p1) {
    p.next = p1;
  }
  return d.next;
};
```

上面 `while 条件` 的两种写法还是会有性能差异的，如下图：

![](https://832-1310531898.cos.ap-beijing.myqcloud.com/9c4e07ba21ffab641f8328ec40605ea5.png)

## 「虚拟头结点」技巧

`dummy` 节点，其实就是一个`占位符` ，有了它，方便处理 `p` 为空指针的场景

什么时候需要用虚拟头结点？

**当你需要创造一条新链表的时候，可以使用虚拟头结点简化边界情况的处理。**，比如 [#第 1 题：合并两个有序单链表](/post/YgmSRk1f.html#第-1-题合并两个有序单链表) 中 是不是需要创建一个`新的链表`

> [!info]
以后虚拟头结点都使用 变量 `d` 代替，方便 code

## 第 2 题：分隔链表

> [https://leetcode.cn/problems/partition-list/](https://leetcode.cn/problems/partition-list/)

![|544](https://832-1310531898.cos.ap-beijing.myqcloud.com/69c926657ba9b5889d24dd3ad5c220ed.png)

**分析：**
原链表分成`两个小链表`
- 一个链表中的元素大小都小于 `x`
- 另一个链表中的元素都大于等于 `x`，最后再把这两条链表接到一起

**要点分析：**

- 两个虚拟头结点 `dummy1 和 dummy2`，分别用于存储大于和小于 `x` 的节点，并使用两个指针 `p1` `p2` ，并指向它对应的虚拟头结点
- `p` 指向`原链表` ，并且每次` while` 循环都更新 `p` (一定要注意断开每个节点的 `next` 指针)
- 最后，连接两个 虚拟头结点，返回 `dummy1.next`

```javascript
var partition = function (head, x) {
    // 存放小于 x 的链表的虚拟头结点
    var dummy1 = new ListNode(-1);
    // 存放大于等于 x 的链表的虚拟头结点
    var dummy2 = new ListNode(-1);
    // p1, p2 指针负责生成结果链表
    var p1 = dummy1, p2 = dummy2;
    // p 负责遍历原链表，类似合并两个有序链表的逻辑
    // 这里是将一个链表分解成两个链表
    var p = head;
    while (p !== null) {
        if (p.val >= x) {
            p2.next = p;
            p2 = p2.next;
        } else {
            p1.next = p;
            p1 = p1.next;
        }
    // 原链表的指针不断前进 
    // p = p.next;
    ////////// ==============>
        // 断开原链表中的每个节点的 next 指针
      // todo 
    }
    
    // 连接两个链表
    p1.next = dummy2.next;
    return dummy1.next;
}
```

### 踩过的坑

![|576](https://832-1310531898.cos.ap-beijing.myqcloud.com/5730a315459e150017323bbcdaddd6ab.png)

#### 解决方法 1

断开原链表中的每个节点的 `next` 指针 ，具体代码如上

#### 解决方法 2

![](https://832-1310531898.cos.ap-beijing.myqcloud.com/a091f56e19c9fcaaac00e6e23b6af9e7.png)

## 第 3 题：合并 k 个有序链表@TODO

[https://leetcode.cn/problems/merge-k-sorted-lists/](https://leetcode.cn/problems/merge-k-sorted-lists/)

### 题目

![|600](https://832-1310531898.cos.ap-beijing.myqcloud.com/086fb314d78535b9d53982f756f711be.png)

### 看代码

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 * 分析:
 * 1、关键是 优先级队列的 【入队函数】的实现
 * 2、优先级队列的【权重】就是单链表Node节点的val值
 */
var mergeKLists = function (lists) {
    if (lists.length === 0) {
        return null
    }
    // 虚拟头结点
    let dummy = new ListNode(-1);
    // 指针指向 虚拟头结点 , 用于移动
    let p = dummy;
    // 优先级队列，值最小的先入队，即优先级最高
    let q = [];
    // 优先队列的【入队函数】，值最小的先入队列
    let enqueue = (node) => {
        if (q.length === 0) {
            q.push(node);
        } else {
            // 是否插入了
            let added = false;
            for (let i = 0; i < q.length; i++) {
                if (node.val < q[i].val) {
                    q.splice(i, 0, node)
                    added = true;
                    break;
                }
            }
            // 没找到合适的插入位置，则添加到末尾
            if (!added) {
                q.push(node);
            }
        }
    }
    // 遍历lists , 入队链表数组的每个元素
    for (let i = 0; i < lists.length; i++) {
        if (lists[i] !== null) {
            enqueue(lists[i])
        }
    }
    // 优先级队列有值，则继续遍历
    while (q.length !== 0) {
        // 取出 优先级队列里的第一个
        let node = q.shift();
        // p指针指向 把取出的节点
        p.next = node;
        // 检测node.next 否则，重新入队
        if (node.next !== null) {
            // ::::关键
            enqueue(node.next);
        }
        // p 指针不断前进
        p = p.next;
    }
    return dummy.next;
};

```

### 时间复杂度分析

> [!todo]
 复杂度，没弄明白，再研究！

分析：`q` 代表优先级队列，假设所有节点都会入队，所以 q 的长度为上限为 `N`
这个算法复杂度，没弄明白？ 因为并不是自己实现了
> 算法整体的时间复杂度是 `O(Nlogk)`
> - 其中 `k` 是 **链表的条数**，即有几个链表，即 提设中，`lists` 的长度
> - `N` 是 **这些链表的节点总数**。

> [!question]
这个题，并没有双指针，就是单指针

## 第 4 题：删除链表的倒数第 N 个结点

[https://leetcode.cn/problems/remove-nth-node-from-end-of-list/](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/)

### 先找到单链表的倒数第 k 个节点

![](https://832-1310531898.cos.ap-beijing.myqcloud.com/ac036e825212ca37f1a513d5e8b41e08.png)

代码如下：

```javascript
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // 使用了虚拟头结点的技巧，也是为了防止出现空指针的情况，见备注
    let dummy = new ListNode(-1);
    // 第一步，使用双指针 先找到 倒数第 n 个节点
    let p1 = head;
    let p2 = dummy;
    p2.next = head;
    // p1 先走 n 步
    for (let i = 0; i < n; i++) {
        p1 = p1.next;
    }
    // p1 和 p2 同时走 k 步
    while (p1 != null) {
        p2 = p2.next;
        p1 = p1.next;
    }
    // 这个时候找到了
    
    // 删掉倒数第 n 个节点
    p2.next = p2.next.next;
    return dummy.next;
};

```

>  使用了`虚拟头结点`的技巧，也是为了防止出现空指针的情况，比如说链表总共有 5 个节点，题目就让你删除倒数第 5 个节点，也就是第一个节点，那按照算法逻辑，应该首先找到倒数第 6 个节点。但第一个节点前面已经没有节点了，这就会出错。

## 第 5 题：单链表的中点

> [https://leetcode.cn/problems/middle-of-the-linked-list/](https://leetcode.cn/problems/middle-of-the-linked-list/)



![|600](https://832-1310531898.cos.ap-beijing.myqcloud.com/a1643b47243c1d93a8beb6c2d8c4f8c6.png)

### 使用快慢指针

```javascript
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let slow = head;
    let fast = head;

    // 需要判断fast.next.next 是否存在
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};
```

>  
>  注：需要注意的是，如果链表长度为`偶数`，也就是说中点有两个的时候，我们这个解法返回的节点是`靠后的那个节点`。

## 第 6 题：判断链表是否包含环

每当`慢指针 slow` 前进一步，`快指针 fast` 就前进两步。

- 如果 `fast` 最终遇到空指针，说明链表中没有环；
- 如果 `fast` 最终和 slow `相遇`，那肯定是 `fast` 超过了 `slow` 一圈，说明链表中含有环。

代码如下：
```javascript
function hasCycle(head) {
    // 快慢指针初始化指向 head
    var slow = head, fast = head;
    // 快指针走到末尾时停止
    while (fast != null && fast.next != null) {
        // 慢指针走一步，快指针走两步
        slow = slow.next;
        fast = fast.next.next;
        // 快慢指针相遇，说明含有环
        if (slow == fast) {
            return true;
        }
    }
    // 不包含环
    return false;
}
```

> [!NOTE]
疑问❓
不会死循环嘛？比如这是一个循环列表 → 最终是会相遇的，如何相遇？ 理解成学校操场 400m 场地跑步，一个跑的快，一个跑得慢。**所以，最终还是会追上的** 

## 第 7 题：环形链表 II

> [https://leetcode.cn/problems/linked-list-cycle-ii/](https://leetcode.cn/problems/linked-list-cycle-ii/)

如果已经已知 链表中含有环，如何计算这个`环的起点`？

![](https://832-1310531898.cos.ap-beijing.myqcloud.com/bf3e2cd2adc9587dc1358f50421a5867.png)

### 先说结论

当`快慢指针`相遇时，让其中任一个指针指向`头节点`，然后让它俩以`相同速度`前进，`再次相遇时`所在的节点位置就是环开始的位置

### 结论的推导过程

假设**快慢指针相遇**时，慢指针 `slow` 走了 `k` 步，那么快指针 `fast` 一定走了 `2k` 步，且 ==K 一定是环长度的整数倍==，如下图：

![|576](https://832-1310531898.cos.ap-beijing.myqcloud.com/05a057ac16843558f9b5679574a82bfb.png)

再假设相遇点距环的起点的距离为 `m` ， 那么结合上图的 `slow` 指针，环的起点距`头结点 head` 的距离为 `k - m`，也就是说如果从 `head` 前进 `k - m` 步就能到 达`环起点`。
巧的是，如果从`相遇点`继续前进 `k - m` 步，也恰好到达`环起点`。因为结合上图的 fast 指针，从相遇点开始走k步可以转回到相遇点，那走 k - m 步肯定就走到环起点了
所以，只要我们把快慢指针中的任一个重新指向 `head`，然后两个指针**同速前进**，`k - m` 步后一定会相遇，相遇之处就是环的起点了。

![](https://832-1310531898.cos.ap-beijing.myqcloud.com/7b7ad20123d2f237f850b1e6d6593fdb.png)

### 代码

```javascript
var detectCycle = function (head) {
    var fast, slow;
    fast = slow = head;
    //// ::::第一步： 相遇时，即相遇点，
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) break;
    }
    // 上面的代码类似 hasCycle 函数
    if (fast == null || fast.next == null) {
        // fast 遇到空指针说明没有环
        return null;
    }
    // ::::第二步：在相遇点，重新同速度前进
    
    // 重新指向头结点
    slow = head;
    // 快慢指针同步前进，相交点就是环起点
    while (slow !== fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
};
```

## 第 8 题：两个链表是否相交

> [https://leetcode.cn/problems/intersection-of-two-linked-lists/](https://leetcode.cn/problems/intersection-of-two-linked-lists/)


如下面，相交，所以返回 `c1`
![|560](https://832-1310531898.cos.ap-beijing.myqcloud.com/def94355a4edce1c7384c0730bbb2a6a.png)
又如下面，返回，`8`
![|560](https://832-1310531898.cos.ap-beijing.myqcloud.com/fdee7a7947e38677438607d6ee9de92f.png)

### 思路 1

通过 `hash` 来判断出现过的次数，如果出现过两次，则说明相交了，但空间复杂度略高，需要额外的空间。即空间复杂度为 `O(m+n)`

### 思路 2

关键点在于，拼接，哪个先遍历完，指针指向另外一个

![](https://832-1310531898.cos.ap-beijing.myqcloud.com/beaa1e2785882f802f7c0c94903ebaf2.png)

空间复杂度为 `O(1)`，时间复杂度为 `O(N)`

### 代码

```javascript
var getIntersectionNode = function (headA, headB) {
    // 都指向各自的头结点
    let p1 = headA;
    let p2 = headB;
    while (p1 !== p2) {
        if (p1 === null) {
            p1 = headB;
        } else {
            p1 = p1.next;
        }
        if (p2 === null) {
            p2 = headA;
        } else {
            p2 = p2.next;
        }
    }
    return p1;
};

```

### 疑问

那你可能会问，如果说**两个链表没有相交点**，是否能够正确的返回 `null` 呢？
这个逻辑可以覆盖这种情况的，相当于 c1 节点是 `null空指针`，可以正确返回 null


