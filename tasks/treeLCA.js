function treeLCA(parent, v1, v2) {
  var x = v1,
    y = v2;
  var list1 = [];
  var list2 = [];
  while (x != y) {
    x = parent[x];
    list1.push(x);
    if (list2.indexOf(x) != -1) return x;
    if (list1.indexOf(y) != -1) return y;
    y = parent[y];
    list2.push(y);
  }
  return x;
}

function treeLCA(parent, v1, v2) {
    var S = [];
    while (v1) {
        S.push(v1);
        v1 = parent[v1];
    }
    while (v2) {
        if (S.indexOf(v2) != -1) {
            return v2;
        }
        v2 =  parent[v2] ;
    }
    return 0;
}
