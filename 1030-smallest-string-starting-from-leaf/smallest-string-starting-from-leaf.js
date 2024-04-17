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
 * @return {string}
 */
var smallestFromLeaf = function (root) {
    let smallestNode = '';
    dfs();
    return smallestNode;
    function dfs(node = root, str = []) {
        if (!node) return;
        str.push(String.fromCharCode(97 + node.val));
        if (!node.left && !node.right) {
            const val = [...str].reverse().join('');
            smallestNode = smallestNode || val;
            if (val < smallestNode) {
                smallestNode = val;
            }
        }
        dfs(node.left, str);
        dfs(node.right, str);
        str.pop();
    }
};