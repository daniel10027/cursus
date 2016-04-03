function fractionDivision(A, B) {
  var gcd = (a, b) => !b ? a : gcd(b, a % b);
  var result = [A[0] * B[1], B[0] * A[1]];
  var tmp = gcd(result[0], result[1]);
  result[0] /= tmp;
  result[1] /= tmp;
  return result;
}