int caesarBoxCipherEncoding2(std::string inputString) {

  struct Helper
  {
    std::string encode(std::string s, int n) {
      std::string res = "";
      for (int i = 0; i < n; i++) {
        for (int j = 0; j < s.length() / n; j++) {
          res += s[j * n + i];
        }
      }
      return res;
    }
  };
  Helper h;

  int res = 0;
  int len = inputString.length();
  int sqrt_len = std::sqrt(len);
  for (int n = 2; n <= sqrt_len; n++) {
    if (len % n == 0) {
      if (h.encode(h.encode(inputString, n), n) == inputString) {

        if (n * n == len) {
          res += 1;
        }
        else {
          res += 2;
        }
      }
    }
  }

  return res;
}
