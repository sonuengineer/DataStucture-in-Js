/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {
    const n = grid.length;
    const m = grid[0].length;

    const dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(m);
        for (let j = 0; j < m; j++) {
            dp[i][j] = new Array(m).fill(-1);
        }
    }

    return dfs(grid, n, m, 0, 0, m - 1, dp);
};

function dfs(grid, n, m, r, col1, col2, dp) {
    if (r < 0 || r >= n || col1 < 0 || col1 >= m || col2 < 0 || col2 >= m) {
        return 0;
    }

    if (dp[r][col1][col2] !== -1) {
        return dp[r][col1][col2];
    }

    let maxCherries = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            const newCol1 = col1 + i;
            const newCol2 = col2 + j;

            maxCherries = Math.max(maxCherries, dfs(grid, n, m, r + 1, newCol1, newCol2, dp));
        }
    }

    const currCherry = (col1 === col2) ? grid[r][col1] : grid[r][col1] + grid[r][col2];

    dp[r][col1][col2] = currCherry + maxCherries;
    return dp[r][col1][col2];
}