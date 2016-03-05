function reflectString(inputString) {
	var result = [];
	for (var i = 0; i < inputString.length; i++) {
		var order = inputString.charCodeAt(i) - 'a'.charCodeAt(0),
			reflectedCharCode = 25 - order + 'a'.charCodeAt(0);
		result.push(String.fromCharCode(reflectedCharCode));
	}
	return result.join("");
}