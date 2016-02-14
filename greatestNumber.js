function greatestNumber(n, m, k) {
  var arr = (""+n).split('');
  var min = minimum(arr);

  for (var i = 0; i < k; i++) {
    arr = arr.filter(function(val) {
      return parseInt(val) === min;
    });
  }
  return arr.join('');
}

function minimum(arr) {
  var min = parseInt(arr[0]);
  for (var i = 1; i < arr.length; i++) {
    min = Math.min(min,parseInt(arr[i]));
  }
  return min;
}
