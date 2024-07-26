/**
 * @param {number[][]} grid  n x n grid
 * @return {number}
 */
var equalPairs = function (grid) {

    // 处理行
    const rowMap = new Map();
    for (let i = 0; i < n; i++) {
        const rowStr = grid[i].join('');
        rowMap.set(rowStr, (rowMap.get(rowStr) || 0) + 1);
    }

    // 处理列
    const colMap = new Map();
    for (let i = 0; i < n; i++) {
        let colStr = '';
        for (let j = 0; j < n; j++) {
            colStr += grid[j][i];
        }
        colMap.set(colStr, (colMap.get(colStr) || 0) + 1);
    }

};
