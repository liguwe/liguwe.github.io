from collections import deque

# 用链表作为底层数据结构实现队列
# Python 的 deque 就是双链表
class MyLinkedQueue:
    def __init__(self):
        self.list = deque()

    # 向队尾插入元素，时间复杂度 O(1)
    def enqueue(self, e):
        self.list.append(e)

    # 从队头删除元素，时间复杂度 O(1)
    def dequeue(self):
        # 使用双端队列的 popleft 方法
        # 即从队头删除元素
        # popleft 代表从左边删除元素
        return self.list.popleft()

    # 查看队头元素，时间复杂度 O(1)
    def peek(self):
        return self.list[0]

    # 返回队列中的元素个数，时间复杂度 O(1)
    def size(self):
        return len(self.list)
