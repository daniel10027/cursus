function wordAbbreviation(a) {
  var countLetters = [],
    result = "";
  for (var i = 0; i < 26; i++) {
    countLetters.push(0);
  }
  for (var i = 0; i < a.length; i++) {
    countLetters[a.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }
  for (var i = 0; i < 25; i++) {
    if (countLetters[i] % 2 === 1) {
      result += String.fromCharCode(i + 'a'.charCodeAt());
    }
    countLetters[i + 1] += Math.floor(countLetters[i] / 2);
  }
  return result;
}