function neighbouringElements(a) {
  var s = 0
  for (var i = 0; i < a.length; ++i) {
    for (var j = 0; j < a[0].length; ++j) {
      if (i < a.length - 1 && a[i][j] == a[i + 1][j]) 
        s++;
      if (j < a[0].length - 1 && a[i][j] == a[i][j + 1]) 
        s++;
      }
    }
  return s;
}