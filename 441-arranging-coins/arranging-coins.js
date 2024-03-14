/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let left = 0;
    let right = n;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);   //3
        const coinsNeeded = mid * (mid + 1) / 2;  // 6

        if (coinsNeeded === n) {
            return mid; // Found exact number of coins needed for complete rows
        } else if (coinsNeeded < n) {
            left = mid + 1; // Update left boundary
        } else {
            right = mid - 1; // Update right boundary
        }
    }

    return right; // Return the maximum number of complete rows

};