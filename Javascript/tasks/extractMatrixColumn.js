function extractMatrixColumn(matrix, column) {
    var r = [];
    for (var i = 0; i < matrix.length; i++) {
        r[i] = matrix[i][column];
    }
    return r;
}