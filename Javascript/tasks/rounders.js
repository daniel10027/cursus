function rounders(n) {
  var arr = ("" + n).split('').reverse("");
  for (var i = 0; i < arr.length - 1; i++) {
    var tmp = parseInt(arr[i]);
    arr[i] = 0;
    arr[i + 1] = parseInt(arr[i + 1]);
    if (tmp >= 5) {
      arr[i + 1] = arr[i + 1] + 1;
    }
  }
  return (parseInt(arr.reverse().join('')));
}
function rounders(n) {
  var p = 10;
  while (n > p) {
    if (Math.floor((n % p) / Math.floor(p / 10)) < 5) 
      n = Math.floor(n / p) * p;
    else 
      n = (Math.floor(n / p) + 1) * p;
    p *= 10;
  }
  return n;
}