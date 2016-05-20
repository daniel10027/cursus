bool isSubstitutionCipher(std::string string1, std::string string2) {

  std::vector<int> pair(26, -1);
  std::vector<bool> paired(26, false);

  for (int i = 0; i < string1.size(); i++) {
    int ch1 = string1[i] - 'a';
    int ch2 = string2[i] - 'a';
    if (pair[ch1] != ch2 && (paired[ch2] || pair[ch1] != -1)) {
      return false;
    }
    pair[ch1] = ch2;
    paired[ch2] = true;
  }

  return true;
}
