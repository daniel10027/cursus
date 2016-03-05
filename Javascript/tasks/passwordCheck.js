function passwordCheck(inputString) {

  var containsDigits = false,
      containsCapitals = false,
      containsSmallLetters = false;

  for (var i = 0; i < inputString.length; i++) {
    if ('0' <= inputString[i] && inputString[i] <= '9') {
      containsDigits = true;
    }
    if ('A' <= inputString[i] && inputString[i] <= 'Z') {
      containsCapitals = true;
    }
    if ('a' <= inputString[i] && inputString[i] <= 'z') {
      containsSmallLetters =  true ;
    }
  }
  return containsDigits && containsCapitals
         && containsSmallLetters && inputString.length >= 5;
}
