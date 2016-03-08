function differentDigitsNumberSearch(inputArray) {

  for (var i = 0; i < inputArray.length; i++) {
    if (isDif(inputArray[i])) return inputArray[i];
  }
  return -1;
}

function isDif(n) {
  var arr = ("" + n).split('');
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return arr.length === newArr.length;

}


//Recovery
function differentDigitsNumberSearch(inputArray) {

  for (var i = 0; i < inputArray.length; i++) {
    var cur = inputArray[i],
        was = [],
        ok = true;
    while (cur > 0) {
      if (was[cur % 10]) {
        ok = false;
        break;
      }
      was[cur % 10] = true;
      cur = Math.floor(cur / 10);
    }
    if (ok) {
      return inputArray[i];
    }
  }

  return  -1 ;
}
