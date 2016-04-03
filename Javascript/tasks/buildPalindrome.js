function buildPalindrome(str) {
  var canConvert;
  for (var i = str.length;; i++) {
    canConvert = true;
    for (var j = 0; j < i - j - 1; j++) {
      if (i - j - 1 < str.length && str[j] != str[i - j - 1]) {
        canConvert = false;
        break;
      }
    }
    if (canConvert) {
      for (var j = str.length; j < i; j++) {
        str += str[i - j - 1];
      }
      return str;
    }
  }
}