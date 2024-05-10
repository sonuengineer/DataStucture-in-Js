var leafSimilar = function(root1, root2) {
    const root2LeafGenerator = getLeafRecursiveGenerator(root2)
    for (const root1LeafValue of getLeafRecursiveGenerator(root1)) {
        const root2LeafValue = root2LeafGenerator.next().value;
        if (root1LeafValue !== root2LeafValue) {
            return false;
        }
    }
    // Return false if second graph is bigger than first graph
    return root2LeafGenerator.next().done;
};

function* getLeafRecursiveGenerator(node) {
    if (node.left === null && node.right === null) {
        yield node.val;
        return;
    }
    if (node.left !== null) {
        yield * getLeafRecursiveGenerator(node.left); 
    }
    if (node.right !== null) {
        yield * getLeafRecursiveGenerator(node.right);
    }
}