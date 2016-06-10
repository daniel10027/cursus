function largestDistance(A) {

  var mx = [A[0], A[1]];
  var mn = [A[0], A[1]];
  for(var i = 0; i < A.length; i++) {
    var k = i % 2;
    if(A[i] > mx[k]) {
      mx[k] = A[i];
    } else if(A[i] < mn[k]) {
      mn[k] = A[i];
    }
  }
  return Math.max(mx[0] - mn[0], mx[1] - mn[1]);
}
