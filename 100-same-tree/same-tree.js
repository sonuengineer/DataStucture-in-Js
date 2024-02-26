/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    //1.base case both are empty 
       if(!p &&!q){
        return true
       }else if(!p || !q){    //base case if one of the tree empty retuen false
        return false 
       }else if(p.val===q.val){
        return (isSameTree(p.left,q.left) && isSameTree(p.right,q.right))
       }else{
        return false
       }
};