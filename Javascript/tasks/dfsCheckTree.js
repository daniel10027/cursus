function dfsCheckTree(matrix) {

  var dfs = function(currentVertex, parentVertex) {
    visited[currentVertex] = true;
    componentSize += 1;
    for (var nextVertex = 0; nextVertex < matrix.length; nextVertex++) {
      if (matrix[currentVertex][nextVertex] && nextVertex !== parentVertex) {
        if (!visited[nextVertex])
          dfs(nextVertex, currentVertex)
        else
          cyclesFound = true
      }
    }
  }

  var visited = [];
  var componentSize = 0;
  var cyclesFound = false;

  for (var i = 0; i < matrix.length; i++) {
    visited.push(false);
  }

  dfs(0, -1);

  if (componentSize === matrix.length && !cyclesFound) {
    return true;
  }

  return false;
}
