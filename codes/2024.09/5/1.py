# 优先级队列：基于有序列表的实现

class PriorityQueue:
    def __init__(self):
        # 用于存储元素的列表
        self.queue = []

    # 判断队列是否为空
    def isEmpty(self):
        return len(self.queue) == 0

    # 插入元素,需要传入两个参数，插入以后按照优先级排序
    #   item: 待插入的元素
    #   priority: 优先级
    def push(self, item, priority):
        self.queue.append((item, priority))
        self.queue.sort(key=lambda x: x[1])

    # 移除元素，返回优先级最高的元素，即返回列表的第一个元素
    def pop(self):
        # 参数 0 表示移除并返回列表的第一个元素
        return self.queue.pop(0)
