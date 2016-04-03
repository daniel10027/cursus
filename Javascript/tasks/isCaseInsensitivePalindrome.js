function isCaseInsensitivePalindrome(inputString) {
  var s = inputString.toLowerCase();
  return s.split("").reverse().join("") === s;
}