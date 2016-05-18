function threeAndFour(n) {
  var ans = [];
  for (var i = 0; i < n; i++) {
    if (i % 12 == 0) ans.push(i);
  }
  return ans;
}