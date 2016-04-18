function trapezoidalRule(l, r, p) {
	var calcF = function (polynome, point) {
		var value = 0,
			power = 1;
		for (var i = 0; i < polynome.length; i++) {
			value += polynome[i] * power;
			power *= point;
		}
		return value;
	};
	var result = 0;
	for (var i = l; i < r; i++) {
		result += calcF(p, i) + calcF(p, i + 1);
	}
	return result / 2.0;
}
