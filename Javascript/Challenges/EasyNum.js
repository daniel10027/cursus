function EasyNum(n) {
  var a = Math.floor(n / 100);
  var b = (Math.floor(n / 10) % 10);
  var c = n % 10;

  return !((Math.pow(a, b) / c) % a)
}
