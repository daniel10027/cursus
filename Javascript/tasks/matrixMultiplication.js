function matrixMultiplication(matrix1, matrix2) {
    var result = [];
    for (var i = 0; i < matrix1.length; i++) {
        result.push([]);
        for (var j = 0; j < matrix2[0].length; j++) {
            result[i].push(0);
            for (var k = 0; k < matrix2.length; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }
    return result;
}