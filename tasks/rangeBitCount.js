function rangeBitCount(a, b) {

  var sum = 0;
  for (var i = a; i <= b; i++) {
    var arr = i.toString(2).split("");
    arr.map(v => {
      if (v == 1)
        sum++;
      }
    );
  }
  return sum;
}
