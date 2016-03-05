function digitalNumber(k) {
	var ans = [];
	var M = 20;
	var sum = 0;
	while (k >= M) {
		ans.push('1');
		k -= 2;
		sum++;
	}
	sum %= 3;
	var seg = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];
	/*
	 * dp[i][j] - the largest number that is obtainable from j segments
	 * and that has i as a remainder after division by 3.
	 */
	var dp = [
		[0],
		[-1],
		[-1]
	];
	for (var i = 1; i < M; i++) {
		for (var j = 0; j < 3; j++) {
			dp[j].push(-1);
			for (var d = 0; d < 10; d++) {
				var pSum = (j - d + 9) % 3;
				var pSegmCnt = i - seg[d];
				if (pSegmCnt < 0 || dp[pSum][pSegmCnt] === -1) {
					continue;
				}
				var cur = dp[pSum][pSegmCnt] === 0 ? d : parseInt(d.toString() + "" + dp[pSum][pSegmCnt].toString());
				dp[j][i] = dp[j][i] != -1 ? Math.max(dp[j][i], cur) : cur;
			}
		}
	}
	return dp[(3 - sum) % 3][k] + ans.join('');
}
