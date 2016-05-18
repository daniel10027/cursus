function numberOfTriangles(sticks) {
  var res = 0;
  for (var i = 0; i < sticks.length; i++) {
    var k = i + 2;
    for (var j = i + 1; j < sticks.length; j++) {
      while (k < sticks.length && sticks[k] < sticks[i] + sticks[j]) {
        k++;
      }
      res += k - j - 1;
    }
  }
  return res;
}
