function applesDistribution(apples, boxCapacity, maxResidue) {
  var c = 0;
  for (var i = 1; i <= boxCapacity; i++) {
    if ((apples % i) <= maxResidue) c++;
  }
  return c;
}