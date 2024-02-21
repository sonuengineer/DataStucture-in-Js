/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let current=0
    let maxh=0
   for(let i=0;i<gain.length;i++){
         current+=gain[i]
         maxh=Math.max(maxh,current)
   }
    return maxh
};