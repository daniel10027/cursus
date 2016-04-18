function sortByLength(inputArray) {
	for (var i = 0; i < inputArray.length; i++) {
		for (var j = i + 1; j < inputArray.length; j++) {
			if (inputArray[i].length > inputArray[j].length) {
				var tmp = inputArray[i];
				inputArray[i] = inputArray[j];
				inputArray[j] = tmp;
			}
		}
	}
	return inputArray;
}