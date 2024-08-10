/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  // ① 先使用快慢指针找到链表的中间节点
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // ② 反转后半部分链表
  let secondHalf = reverseList(slow);

  // 断开前半部分链表和后半部分链表的连接
  slow.next = null;

  // ③ 遍历，计算和
  let sum = 0;
  let first = head;
  let second = secondHalf;

  while (first !== null && second !== null) {
    sum = Math.max(sum, first.val + second.val);
    first = first.next;
    second = second.next;
  }

  return sum;
};

var reverseList = function (head) {
  // base case: 如果 head 为空，返回 null
  if (head === null) {
    return null;
  }
  // base case: 如果 head.next 为空，返回 head
  // 递归到最后一个节点，返回最后一个节点
  if (head.next === null) {
    return head;
  }

  let last = reverseList(head.next);
  head.next.next = head;
  head.next = null;

  return last;
};
