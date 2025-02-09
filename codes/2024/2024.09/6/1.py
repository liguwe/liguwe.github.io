# 二分查找
def binary_search(list, target):
    left = 0
    right = len(list) - 1
    while left <= right:
        ## // 是整数除法运算符（向下取整除法）
        mid_index = (left + right) // 2
        mid = list[mid_index]
        # 如果目标值大于中间值，则更新右边界
        # 在左半边查找
        if target > mid:
            right = mid - 1
        # 如果目标值小于中间值，则更新左边界
        # 在右半边查找
        elif target < mid:
            left = mid + 1
        elif target == mid:
            return mid
    return None
