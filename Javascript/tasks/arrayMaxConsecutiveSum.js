function arrayMaxConsecutiveSum(inputArray, k) {
  var max = 0;
  for (var i = 0; i < inputArray.length - k + 1; i++) {
    var sum = 0;
    for (var j = 0; j < k; j++) {
      sum += inputArray[i + j];
    }
    max = Math.max(max, sum);
  }
  return max;
}

function arrayMaxConsecutiveSum(inputArray, k) {
  var result = 0,
    currentSum = 0;
  for (var i = 0; i < k - 1; i++) {
    currentSum += inputArray[i];
  }
  for (var i = k - 1; i < inputArray.length; i++) {
    currentSum += inputArray[i];
    if (currentSum > result) {
      result = currentSum;
    }
    currentSum -= inputArray[i - k + 1];
  }
  return result;
}