function powersOfTwo(n) {

  var ans = [];
  var cur = 1;
  while (n > 0) {
    if (n % 2 === 1) {
      ans.push(cur);
    }
    n >>= 1;
    cur <<= 1;
  }

  return ans;
}
