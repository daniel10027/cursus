std::vector<int> possibleHeights(std::vector<int> parent) {

  struct Graph {
    std::vector<std::vector<int> > edges;
    std::vector<int> height;
    std::vector<bool> isPossibleHeight;

    Graph(std::vector<int> const& parent) {
      edges = std::vector<std::vector<int> >(parent.size());
      for (int i = 1; i < parent.size(); i++) {
        edges[parent[i]].push_back(i);
      }
      height = std::vector<int>(parent.size(), 0);
      isPossibleHeight = std::vector<bool>(parent.size(), false);
    }

    void calcHeight(int v) {
      for (int u : edges[v]) {
        calcHeight(u);
        height[v] = std::max(height[v], height[u]+1);
      }
      std::vector<std::vector<int> > countHeights(edges.size());
      for (int i = 0; i < edges[v].size(); i++) {
        int u = edges[v][i];
        countHeights[height[u]].push_back(u);
      }
      edges[v].clear();
      for (int i = edges.size() - 1; i >= 0; i--) {
        for (int j = 0; j < countHeights[i].size(); j++) {
          edges[v].push_back(countHeights[i][j]);
        }
      }
    }

    void findNewHeights(int v, int tailHeight) {
      isPossibleHeight[std::max(height[v], tailHeight)] = true;
      int firstMaxHeight = tailHeight + 1;
      int secondMaxHeight = tailHeight + 1;
      if (edges[v].size() > 0) {
        firstMaxHeight = std::max(firstMaxHeight, height[edges[v][0]] + 2);
      }
      if (edges[v].size() > 1) {
        secondMaxHeight = std::max(secondMaxHeight, height[edges[v][1]] + 2);
      }
      if (edges[v].size() > 0) {
        findNewHeights(edges[v][0], secondMaxHeight);
      }
      for (int i = 1; i < edges[v].size(); i++) {
        findNewHeights(edges[v][i], firstMaxHeight);
      }
    }
  };

  Graph g(parent);
  g.calcHeight(0);
  g.findNewHeights(0, 0);

  std::vector<int> heights;
  for (int i = 0; i < parent.size(); i++) {
    if (g.isPossibleHeight[i]) {
      heights.push_back(i);
    }
  }
  return heights;
}
