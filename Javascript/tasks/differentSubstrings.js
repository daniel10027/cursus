function differentSubstrings(inputStr) {

  var substrings = [],
      result = 1;

  for (var i = 0; i < inputStr.length; i++) {
    for (var j = i + 1; j <= inputStr.length; j++) {
      substrings.push(inputStr.substring(i, j));
    }
  }
  substrings.sort();
  for (var i = 1; i < substrings.length; i++) {
    if (substrings[i] !== substrings[i - 1]) {
      result++;
    }
  }

  return result;
}
