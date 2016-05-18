function distSameLetter(s) {
  var arr = [];
  for (var i = 0; i < s.length; i++) {
    if (arr.indexOf(s[i]) === -1) 
      arr.push(s[i]);
    }
  var max = s.lastIndexOf(arr[0]) - s.indexOf(arr[0]);
  var element = arr[0];
  for (var i = 1; i < arr.length; i++) {
    var tmp = s.lastIndexOf(arr[i]) - s.indexOf(arr[i]);
    if (tmp > max) {
      max = tmp;
      element = arr[i];
    }
  }
  return element + (max + 1);
}