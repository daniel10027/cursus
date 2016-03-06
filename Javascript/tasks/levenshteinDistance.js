function levenshteinDistance(string1, string2) {
	var len1 = string1.length,
		len2 = string2.length,
		dp = [];
	for (var i = 0; i <= len1; i++) {
		dp.push([]);
		for (var j = 0; j <= len2; j++) {
			dp[i].push(0);
		}
	}
	for (var i = 0; i <= len1; i++) {
		dp[i][0] = i;
	}
	for (var j = 0; j <= len2; j++) {
		dp[0][j] = j;
	}
	for (var i = 1; i <= len1; i++) {
		for (var j = 1; j <= len2; j++) {
			if (string1[i - 1] == string2[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1];
				continue;
			}
			dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], Math.min(dp[i][j - 1], dp[i - 1][j]));
		}
	}
	return dp[len1][len2];
}