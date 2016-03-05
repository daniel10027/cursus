function arrayMaxConsecutiveSum(inputArray, k) {
  var max = 0;
  for (var i = 0; i < inputArray.length - k + 1; i++) {
    var sum = 0;
    for (var j = 0; j < k; j++) {
      sum += inputArray[i + j];
    }
    max = Math.max(max, sum)
  }
  return max;
}
