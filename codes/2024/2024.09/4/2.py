class CycleArray:
    def __init__(self, size: int) -> None:
        # 数组容量
        self.capacity = size
        # 数组,初始化为 None
        self.arr = [None] * size
        # start 指针 指向第一个有效元素的索引
        self.start = 0
        # end 指针 指向最后一个有效元素的下一个位置索引
        self.end = 0
        self.count = 0

    def resize(self, newSize):
        # 创建新数组
        new_arr = [None] * newSize
        # 将原数组的元素复制到新数组
        for i in range(self.count):
            new_arr[i] = self.arr[(self.start + i) % self.capacity]
        # 更新数组
        self.arr = new_arr
        # 更新 start 指针
        self.start = 0
        # 更新 end 指针
        self.end = self.count
        # 更新容量
        self.capacity = newSize

    # 在队头添加元素
    def add_first(self, val):
        # 如果队列已满，扩容 2 倍
        if self.is_full():
            self.resize(self.capacity * 2)
        # 因为 start 是闭区间，所以先左移，再赋值
        self.start = (self.start - 1 + self.capacity) % self.capacity
        self.arr[self.start] = val
        self.count += 1
    # 删除队头元素
    def remove_first(self):
        if self.is_empty():
            raise Exception("Array is empty")
        self.arr[self.start] = None
        self.start = (self.start + 1) % self.capacity
        self.count -= 1
        if self.count > 0 and self.count == self.capacity // 4:
            self.resize(self.capacity // 2)

    def add_last(self, val):
        if self.is_full():
            self.resize(self.capacity * 2)
        self.arr[self.end] = val
        self.end = (self.end + 1) % self.capacity
        self.count += 1

    def remove_last(self):
        if self.is_empty():
            raise Exception("Array is empty")
        self.end = (self.end - 1 + self.capacity) % self.capacity
        self.arr[self.end] = None
        self.count -= 1
        if self.count > 0 and self.count == self.capacity // 4:
            self.resize(self.capacity // 2)

    def get_first(self):
        if self.is_empty():
            raise Exception("Array is empty")
        return self.arr[self.start]

    def get_last(self):
        if self.is_empty():
            raise Exception("Array is empty")
        return self.arr[(self.end - 1 + self.capacity) % self.capacity]

    def is_full(self):
        return self.count == self.capacity

    def size(self):
        return self.count

    def is_empty(self):
        return self.count == 0
