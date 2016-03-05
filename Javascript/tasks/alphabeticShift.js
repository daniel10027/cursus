function alphabeticShift(inputString) {
	var a = [],
		r = [];
	for (var i = 0; i < 26; i++) {
		a.push(String.fromCharCode('a'.charCodeAt() + i));
	}
	for (var i = 0; i < inputString.length; i++) {
		r[i] = a[(a.indexOf(inputString[i]) + 1) % a.length];
	}
	return r.join("");
}