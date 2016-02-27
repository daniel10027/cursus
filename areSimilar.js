function areSimilar(A, B) {

  for (var i = 0; i < A.length; i++) {
    for (var j = i; j < A.length; j++) {
      var equal = true,
        tmp = A[i];
      A[i] = A[j];
      A[j] = tmp;
      for (var k = 0; k < A.length; k++) {
        if (A[k] !== B[k]) {
          equal = false;
          break;
        }
      }
      if (equal) {
        return true;
      }
      A[j] = A[i];
      A[i] = tmp;
    }
  }
  return false;
}
