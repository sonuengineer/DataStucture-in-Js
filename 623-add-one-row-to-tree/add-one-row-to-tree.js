/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    if (depth === 1) {
    const newHead = new TreeNode(val);
    newHead.left = root;
    return newHead;
  } else if (!root) {
    return null;
  }

  let currentLevel = [root];
  let level = 2;

  while (currentLevel.length > 0) {
    if (level === depth) {
      for (let node of currentLevel) {
        const newLeft = new TreeNode(val, node.left, null);
        node.left = newLeft;
        const newRight = new TreeNode(val, null, node.right);
        node.right = newRight;
      }
      break;
    }

    const nextLevel = [];
    for (let node of currentLevel) {
      if (node.left) nextLevel.push(node.left);
      if (node.right) nextLevel.push(node.right);
    }
    currentLevel = nextLevel;
    level++;
  }

  return root;
};