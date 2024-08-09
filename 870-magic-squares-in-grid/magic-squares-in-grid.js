var numMagicSquaresInside = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;

    for (let i = 0; i < rows - 2; i++) {
        for (let j = 0; j < cols - 2; j++) {
            if (isMagicSquare(grid, i, j)) {
                count++;
            }
        }
    }

    return count;
};

function isMagicSquare(grid, row, col) {
    // Step 1
    if (!containsUniqueDigits(grid, row, col)) {
        return false;
    }
    
    // Step 2
    const diagonalSum = diagonalCheck(grid, row, col);
    if (diagonalSum === -1) {
        return false;
    }

    // Step 3 and Step 4
    if (!rowCheck(grid, row, col, diagonalSum) || !columnCheck(grid, row, col, diagonalSum)) {
        return false;
    }

    return true;
}

// Check if the subgrid contains unique digits from 1 to 9
function containsUniqueDigits(grid, row, col) {
    const digits = Array(10).fill(0);
    for (let i = row; i < row + 3; i++) {
        for (let j = col; j < col + 3; j++) {
            const element = grid[i][j];
            if (element < 1 || element > 9 || digits[element] > 0) {
                return false;
            }
            digits[element] = 1; // visited
        }
    }
    return true;
}

// Check if both of the diagonals of the 3x3 subgrid have the same sum
function diagonalCheck(grid, row, col) {
    const diagonal1 = grid[row][col] + grid[row + 1][col + 1] + grid[row + 2][col + 2];
    const diagonal2 = grid[row][col + 2] + grid[row + 1][col + 1] + grid[row + 2][col];
    return diagonal1 === diagonal2 ? diagonal1 : -1;
}

// Check if all rows in the subgrid have the same sum as the diagonals
function rowCheck(grid, row, col, targetSum) {
    for (let i = 0; i < 3; i++) {
        const rowSum = grid[row + i][col] + grid[row + i][col + 1] + grid[row + i][col + 2];
        if (rowSum !== targetSum) {
            return false;
        }
    }

    return true;
}

// Check if all columns in the subgrid have the same sum as the diagonals
function columnCheck(grid, row, col, targetSum) {
    for (let i = 0; i < 3; i++) {
        const colSum = grid[row][col + i] + grid[row + 1][col + i] + grid[row + 2][col + i];
        if (colSum !== targetSum) {
            return false;
        }
    }

    return true;
}