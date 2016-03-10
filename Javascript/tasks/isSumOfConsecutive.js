function isSumOfConsecutive(n) {
  for (var start = 1; start < n; start++) {
    var number = n,
      subtrahend = start;
    while (number > 0) {
      number -= subtrahend;
      subtrahend++;
    }
    if (!number) {
      return true;
    }
  }
  return false;
}