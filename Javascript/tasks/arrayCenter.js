function arrayCenter(A) {
	var n = A.length;
	var sumA = A[0],
		minA = A[0];
	for (var i = 1; i < n; i++) {
		sumA += A[i];
		minA = Math.min(minA, A[i]);
	}
	var B = [];
	for (var i = 0; i < n; i++) {
		if (Math.abs(n * A[i] - sumA) < n * minA) {
			B.push(A[i]);
		}
	}
	return B;
}
