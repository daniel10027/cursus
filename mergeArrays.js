function mergeArrays(A, B) {
	var result = [],
		i,
		j;
	for (i = 0, j = 0; i < A.length && j < B.length;) {
		if (A[i] < B[j]) {
			result.push(A[i]);
			i++;
		} else {
			result.push(B[j]);
			j++;
		}
	}
	while (i < A.length) {
		result.push(A[i]);
		i++;
	}
	while (j < B.length) {
		result.push(B[j]);
		j++;
	}
	return result;
}