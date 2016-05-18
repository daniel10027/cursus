function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === elemToReplace) {
      substitutionElem = inputArray[i];
    }
  }
  return inputArray;
}