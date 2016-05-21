int dfsConnectedComponents(final boolean[][] matrix) {

  class Helper {
  void dfs(int currentVertex, boolean[] visited) {
    visited[currentVertex] = true;
    for (int nextVertex = 0; nextVertex < matrix[0].length; nextVertex++) {
      if (!matrix[currentVertex][nextVertex] || visited[nextVertex])
        continue;
      dfs(nextVertex, visited);
    }
  }
  }
  Helper h = new Helper();

  boolean[] visited = new boolean[matrix.length];
  int componentsCount = 0;

  for (int startVertex = 0; startVertex < matrix.length; startVertex++) {
    if (!visited[startVertex]) {
      h.dfs(startVertex, visited);
      componentsCount++;
    }
  }

  return componentsCount;
}
