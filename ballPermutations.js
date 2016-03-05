function ballPermutations(N, M, K) {
	/*
	 * dp[n][m][k][last] - number of desired permutations for n, m, k balls
	 * of given colors, (last == 1) means that the last ball is blue,
	 * otherwise (last == 0).
	 */
	var dp = [];
	/*
	 * dp is correctly filled with zeros.
	 */
	for (var i = 0; i <= N; i++) {
		dp.push([]);
		for (var j = 0; j <= M; j++) {
			dp[i].push([]);
			for (var k = 0; k <= K; k++) {
				dp[i][j].push([0, 0]);
			}
		}
	}
	dp[0][0][0][0] = 1;
	for (var cnt = 0; cnt < N + M + K; cnt++) {
		for (var n = 0; n <= Math.min(N, cnt); n++) {
			for (var m = 0; m <= Math.min(M, cnt - n); m++) {
				var k = cnt - n - m;
				if (k > K) {
					continue;
				}
				if (n < N) {
					dp[n + 1][m][k][0] += dp[n][m][k][0] + dp[n][m][k][1];
				}
				if (m < M) {
					dp[n][m + 1][k][1] += dp[n][m][k][0];
				}
				if (k < K) {
					dp[n][m][k + 1][0] += dp[n][m][k][0] + dp[n][m][k][1];
				}
			}
		}
	}
	return dp[N][M][K][0] + dp[N][M][K][1];
}