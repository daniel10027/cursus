function commonPoints(l1, r1, l2, r2) {
  var c = 0;
  for (var i = Math.min(l1, l2); i <= Math.max(r1, r2); i++) {
    if (i > l1 && i < r1 && i > l2 && i < r2) c++;
  }
  return c;
}