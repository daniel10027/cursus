function squareDigitsSequence(n) {
  var result = 2;
  while (n !== sumDigits(n)) {
    console.log(sumDigits(n));
    n = sumDigits(n);
    result++;
  }
  return result;
}

function sumDigits(n) {
  var sum = 0;
  var arr = ("" + n).split('');
  arr.map(function(val) {
    sum += parseInt(val) * parseInt(val);
  });
  return sum;
}
