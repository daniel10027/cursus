function findSquareSide(x, y) {
  var sqr = function(x) {
    return x * x;
  };
  var squareDistance = function(a, b) {
    return sqr(a[0] - b[0]) + sqr(a[1] - b[1]);
  };
  var answer = squareDistance([x[0], y[0]], [x[1], y[1]])
  for (var i = 2; i < 4; i++) {
    answer = Math.max(answer, squareDistance([x[i - 1], y[i - 1]], [x[i], y[i]]));
  }
  return answer / 2;
}