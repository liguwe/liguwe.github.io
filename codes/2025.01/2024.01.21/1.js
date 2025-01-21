/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var getDirections = function (root, startValue, destValue) {
    let startPath = []; // 根节点到起点
    let destPath = []; // 根节点到目的点

    // 找到两条路径
    findPath(root, startValue, startPath);
    findPath(root, destValue, destPath);

    function findPath(node, target, path) {
        if (!node) return false;
        // 找到目标节点
        if (node.val === target) {
            return true;
        }
        // 尝试左子树
        if (findPath(node.left, target, path)) {
            path.unshift("L"); // 路径是从节点到根的，使用 unshift
            return true;
        }
        // 尝试右子树
        if (findPath(node.right, target, path)) {
            path.unshift("R"); // 路径是从节点到根的，使用 unshift
            return true;
        }
        return false;
    }

    // 跳过公共前缀
    let i = 0;
    while (
        i < startPath.length &&
        i < destPath.length &&
        startPath[i] === destPath[i]
    ) {
        i++;
    }

    // 构造最终路径
    // 从起点到公共祖先需要向上走
    let result = "U".repeat(startPath.length - i);
    // 从公共祖先到终点需要按照destPath走
    result += destPath.slice(i).join("");

    return result;
};
