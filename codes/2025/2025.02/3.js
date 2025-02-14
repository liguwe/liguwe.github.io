var isValidBST = function (root) {
    let isValid = true;
    let prev = null;
    function traverse(root) {
        if (!root || !isValid) return;
        traverse(root.left);
        if (prev != null && prev >= root.val) {
            isValid = false;
            return;
        }
        prev = root.val;
        traverse(root.right);
    }
    traverse(root);
    return isValid;
};
