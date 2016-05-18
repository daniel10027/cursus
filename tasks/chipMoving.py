def chipMoving(grid):

    MAX_COST = 10 ** 7

    n = len(grid)
    m = len(grid[0])
    dp = []

    for i in range(n):
        dp.append([])
        for j in range(m):
            dp[i].append([MAX_COST, MAX_COST])

    dp[0][0][0] = 0
    dp[0][0][1] = 0
    for i in range(n):
        for j in range(m):
            if i < n - 1:
                dp[i + 1][j][0] = min(dp[i + 1][j][0],
                                      dp[i][j][0] + grid[i + 1][j],
                                      dp[i][j][1] + grid[i + 1][j] + 10)
            if j < m - 1:
                dp[i][j + 1][1] = min(dp[i][j + 1][1],
                                      dp[i][j][1] + grid[i][j + 1],
                                      dp[i][j][0] + grid[i][j + 1] + 10)

    return min(dp[n - 1][m - 1][0],dp[n-1][m-1][1])
