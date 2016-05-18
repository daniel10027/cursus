function isSumOfConsecutive2(n) {
  var result = 0;
  for (var start = 1; start < n; start++) {
    var number = n,
      subtrahend = start;
    while (number > 0) {
      number -= subtrahend;
      subtrahend++;
    }
    if (!number) {
      result++;
    }
  }
  return result;
}
