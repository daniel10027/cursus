function axisAlignedCirclesBoundingBox(x, y, r) {

  var minX = x[0] - r[0],
    maxX = x[0] + r[0],
    minY = y[0] - r[0],
    maxY = y[0] + r[0];

  for (var i = 1; i < x.length; i++) {
    minX = Math.min(x[i] - r[i], minX);
    maxX = Math.max(x[i] + r[i], maxX);
    minY = Math.min(y[i] - r[i], minY);
    maxY = Math.max(y[i] + r[i], maxY);
  }

  return (maxX - minX) * (maxY - minY);
}
