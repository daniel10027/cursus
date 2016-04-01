function alternatingSums(a) {
	var ans = [0, 0];
	for (var i = 0; i < a.length; i++) {
		if (i % 2) ans[1] += a[i];
		else ans[0] += a[i];
	}
	return ans
}
