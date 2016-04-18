//Their solution
function squareDigitsSequence(n) {

  var cur = n,
    was = [];

  while (was.indexOf(cur) === -1) {
    was.push(cur);
    var next = 0;
    while (cur > 0) {
      next += (cur % 10) * (cur % 10);
      cur = Math.floor(cur / 10);
    }
    cur = next;
  }

  return was.length + 1;
}

//My stupid solution
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
