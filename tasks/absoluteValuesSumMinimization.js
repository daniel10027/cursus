function absoluteValuesSumMinimization(A) {
  var minimum = Infinity;
  var element;
  for(var i = 0; i < A.length; i++) {
    var sum = 0;
    for(var j = 0; j < A.length; j++) {
      sum += Math.abs(A[i] - A[j]);
    }
    if(sum < minimum) {
      minimum = sum;
      element = A[i];
    }
  }
  return element;
}
