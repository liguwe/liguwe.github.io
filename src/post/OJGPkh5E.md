
# 删除链表的中间节点


`#双指针` `#链表` `#快慢指针` `#2024/07/30` 


## 目录
<!-- toc -->
 ## 1. 题目及理解 

![image.png600|576](https://832-1310531898.cos.ap-beijing.myqcloud.com/202407300745016.png?imageSlim)

> 注意上面的标注的意思
## 2. 解题思路

1. **base case 特殊情况处理**：
    - 如果链表为空或只有一个节点，我们直接返回 null。
2. **使用快慢指针**：
    - 初始化三个指针：`slow`、`fast` 和 `prev`。
        - `slow` 和 `fast` 都从 `head` 开始。
        - `prev` 用来跟踪 `slow` 的前一个节点
3. **移动指针**：
    - 在每次循环中，`fast` 移动`两步`，`slow` 移动`一步`。
    - 当循环结束时，`slow` 将指向中间节点。
4. **删除中间节点**：
    - 循环结束后，`prev` 指向中间节点的前一个节点。
    - 我们通过设置 `prev.next = slow.next` 来删除中间节点。
5. **返回结果**：
    - 返回修改后的链表头部 `head`。

## 3. 代码实现

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
var deleteMiddle = function (head) {
  // 1. **base case 特殊情况处理**：
  //     - 如果链表为空或只有一个节点，我们直接返回 null。
  if (head === null || head.next === null) {
    return null;
  }

  // 2. **使用快慢指针**：
  //     - 初始化三个指针：`slow`、`fast` 和 `prev`。
  //         - `slow` 和 `fast` 都从 `head` 开始。
  //         - `prev` 用来跟踪 `slow` 的前一个节点
  let slow = head;
  let fast = head;
  let prev = null;

  // 3. **移动指针**：
  //     - 在每次循环中，`fast` 移动`两步`，`slow` 移动`一步`。
  //     - 当循环结束时，`slow` 将指向中间节点。

  while (fast !== null && fast.next !== null) {
    // 快指针移动两步
    fast = fast.next.next;
    // 先记录slow的位置，使用prev指针
    prev = slow;
    // 慢指针移动一步
    slow = slow.next;
  }

  // 4. **删除中间节点**：
  //     - 循环结束后，`prev` 指向中间节点的前一个节点。
  //     - 我们通过设置 `prev.next = slow.next` 来删除中间节点。

  prev.next = slow.next; // 删除中间节点

  // 5. **返回结果**：
  //     - 返回修改后的链表头部 `head`。

  return head;
};

```

### 3.1. 复杂度分析

- 时间复杂度是 `O(n)`，其中 `n` 是链表的长度。我们只需要遍历链表一次。
- 空间复杂度是 `O(1)`，因为我们只使用了固定数量的额外空间（几个指针）。

## 4. 错误记录