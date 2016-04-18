function isLowerTriangularMatrix(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[0].length; j++) {
            if (j > i && matrix[i][j] !== 0) return false;
        }
    }
    return true;
}