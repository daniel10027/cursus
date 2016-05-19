function textOverlayOnHeroImage(image, height, width) {

  var max = 0;
  var coords = [];
  for(var i = 0; i <= image.length - height; i++) {
    for(var j = 0; j <= image[0].length - width; j++) {
      var brightness = 0;
      for(var y = i; y < i + height; y++) {
        for(var x = j; x < j + width; x++) {
          brightness += image[y][x];
        }
      }
      if(brightness > max) {
        max = brightness;
        coords = [i, j]
      }
    }
  }
  return coords;
}
