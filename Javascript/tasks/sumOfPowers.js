function sumOfPowers(n, divisor) {
  var s = 0;
  for (var i = 1; i <= n; i++) {
    var k = 0;
    while (i % Math.pow(divisor, k) == 0) {
      k++;
    }
    s += k - 1;
  }
  return s;
}