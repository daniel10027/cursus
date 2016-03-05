function sameDigitNumber(n) {
  var s = ""+n%10;
  var arr = ("" + n).split('');
  arr = arr.filter(function(val) {
    return val !== s;
  });
  return (arr.length === 0);
}
