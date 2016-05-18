function threeGlasses(cap) {

  var wasCnt = [],
    queue = [],
    l = 0,
    was = [],
    result = 0;

  for (var i = 0; i < cap[0] + 1; i++) {
    var layer = [];
    for (var j = 0; j < cap[1] + 1; j++) {
      var line = [];
      for (var k = 0; k < cap[2] + 1; k++) {
        line.push(false);
      }
      layer.push(line);
    }
    was.push(layer);
  }

  for (var i = 0; i < cap[0] + cap[1] + cap[2] + 1; i++) {
    wasCnt.push(false);
  }

  var tryAdd = function(triple) {
    if (!was[triple[0]][triple[1]][triple[2]]) {
      was[triple[0]][triple[1]][triple[2]] = true;
      wasCnt[triple[0] + triple[1] + triple[2]] = true;
      queue.push(triple);
    }
  };

  tryAdd(cap);

  while (l < queue.length) {
    cur = queue[l];
    l++;
    for (var i = 0; i < 3; i++) {
      next = cur.slice();
      next[i] = 0;
      tryAdd(next);

      for (var j = 0; j < 3; j++) {
        if (i !== j && cur[i] + cur[j] > cap[j]) {
          next = cur.slice();
          next[i] -= cap[j] - cur[j];
          next[j] = cap[j];
          tryAdd(next);
        } else if (i !== j) {
          next = cur.slice();
          next[j] += next[i];
          next[i] = 0;
          tryAdd(next);
        }
      }
    }
  }

  for (var i = 0; i <= cap[0] + cap[1] + cap[2]; i++) {
    if (wasCnt[i]) {
      result++;
    }
  }
  return result - 1;
}
