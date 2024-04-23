/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if(n == 1)
        return [0]
    const graph = {};
    const degree = {};
    const visited = new Array(n).fill(false);
    for(let [src, dst] of edges){
        if(!(src in graph)){
            graph[src] = []
            degree[src] = 0;
        }
        graph[src].push(dst);
        degree[src]++;

        if(!(dst in graph)){
            graph[dst] = []
            degree[dst] = 0
        }
        graph[dst].push(src);
        degree[dst]++;
    }
    let q = []
    let ans = []
    for(let i = 0; i < n; i++){
        if(degree[i] === 1){
            q.push(i)
            visited[i] = true;
        }
    }
    while(q.length !== 0){
        let size = q.length;
        ans = []
        for(let i = 0; i < size; i++){
            let f = q.shift();
            ans.push(f);
            for(let neighbor of graph[f]){
                if(!visited[neighbor]){
                    degree[neighbor]--;
                    if(degree[neighbor] === 1){
                        visited[neighbor] = true;
                        q.push(neighbor);
                    }
                }
            }
        }
    }
    return ans;

};