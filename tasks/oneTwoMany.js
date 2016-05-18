function oneTwoMany(n) {
	var answer;
	if (n == 1) {
		answer = "one";
	} else if (n == 2) {
		answer = "two";
	} else {
		answer = "many";
	}
	return answer;
}

function oneTwoMany(n) {
	switch (n) {
	case 1:
		return "one";
	case 2:
		return 'two';
	default:
		return "many";
	}
}
