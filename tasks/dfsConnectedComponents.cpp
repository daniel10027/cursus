int dfsConnectedComponents(std::vector<std::vector<bool> > matrix) {

  struct Helper {
    std::vector<bool> visited;
    std::vector<std::vector<bool> > matrix;

    void dfs(int currentVertex) {
      visited[currentVertex] = true;
      for (int nextVertex = 0; nextVertex < matrix[0].size(); nextVertex++) {
        if (!matrix[currentVertex][nextVertex] || visited[nextVertex])
          continue;
        dfs(nextVertex);
      }
    }
  };

  std::vector<bool> visited(matrix.size(), false);

  Helper h;
  h.visited = visited;
  h.matrix = matrix;

  int componentsCount = 0;

  for (int startVertex = 0; startVertex < matrix.size(); startVertex++) {
    if (!h.visited[startVertex]) {
      h.dfs(startVertex);
      componentsCount++;
    }
  }

  return componentsCount;
}
