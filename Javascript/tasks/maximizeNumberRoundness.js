function maximizeNumberRoundness(n) {
  var tmp = n,
    zeros = 0,
    result;
  while (tmp) {
    if (tmp % 10 === 0) {
      zeros++;
    }
    tmp = Math.floor(tmp / 10);
  }
  result = zeros;
  for (var i = 0; i < zeros; i++) {
    if (n % 10 === 0) {
      result--;
    }
    n = Math.floor(n / 10);
  }
  return result;
}