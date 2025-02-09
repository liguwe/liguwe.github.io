class CircularArray:
    def __init__(self, size):
        self.size = size
        self.array = [None] * size
        # 指向当前
        self.head = 0
        self.count = 0
    def append(self, item):
        self.array[self.head] = item
        self.head = (self.head + 1) % self.size
        self.count = min(self.count + 1, self.size)
    def __getitem__(self, index):
        if index >= self.count:
            raise IndexError("Index out of range")
        return self.array[(self.head - self.count + index) % self.size]
    def __len__(self):
        return self.count
    def __str__(self):
        return str([self[i] for i in range(len(self))])
