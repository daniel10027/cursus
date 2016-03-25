function longestString(inputArray) {
  var max = inputArray[0].length;
  var ans = inputArray[0];
  for (var i = 1; i < inputArray.length; i++) {
    var maxi = inputArray[i].length;
    if (maxi > max) {
      ans = inputArray[i];
      max = maxi;
    }
  }
  return ans;
}