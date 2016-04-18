function matrixTrace(matrix) {
    var result = 0;
    for (var i = 0; i < matrix.length; i++) {
        result += matrix[i][i];
    }
    return result;
}