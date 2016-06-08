int neighbouringElements(int[][] a) {
  int[] dx = {0, 0, -1, 1};
  int[] dy = {-1, 1, 0, 0};
  int count = 0;

  for (int i = 0; i < a.length; i++) {
    for (int j = 0; j < a[0].length; j++) {
      for (int k = 0; k < 4; k++) {
        int ni = i + dx[k];
        int nj = j + dy[k];
        if (ni > -1 && ni < a.length && nj > -1
            && nj < a[0].length && a[i][j] == a[ni][nj])
          count++;
      }
    }
  }
  return count / 2;
}
