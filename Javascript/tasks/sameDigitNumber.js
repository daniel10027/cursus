function sameDigitNumber(n) {
  var s = "" + n % 10;
  var arr = ("" + n).split('');
  arr = arr.filter(function(val) {
    return val !== s;
  });
  return (arr.length === 0);
}

function sameDigitNumber(n) {
  var first = n % 10;
  while (n) {
    if (n % 10 !== first) return false;
    n = Math.floor(n / 10);
  }
  return true
}