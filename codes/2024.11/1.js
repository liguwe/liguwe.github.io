// 递归解法
var deleteDuplicatesRecursive = function (head) {
  // 定义：输入一条单链表头结点，返回去重之后的单链表头结点
  // base case
  if (head === null || head.next === null) {
    return head;
  }
  if (head.val !== head.next.val) {
    // 如果头结点和身后节点的值不同，则对之后的链表去重即可
    head.next = deleteDuplicatesRecursive(head.next);
    return head;
  }
  // 如果如果头结点和身后节点的值相同，则说明从 head 开始存在若干重复节点
  // 越过重复节点，找到 head 之后那个不重复的节点
  while (head.next !== null && head.val === head.next.val) {
    head = head.next;
  }
  // 直接返回那个不重复节点开头的链表的去重结果，就把重复节点删掉了
  return deleteDuplicatesRecursive(head.next);
};
