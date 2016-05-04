function axisAlignedBoundingBox(x, y) {
  x.sort((a, b) => a - b);
  y.sort((a, b) => a - b);
  return (x[x.length - 1] - x[0]) * (y[y.length - 1] - y[0])

}
