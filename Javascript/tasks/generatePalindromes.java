ArrayList<String> generatePalindromes(String charactersSet) {

  class Helper {
    int N;
    char[] palindrome;
    int[] letterCnt;
    ArrayList<String> result = new ArrayList<>();

    Helper(String charactersSet) {
      N = charactersSet.length();
      palindrome = new char[N];
      letterCnt = new int[26];
      for (int i = 0; i < N; i++) {
        letterCnt[charactersSet.charAt(i) - 'a']++;
      }
      if (N % 2 == 1) {
        for (int i = 0; i < 26; i++) {
          if (letterCnt[i] % 2 == 1) {
            letterCnt[i]--;
            palindrome[N / 2] = (char)('a' + i);
            break;
          }
        }
      }
    }

    void generate(int idx) {
      if (idx >= N / 2) {
        result.add(new String(palindrome));
          return;
      }
      for (int i = 0; i < 26; i++) {
        if (letterCnt[i] >= 2) {
          letterCnt[i] -= 2;
          palindrome[idx] = (char)('a' + i);
          palindrome[N - idx - 1] = (char)('a' + i);
          generate(idx + 1);
          letterCnt[i] += 2;
        }
      }
    }
  }
  Helper h = new Helper(charactersSet);

  h.generate(0);
  return h.result;
}
