function checkSameElementExistence(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) != -1) return true;
  }
  return false;
}