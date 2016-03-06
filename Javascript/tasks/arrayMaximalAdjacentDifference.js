function arrayMaximalAdjacentDifference(inputArray) {
	var max = -1;
	for (var i = 0; i < inputArray.length - 1; i++) {
		var tmp = Math.abs(inputArray[i] - inputArray[i + 1]);
		max = Math.max(max, tmp);
	}
	return max;
}