############################################################
# 基于数组的实现列队
#############################################################

class ArrayQueue:
    def __init__(self):
        # 用于存储数据的数组
        self._data = []
        # 记录队列的大小
        self._size = 0
        # 记录队头元素的位置
        self._front = 0
        # 记录队尾元素的位置
        self._rear = 0

    # 返回队列的大小
    def size(self):
        return self._size

    # 判断队列是否为空
    def isEmpty(self):
        return self._size == 0

    # 向队尾插入元素
    def enqueue(self, e):
        # 如果队列已满，扩容
        if self._size == len(self._data):
            self._resize(2 * len(self._data))
        # 计算新元素的位置
        pos = (self._front + self._size) % len(self._data)
        self._data[pos] = e
        self._size += 1

    # 从队头删除元素
    def dequeue(self):
        if self.isEmpty():
            raise Exception("queue is empty")
        # 记录队头元素
        e = self._data[self._front]
        # 删除队头元素
        self._data[self._front] = None
        # 更新队头位置
        self._front = (self._front + 1) % len(self._data)
        self._size -= 1
        # 如果队列元素较少，缩小数组的大小
        if 0 < self._size < len(self._data) // 4:
            # // 代表整除
            self._resize(len(self._data) // 2)
        return e

    # 查看队头元素
    def peek(self):
        if self.isEmpty():
            raise Exception("queue is empty")
        return self._data[self._front]

    # 动态调整数组的大小
    # 时间复杂度 O(n)
    def _resize(self, new_capacity):
        new_data = [None] * new_capacity
        for i in range(self._size):
            new_data[i] = self._data[(self._front + i) % len(self._data)]
        self._data = new_data
        self._front = 0
        self._rear = self._size
