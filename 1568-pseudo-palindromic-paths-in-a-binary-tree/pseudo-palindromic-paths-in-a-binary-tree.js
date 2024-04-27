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
 * @return {number}
 */
var pseudoPalindromicPaths = function(root) {
    return dfs(root, 0);
};

/**
 * @param {TreeNode} root
 * @param {number} mask
 * @return {number}
 */
var dfs = function(root, mask) {
    if (!root) {
        return 0;
    }

    mask ^= 1 << root.val;

    if (!root.left && !root.right) {
        // Check if the bitmask represents a pseudo-palindromic path
        return (mask & (mask - 1)) === 0 ? 1 : 0;
    }

    // Recursively traverse left and right subtrees
    return dfs(root.left, mask) + dfs(root.right, mask);
};