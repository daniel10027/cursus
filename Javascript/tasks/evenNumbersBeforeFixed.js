function evenNumbersBeforeFixed(sequence, fixedElement) {
	var result = 0;
	for (var i = 0; i < sequence.length; i++) {
		if (sequence[i] % 2 === 0 && sequence[i] !== fixedElement) {
			result++;
		}
		if (sequence[i] === fixedElement) {
			return result;
		}
	}
	return -1;
}