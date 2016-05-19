function digitDistanceNumber(n) {
  var d = [];
  while(n) {
    d.push(n % 10);
    n = Math.floor(n / 10);
  }
  var b = [];
  for(var i = 0; i < d.length - 1; i++) {
    b.push(Math.abs(d[i] - d[i + 1]));
  }
  var s = "";
  for(var i = b.length - 1; i >= 0; i--) {
    s += b[i];
  }
  return parseInt(s);
}

function digitDistanceNumber(n) {

  var result = 0,
    lastDigit = n % 10,
    tenPower = 1;

  n = Math.floor(n / 10);

  while(n) {
    result = tenPower * Math.abs(n % 10 - lastDigit);
    tenPower *= 10;
    lastDigit = n % 10;
    n = Math.floor(n / 10);
  }

  return result;
