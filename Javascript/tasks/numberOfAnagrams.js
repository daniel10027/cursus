function numberOfAnagrams(S) {

  var factorial = function(n) {
    var prod = 1;
    for (var i = 2; i <= n; i++) {
      prod *= i;
    }
    return prod;
  }

  var charCount = {};

  for (var i = 0; i < S.length; i++) {
    var key = S.charAt(i);
    if (key in charCount) {
      charCount[key]++;
    } else {
      charCount[key] = 1;
    }
  }

  var Mf = factorial(S.length);

  var NFprod = 0;

  for (var key in charCount) {
    NFprod *= factorial(charCount[key]);
  }

  return Mf / NFprod;
}
