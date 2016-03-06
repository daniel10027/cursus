function greatestCommonPrimeDivisor(a, b) {
	function isP(n) {
		for (var i = 2; i <= Math.sqrt(n); i++) {
			if (n % i === 0) return false;
		}
		return true;
	}
	max = -1;
	for (var i = 2; i < Math.min(a, b); i++) {
		if (isP(i) && a % i == 0 && b % i == 0) {
			max = Math.max(max, i);
		}
	}
	return max;
}