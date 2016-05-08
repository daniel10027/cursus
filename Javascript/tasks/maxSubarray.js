function maxSubarray(inputArray) {
  var maxSum = 0;
  for (var i = 0; i < inputArray.length - 1; i++) {
    var s = 0;
    for (var k = i; k < inputArray.length; k++) {
      s += inputArray[k];
      maxSum = Math.max(s, maxSum);
    }
  }
  return maxSum;
}
