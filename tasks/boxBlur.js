function boxBlur(image) {
  var answer = [];
  for (var x = 1; x < image.length - 1; x++) {
    var line = [];
    for (var y = 1; y < image[0].length - 1; y++) {
      var sum = 0;
      for (var dx = -1; dx <= 1; dx++) {
        for (var dy = -1; dy <= 1; dy++) {
          sum += image[x + dx][y + dy];
        }
      }
      line.push(Math.floor(sum / 9));
    }
    answer.push(line);
  }
  return answer;
}
