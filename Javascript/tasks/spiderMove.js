function spiderMove(X, Y) {
	X = Math.abs(X);
	Y = Math.abs(Y);
	var n = [];
	for (var i = 0; i < X + 1; i++) {
		n.push(1);
	}
	for (var i = 0; i < Y; i++) {
		for (var j = 1; j < X + 1; j++) {
			n[j] = n[j - 1] + n[j];
		}
	}
	return n[n.length - 1];
}