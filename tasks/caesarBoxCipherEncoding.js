function caesarBoxCipherEncoding(inputString) {
	var output = [];
	var l = Math.sqrt(inputString.length);
	for (var i = 0; i < l; i++) {
		output.push("");
	}
	for (var i = 0; i < inputString.length; i++) {
		output[i % l] += inputString.substring(i, i + 1);
	}
	var x = "";
	for (var i = 0; i < output.length; i++) {
		x += output[i];
	}
	return x;
}

function caesarBoxCipherEncoding(inputString) {
	a = ""
	for (j = 0; j < Math.sqrt(inputString.length); j++) {
		for (i = 0; i < inputString.length; i = i + Math.sqrt(inputString.length)) {
			a += inputString[j + i]
		}
	}
	return a
}