function isIncreasingDigitsSequence(n) {

  var arr = ('' + n).split('');

  for (var i = 0; i < arr.length - 1; i++) {
    if (parseInt(arr[i]) >= parseInt(arr[i + 1]))
      return false;
    }
  return true;
}
