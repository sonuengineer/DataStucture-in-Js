/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const r = matrix.length;
    const c = matrix[0].length;
    let ans = Infinity;

    const dp = new Array(r).fill(null).map(() => new Array(c).fill(Infinity));

    for (let i = 0; i < c; i++) {
        ans = Math.min(ans, rec(0, i, matrix, dp));
    }

    return ans;

    function rec(i, j, arr, dp) {
        if (i === arr.length) return 0;
        if (j < 0 || j >= arr[0].length) return Infinity;

        if (dp[i][j] !== Infinity) return dp[i][j];

        const ops1 = rec(i + 1, j - 1, arr, dp);
        const ops2 = rec(i + 1, j, arr, dp);
        const ops3 = rec(i + 1, j + 1, arr, dp);

        dp[i][j] = arr[i][j] + Math.min(ops1, Math.min(ops2, ops3));
        return dp[i][j];
    }
};