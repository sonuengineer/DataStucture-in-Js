var diagonalSort = function(mat) {
  	function setDiagonal (mat, y, x) {
		let diag = [];
		let size = Math.min(mat.length - y, mat[0].length - x);
		for (let i = 0; i<size; i++) diag.push(mat[i+y][i+x]);
		diag.sort((a,b) => a-b);
		for (let i = 0; i<size; i++) mat[i+y][i+x] = diag[i];
		return diag;
	}

	for (let j = 0; j < mat[0].length; j++) setDiagonal(mat, 0, j)
	for (let i = 1; i < mat.length; i++) setDiagonal(mat, i, 0)

	return mat; 
};