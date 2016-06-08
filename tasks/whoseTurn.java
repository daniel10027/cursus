boolean whoseTurn(String p) {

  class Helper {

  int color(int r, int c) {
    return (r + c) % 2;
  }
  }
  Helper h = new Helper();

  int s = 0;
  for (int i = 0; i < 4; i++) {
    int c = p.charAt(i * 3 + 0) - 'a';
    int r = p.charAt(i * 3 + 1) - '0';
    s += h.color(r, c);
  }

  return s % 2 == 0;
}
