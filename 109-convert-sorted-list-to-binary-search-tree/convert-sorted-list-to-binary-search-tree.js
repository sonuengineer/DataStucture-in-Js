var sortedListToBST = function(head) {
//     Converting LL into array
    let arr = getarr(head);
    
//     Now, using tree function to get an tree out of SORTED ARRAY
    return tree(arr);
    
};

function getarr(head){
    if(!head) return [];
    let temp = head;
    let out = []
    while(temp){
        out.push(temp.val);
        temp = temp.next;
    }
    return out;
}

function tree(nums, start=0, end = nums.length-1) {
    if(start<=end){
        let mid = Math.floor((start+end)/2);
        // console.log(mid, end)
        let root = new TreeNode(nums[mid]);
        root.left = tree(nums, start, mid-1);
        root.right = tree(nums, mid+1, end);
        return root;
    }
    return null;
};