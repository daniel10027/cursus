function bfsDistancesUnweightedGraph2(matrix, vertex1, vertex2) {

  var visited = [],
      queue = [],
      distance = [];

  for (var i = 0; i < matrix.length; i++) {
    visited.push(false);
    distance.push(0);
  }

  visited[vertex1] = true;
  queue.push(vertex1);
  while (queue.length) {
    var currentVertex = queue.shift();
    visited[currentVertex] = true;
    for (var nextVertex = 0; nextVertex < matrix.length; nextVertex++) {
      if (matrix[currentVertex][nextVertex] && !visited[nextVertex]) {
        visited[nextVertex] = true;
        distance[nextVertex] =  distance[currentVertex] + 1 ;
        queue.push(nextVertex);
      }
    }
  }

  return distance[vertex2];
}
