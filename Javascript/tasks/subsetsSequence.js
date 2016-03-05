function subsetsSequence(sets) {
	var compare = function (a, b) {
		if (a < b) {
			return true;
		} else {
			return false;
		}
	};
	var isSubset = function (setA, setB) {
		var j = 0;
		for (var i = 0; i < setB.length; i++) {
			if (j < setA.length && setA[j] === setB[i]) {
				j++;
			}
		}
		if (j === setA.length) {
			return true;
		} else {
			return false;
		}
	};
	var supersets = [];
	for (var i = 0; i < sets.length; i++) {
		sets[i].sort(compare);
		supersets.push(0);
	}
	for (var i = 0; i < sets.length; i++) {
		for (var j = i + 1; j < sets.length; j++) {
			if (isSubset(sets[i], sets[j])) {
				supersets[i]++;
			}
			if (isSubset(sets[j], sets[i])) {
				supersets[j]++;
			}
		}
	}
	supersets.sort();
	for (var i = 0; i < sets.length; i++) {
		if (supersets[i] < i) {
			return false;
		}
	}
	return true;
}