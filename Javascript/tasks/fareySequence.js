function fareySequence(n, m) {
  var Fraction = function (a, b) {
    this.a = a;
    this.b = b;
  };
  Fraction.prototype.isReduced = function () {
    return gcd(this.a, this.b) === 1;
  };
  var gcd = function (a, b) {
    return !b
      ? a
      : gcd(b, a % b);
  };
  var cmp = function (f1, f2) {
    return (f1.a * f2.b - f1.b * f2.a);
  };
  Fraction.prototype.toString = function () {
    return this.a + "/" + this.b;
  };
  fractions = [];
  for (var i = 1; i <= n; i++) {
    for (var j = 0; j <= i; j++) {
      f = new Fraction(j, i);
      if (f.isReduced()) {
        fractions.push(f);
      }
    }
  }
  fractions.sort(cmp);
  return fractions[m - 1].toString();
}