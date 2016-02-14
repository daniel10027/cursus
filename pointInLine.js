function pointInLine(point, line) {
  return point[0] * line[0] + point[1] * line[1] + line[2] === 0;
}
