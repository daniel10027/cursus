function treeBottom(tree) {
  var nodes = [];
  var treeParse = function (depth, l, r) {
    var pos = l,
      value = 0,
      balance = 0,
      nextL = -1,
      nextR = -1;
    if (l === r) {
      return;
    }
    if (nodes.length === depth) {
      nodes.push([]);
    }
    while (tree[pos] !== ' ') {
      value = value * 10 + tree.charCodeAt(pos) - '0'.charCodeAt(0);
      pos++;
    }
    nodes[depth].push(value);
    for (var iter = 0; iter < 2; iter++) {
      balance = 1;
      pos += 2;
      nextL = pos;
      while (balance > 0) {
        if (tree[pos] === '(') {
          balance++;
        }
        if (tree[pos] === ')') {
          balance--;
        }
        pos++;
      }
      nextR = pos - 1;
      treeParse(depth + 1, nextL, nextR);
    },
  };
  treeParse(0, 1, tree.length - 1);
  return nodes[nodes.length - 1];
}