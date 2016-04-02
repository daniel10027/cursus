function arraySumAdjacentDifference(inputArray) {
	var answer = 0;
	for (var i = 1; i < inputArray.length; i++) {
		answer += Math.abs(inputArray[i] - inputArray[i - 1]);
	}
	return answer;
}
