function borderSums(matrix) {
	var result = [];
	for (var i = 0; i < matrix.length / 2; i++) {
		result.push(0);
	}
	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix.length; j++) {
			var border = Math.min(i, j);
			border = Math.min(border, matrix.length - i - 1);
			border = Math.min(border, matrix.length - j - 1);
			result[border] += matrix[i][j];
		}
	}
	return result;
}
