function smallestMultiple(left, right) {

  for (var candidate = 1;; candidate++) {
    var correct = true;
    for (var divisor = left; divisor <= right; divisor++) {
      if (candidate % divisor) {
        correct = false;
        break;
      }
    }
    if (correct) {
      return candidate;
    }
  }
}
