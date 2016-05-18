function allLongestStrings(inputArray) {
  var max = inputArray[0].length;
  inputArray.map(v => max = Math.max(max, v.length));
  inputArray = inputArray.filter(v => v.length == max);
  return inputArray;
}

function allLongestStrings(inputArray) {
  var answer = [inputArray[0]];
  for (var i = 1; i < inputArray.length; i++) {
    if (inputArray[i].length === answer[0].length) {
      answer.push(inputArray[i]);
    }
    if (inputArray[i].length > answer[0].length) {
      answer = [inputArray[i]];
    }
  }
  return answer;
}
