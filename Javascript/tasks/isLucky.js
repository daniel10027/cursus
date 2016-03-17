function isLucky(n) {

	var digits = [],
		sum = 0;

	while (n > 0) {
		digits.push(n % 10);
		n = Math.floor(n / 10);
	}

	for (var i = 0; i < digits.length; i++) {
		if (i < digits.length / 2) {
			sum += digits[i];
		} else {
			sum -= digits[i];
		}
	}

	if (sum) {
		return false;
	}
	return true;
}