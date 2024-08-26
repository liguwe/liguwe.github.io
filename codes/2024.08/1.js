/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let firstRowHasZero = false;
    let firstColHasZero = false;
    /*************************************************
     * ::::① 首先检查第一行和第一列是否有零，并用两个布尔变量`firstRowZero`和`firstColZero`记录下来
     ************************************************/
    // 检测第一行是否有 0 ，记得 break
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            firstRowHasZero = true;
            break;
        }
    }
    // 检测第一列是否有 0 ，记得 break
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            firstColHasZero = true;
            break;
        }
    }
    /*************************************************
     * :::::② 遍历除第一行和第一列以外的所有元素，如果有零则将对应的第一行和第一列的元素置零
     ************************************************/
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                // 将第一行和第一列作为标志位, 标记该行或该列是否需要清零
                // 如果 matrix[i][j] === 0, 则将 matrix[i][0] 和 matrix[0][j] 置为 0
                // 即将该行和该列的第一个元素置为 0，标记该行和该列需要清零
                matrix[i][0] = matrix[0][j] = 0;
            }
        }
    }
    /*************************************************
     * ::::::③ 根据第一行和第一列的标志位对矩阵的其余元素进行清零
     ************************************************/
    // 从第二行第二列开始遍历，如果 matrix[i][0] === 0 或 matrix[0][j] === 0，
    // 则将 matrix[i][j] 置为 0
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    /*************************************************
     * ::::::④ 根据第一个元素标记的第一行和第一列是否需要清零
     ************************************************/
    // 如果第一行需要清零
    if (firstRowHasZero) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }
    // 如果第一列需要清零
    if (firstColHasZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
};
