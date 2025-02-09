# top-k 问题：使用排序算法，时间复杂度为O(nlogn)

def topk(arr, k):
    arr.sort(reverse=True)
    return arr[:k]

# tok-k 问题：使用堆排序算法，时间复杂度为O(nlogk)
# 优先级队列：基于堆的实现

import heapq

def topk2(arr, k):
    # return heapq.nlargest(k, arr)
    #
    # 优先级队列：基于堆的实现

    # 创建一个空的堆
    heap = []
    # 遍历数组
    for a in arr:
        # 如果堆的元素个数小于 k，直接插入堆中
        if len(heap) < k:
            heapq.heappush(heap, a)
        else:
            # 如果堆的元素个数等于 k，比较堆顶元素和当前元素的大小
            # 如果堆顶元素大于当前元素，弹出堆顶元素，插入当前元素
            if heap[0] > a:
                heapq.heappop(heap)
                heapq.heappush(heap, a)
    return heap


def top_k_heap(nums: list[int], k: int) -> list[int]:
    """基于堆查找数组中最大的 k 个元素"""
    # 初始化小顶堆
    heap = []
    # 将数组的前 k 个元素入堆
    for i in range(k):
        heapq.heappush(heap, nums[i])
    # 从第 k+1 个元素开始，保持堆的长度为 k
    for i in range(k, len(nums)):
        # 若当前元素大于堆顶元素，则将堆顶元素出堆、当前元素入堆
        if nums[i] > heap[0]:
            heapq.heappop(heap)
            heapq.heappush(heap, nums[i])
    return heap
