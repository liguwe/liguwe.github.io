function sortArray(nums) {
    const n = nums.length;
    // sortedIndex 是一个分割线
    // 索引 < sortedIndex 的元素都是已排序的
    // 索引 >= sortedIndex 的元素都是未排序的
    // 初始化为 0，表示整个数组都是未排序的
    let sortedIndex = 0;
    while (sortedIndex < n) {
        // 找到未排序部分 [sortedIndex, n) 中最小值的索引
        let minIndex = sortedIndex;
        for (let i = sortedIndex + 1; i < n; i++) {
            if (nums[i] < nums[minIndex]) {
                minIndex = i;
            }
        }
        // 交换最小值和 sortedIndex 处的元素
        [nums[sortedIndex], nums[minIndex]] = [
            nums[minIndex],
            nums[sortedIndex],
        ];

        // sortedIndex 后移一位
        sortedIndex++;
    }
    return nums;
}
