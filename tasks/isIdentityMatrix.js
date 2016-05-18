function isIdentityMatrix(matrix) {

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix.length; j++) {
      if (matrix[i][j] !== 1 && i === j || matrix[i][j] && i !== j) {
        return false;
      }
    }
  }
  return true;
}
