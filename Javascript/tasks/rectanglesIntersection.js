function rectanglesIntersection(a, b, c, d) {

  var intersection = []

  for (var i = 0; i < 2; i++) {
    if (a[i] > b[i]) {
      var t = a[i];
      a[i] = b[i];
      b[i] = t;
    }
    if (c[i] > d[i]) {
      var t = c[i];
      c[i] = d[i];
      d[i] = t;
    }
    if (b[i] < c[i] || d[i] < a[i]) {
      return 0;
    }
    intersection.push(Math.min(b[i], d[i]) - Math.max(a[i], c[i]));
  }

  return intersection[0] * intersection[1];
}
