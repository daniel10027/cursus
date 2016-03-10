function summaryProficiency(a, n, m) {
	var s = 0;
	a = a.filter(v => v >= m);
	for (var i = 0; i < n; i++) {
		s += a[i];
	}
	return s;
}
