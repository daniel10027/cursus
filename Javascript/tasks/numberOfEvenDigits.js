function numberOfEvenDigits(n) {
  var s = 0;
  while (n) {
    s += n % 2 === 0;
    n = Math.floor(n / 10);
  }
  return s;
}