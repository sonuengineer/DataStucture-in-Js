/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let start = 1, end = n;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        let guessNum = guess(mid);
        if(guessNum == 0){
            return mid;
        }
        else if(guessNum == 1){
            start = mid+1;
        }
        else if(guessNum == -1){
            end = mid-1;
        }
    }
};