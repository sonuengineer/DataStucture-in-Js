/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let firstBig = secondBig = 0;
    let firstSmall = secondSmall = Infinity;

    for (const n of nums) {
        if (n < firstSmall) {
            [secondSmall, firstSmall] = [firstSmall, n];
        } else if (n < secondSmall) {
            secondSmall = n;
        }

        if (n > firstBig) {
            [secondBig, firstBig] = [firstBig, n];
        } else if (n > secondBig) {
            secondBig = n;
        }
    }

    return firstBig * secondBig - firstSmall * secondSmall;    
};