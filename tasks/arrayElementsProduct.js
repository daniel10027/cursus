function arrayElementsProduct(array) {

  var result = array[0];

  for (var i = 1; i < array.length; i++) {
    result *= array[i];
  }
  return result;
}
