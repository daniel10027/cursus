int smallestMultiple(int left, int right) {

  for (int candidate = 1;; candidate++) {
    int correct = true;
    for (int divisor = left; divisor <= right; divisor++) {
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
