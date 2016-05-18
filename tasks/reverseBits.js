function reverseBits(n) {
	var res = 0;
	for (var i = 0; i < 16; i++) {
		res = res * 2 + (n % 2);
		n = Math.floor(n / 2);
	}
	return res;
}
