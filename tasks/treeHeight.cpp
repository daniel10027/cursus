typedef std::vector<int> vect;
typedef std::vector<std::vector<int> > vect2D;

int treeHeight(vect parent) {

  struct Helper {
    int dfs(int v, vect2D& graph) {
      int height = 0;
      for (int i = 0; i < graph[v].size(); i++) {
        int to = graph[v][i];
        height = std::max(height, dfs(to, graph) + 1);
      }
      return height;
    }
  };

  Helper h;

  vect2D graph(parent.size());

  for (int i = 1; i < parent.size(); i++) {
    graph[parent[i]].push_back(i);
  }

  return h.dfs(0, graph);
}
