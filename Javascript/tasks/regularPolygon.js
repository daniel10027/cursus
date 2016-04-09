function regularPolygon(a) {

  var n = a.length;
  for (var i = n; i > 2; i--) {
    if (n % i !== 0) {
      continue;
    }
    var step = n / i;
    for (var start = 0; start < step; start++) {
      var ok = true;
      for (var cur = start; cur < n; cur += step) {
        ok &= a[cur] === 1;
      }
      if (ok) {
        return i;
      }
    }
  }
  return -1;
}
