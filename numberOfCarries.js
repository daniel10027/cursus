function numberOfCarries(a, b) {
  var ans = 0;
  var c = 0;
  while (a > 0 || b > 0) {
    c = Math.floor(((a % 10) + (b % 10) + c) / 10);
    if (c > 0) {
      ans++;
    }
    a = Math.floor(a / 10);
    b = Math.floor(b / 10);
  }
  return ans;
}