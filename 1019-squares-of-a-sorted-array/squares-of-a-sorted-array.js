/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
   // nums.sort((a,b)=>a-b)
    let a=nums.map((a)=>a*a)
    return a.sort((a,b)=>a-b)
};