function countCircleColorings(points, colors) {
    /*
     * Array dp is used to store dynamic programming values.
     * On the i-th step
     *  dp[0] is equal to the number of ways to color first i points
     *  in such manner that i-th point will have not the same color
     *  as the starting point,
     *  dp[1] is equal to the number of ways to color first i points
     *  in such manner that i-th point will have the same color
     *  as the starting point
     */
    var dp = [0, colors];
    for (var i = 1; i < points; i++) {
        var tmp = dp[0];
        dp[0] = dp[0] * (colors - 2) + dp[1] * (colors - 1);
        dp[1] = tmp;
    }
    return dp[0];
}