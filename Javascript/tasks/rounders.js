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
