function countSumOfTwoRepresentations2(n, l, r) {
  var result = 0;

  for (var a = l; a <= r; a++) {
    var b = n - a;
    if (b >= l && b <= r && b >= a) {
      result++;
    }
  }
  return result;
}

//does not satisfy the time limit constaint
function countSumOfTwoRepresentations2(n, l, r) {
  var c = 0;
  for (var i = l; i <= r; i++) {
    for (var j = i; j <= r; j++) {
      if (i + j == n)
        c++;
      }
    }
  return c;
}
