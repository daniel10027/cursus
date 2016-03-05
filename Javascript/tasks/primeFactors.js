function primeFactors(n) {

  var d = [];
  for (var i = 2; i <= n; i++) {
    while (isP(i) && n % i === 0) {
      d.push(i);
      n /= i;
    }
  }
  return d;
}

function isP(n) {
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
