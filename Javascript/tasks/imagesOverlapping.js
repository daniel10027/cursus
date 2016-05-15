function imagesOverlapping(largeImg, smallImg) {

  var result = 0;

  for (var i = 0; i + smallImg.length <= largeImg.length; i++) {
    for (var j = 0; j + smallImg[0].length <= largeImg[0].length; j++) {
      var correct = true;
      for (var k = 0; k < smallImg.length; k++) {
        for (var t = 0; t < smallImg[0].length; t++) {
          if (smallImg[k][t] && largeImg[i + k][j + t]) {
            correct = false;
          }
        }
      }
      if (correct) {
        result++;
      }
    }
  }

  return result;
}
