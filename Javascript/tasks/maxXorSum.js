function maxXorSum(a) {
	var best = 0,
		cur = 0;
	for (var mask = 0; mask < (1 << a.length); mask++) {
		cur = 0;
		for (var i = 0; i < a.length; i++) {
			var bit = (mask >> i) & 1;
			if (bit === 1) {
				cur ^= a[i];
			}
		}
		if (cur > best) {
			best = cur;
		}
	}
	return best;
}