function sumUpNumbers(inputString) {

  var answer = 0,
      currentNumber = 0;

  for (var i = 0; i < inputString.length; i++) {
    if ('0' <= inputString[i] && inputString[i] <= '9') {
      currentNumber = currentNumber * 10 + inputString.charCodeAt(i) - '0'.charCodeAt(0);
    }
    else {
      answer += currentNumber;
      currentNumber = 0;
    }
  }
  answer += currentNumber;

  return answer;
}
