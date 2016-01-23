function smallestMultiple(n) {
  var product = 2 * 3 * 5 * 7;
  result = "";

  if (n < 4) return "" + product;

  var start = Math.pow(10, n - 1);

  for (var i = start; i < 2 * start; i++) {
    if ((i % product) === 0) {
      return "" + i;
    }
  }
}

console.log(smallestMultiple(100));
