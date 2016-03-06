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
//BugFix
function alphabeticShift(inputString) {
	var chars = inputString.split("");
	for (var i = 0; i < chars.length; i++) {
		var number = chars[i].charCodeAt() - 'a'.charCodeAt();
		number = (number + 1) % 26; // It was number = number + 1;
		chars[i] = String.fromCharCode(number + 'a'.charCodeAt());
	}
	return chars.join("");
}