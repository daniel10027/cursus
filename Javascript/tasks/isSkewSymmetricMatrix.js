function isSkewSymmetricMatrix(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[0].length; j++) {
            if (i != j && matrix[i][j] != -matrix[j][i]) return false;
        }
    }
    return true;
}