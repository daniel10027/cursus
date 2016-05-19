function dijkstraDistances(matrix, startVertex) {

  var used = [];
  var distance = [];

  for (var i = 0; i < matrix.length; i++) {
    distance.push(Infinity);
    used.push(false);
  }
  distance[startVertex] = 0;

  for (var i = 0; i < matrix.length; i++) {
    var chosenIndex = -1;
    for (var j = 0; j < matrix.length; j++) {
      if (!used[j] && (chosenIndex === -1 || distance[chosenIndex] > distance[j])) {
        chosenIndex = j;
      }
    }
    used[chosenIndex] = true;
    for (var j = 0; j < matrix.length; j++) {
      if (matrix[chosenIndex][j] !== -1 && distance[j] > distance[chosenIndex] + matrix[chosenIndex][j]) {
        distance[j] = distance[chosenIndex] + matrix[chosenIndex][j];
      }
    }
  }

  return distance;
}
