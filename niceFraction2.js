function niceFractions2(n) {
  var res = 0;
  for (var i = 0; i * n < 1e5; i++) {
    var digits = [],
      a = i * n,
      b = i,
      isNice = true;
    for (var j = 0; j < 10; j++) {
      digits.push(false);
    }
    for (var j = 0; j < 5; j++) {
      digits[a % 10] = true;
      a = Math.floor(a / 10);
      digits[b % 10] = true;
      b = Math.floor(b / 10);
    }
    for (var j = 0; j < 10; j++) {
      if (!digits[j]) {
        isNice = false;
        break;
      }
    }
    if (isNice) {
      res++;
    }
  }
  return res;
}
