function avoidObstacles(inputArray) {

  for (var i = 1;; i++) {
    var found = true;
    for (var k = 0; k < inputArray.length; k++) {
      if (inputArray[k] % i === 0) found = false;
    }

    if (found) return i;

  }
}
