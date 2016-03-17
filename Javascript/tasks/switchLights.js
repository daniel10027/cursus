function switchLights(a) {
	for (var i = 0; i < a.length; i++) {
		if (a[i]) {
			for (var k = 0; k <= i; k++) {
				a[k] = (1 - a[k]);
			}
		}
	}
	return a;
}

//bugFix solution
function switchLights(a) {
	var b = [];
	var change = false;
	for (var i = a.length - 1; i >= 0; i--) {
		if (a[i] === 1) {
			change = !change;
		}
		b[i] = change ? (1 - a[i]) : a[i];
	}
	return b;
}