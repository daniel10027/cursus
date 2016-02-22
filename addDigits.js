function addDigits(a, b, n) {

  for (var i = 0; i < n; i++) {
    if (addpossible(a, b) !== 0) {
      a = addpossible(a, b)
    }
  }
  return "" + a;

}

function addpossible(a, b) {
  var max = 0
  for (var i = 0; i <= 9; i++) {
    var tmp = a * 10 + i;
    if ((tmp % b) === 0) {
      max = Math.max(max, tmp)
    }
  }
  return (max === 0) ? 0 : max;
}
