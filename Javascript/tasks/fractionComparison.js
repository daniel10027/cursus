function fractionComparison(A, B) {
	var tmp = (A[0] * B[1]) / (A[1] * B[0]);
	if (tmp == 1) return '=';
	if (tmp > 1) return '>';
	return '<'
}
