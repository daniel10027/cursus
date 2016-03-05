function boxesPacking(length, width, height) {
	var n = length.length,
		p = [];
	for (var i = 0; i < n; i++) {
		p.push(i);
	}
	for (var it = 0; it < n; it++) {
		for (var i = 0; i < n - 1; i++) {
			var volumeF = length[p[i]] * width[p[i]] * height[p[i]];
			var volumeS = length[p[i + 1]] * width[p[i + 1]] * height[p[i + 1]];
			if (volumeF > volumeS) {
				var tmp = p[i];
				p[i] = p[i + 1];
				p[i + 1] = tmp;
			}
		}
	}
	var isCorrectSequence = true;
	for (var i = 0; i < n - 1; i++) {
		var pi = p[i],
			pj = p[i + 1],
			canSwap = false;
		canSwap |= (length[pi] < length[pj] && width[pi] < width[pj] && height[pi] < height[pj]);
		canSwap |= (length[pi] < length[pj] && width[pi] < width[pj] && height[pi] < height[pj]);
		canSwap |= (length[pi] < length[pj] && width[pi] < height[pj] && height[pi] < width[pj]);
		canSwap |= (length[pi] < width[pj] && width[pi] < length[pj] && height[pi] < height[pj]);
		canSwap |= (length[pi] < width[pj] && width[pi] < height[pj] && height[pi] < length[pj]);
		canSwap |= (length[pi] < height[pj] && width[pi] < length[pj] && height[pi] < width[pj]);
		canSwap |= (length[pi] < height[pj] && width[pi] < width[pj] && height[pi] < length[pj]);
		isCorrectSequence &= canSwap;
	}
	return isCorrectSequence;
}