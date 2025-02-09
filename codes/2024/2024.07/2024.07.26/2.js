/**
 * @param {number[][]} grid  n x n grid
 * @return {number}
 */
var equalPairs = function (grid) {
    // 结果
    let res = 0;
    const len = grid.length;
    // 处理行
    // 用于记录每一行出现的次数, key 为行字符串，value 为出现次数
    const rowMap = new Map();
    for (let i = 0; i < len; i++) {
        const rowStr = grid[i].join(',');
        rowMap.set(rowStr, (rowMap.get(rowStr) || 0) + 1);
    }
    // 处理列，判断是否在行中出现过
    for (let i = 0; i < len; i++) {
        let cols = [];
        for (let j = 0; j < len; j++) {
            cols.push(grid[j][i]);
        }
        let colStr = cols.join(',');
        // 判断是否在行中出现过
        if (rowMap.has(colStr)) {
            // ::::这里不能只是+1，出现多少次就得加多少次
            res += rowMap.get(colStr);
        }
    }
    return res;

};
