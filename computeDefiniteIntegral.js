function computeDefiniteIntegral(l, r, p) {

  var result = 0,
    lExp = l,
    rExp = r;

  for (var i = 0; i < p.length; i++) {
    result += p[i] * (rExp - lExp) / (i + 1);
    lExp *= l;
    rExp *= l;
  }

  return result;
}
