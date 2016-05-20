function champernowneDigit(n) {

  for (var i = 1;; i++) {
    var number = i,
      digits = [];
    while (number) {
      digits.push(number % 10);
      number = Math.floor(number / 10);
    }
    digits.reverse();
    if (n <= digits.length) { //bugfix
      return digits[n - 1];
    }
    n -= digits.length;
  }
}

//CodeWriting
function champernowneDigit(n) {

  var s = "";
  for (var i = 0; i < 1000; i++) {
    s += i + 1;
  }
  console.log(s);
  return parseInt(s[n - 1])
}
