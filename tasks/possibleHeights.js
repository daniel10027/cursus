function possibleHeights(parent) {

  var edges;
  var height;
  var isPossibleHeight;

  initGraph = function(parent) {
    edges = []
    height = []
    for (var i = 0; i < parent.length; i++) {
      edges.push([]);
      height.push(0);
    }
    for (var i = 1; i < parent.length; i++) {
      edges[parent[i]].push(i);
    }
    isPossibleHeight = []
  };

  var calcHeight = function(v) {
    for (var i = 0; i < edges[v].length; i++) {
      var u = edges[v][i];
      calcHeight(u);
      height[v] = Math.max(height[v], height[u] + 1);
    }

    countHeights = [];
    for (var i = 0; i < edges.length; i++) {
      countHeights[i] = [];
    }
    for (var i = 0; i < edges[v].length; i++) {
      var u = edges[v][i];
      countHeights[height[u]].push(u);
    }
    edges[v] = [];
    for (var i = edges.length - 1; i >= 0; i--) {
      for (var j = 0; j < countHeights[i].length; j++) {
        edges[v].push(countHeights[i][j]);
      }
    }
  };

  var findNewHeights = function(v, tailHeight) {
    isPossibleHeight[Math.max(height[v], tailHeight)] = true;
    var firstMaxHeight = tailHeight + 1;
    var secondMaxHeight = tailHeight + 1;
    if (edges[v].length > 0) {
      firstMaxHeight = Math.max(firstMaxHeight, height[edges[v][0]] + 2);
    }
    if (edges[v].length > 1) {
      secondMaxHeight = Math.max(secondMaxHeight, height[edges[v][1]] + 2);
    }
    if (edges[v].length > 0) {
      findNewHeights(edges[v][0], secondMaxHeight);
    }
    for (var i = 1; i < edges[v].length; i++) {
      findNewHeights(edges[v][i], firstMaxHeight);
    }
  }

  initGraph(parent);
  calcHeight(0);
  findNewHeights(0, 0);

  var result = [];
  for (var v in isPossibleHeight) {
    result.push(parseInt(v));
  }
  return result;
}
