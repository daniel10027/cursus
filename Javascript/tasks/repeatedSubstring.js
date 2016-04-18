function repeatedSubstring(inputString, k) {
	var result = [],
		used = [];
	for (var i = 0; i < inputString.length; i++) {
		used.push(false);
	}
	for (var i = 0; i + k <= inputString.length; i++) {
		if (!used[i]) {
			used[i] = true;
			var found = false;
			for (var j = i + 1; j < inputString.length; j++) {
				var equal = true;
				for (var p = 0; p < k; p++) {
					if (inputString[i + p] !== inputString[j + p]) {
						equal = false;
						break;
					}
				}
				if (equal) {
					found = true;
					used[j] = true;
				}
			}
			if (found) {
				var occurence = "";
				for (var p = 0; p < k; p++) {
					occurence += inputString[i + p];
				}
				result.push(occurence);
			}
		}
	}
	result.sort();
	return result;
}
