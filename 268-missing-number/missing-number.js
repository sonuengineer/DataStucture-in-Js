/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
      let len=nums.length
      let sum=0
      let originalsum=len*(len+1)/2
      for(let i=0;i<len;i++){
              sum=sum+nums[i]     
      }
      return originalsum-sum
};