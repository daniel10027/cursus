function firstMultiple2(divisors, start) {
	for (var i = start;; i++) {
		for (var j = 0; j < divisors.length; j++) {
			if (i % divisors[j] === 0) return i;
		}
	}
}