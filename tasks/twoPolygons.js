function twoPolygons(p1, p2) {
  var doubleSquare = function(polygon) {
    var square = 0;
    for(var i = 0; i < polygon.length; i++) {
      var a = polygon[i];
      var b = polygon[(i + 1) % polygon.length];
      square += a[0] * b[1] - a[1] * b[0];
    }
    return square;
  }

  return doubleSquare(p1) === doubleSquare(p2);
}
