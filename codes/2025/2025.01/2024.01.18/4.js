/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
var firstUniqChar = function(s) {
    for (let i = 0; i < s.length; i++) {
        // 如果字符第一次出现的位置和最后一次出现的位置相同
        // 说明该字符只出现了一次
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i;
        }
    }
    return -1;
};

    function find(root, p, q) {
        if (!root) return null;

        let left = find(root.left, p, q);
        let right = find(root.right, p, q);

        // 重点：都在后序位置
        if (root === p) {
            foundP = true;
            return root;
        }
        if (root === q) {
            foundQ = true;
            return root;
        }
        if (left && right) return root;
        return left || right || null;
    }
};
