function rangeArray(l, r, step) {
	var result = [];
	while (l < r) {
		result.push(l);
		l += step;
	}
	return result;
}
