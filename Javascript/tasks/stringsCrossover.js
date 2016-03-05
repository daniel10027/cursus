function stringsCrossover(inputArray, result) {

  var answer = 0;

  for (var i = 0; i < inputArray.length; i++) {
    for (var j = i + 1; j < inputArray.length; j++) {
      var correct = true;
      for (var k = 0; k < result.length; k++) {
        if (result[k] !== inputArray[i][k]
            && result[k] !== inputArray[j][k]) {
          correct = false;
          break;
        }
      }
      if (correct) {
        answer++;
      }
    }
  }
  return answer;
}
