var maxEqualRowsAfterFlips = function(g) {
    let m = g.length;
    let x = {};

    // Iterate through rows, flip if the first element is 1, and count occurrences in 'x'
    for (let i = 0; i < m; i++) {
        if (g[i][0]) {
            g[i] = g[i].map((e) => 1 - e);
        }
        let k = g[i].join("");
        x[k] = (x[k] || 0) + 1;
    }

    let maxf = 0;

    // Find and return the maximum count of equal rows after flips
    for (let k in x) {
        let f = x[k];
        maxf = Math.max(maxf, f);
    }

    return maxf;
};