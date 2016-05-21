ArrayList<Integer> possibleHeights(int[] parent) {

  class Graph {
  ArrayList<Integer>[] edges;
  int[] height;
  boolean[] isPossibleHeight;

  Graph(int[] parent) {
    edges = new ArrayList[parent.length];
    for (int i = 0; i < edges.length; i++) {
      edges[i] = new ArrayList();
    }
    for (int i = 1; i < parent.length; i++) {
      edges[parent[i]].add(i);
    }
    height = new int[parent.length];
    isPossibleHeight = new boolean[parent.length];
  }

  void calcHeight(int v) {
    for (int u : edges[v]) {
      calcHeight(u);
      height[v] = Math.max(height[v], height[u]+1);
    }
    ArrayList<Integer>[] countHeights = new ArrayList[edges.length];
    for (int i = 0; i < edges.length; i++) {
      countHeights[i] = new ArrayList<>();
    }
    for (int i = 0; i < edges[v].size(); i++) {
      int u = edges[v].get(i);
      countHeights[height[u]].add(u);
    }
    edges[v].clear();
    for (int i = edges.length - 1; i >= 0; i--) {
      for (int j = 0; j < countHeights[i].size(); j++) {
        edges[v].add(countHeights[i].get(j));
      }
    }
  }

  void findNewHeights(int v, int tailHeight) {
    isPossibleHeight[Math.max(height[v], tailHeight)] = true;
    int firstMaxHeight = tailHeight + 1;
    int secondMaxHeight = tailHeight + 1;
    if (edges[v].size() > 0) {
      firstMaxHeight = Math.max(firstMaxHeight, height[edges[v].get(0)] + 2);
    }
    if (edges[v].size() > 1) {
      secondMaxHeight = Math.max(secondMaxHeight, height[edges[v].get(1)] + 2);
    }
    if (edges[v].size() > 0) {
      findNewHeights(edges[v].get(0), secondMaxHeight);
    }
    for (int i = 1; i < edges[v].size(); i++) {
      findNewHeights(edges[v].get(i), firstMaxHeight);
    }
  }
  }

  Graph g = new Graph(parent);
  g.calcHeight(0);
  g.findNewHeights(0, 0);

  ArrayList<Integer> heights = new ArrayList<>();
  for (int i = 0; i < parent.length; i++) {
    if (g.isPossibleHeight[i]) {
      heights.add(i);
    }
  }
  return heights;
}
