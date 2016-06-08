function treeHeight(parent) {

  var dfs = function(v, graph) {
    var height = 0;
    for(var i = 0; i < graph[v].length; i++) {
      var to = graph[v][i];
      height = Math.max(height, dfs(to, graph) + 1); // to instead of v
    }
    return height;
  };

  var graph = [];

  for(var i = 0; i < parent.length; i++) {
    graph.push([]);
  }

  for(var i = 1; i < parent.length; i++) {
    graph[parent[i]].push(i);
  }

  return dfs(0, graph);
}
