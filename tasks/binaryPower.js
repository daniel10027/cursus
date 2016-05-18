int binaryPower(int n, int k) {
  if (k == 0) {
    return 1;
  }
  if (k % 2 == 0) {
    return binaryPower(n * n, k / 2);
  }
  return n * binaryPower(n, k - 1);
}