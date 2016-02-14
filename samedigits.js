function sameDigitNumber(n) {
  var arr = ("" + n).split('');
  arr = arr.filter(function(val) {
    return val !== s[0];
  });
  return (arr.length === 0);
}
