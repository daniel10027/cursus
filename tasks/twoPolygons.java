boolean twoPolygons(int[][] p1, int[][] p2) {
  class Helper {
  int doubleSquare(int[][] polygon) {
    int square = 0;
    for (int i = 0; i < polygon.length; i++) {
      int[] a = polygon[i];
      int[] b = polygon[(i + 1) % polygon.length];
      square += a[0] * b[1] - a[1] * b[0];
    }
    return square;
  }
  }

  Helper h = new Helper();
  return h.doubleSquare(p1) == h.doubleSquare(p2);
}
