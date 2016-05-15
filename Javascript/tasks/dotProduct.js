function dotProduct(v1, v2) {
  var result = 0;
  for (var i = 0; i < 3; i++) {
    result += v1[i] * v2[i + 1];
  }
  return result;
}
