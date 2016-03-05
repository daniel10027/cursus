function arrayPacking(a) {

  var res = 0;
  for (var i = 0; i < a.length; i++) {
    // res |= a[i] << i; The bug
    res |= a[i] << (8 * i);
  }

  return res;
}
