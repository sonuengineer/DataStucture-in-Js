/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
       let result=0
       for(let i=0;i<32;i++){
        //left sift
          result=result<<1
          //bitwise or and And
          result=result | (n&1)
          //right shift by 1 
         n=n>>>1
       }
       //convert to unsigned integer
       return result>>>0
};