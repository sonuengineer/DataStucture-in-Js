var rangeBitwiseAnd = function(m, n) {
    let shift = 0;
    
    // Find the common leftmost bits in m and n
    while (m < n) {
        m >>= 1;
        n >>= 1;
        shift++;
    }
    
    // Shift back to the left to reconstruct the final result
    return m << shift;
};
