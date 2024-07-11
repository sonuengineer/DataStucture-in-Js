var checkTree = function(root) {
    // let binary = (root[0] === root[1]+root[2])? true: false
    return root.val === root.left.val+root.right.val
    //return binary;
};