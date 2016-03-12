function addDigits(a, b, n) {
  for (var i = 0; i < n; i++) {
    if (addpossible(a, b) !== 0) {
      a = addpossible(a, b);
    }
  }
  return "" + a;
}
function addpossible(a, b) {
  var max = 0;
  for (var i = 0; i <= 9; i++) {
    var tmp = a * 10 + i;
    if ((tmp % b) === 0) {
      max = Math.max(max, tmp);
    }
  }
  return (max === 0)
    ? 0
    : max;
}
//Recovery
function addDigits(a, b, n) {
  var rem = a % b;
  var result = [];
  result.push(a.toString());
  for (var i = 0; i < n; i++) {
    var best = -1;
    for (var digit = 9; digit >= 0; digit--) {
      if ((rem * 10 + digit) % b === 0) {
        best = digit;
        break;
      }
    }
    if (best === -1) {
      break;
    }
    result.push(best.toString());
    rem = 0; // rem = ...
  }
  return result.join('');
}