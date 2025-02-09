/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
    let mapping = new Map();
    function traverse(root, parent) {
        if (!root) return;
        mapping.set(root.val, parent);
        traverse(root.left, root);
        traverse(root.right, root);
    }
    traverse(root, null);

    function dfs() {
        let q = [target];
        let visited = new Set([target.val]);
        let res = [];
        let dist = 0; // 离 target 的距离
        while (q.length) {
            let size = q.length;
            for (let i = 0; i < size; i++) {
                let cur = q.shift();
                if (dist === k) {
                    res.push(cur.val);
                }
                let neighbors = [cur.left, cur.right, mapping.get(cur.val)];
                for (let item of neighbors) {
                    if (item && !visited.has(item.val)) {
                        q.push(item);
                        visited.add(item.val);
                    }
                }
            }
            dist++;
        }
        return res;
    }
    return dfs();
};
