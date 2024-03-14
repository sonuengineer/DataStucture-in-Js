var nextGreatestLetter = function(letters, target) {
    let left = 0;
    let right = letters.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((right + left) / 2);
        
        if (letters[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left < letters.length ? letters[left] : letters[0];
};
console.log(nextGreatestLetter(["c","f","j"],"a"))