function matrixElementsSum(matrix) {
    var result = 0;
    for (var i = 0; i < matrix[0].length; i++) {
        for (var j = 0; j < matrix.length; j++) {
            if (matrix[j][i] === 0) {
                break;
            }
            result += matrix[j][i];
        }
    }
    return result;
}