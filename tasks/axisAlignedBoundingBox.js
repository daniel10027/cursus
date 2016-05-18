function axisAlignedBoundingBox(x, y) {
  x.sort((a, b) => a - b);
  y.sort((a, b) => a - b);
  return (x[x.length - 1] - x[0]) * (y[y.length - 1] - y[0])

}

function axisAlignedBoundingBox(x, y) {

  var minX = x[0],
    maxX = x[0],
    minY = y[0],
    maxY = y[0];

  for (var i = 1; i < x.length; i++) {
    minX = Math.min(x[i], maxX);
    maxX = Math.max(x[i], maxX);
    minY = Math.min(y[i], minY);
    maxY = Math.max(y[i], maxY);
  }

  return (maxX - minX) * (maxY - minY);
}
