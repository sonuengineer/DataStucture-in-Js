/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function(n, edges) {
    let graph = new Array(n).fill(null).map(() => []);
    let inDeg = new Array(n).fill(0);
    
    for (let e of edges) {
        graph[e[0]].push(e[1]);
        inDeg[e[1]]++;
    }
    
    let q = [];
    for (let i = 0; i < n; i++) {
        if (inDeg[i] === 0) {
            q.push(i);
        }
    }
    
    let ancestors = new Array(n).fill(null).map(() => new Set());
    
    while (q.length > 0) {
        let u = q.shift();
        for (let v of graph[u]) {
            inDeg[v]--;
            ancestors[v].add(u);
            for (let ancestor of ancestors[u]) {
                ancestors[v].add(ancestor);
            }
            if (inDeg[v] === 0) {
                q.push(v);
            }
        }
    }
    
    let ans = new Array(n);
    for (let i = 0; i < n; i++) {
        ans[i] = Array.from(ancestors[i]).sort((a, b) => a - b);
    }
    
    return ans;
};