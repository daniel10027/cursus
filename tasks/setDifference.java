int[] setDifference(int[] A, int[] B) {

  Arrays.sort(A);
  Arrays.sort(B);
  ArrayList<Integer> C = new ArrayList<>();

  int pos_b = 0;
  for (int pos_a = 0; pos_a < A.length; pos_a++) {
    while (pos_b < B.length && B[pos_b] < A[pos_a]) {
      pos_b++;
    }
    if (pos_b != B.length || A[pos_a] != B[pos_b]) {
      C.add(A[pos_a]);
    }
  }

  int[] res = new int[C.size()];
  for (int i = 0; i < res.length; i++) {
    res[i] = C.get(i);
  }

  return res;
}
