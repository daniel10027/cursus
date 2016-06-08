function kthDivisor(n, k) {
  var divisors = [],
    i = 1;
  while (i * i < n) {
    if (n % i === 0) {
      divisors.push(i);
    }
    i++;
  }
  if (i * i > n) {
    i--;
  }
  while (i > 0) {
    if (n % i === 0) {
      divisors.push(n / i);
    }
    i--;
  }
  if (divisors.length < k) {
    return -1;
  }
  return divisors[k - 1];
}
