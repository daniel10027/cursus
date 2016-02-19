function squareDigitsSequence(n) {
  var count = 1;
  var elements = [];
  while (elements.indexOf(n) === -1) {
    count++;
    elements.push(n);
    n = sumDigits(n);
  }
  return count;
}

function sumDigits(n) {
  var sum = 0;
  var arr = ("" + n).split('');
  arr.map(function(val) {
    sum += parseInt(val) * parseInt(val);
  });
  return sum;

}



// console.log(squareDigitsSequence(13));
console.log(sumDigits(100001));
