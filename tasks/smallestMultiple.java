int smallestMultiple(int left, int right) {

  for (int candidate = 1;; candidate++) {
    boolean correct = true;
    for (int divisor = left; divisor <= right; divisor++) {
      if (candidate % divisor != 0) {
        correct = false;
        break;
      }
    }
    if (correct) {
      return candidate;
    }
  }
}
