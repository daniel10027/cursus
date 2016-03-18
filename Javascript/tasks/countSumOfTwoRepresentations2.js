function countSumOfTwoRepresentations2(n, l, r) {
	var c = 0;
	for (var i = l; i <= r; i++) {
		for (var j = i; j <= r; j++) {
			if (i + j == n) c++;
		}
	}
	return c;
}
