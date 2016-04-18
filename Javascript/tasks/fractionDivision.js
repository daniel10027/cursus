function fractionDivision(A, B) {
    var gcd = (a, b) => !b ? a : gcd(b, a % b);
    var C = [A[0] * B[1], B[0] * A[1]];
    var tmp = gcd(C[0], C[1]);
    C[0] /= tmp;
    C[1] /= tmp;
    return C;
}