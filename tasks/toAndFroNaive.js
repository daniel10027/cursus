function toAndFroNaive(a, b, t) {
	var position = a,
		dx;
	if (a < b) {
		dx = 1;
	} else {
		dx = -1;
	}
	for (var i = 0; i < t; i++) {
		position += dx;
		if (position === a || position === b) {
			dx = -dx;
		}
	}
	return position;
}
