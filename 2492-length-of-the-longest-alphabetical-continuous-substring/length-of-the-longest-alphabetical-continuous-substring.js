/**
 * @param {string} s
 * @return {number}
 */
 var longestContinuousSubstring = function(s) {
    let longest = 1;
    let currentCount = 1;
    
    for (let i = 1; i < s.length; i++){
        let currentCh = s[i].charCodeAt(0);
        let previousCh = s[i - 1].charCodeAt(0);
        
        if (currentCh - previousCh === 1){
            currentCount += 1;
        } else {
            currentCount = 1
        }
        
        if (currentCount > longest) {
            longest = currentCount;
        }
    }
    
    return longest;
};