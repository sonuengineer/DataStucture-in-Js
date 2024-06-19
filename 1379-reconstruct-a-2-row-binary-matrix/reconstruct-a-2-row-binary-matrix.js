/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
var reconstructMatrix = function(upper, lower, colsum) {
    const length = colsum.length; 
    const row1 = new Array(length).fill(0);
    const row2 = new Array(length).fill(0);
    let totalSum = colsum.reduce((acc, currValue)=> acc + currValue, 0);

    if(totalSum!==upper+lower) return [];
    
    for(let i = 0 ; i<colsum.length; i++){
        if(upper <0 || lower<0) return [];
        if(colsum[i]===0) continue;
        if(colsum[i]===2) {
            row1[i] = 1;
            upper--;
            row2[i] = 1;
            lower--;
        } 
        else if(upper>lower) {
            upper--;
            row1[i]++;
        }
        else {
            lower--;
            row2[i]++;
        }
    }
    return [row1, row2];
};