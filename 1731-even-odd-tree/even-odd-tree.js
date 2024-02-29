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
 * @return {boolean}
 */
var isEvenOddTree = function(root) {
       if (!root) {
        return true; // An empty tree is considered Even-Odd
    }

    const queue = [root];
    let level = 0;

    while (queue.length > 0) {
        const levelSize = queue.length;
        let prevValue = level % 2 === 0 ? -1 : Number.MAX_SAFE_INTEGER;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();

            // Check the condition based on the level's parity
            if (
                (level % 2 === 0 && (node.val % 2 !== 1 || node.val <= prevValue)) ||
                (level % 2 !== 0 && (node.val % 2 !== 0 || node.val >= prevValue))
            ) {
                return false;
            }

            prevValue = node.val;

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        level++;
    }

    return true;
};