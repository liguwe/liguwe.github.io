# 实现HashSet

class Hashset:
    def __init__(self):
        self.hashset = []

    def add(self, key):
        if key not in self.hashset:
            self.hashset.append(key)

    def remove(self, key):
        if key in self.hashset:
            self.hashset.remove(key)

    def contains(self, key):
        return key in self.hashset

    def __str__(self):
        return str(self.hashset)
