function factorialTrailingZeros(n) {
  var result = 0;
  for (var i = 5; i <= n; i += 5) {
    var number = i;
    while (number % 5 === 0) {
      number /= 5;
      result++;
    }
  }
  return result;
}