function phoneCall(min1, min2_10, min11, S) {
	if (S < min1) {
		return 0;
	}
	for (var i = 2; i <= 10; i++) {
		if (S < min1 + min2_10 * (i - 1)) {
			return i - 1;
		}
	}
	return 10 + Math.floor((S - min2_10 * 9 - min1) / min11);
}
