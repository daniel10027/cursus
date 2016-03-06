function countTriangles(X, Y) {
	var result = 0;
	for (var i = 0; i < X.length; i++) {
		for (var j = i + 1; j < X.length; j++) {
			for (var k = j + 1; k < X.length; k++) {
				var doubleArea = (X[i] - X[j]) * (Y[i] - Y[k]) - (X[i] - X[k]) * (Y[i] - Y[j]);
				if (doubleArea != 0) {
					result++;
				}
			}
		}
	}
	return result;
}