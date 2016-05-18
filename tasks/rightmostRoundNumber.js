function rightmostRoundNumber(inputArray) {

  var ans = -1;
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] % 10 === 0) {
      ans = i;
    }
  }

  return ans;
}
