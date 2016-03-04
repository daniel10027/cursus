//BugFix Solution
function fibonacciSimpleSum(n) {
  var fib = [1, 1], // fib(1) = 1 not 2
      cnt = 2;

  while (cnt < n) {
    fib.push(fib[cnt - 1] + fib[cnt - 2]);
    cnt++;
  }

  for (var i = 0; i < fib.length; i++) {
    for (var j = 0; j < fib.length; j++) {
      if (fib[i] + fib[j] === n) {
        return true;
      }
    }
  }

  return false;
}
