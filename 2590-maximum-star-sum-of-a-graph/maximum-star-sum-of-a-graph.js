/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
var maxStarSum = function(vals, edges, k) {
    let n = vals.length;
    let adjList = Array.from({ length: n }, () => []);

    for (let [u, v] of edges){
        adjList[u].push(v);
        adjList[v].push(u);
    }
    
    let res = Number.MIN_SAFE_INTEGER;

    for(let i = 0; i < n; i++){
        let a = adjList[i].map(x => vals[x]).sort((a, b) => b - a);
        let sum = vals[i];
        let count = 0;
        for(let x of a){
            if(x > 0 && count < k){
                sum += x;
                count++;
            }else break;
        }

        res = Math.max(res, sum);
    }
    
    return res;

};