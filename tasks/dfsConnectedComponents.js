function dfsConnectedComponents(matrix) {

  var dfs = function(currentVertex, visited) {
    visited[currentVertex] = true;
    for (var nextVertex = 0; nextVertex < matrix[0].length; nextVertex++) {
      if (!matrix[currentVertex][nextVertex] || visited[nextVertex])
        continue;
      dfs(nextVertex, visited);
    }
  }

  var visited = [];
  var componentsCount = 0;

  for (var i = 0; i < matrix.length; i++) {
    visited.push(false);
  }

  for (var startVertex = 0; startVertex < matrix.length; startVertex++) {
    if (!visited[startVertex]) {
      dfs(startVertex, visited);
      componentsCount++;
    }
  }

  return componentsCount;
}
