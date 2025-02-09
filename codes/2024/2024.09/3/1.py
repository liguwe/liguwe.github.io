# heapq  Python 标准库中的一个模块，用于实现堆队列算法，也称为优先队列算法
# heapq 默认实现的是最小堆
# heapq.heappush(heap, item)  将 item 的值加入 heap 中，保持堆的特性
# heapq.heappop(heap)  弹出并返回 heap 的最小的元素，保持堆的不变性
import heapq

class SmallestInfiniteSet:
    def __init__(self):
        # current 用于记录当前最小的数
        self.current = 1
        # added_back 用于记录已经添加回去的数
        self.added_back = set()
        # min_heap 二叉堆，用于存储当前最小的数
        self.min_heap = []

    def popSmallest(self) -> int:
        # 如果 min_heap 不为空，弹出最小的数
        if self.min_heap:
            smallest = heapq.heappop(self.min_heap)
            # 需要将弹出的数从 added_back 中删除
            self.added_back.remove(smallest)
            return smallest
        # 如果 min_heap 为空，返回当前最小的数，并将 current 加 1
        else:
            smallest = self.current
            self.current += 1
            return smallest

    def addBack(self, num: int) -> None:
        # 如果 num 小于当前最小的数，并且 num 没有被添加回去过，将 num 添加到 min_heap 中
        if num < self.current and num not in self.added_back:
            heapq.heappush(self.min_heap, num)
            self.added_back.add(num)
