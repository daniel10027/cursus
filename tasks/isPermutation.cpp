bool isPermutation(int n, std::vector<int> s) {
  if (s.size() != n)
    return false;

  std::sort(s.begin(), s.end());
  for (int i=0; i<s.size(); i++) {
    if (s[i] != i + 1)
      return false;
  }

  return true;
}
