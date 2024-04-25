/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function(s, k) {
    let n = s.length, longest = 0;
    let maxLength = new Array(n).fill(0);
    const dfs = (i) => {
        if(i === n) return 0;
        if(maxLength[i] > 0) return maxLength[i];
        let cur = 1, curCode = s.charCodeAt(i);
        for(let j = i+1; j < n; j++){
            if(Math.abs(s.charCodeAt(j) - curCode) <= k){
                cur = Math.max(cur, dfs(j) + 1);
            }
            if(s[j] === s[i]) break;
        }
        return maxLength[i] = cur;
    }
    for(let i = 0; i < n; i++){
        longest = Math.max(longest, dfs(i));
    }
    return longest;
};