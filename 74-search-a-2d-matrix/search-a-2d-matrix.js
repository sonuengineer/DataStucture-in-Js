/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(mat, tar) {
    // let r=mat.length
    //   let c=mat[0].length
      
    //   for(let i=0;i<r;i++){
    //     for(let j=0;j<c;j++){
    //       if(mat[i][j]===tar){
    //         return true
           
    //       }
    //     }
    //   }
    //   return false
    let r = mat.length
  let c = mat[0].length
  let left = 0
  let right = r * c - 1
  while (left <= right) {
    //let mid=Math.floorleft+(right-left)/2
    let mid = Math.floor((left + right) / 2)
    let midElement = mat[Math.floor(mid / c)][mid % c];
    if (midElement === tar) {
      return true
    } else if (midElement < tar) {
      left = mid + 1
    } else {
      right = mid - 1
    }
   
  }
  return false
};