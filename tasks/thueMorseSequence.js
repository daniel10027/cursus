function thueMorseSequence(n) {

  var currentLength = 1,
      needComplement = false;

  while (currentLength < n) {
    currentLength *= 2;
  }
  while (currentLength > 1) {
    if (n > currentLength / 2) {
      n -= currentLength/2;
      needComplement = !needComplement;
    }
    currentLength /= 2;
  }

  if (needComplement) {
    return 1;
  }
  return 0;
}
