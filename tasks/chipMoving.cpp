int chipMoving(std::vector<std::vector<int>> grid) {

  const int MAX_COST = (int) 1e7;

  int n = grid.size(),
      m = grid[0].size();

  std::vector<std::vector<std::vector<int>>> dp(n);

  for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++) {
      std::vector<int> tmp(2, MAX_COST);
      dp[i].push_back(tmp);
    }
  }

  dp[0][0][0] = 0;
  dp[0][0][1] = 0;

  for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++) {
      if (i < n - 1) {
        dp[i + 1][j][0] = std::min({dp[i + 1][j][0],
                                    dp[i][j][0] + grid[i + 1][j],
                                    dp[i][j][1] + grid[i + 1][j] + 10});
      }
      if (j < m - 1) {
        dp[i][j + 1][1] = std::min({dp[i][j + 1][1],
                                    dp[i][j][1] + grid[i][j + 1],
                                    dp[i][j][0] + grid[i][j + 1] + 10});
      }
    }
  }

  return std::min(dp[n - 1][m - 1][0], dp[n - 1][m - 1][1]);
}
