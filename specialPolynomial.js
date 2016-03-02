function specialPolynomial(x, n) {
  var sum = 0;
  for (var k = 0;; k++) {
    sum += Math.pow(x, k);
    if (sum > n) return k - 1;
  }
}
