"""节点类: 用于构造链表节点"""
class ListNode:
    def __init__(self,val:int) -> None:
        # 节点值
        self.val = val
        # listNode | Node 代表 self.next 的值可能是 listNode | Node
        self.next:ListNode | None = None

class LinkedStack:
    """构造方法：初始化一个空栈"""
    def __init__(self):
        # 栈顶元素
        self.head:ListNode | None = None
        self.sz = 0

    """返回栈的大小"""
    def size(self):
        return self.sz

    """判断栈是否为空"""
    def isEmpty(self):
        return self.sz == 0

    """将 item 压入栈中"""
    def push(self, val):
        node = ListNode(val)
        # 将新节点的 next 指向原来的栈顶元素
        node.next = self.head
        # 更新栈顶元素
        # 将 head 指向新节点
        self.head = node
        self.sz += 1

    """将栈顶元素弹出"""
    def pop(self):
        if self.isEmpty():
            raise Exception("stack is empty")
        # 临时保存栈顶元素
        item = self.head
        # 将 head 指向下一个元素
        # 删除栈顶元素，直接将 head 指向下一个元素即可
        if self.head is not None:
            self.head = self.head.next
        self.sz -= 1
        return item

    """返回栈顶元素"""
    def peek(self):
        if self.isEmpty():
            raise Exception("stack is empty")
        if self.head is not None:
            return self.head
