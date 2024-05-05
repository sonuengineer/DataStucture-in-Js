var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
    // Object.assign(node, node.next);
};