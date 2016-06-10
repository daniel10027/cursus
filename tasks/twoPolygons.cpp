bool twoPolygons(std::vector<std::vector<int> > p1,
                 std::vector<std::vector<int> > p2) {
  struct Helper {
    int doubleSquare(std::vector<std::vector<int> > polygon) {
      int square = 0;
      for (int i = 0; i < polygon.size(); i++) {
        std::vector<int> a = polygon[i];
        std::vector<int> b = polygon[(i + 1) % polygon.size()];
        square += a[0] * b[1] - a[1] * b[0];
      }
      return square;
    }
  };

  Helper h;
  return h.doubleSquare(p1) == h.doubleSquare(p2);
}
