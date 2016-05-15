function wordSubtraction(a, b) {
  var countLetters = [],
    result = [];
  for (var i = 0; i < 26; i++) {
    countLetters.push(0);
  }
  for (var i = 0; i < a.length; i++) {
    countLetters[a.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }
  for (var i = 0; i < b.length; i++) {
    countLetters[b.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }
  for (var i = 0; i < 26; i++) {
    if (countLetters[i] < 0) {
      countLetters[i] += 2;
      countLetters[i + 1]--;
    }
    if (countLetters[i] === 1) {
      result.push(String.fromCharCode('a'.charCodeAt(0) + i));
    }
  }
  return result.join("");
}
