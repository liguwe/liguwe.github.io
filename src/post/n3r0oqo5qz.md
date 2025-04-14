
# 前言


>  链表相关算法



## 目录
<!-- toc -->
 ## 目录 

### 删除排序链表中的重复元素：去重，保留重复元素

> [83. 删除排序链表中的重复元素：去重](/post/lma0n2ot66.html)

```javascript
var deleteDuplicates = function (head) {
  if (!head) return null;
  let fast = head;
  let slow = head;
  while (fast) {
    if (fast.val !== slow.val) {
      slow.next = fast;
      slow = slow.next;
    }
    fast = fast.next;
  }
  slow.next = null;
  return head;
};
```

### 删除排序链表中的重复元素 II：删除所有重复的节点

> [82. 删除排序链表中的重复元素 II：删除所有重复的节点](/post/g5i6b374qp.html)

```javascript
var deleteDuplicates = function (head) {
  if (!head || !head.next) return head;
  let d = new ListNode(-1);
  d.next = head;
  // 如果slow 指向 head，将无法处理头节点重复的情况
  let slow = d; 
  let fast = head; // 注意：不等于 d
  while (fast && fast.next) {
    if (fast.val !== fast.next.val) {
       slow = slow.next;
       fast = fast.next;
    } else {
      // 如果发现重复节点，fast 向后移动直到找到不重复的值
      while (fast.next && fast.val === fast.next.val) {
        fast = fast.next;
      }
      // 跳过所有重复节点
      slow.next = fast.next;
      fast = fast.next;
    }
  }
  return d.next;
};
```

