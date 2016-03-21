function eratosthenesSieve(n) {
  function isP(n) {
    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) return false;
    }
    return true;
  }
  var ans = [];
  for (var i = 2; i <= n; i++) {
    if (isP(i)) ans.push(i)
  }
  return ans;
}