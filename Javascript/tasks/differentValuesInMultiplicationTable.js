function differentValuesInMultiplicationTable(n, m) {
  var ans = [];
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= m; j++) {
      var tmp = i * j;
      if (ans.indexOf(tmp) == -1) ans.push(tmp);
    }
  }
  return ans.length
}