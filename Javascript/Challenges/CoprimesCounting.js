function CoprimesCounting(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr[i] = [];
    for (var j = 0; j < array.length; j++) {
      newArr[i][j] = (gcd(array[i], array[j]) == 1) ? 1 : 0;
    }
  }
  return newArr;
}

function gcd(a, b) {
  return !b ? a : gcd(b, a % b);
}
