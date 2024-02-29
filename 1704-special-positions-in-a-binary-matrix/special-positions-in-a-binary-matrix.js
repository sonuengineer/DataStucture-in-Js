/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
     const rows = mat.length;
    const cols = mat[0].length;
    let count = 0;

    // Helper function to check if a position is special
    function isSpecial(i, j) {
        for (let col = 0; col < cols; col++) {
            if (col !== j && mat[i][col] === 1) {
                return false; // There is a 1 in the same row
            }
        }

        for (let row = 0; row < rows; row++) {
            if (row !== i && mat[row][j] === 1) {
                return false; // There is a 1 in the same column
            }
        }

        return true; // It's a special position
    }

    // Iterate through each element in the matrix
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (mat[i][j] === 1 && isSpecial(i, j)) {
                count++;
            }
        }
    }

    return count;
};