function countPathsThroughCell(n, m, x, y) {
    /*
     * Array dp is used to store dynamic programming values.
     */
    var dp = [];
    for (var i = 0; i <= n; i++) {
        var line = [];
        for (var j = 0; j <= m; j++) {
            line.push(0);
        }
        dp.push(line);
    }
    dp[0][0] = 1;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            dp[i + 1][j] += dp[i][j];
            dp[i][j + 1] += dp[i][j];
        }
    }
    return dp[x][y] * dp[n - 1 - x][m - 1 - y];
}