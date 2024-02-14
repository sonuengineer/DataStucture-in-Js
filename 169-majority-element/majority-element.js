/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate=nums[0]  //assume 1st member of array is our candidate
    let count=1   //assume he his having vote 1 
    for(let i=1;i<nums.length;i++){
        if(count===0){
            //then canditae does not get wott change it with i
            candidate=nums[i]
        }
        //id candiate get same number  in loop 
        if(nums[i]===candidate){
                //then increase the count
                count++
        }else{
            //else decrese the count 
                count--
        
        }
    }
    return candidate
    
};