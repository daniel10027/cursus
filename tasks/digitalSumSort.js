function digitalSumSort(a) {

  function digitSum(n) {
    var s = 0;
    while (n) {
      s += n % 10;
      n = Math.floor(n / 10);
    }
    return s;
  }

  a.sort((a, b) => {
    if (digitSum(a) == digitSum(b)) {
      return a - b;
    }
    return digitSum(a) - digitSum(b)
  });
  return a;
}

//More complicated solution by zero_cool
function digitalSumSort(a) {

  dsum = n => {
    var sum = 0;
    while (n) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    return sum;
  }
  return a.sort((p, q) => 100 * (dsum(p) - dsum(q)) + p - q);
}
