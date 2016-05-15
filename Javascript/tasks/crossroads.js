function crossroads(road1, road2, crossTime) {
  var j = 0;
  for (var i = 0; i < road1.length; i++) {
    while (j < road2.length && road1[i] + crossTime > road2[j]) {
      if (road2[j] + crossTime > road1[i]) {
        return true;
      }
      j++;
    }
    if (j < road2.length && road1[i] + crossTime > road2[j]) {
      return true;
    }
  }
  return false;
}
