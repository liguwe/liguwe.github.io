import heapq

# 使用 heapq 实现最大堆
class MaxHeap:
    def __init__(self):
        self.heap = []

    def push(self, val):
        heapq.heappush(self.heap, -val)

    def pop(self):
        # heapq 默认实现的是最小堆，所以取相反数
        return -heapq.heappop(self.heap)

    def peek(self):
        # 三元表达式，如果 heap 不为空，返回 heap[0]，否则返回 None
        # 格式为：value_if_true if condition else value_if_false
        # 格式为：为真时的返回值 if 判定条件 else 为假时的返回值
        # return -self.heap[0] if self.heap else None
        if self.heap:
            return -self.heap[0]
        else:
            return None

    def size(self):
        return len(self.heap)

# 使用示例
max_heap = MaxHeap()
max_heap.push(3)
max_heap.push(1)
max_heap.push(4)
max_heap.push(2)

print(max_heap.pop())  # 输出: 4
print(max_heap.pop())  # 输出: 3
print(max_heap.peek())  # 输出: 2
