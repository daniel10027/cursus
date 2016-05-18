function isSum(value) {
    var M = Math.sqrt(2 * value + 0.25) - 0.5;
    return Math.floor(M) === M;
}

function isSum(n) {
    var i = 1;
    while (n>0) {
        n -= i++;
    }
    return n === 0;
}

function isSum(value) {

  var i = 1;
  while (value>0) {
    value -= i;
    i++;
  }
  if (!value) {
    return true;
  }
  return false;
}
