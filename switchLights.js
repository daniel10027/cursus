function switchLights(a) {

  for (var i = 0; i < a.length; i++) {
    if (a[i]) {
      for (var k = 0; k <= i; k++) {
        a[k] = (1 - a[k]);
      }
    }
  }
  return a;
}
