var maxAncestorDiff = function(root) {
    let res = 0;
    function inOrder(root, low, high) {
        if(root == null) {
            res = Math.max(res, Math.abs(high-low));
            return;
        }

        inOrder(root.left, Math.min(low, root.val), Math.max(high, root.val));
        inOrder(root.right, Math.min(low, root.val), Math.max(high, root.val));
    };

    let high = root.val;
    let low = root.val;
    inOrder(root, low, high);
    return res;
};