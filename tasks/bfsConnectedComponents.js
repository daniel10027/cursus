function bfsConnectedComponents(matrix) {
  var visited = [],
    queue = [],
    componentsCount = 0;
  for (var i = 0; i < matrix.length; i++) {
    visited.push(false);
  }
  for (var startVertex = 0; startVertex < matrix.length; startVertex++) {
    if (!visited[startVertex]) {
      componentsCount++;
      visited[startVertex] = true;
      queue.push(startVertex);
      while (queue.length) {
        var currentVertex = queue.shift();
        visited[currentVertex] = true;
        for (var nextVertex = 0; nextVertex < matrix.length; nextVertex++) {
          if (matrix[currentVertex][nextVertex] && !visited[nextVertex]) {
            visited[nextVertex] = true;
            queue.push(nextVertex);
          }
        }
      }
    }
  }
  return componentsCount;
}