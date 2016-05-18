function maxNumberOfDivisorsPermutation(n) {

  // A correct method to swap values in an array.
  var swap = function(a, i, j) {
    var t = a[i];
    a[i] = a[j];
    a[j] = t;
  }

  var digits = n.toString().split("");
  digits.sort();
  var bestDivCnt = 1;
  var bestNumber = n;
  while (true) {
    // Checking the number of divisors.
    var cur = parseInt(digits.join(""));
    var divisors = 0;
    for (var i = 2; i <= Math.floor(cur / 2); i++) {
      if (cur % i == 0)
        divisors++;
      }
    if (divisors >= bestDivCnt) {
      bestDivCnt = divisors;
      bestNumber = cur;
    }

    // Obtaining the next permutation.
    var first;
    for (first = digits.length - 2; first >= 0; first--) {
      if (digits[first] < digits[first + 1]) {
        break;
      }
    }
    if (first == -1) {
      break;
    }
    var second = first + 1;
    while (second + 1 < digits.length && digits[first] < digits[second + 1]) {
      second++;
    }
    swap(digits, first, second);
    first++;
    second = digits.length - 1;
    while (first < second) {
      swap(digits, first, second);
      first++;
      second--;
    }
  }

  return bestNumber;
}
