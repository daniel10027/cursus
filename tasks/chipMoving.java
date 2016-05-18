int chipMoving(int[][] grid) {

  final int MAX_COST = (int) 1e7;

  int n = grid.length,
      m = grid[0].length;

  int[][][] dp = new int[n][m][2];

  for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++) {
      for (int k = 0; k < 2; k++) {
        dp[i][j][k] = MAX_COST;
      }
    }
  }

  dp[0][0][0] = 0;
  dp[0][0][1] = 0;

  for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++) {
      if (i < n - 1) {
        dp[i + 1][j][0] = Math.min(Math.min(dp[i + 1][j][0],
                                            dp[i][j][0] + grid[i + 1][j]),
                                   dp[i][j][1] + grid[i + 1][j] + 10);
      }
      if (j < m - 1) {
        dp[i][j + 1][1] = Math.min(Math.min(dp[i][j + 1][1],
                                            dp[i][j][1] + grid[i][j + 1]),
                                   dp[i][j][0] + grid[i][j + 1] + 10);
      }
    }
  }

  return Math.min(dp[n - 1][m - 1][0], dp[n-1][m-1][1]);
}
