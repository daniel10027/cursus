function improperFractionToMixed(A) {
  return [
    Math.floor(A[0] / A[1]),
    A[0] % A[1],
    A[1]
  ];
}

function improperFractionToMixed(A) {

  var B = [Math.floor(A[0] / A[1])];
  B.push(A[1] - A[0] * B[0]);
  B.push(A[1]);

  return B;
}
