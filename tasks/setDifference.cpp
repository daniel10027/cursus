std::vector<int> setDifference(std::vector<int> A, std::vector<int> B) {

  std::sort(A.begin(), A.end());
  std::sort(B.begin(), B.end());
  std::vector<int> C;

  int pos_b = 0;
  for (int pos_a = 0; pos_a < A.size(); pos_a++) {
    while (pos_b < B.size() && B[pos_b] < A[pos_a]) {
      pos_b++;
    }
    if (A[pos_a] != B[pos_b]) {
      C.push_back(A[pos_a]);
    }
  }

  return C;
}
