var kthLargestNumber = function(nums, k) {
     nums.sort((a,b)=> BigInt(a)<BigInt(b) ? 1 :  BigInt(a)>BigInt(b) ? -1 : 0 );
    return nums[k-1]
};