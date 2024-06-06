var constructMaximumBinaryTree = function(nums) {
    let max=Math.max(...nums);
    let root= new TreeNode(max);
    let index=nums.indexOf(max);
    
    if(nums.slice(0,index).length>0) 
    root.left=constructMaximumBinaryTree(nums.slice(0, index));
    
    if(nums.slice(index+1).length>0)
    root.right=constructMaximumBinaryTree(nums.slice(index+1));
    
    return root;
};