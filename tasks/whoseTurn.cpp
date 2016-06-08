bool whoseTurn(std::string p) {

  struct Helper {

    int color(int r, int c) {
      return (r + c) % 2;
    }
  };
  Helper h;

  int s = 0;
  for (int i = 0; i < 4; i++) {
    int c = p[i * 3 + 0] - 'a';
    int r = p[i * 3 + 1] - '0';
    s += h.color(r, c);
  }

  return s % 2 == 0;
}
