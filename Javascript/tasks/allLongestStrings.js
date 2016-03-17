function allLongestStrings(input) {
	var max = input[0].length;
	input.map(v => Math.max(max, v.length));
	input = input.filter(v => v.length == max);
	return input;
}