function neighboringCells(matrix) {

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (i != matrix.length - 1) matrix[i][j]++;
      if (i != 0) matrix[i][j]++;
      if (j != matrix[0].length - 1) matrix[i][j]++;
      if (j != 0) matrix[i][j]++;
    }
  }

  return matrix;
}
