function hangman(word, letters) {
  var miss = 0;
  var guess = false;
  letters.split("").forEach(function(x) {
    if (word.indexOf(x) > -1) {
      word = word.split("").filter(c => c != x).join("");
    } else miss++;
    if (word.length < 1 && miss < 6) {
      guess = true;
    }
  });
  return guess;
}