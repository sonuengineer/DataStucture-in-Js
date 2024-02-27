function diameterOfBinaryTree(root) {
  let diameter = 0;

  function depth(node) {
    if (!node) return 0;

    const leftDepth = depth(node.left);
    const rightDepth = depth(node.right);

    diameter = Math.max(diameter, leftDepth + rightDepth);

    return 1 + Math.max(leftDepth, rightDepth);
  }

  depth(root);

  return diameter;
}
