function neighborhoodForMinimum(inputArray) {
	var answer = [];
	for (var i = 0; i < inputArray.length; i++) {
		var borders = [],
			j = i;
		while (j >= 0 && inputArray[i] <= inputArray[j]) {
			j--;
		}
		borders.push(j + 1);
		j = i;
		while (j < inputArray.length && inputArray[i] <= inputArray[j]) {
			j++;
		}
		borders.push(j - 1);
		answer.push(borders);
	}
	return answer;
}
