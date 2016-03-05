function specificSum(p, q) {
  var result = 0,
    apbqValue = 1,
    lastIncorrect = -1;

  if (p < q) {
    var tmp = p;
    p = q;
    q = tmp;
  }

  while (apbqValue - lastIncorrect <= q) {
    var a = 0,
      correct = false;
    while (a * p <= apbqValue) {
      if ((apbqValue - a * p) % q === 0) {
        correct = true
      }
      a++;
    }
    if (!correct) {
      result += apbqValue;
      lastIncorrect = apbqValue;
    }
    apbqValue++;
  }

  return result;
}
