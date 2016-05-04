function fractionSum(A, B) {

  var gcdEuclid = function(a, b) {
      if (!a) {
        return b;
      }
      return gcdEuclid(b % a, a);
    }

    var C = [
        A[0] * B[1] + A[1] * B[0],
        A[1] * B[1]
      ],
      gcd = gcdEuclid(C[0], C[1]);

    C[0] /= gcd;
    C[1] /= gcd;

    return C;
  }
