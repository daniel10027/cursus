function chartFix(chart) {
  var toRemove = [];
  for (var i = 0; i < chart.length; i++) {
    var cur = i;
    for (var j = 0; j < i; j++) {
      if (chart[j] < chart[i]) {
        cur = Math.min(cur, toRemove[j] + i - j - 1);
      }
    }
    toRemove.push(cur);
  }
  return cur;
}