//bugfix
function eratosthenesSieve(n) {

  var primes = [],
    mayBePrime = [];
  for (var i = 0; i <= n; i++) {
    mayBePrime.push(true);
  }
  for (var i = 2; i <= n; i++) {
    if (mayBePrime[i]) {
      primes.push(i);
      for (var j = 1; i * j <= n; j++) {
        mayBePrime[i * j] = false;
      }
    }
  }

  return primes;
}

//Codewriting
function eratosthenesSieve(n) {
  function isP(n) {
    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0)
        return false;
      }
    return true;
  }
  var ans = [];
  for (var i = 2; i <= n; i++) {
    if (isP(i))
      ans.push(i)
  }
  return ans;
}
