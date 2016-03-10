function binarySearch(inputArray, searchElement) {

  var minIndex = 0;
  var maxIndex = inputArray.length - 1;
  var currentIndex=0;
  var currentElement;

  while (minIndex <= maxIndex) {
      currentIndex=minIndex
      currentElement = inputArray[currentIndex]

      if (currentElement < searchElement) {
          minIndex = currentIndex + 1;
      }
      else if (currentElement > searchElement) {
          maxIndex = currentIndex - 1;
      }
      else {
          return currentIndex;
      }
  }

  return -1;
}
