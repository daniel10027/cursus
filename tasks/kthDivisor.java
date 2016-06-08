int kthDivisor(int n, int k) {
  ArrayList<Integer> divisors = new ArrayList<>();
  int i = 1;
  while (i * i < n) {
    if (n % i == 0) {
      divisors.add(i);
    }
    i++;
  }
  if (i * i > n) {
    i--;
  }
  while (i > 0) {
    if (n % i == 0) {
      divisors.add(n/i);
    }
    i--;
  }
  if (divisors.size() < k) {
    return -1;
  }
  return divisors.get(k - 1);
}
