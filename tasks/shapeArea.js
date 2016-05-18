function shapeArea(n) {
	var res = 1;
	for (var i = 0; i < n; i++) {
		res += 4 * i;
	}
	return res;
}