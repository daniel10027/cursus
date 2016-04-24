function swapArrayHalves(inputArray) {

  for (var i = 0; i < inputArray.length / 2; i++) {
    var tmp = inputArray[i];
    inputArray[i] = inputArray[i + inputArray.length / 2];
    inputArray[i + inputArray.length / 2] = tmp;
  }
  return inputArray;
}
