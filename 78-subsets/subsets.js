/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/* 
Approch: bit -manupulation 
if we look closely that number of subset its depend upon length of array  thats is 2^length of array 
this is key to solve this qn (in js we can find this using bitwise left operator 1<<n give...2^n)
step1) make one empty array to store result
step2)Iterate  i through till number of total subset we can find by using 1<<n
              in this make another empty array of having subset 
              iterate j  through length of array 
              chaek for  ((i & (1 << j)) !== 0 if true then push that number into subset
              after inner loop end push the subset into result 
 step3) retune the result          
 
 Alogo
 Initialization: Create an empty array (result) to store all subsets.

Outer Loop: Use a loop (for (let i = 0; i < (1 << n); i++)) to iterate through all possible combinations. (1 << n) calculates 2^n, representing the total number of combinations.

Subset Initialization: For each combination, create a new empty array (subset) to represent a subset.

Inner Loop: Use another loop (for (let j = 0; j < n; j++)) to iterate through each bit of the current combination.

Bit Check: Check if the j-th bit of the current combination is set to 1 using if ((i & (1 << j)) !== 0).

Include Element: If the bit is set, include the corresponding element from the input array in the current subset (subset.push(nums[j])).

Subset Addition: Add the generated subset to the result array.

Return Result: Return the final array containing all subsets.

*/
var subsets = function(nums) {
       let result=[]
       let totalsubset=1<<nums.length
       for(let i=0;i<totalsubset;i++){
              let subset=[]                                                      
              for(let j=0;j<nums.length;j++){
                if((i &(1<<j))!=0){
                    subset.push(nums[j])
                }
              }
              result.push(subset)
       }
       return result
};
// @lc code=end

