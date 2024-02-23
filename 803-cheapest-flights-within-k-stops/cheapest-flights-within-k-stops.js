/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    let dp = new Array(n).fill(Number.MAX_VALUE);
    dp[src] = 0;

    for (let i = 0; i <= k; i++) {
        let temp = [...dp];
        for (let flight of flights) {
            if (dp[flight[0]] !== Number.MAX_VALUE) {
                temp[flight[1]] = Math.min(temp[flight[1]], dp[flight[0]] + flight[2]);
            }
        }
        dp = temp;
    }
    
    return dp[dst] === Number.MAX_VALUE ? -1 : dp[dst];
};