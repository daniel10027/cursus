int niceFractions(int n) {

  class Helper {
  int n;
  boolean[] usedDigits;

  Helper(int nValue) {
    n = nValue;
    usedDigits = new boolean[10];
  }

  int gen(int step, long permutation) {
    if (step == 10) {
      long a = permutation / (long)1e5,
           b = permutation % (long)1e5;
      if (n * b == a) {
        return 1;
      }
      return 0;
    }
    else {
      int sum = 0;
      for (int i = 0; i < 10; i++) {
        if (!usedDigits[i]) {
          usedDigits[i] = true;
          sum += gen(step + 1, permutation * 10 + i);
          usedDigits[i] = false;
        }
      }
      return sum;
    }
  }
  };

  Helper h = new Helper(n);

  return h.gen(0, 0);
}
