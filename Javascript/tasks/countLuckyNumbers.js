function countLuckyNumbers(n) {
    /*
     * array dp (short for dynamic programming)
     * is used for storing the interim values.
     */
    var dp = [],
        result = 0;
    for (var i = 0; i <= n / 2; i++) {
        dp.push([]);
        for (var j = 0; j <= i * 9; j++) {
            dp[i].push(0);
        }
    }
    dp[0][0] = 1;
    for (var i = 0; i < n / 2; i++) {
        for (var sum = 0; sum <= i * 9; sum++) {
            for (var nextDigit = 0; nextDigit < 10; nextDigit++) {
                dp[i + 1][sum + nextDigit] += dp[i][sum];
            }
        }
    }
    for (var sum = 0; sum < (n / 2) * 9; sum++) {
        result += dp[n / 2][sum] * dp[n / 2][sum];
    }
    return result + 1;
}