function waterTubes(water, flowPerMinute) {
  var result = 0;

  for (var i = 0; i < water.length; i++) {
    var minutes = Math.floor(water[i] / flowPerMinute[i]);
    if (water[i] % flowPerMinute[i]) {
      minutes++;
    }
    if (result < minutes) {
      result = minutes;
    }
  }
  return result;
}
