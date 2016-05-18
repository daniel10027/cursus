function prefixSums(A) {
  var B = [];
  for (var i = 0; i < A.length; i++) {
    B[i] = 0;
    for (var j = 0; j < i + 1; j++) {
      B[i] += A[j];
    }
  }
  return B;
}