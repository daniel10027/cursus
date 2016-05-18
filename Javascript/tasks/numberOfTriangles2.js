function numberOfTriangles2(sticks) {

  var ans = 0;
  for (var i = 0; i < sticks.length - 2; i++) {
    for (var j = i + 1; j < sticks.length - 1; j++) {
      var mx = sticks[i] + sticks[j];
      var l = j,
          r = sticks.length ;
      while (r - l > 1) {
        var m = Math.floor((l + r) / 2);
        if (sticks[m] >= mx) {
          r = m;
        } else {
          l = m;
        }
      }
      ans += r - j - 1;
    }
  }

  return ans;
}
