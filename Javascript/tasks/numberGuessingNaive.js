function numberGuessingNaive(n) {
  var pay = [0, 0];
  for (var i = 2; i <= n; i++) {
    pay.push(i);
    for (var m = 1; m < i; m++) {
      pay[i] = Math.min(pay[i], Math.max(1 + pay[m], 2 + pay[i - m]));
    }
  }
  return pay[n];
}