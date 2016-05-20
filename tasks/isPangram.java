boolean isPangram(String sentence) {
  boolean[] found = new boolean[26];
  boolean result = true;
  for (int i = 0; i < sentence.length(); i++) {
    int code = (int)sentence.charAt(i);
    if ((int)'A' <= code && code <= (int)'Z') {
      code += (int)'a' - (int)'A';
    }
    if ((int)'a' <= code && code <= (int)'z') {
      found[code - (int)'a'] = true;
    }
  }

  for (int i = 0; i < 26; i++) {
    if (!found[i]) {
      result = false;
    }
  }

  return result;
}
