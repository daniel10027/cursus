function makeArrayConsecutive(sequence) {
	var max = sequence[0];
	var min = max;
	sequence.map(v => {
		max = Math.max(max, v);
		min = Math.min(min, v);
	});
	var ans = [];
	for (var i = min; i <= max; i++) {
		if (sequence.indexOf(i) == -1) ans.push(i);
	}
	return ans;
}