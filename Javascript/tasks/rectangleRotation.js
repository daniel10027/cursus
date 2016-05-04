function rectangleRotation(a, b) {
	var r = 0;
	for (var x = -a - b; x <= a + b; x++) {
		for (var y = -a - b; y <= a + b; y++) {
			if (2 * (x - y) * (x - y) <= a * a && 2 * (x + y) * (x + y) <= b * b) r++;
		}
	}
	return r;
}
