function maxSubarray(inputArray) {
	var maxSum = 0;
	for (var i = 0; i < inputArray.length - 1; i++) {
		var s = inputArray[i] + inputArray[i + 1];
		maxSum = Math.max(maxSum, s)
	}
	return maxSum;
}
