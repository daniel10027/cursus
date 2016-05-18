function maxNumberOfDivisorsPermutation2(n) {

  var digits = [],
    bestNumber = -1,
    maxDivisors = 0;

  var generatePermutation = function(curValue) {
    var lastStep = true;
    for (var i = 9; i >= 0; i--) {
      if (digits[i] > 0) {
        digits[i]--;
        generatePermutation(curValue * 10 + i);
        digits[i]++;
        lastStep = false;
      }
    }
    if (lastStep) {
      var cntDivisors = 0;
      for (var i = 1; i <= curValue; i++) {
        if (curValue % i === 0) {
          cntDivisors++;
        }
      }
      if (cntDivisors > maxDivisors) {
        bestNumber = curValue;
        maxDivisors = cntDivisors;
      }
    }
  };

  for (var i = 0; i < 10; i++) {
    digits.push(0);
  }
  while (n > 0) {
    digits[n % 10]++;
    n = Math.floor(n / 10);
  }

  generatePermutation(0);

  return bestNumber;
}
