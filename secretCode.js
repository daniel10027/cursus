function secretCode(a) {

  var combCnt = 0;
  var used = [false, false, false, false, false,
    false, false, false, false, false
  ];

  var calcCombinations = function(curIndex) {

    var needToPlace = 0;
    for (var i = 0; i < 10; i++) {
      if (a[i] && !used[i]) {
        needToPlace++;
      }
    }
    if (needToPlace > 8 - curIndex) {
      return;
    }
    if (curIndex === 8) {
      combCnt++;
      return;
    }

    var first = curIndex == 0 ? 1 : 0;
    for (var i = first; i < 10; i++) {
      if (a[i]) {
        var old = used[i];
        used[i] = true;
        calcCombinations(curIndex + 1);
        used[i] = old;
      }
    }
  }
  calcCombinations(0);
  return combCnt;
}
