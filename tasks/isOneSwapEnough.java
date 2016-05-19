boolean isOneSwapEnough(String inputString) {

  char[][] badPairs = new char[2][];
  int badPairsCnt = 0;
  for (int i = 0; i < inputString.length() / 2; i++) {
    char a = inputString.charAt(i);
    char b = inputString.charAt(inputString.length() - i - 1);
    if (a != b) {
      if (badPairsCnt == 2) {
        return false;
      }
      if (a > b) {
        char t = a;
        a = b;
        b = t;
      }
      badPairs[badPairsCnt++] = new char[] {a, b};
    }
  }
  if (badPairsCnt == 0) {
    return true;
  } else if (badPairsCnt == 1) {
    if (inputString.length() % 2 == 0) {
      return false;
    }
    char c = inputString.charAt(inputString.length() / 2);
    return badPairs[0][0] == c || badPairs[0][1] == c;
  } else {
    return badPairs[0][0] == badPairs[1][0] && badPairs[0][1] == badPairs[1][1];
  }
}
