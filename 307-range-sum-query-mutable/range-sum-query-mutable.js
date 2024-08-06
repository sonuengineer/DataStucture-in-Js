class TreeNode {
    constructor(val, rangeLeft, rangeRight){
        this.val = val;
        this.rangeLeft = rangeLeft;
        this.rangeRight = rangeRight;
        this.left = null;
        this.right = null;
    }
    
    searchAndUpdate(index, val){
    
        var diff = 0;

        if(this.rangeLeft==this.rangeRight && this.rangeLeft==index){
            diff = val - this.val;
            this.val = val;
        } else {

            var rangeMid = Math.floor((this.rangeLeft+this.rangeRight)/2);

            if (index<=rangeMid) {
                diff = this.left.searchAndUpdate( index, val);
            } else {
                diff = this.right.searchAndUpdate( index, val);
            }

            this.val += diff;
        }

        return diff;
    }
    
    sumRange(rangeLeft, rangeRight){
        
        var rangeMid = Math.floor((this.rangeLeft+this.rangeRight)/2);
        
        if (rangeLeft==this.rangeLeft && rangeRight==this.rangeRight) {
            return this.val;
        } else if (rangeRight<=rangeMid) {
            return this.left.sumRange(rangeLeft, rangeRight)
        } else if (rangeLeft>rangeMid) {
            return this.right.sumRange(rangeLeft, rangeRight)
        } else {
            return this.left.sumRange(rangeLeft, rangeMid)+this.right.sumRange(rangeMid+1, rangeRight)
        }
    }
}

var NumArray = function(nums) {
    this.valsTree = NumArray.build(nums,0,nums.length-1);
    this.valsCount = nums.length;
};

NumArray.build = function(vals, left, right){
    var node = new TreeNode(null, left, right);
    
    if(left==right){
        node.val = vals[left];
    } else {
        var mid = Math.floor((left+right)/2);
        node.left = NumArray.build(vals, left, mid);
        node.right = NumArray.build(vals, mid+1, right );
        node.val = node.left.val + node.right.val
    }
    
    return node;
}

NumArray.prototype.update = function(index, val) {
    return this.valsTree.searchAndUpdate(index, val);
};

NumArray.prototype.sumRange = function(left, right) {
    return this.valsTree.sumRange(left,right);
};