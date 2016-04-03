function patternMatching(input, pattern) {
    var dp = [];
    for (var i = 0; i <= input.length; i++) {
        var line = [];
        for (var j = 0; j <= pattern.length; j++) {
            line.push(false);
        }
        dp.push(line);
    }
    dp[0][0] = true;
    for (var i = 0; i <= input.length; i++) {
        for (var j = 0; j < pattern.length; j++) {
            if (!dp[i][j]) {
                continue;
            }
            if (i < input.length && (input[i] === pattern[j] || pattern[j] ===
                    '?')) {
                dp[i + 1][j + 1] = true;
            }
            if (pattern[j] === '*') {
                for (var k = 0; i + k <= input.length; k++) {
                    dp[i + k][j + 1] = true;
                }
            }
        }
    }
    return dp[input.length][pattern.length];
}