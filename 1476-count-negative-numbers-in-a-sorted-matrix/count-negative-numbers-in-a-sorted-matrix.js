
// var countNegatives = function(grid) {
//        let row=grid.length
//        let col=grid[0].length
//        let count=0
//        for(let i=0;i<row;i++){
//         for(let j=0;j<col;j++){
//        if(grid[i][j]<0){
//         count++
//        }
//         }
//        }
//        return count
// };
// console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))
var countNegatives = function(grid) {
    const rowCount = grid.length;
    const colCount = grid[0].length;
    let count = 0;

    for (let i = 0; i < rowCount; i++) {
        let left = 0;
        let right = colCount - 1;
        let firstNegativeIndex = colCount; // Initialize to colCount assuming all are non-negative
        
        // Binary search to find the first negative number index in the row
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (grid[i][mid] < 0) {
                firstNegativeIndex = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        
        // Count the number of negative numbers in the row
        count += colCount - firstNegativeIndex;
    }
    
    return count;
};

console.log(countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3]
])); // Output: 8
