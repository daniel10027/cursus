function verticesDegrees(matrix) {

  var r = []

  for (var i = 0; i < matrix.length; i++) {
    r[i] = 0;
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        r[i]++;
        if (i == j) r[i]++;
      }
    }
  }
  return r;
}
