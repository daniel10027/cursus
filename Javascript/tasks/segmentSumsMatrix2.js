function segmentSumsMatrix2(inputArray) {
  var answer = [];
  for (var i = 0; i < inputArray.length; i++) {
    var line = [];
    for (var j = 0; j < inputArray.length; j++) {
      line.push(0);
    }
    answer.push(line);
  }
  for (var i = 0; i < inputArray.length; i++) {
    answer[i][i] = inputArray[i];
    for (var j = i + 1; j < inputArray.length; j++) {
      answer[i][j] = answer[i][j - 1] + inputArray[j];
    }
  }
  for (var i = 0; i < inputArray.length; i++) {
    for (var j = i + 1; j < inputArray.length; j++) {
      answer[j][i] = answer[i][j];
    }
  }
  return answer;
}