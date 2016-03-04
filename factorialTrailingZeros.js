function factorialTrailingZeros(n) {
	var result = 0;
	for (var i = 0; i <= n; i += 5) {
		var number = i;
		while (number % 5 === 0 && number != 0) {
			number /= 5;
			result++;
		}
	}
	return result;
}