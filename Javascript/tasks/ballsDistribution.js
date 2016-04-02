function ballsDistribution(colors, ballsPerColor, boxSize) {
	var currentBox = 0,
		capacity = boxSize,
		result = 0;
	for (var i = 0; i < colors; i++) {
		var startBox = currentBox;
		for (var j = 0; j < ballsPerColor; j++) {
			capacity--;
			if (capacity === 0) {
				currentBox++;
				capacity = boxSize;
			}
		}
		if (startBox < currentBox && capacity < boxSize || startBox + 1 < currentBox) {
			result++;
		}
	}
	return result;
}
