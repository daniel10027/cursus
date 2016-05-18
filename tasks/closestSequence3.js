function closestSequence3(a, b) {
	var recursiveSearch = function (posA, posB, diff) {
		if (posA === a.length) {
			return diff;
		}
		if (posB === b.length) {
			return Infinity;
		}
		return Math.min(recursiveSearch(posA, posB + 1, diff), recursiveSearch(posA + 1, posB + 1, diff + Math.abs(a[posA] - b[posB])));
	}
	return recursiveSearch(0, 0, 0);
}