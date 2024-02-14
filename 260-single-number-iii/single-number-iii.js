/*
 * @lc app=leetcode id=260 lang=javascript
 *
 * [260] Single Number III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
   let  result=[]
   let store=new Map()
   //let add nums value to our store 
   nums.forEach((number,count)=>{
       store.set(number,(store.get(number)||0)+1)
   })
  for (let [a,b] of store){
      if(b===1){
          result.push(a)
      }
     
  }
  return result
//    return store.get()
};
// console.log(singleNumber([1,1,2,3,2]))
// @lc code=end

