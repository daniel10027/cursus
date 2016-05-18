function changeRoot(parent, newRoot) {

  var dfs = function(cur, prev, graph, answer) {
    answer[cur] = prev;
    for (var i = 0; i < graph[cur].length; i++) {
      var to = graph[cur][i];
      if (to !== prev) {
        answer = dfs(to, cur, graph, answer);
      }
    }
    return answer;
  };

  var answer = [],
      graph = [];
  for (var i = 0; i < parent.length; i++) {
    answer.push(0);
    graph.push([]);
  }
  for (var i = 0; i < parent.length; i++) {
    if (parent[i] !== i) {
      graph[i].push(parent[i]);
      graph[parent[i]].push(i);
    }
  }

  return dfs(newRoot, newRoot, graph, answer);
}
