function fractionMultiplication(A, B) {

  var c = [];

  c[0] = A[0] * B[0];
  c[1] = A[1] * B[1];

  var gcd = (a, b) => !b ? a : gcd(b, a % b);

  d = gcd(c[0], c[1]);
  return [c[0] / d, c[1] / d];
}
