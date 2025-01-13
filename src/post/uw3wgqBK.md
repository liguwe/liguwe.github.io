
# 删除排序链表中的重复元素：去重



> [83. 删除排序链表中的重复元素](https://leetcode.cn/problems/remove-duplicates-from-sorted-list/)


---


## 目录
<!-- toc -->
 ## 总结 


![图片&文件](./files/删除排序链表中的重复元素.gif)

- 不需要使用**虚拟头结点**

```javascript
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
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

## 相关题目

- [82. 删除排序链表中的重复元素 II：删除所有重复的节点](/post/YWeTQIpG.html)