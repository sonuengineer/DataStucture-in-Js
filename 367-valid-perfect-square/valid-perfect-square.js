var isPerfectSquare = function(num) {
    if (num < 2) return true; // Base case for 0 and 1
    
    let left = 1;
    let right = num;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let square = mid * mid;
        
        if (square === num) {
            return true;
        } else if (square > num) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return false;
};
