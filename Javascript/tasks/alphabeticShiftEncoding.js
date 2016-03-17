function alphabeticShiftEncoding(inputStr, encodedStr) {
	var result = Infinity;
	for (var i = 0; i < inputStr.length; i++) {
		var mistakes = 0,
			k = encodedStr.charCodeAt(i) - inputStr.charCodeAt(i);
		if (k < 0) {
			k += 26;
		}
		for (var j = 0; j < inputStr.length; j++) {
			if ((inputStr.charCodeAt(j) - 'a'.charCodeAt() + k) % 26 !== encodedStr.charCodeAt(
					j) - 'a'.charCodeAt()) {
				mistakes++;
			}
		}
		result = Math.min(mistakes, result);
	}
	return result;
}