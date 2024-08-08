/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
        const dir = [[0,1], [1,0], [0,-1], [-1,0]]; // east, south, west, north is 0, 1, 2, 3
        var res = [];
        var len = 0, d = 0; // move len steps in the d direction
        res.push([rStart, cStart]);
        while(res.length < rows*cols) { // fill all the blanks
            if(d==0 || d==2) len++; // when move east or west, path length plus 1 
            for(let i=0; i<len; i++) {
                rStart += dir[d][0];
                cStart += dir[d][1];
                if(rStart>=0 && rStart<rows && cStart>=0 && cStart<cols) { // if within the matrix
                    res.push([rStart, cStart]); 
                }
            }
            d = (d+1)%4; // turn to next direction
        }
        return res;
};