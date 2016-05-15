function sumOfCubes(n) {
  var s = 0;

  for (var i = 1; i <= n; i++) {
    s += Math.pow(i, 3);
  }
  return s;
}
