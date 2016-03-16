function maxSumProduct(a, b, k) {
  var best = 0;
  var leftSumA = 0;
  var rightSumA = 0;
  for (var i = 1; i <= Math.min(a.length, k); i++) {
    leftSumA += a[i - 1];
    rightSumA += a[a.length - i];
    var leftSumB = 0;
    var rightSumB = 0;
    for (var j = 1; j <= Math.min(b.length, k - i); j++) {
      leftSumB += b[j - 1];
      rightSumB += b[b.length - j];
      best = Math.max(best, Math.max(leftSumA * leftSumB, rightSumA * rightSumB));
    }
  }
  return best;
}