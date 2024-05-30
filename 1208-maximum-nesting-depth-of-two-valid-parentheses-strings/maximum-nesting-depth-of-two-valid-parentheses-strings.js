/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function (seq) {

    // initialize n as length of seq
    // and level equal to 0
    // and create new array of length n and fill with 0 
    let n = seq.length, level = 0, arr = new Array(n).fill(0);

    // run for loop from index 0 to n
    for (let i = 0; i < n; i++) {

        // if ith character of seq is equal to "(" then do modulo of pre increment of level with 2
        if (seq.charAt(i) === "(") {
            arr[i] = ++level % 2;
        } else {

            // else do modulo of post decrement of level with 2
            arr[i] = level-- % 2;
        }
    }

    // return answer arr
    return arr;
};