"""节点类: 用于构造链表节点"""
class ListNode:
    def __init__(self,val:int) -> None:
        # 节点值
        self.val = val
        # listNode | Node 代表 self.next 的值可能是 listNode | Node
        self.next:ListNode | None = None

# 基于链表的队列
class linkedQueue:
    def __init__(self):
        # 队列的头
        self.head = None
        # 队列的大小
        self.sz = 1

    # 返回队列的大小
    def size(self):
        return self.sz

    # 判断队列是否为空
    def isEmpty(self):
        return self.sz == 0

    # 入队
    def enqueue(self, val):
        # 创建一个新节点
        node = ListNode(val)
        # 如果队列为空
        if self.head is None:
            self.head = node
        # 如果队列不为空
        else:
            # 将新节点插入到队列的尾部 【底部】
            p = self.head
            while p.next is not None:
                p = p.next
            p.next = node
        self.sz += 1

    # 出队
    def dequeue(self):
        if self.isEmpty():
            raise Exception("queue is empty")
        # 保存队头元素
        item = self.head
        # 删除队头元素
        # 直接将 head 指向下一个元素即可
        # 但是要注意，如果 head 是 None，就不需要再指向下一个元素了
        # 因为 head 是 None 说明队列为空，没有下一个元素了
        # 所以这里需要判断一下 head 是否是 None
        if self.head is not None:
            self.head = self.head.next
        self.sz -= 1
        return item

    # 返回队头元素
    def peek(self):
        if self.isEmpty():
            raise Exception("queue is empty")
        return self.head
