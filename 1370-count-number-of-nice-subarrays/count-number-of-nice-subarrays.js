var numberOfSubarrays = function(nums, k) {
   let odd = 0, count = 0, prefix = 0, i = 0;
   for(let j = 0; j < nums.length; j++){
       if(nums[j] % 2 !== 0){
           odd += 1;
           prefix = 0;
       }
       while(odd === k && i <= j){
           if(nums[i] % 2 !== 0) odd -= 1;
           i++;
           prefix++;
       }
       count += prefix;
   } 
   return count;
};