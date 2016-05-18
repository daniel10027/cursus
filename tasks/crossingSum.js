function crossingSum(matrix, a, b) {
    var s = 0;
    for (var i = 0; i < matrix[0].length; i++) {
        s += matrix[a][i];
    }
    for (var i = 0; i < matrix.length; i++) {
        s += matrix[i][b];
    }
    s -= matrix[a][b];
    return s;
}