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
