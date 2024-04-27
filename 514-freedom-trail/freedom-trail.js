/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function(ring, key) {
    const dist = (size, p, t) => Math.min(Math.abs(t - p), size - Math.abs(t - p));

    const n = ring.length, m = key.length;
    const mp = Array.from({ length: 26 }, () => Array(100).fill(0));
    const freq = Array(26).fill(0);
    const dp = Array.from({ length: 100 }, () => Array(100).fill(0));

    for (let i = 0; i < n; ++i) {
        mp[ring.charCodeAt(i) - 'a'.charCodeAt(0)][freq[ring.charCodeAt(i) - 'a'.charCodeAt(0)]++] = i;
    }

    for (let i = 0; i < freq[key.charCodeAt(0) - 'a'.charCodeAt(0)]; ++i) {
        dp[0][mp[key.charCodeAt(0) - 'a'.charCodeAt(0)][i]] = dist(n, 0, mp[key.charCodeAt(0) - 'a'.charCodeAt(0)][i]) + 1;
    }

    for (let i = 1; i < m; ++i) {
        for (let j = 0; j < freq[key.charCodeAt(i) - 'a'.charCodeAt(0)]; ++j) {
            let mini = Number.MAX_SAFE_INTEGER;
            for (let k = 0; k < freq[key.charCodeAt(i - 1) - 'a'.charCodeAt(0)]; ++k) {
                mini = Math.min(mini, dp[i - 1][mp[key.charCodeAt(i - 1) - 'a'.charCodeAt(0)][k]] +
                    dist(n, mp[key.charCodeAt(i) - 'a'.charCodeAt(0)][j], mp[key.charCodeAt(i - 1) - 'a'.charCodeAt(0)][k]) + 1);
            }
            dp[i][mp[key.charCodeAt(i) - 'a'.charCodeAt(0)][j]] = mini;
        }
    }

    let res = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < freq[key.charCodeAt(m - 1) - 'a'.charCodeAt(0)]; ++i) {
        res = Math.min(res, dp[m - 1][mp[key.charCodeAt(m - 1) - 'a'.charCodeAt(0)][i]]);
    }

    return res;
};