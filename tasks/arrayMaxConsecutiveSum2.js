function arrayMaxConsecutiveSum2(inputArray) {
  var best = inputArray[0];
  for(var i = 0; i < inputArray.length; ++i) {
    var tmp = 0;
    for(var j = i; j < inputArray.length; ++j) {
      tmp += inputArray[j];
      best = Math.max(best, tmp);
    }
  }
  return best;
}
