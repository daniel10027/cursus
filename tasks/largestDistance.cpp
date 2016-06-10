int largestDistance(std::vector<int> A) {

  int mx[2] = {A[0], A[1]};
  int mn[2] = {A[0], A[1]};
  for (int i = 0; i < A.size(); i++) {
    int k =  i%2;
    if (A[i] > mx[k]) {
      mx[k] = A[i];
    } else if (A[i] < mn[k]) {
      mn[k] = A[i];
    }
  }
  return std::max(mx[0] - mn[0], mx[1] - mn[1]);
}
