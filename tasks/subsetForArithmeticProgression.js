function subsetForArithmeticProgression(inputArray) {
	var result = 1;
	for (var i = 0; i < inputArray.length; i++) {
		for (var j = i + 1; j < inputArray.length; j++) {
			var dif = Math.abs(inputArray[i] - inputArray[j]);
			for (var divisor = 1; divisor * divisor <= dif; divisor++) {
				if (dif % divisor === 0) {
					var cnt = 0,
						pair_divisor = dif / divisor;
					if (divisor > 1) {
						for (var k = 0; k < inputArray.length; k++) {
							if (Math.abs(inputArray[k] - inputArray[j]) % divisor === 0) {
								cnt++;
							}
						}
						result = Math.max(result, cnt);
					}
					cnt = 0;
					if (pair_divisor > 1) {
						for (var k = 0; k < inputArray.length; k++) {
							if (Math.abs(inputArray[i] - inputArray[k]) % pair_divisor === 0) {
								cnt++;
							}
						}
						result = Math.max(result, cnt);
					}
				}
			}
		}
	}
	return result;
}