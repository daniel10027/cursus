function maximumSum(A, Q) {

  function less(a, b) {
    return a - b;
  }

  var sumCount = []
  for (var i = 0; i < A.length; i++) {
    sumCount.push(0);
  }
  for (var i = 0; i < Q.length; i++) {
    for (var j = Q[i][0]; j <= Q[i][1]; j++) {
      sumCount[j]++;
    }
  }
  A.sort(less);
  sumCount.sort(less);
  var answer = 0;
  for (var i = 0; i < A.length; i++) {
    answer +=  A[i]*sumCount[i];
  }

  return answer;
}
