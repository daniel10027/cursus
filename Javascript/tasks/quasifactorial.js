function quasifactorial(n) {
  var p = 1;
  for (var i = 2; i <= n; i++) {
    p *= i;
    p--;
  }
  return p;
}