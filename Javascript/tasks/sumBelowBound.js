function sumBelowBound(bound) {
  var s = 0;
  var i = 0;
  while (s <= bound) {
    s += i++;
  }
  return i - 2;
}