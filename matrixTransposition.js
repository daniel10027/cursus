function matrixTransposition(matrix) {

  var result = [];
  for (var i = 0; i < matrix[0].length; i++) {
    result.push([]);
    for (var j = 0; j < matrix.length; j++) {
      result[i].push(matrix[j][i]);
    }
  }
  return result;
}
