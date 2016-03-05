function divideAsLongAsPossible(n, d) {
  while (n % d === 0) {
    n /= d;
    count++;
  }
  return n;
}
