function concatenationProcess(init) {
	while (init.length > 1) {
		var minInd1 = 0,
			minInd2 = init.length - 1;
		for (var i = 1; i < init.length; i++) {
			if (init[i].length < init[minInd1].length) {
				minInd1 = i;
			}
		}
		if (minInd2 === minInd1) {
			minInd2--;
		}
		for (var i = init.length - 2; i >= 0; i--) {
			if (init[i].length < init[minInd2].length && i !== minInd1) {
				minInd2 = i;
			}
		}
		init.push(init[minInd1] + init[minInd2]);
		init.splice(Math.max(minInd1, minInd2), 1);
		init.splice(Math.min(minInd1, minInd2), 1);
	}
	return init[0];
}
