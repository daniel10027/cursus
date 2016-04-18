function swapNeighbouringDigits(n) {
	var result = 0,
		tenPower = 1;
	while (n != 0) {
		var digit1 = n % 10,
			digit2 = ((n - digit1) / 10) % 10;
		result += tenPower * (10 * digit1 + digit2);
		n = Math.floor(n / 100);
		tenPower *= 100;
	}
	return result;
}