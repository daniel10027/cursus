function maximalEven(inputArray) {

  inputArray.sort((a, b) => b - a);

  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] % 2 == 0)
      return inputArray[i];
    }
  }
