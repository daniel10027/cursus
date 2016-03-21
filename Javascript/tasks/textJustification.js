//INCORRECT
//BUGFIX
function textJustification(words, L) {
  var text = [],
    currentWord = 0;
  while (currentWord < words.length) {
    var left = currentWord,
      right = left,
      currentSum = words[left].length;
    while (right + 1 < words.length && currentSum + words[right + 1].length + 1 <= L) {
      currentSum += words[right + 1].length;
      right++;
    }
    if (left === right) {
      var line = words[left];
      for (var i = 0; i < L - words[left].length; i++) {
        line += ' ';
      }
      text.push(line);
    } else {
      var freeSpace = L - currentSum,
        minimalSpaceLen = 1 + Math.floor(freeSpace / (right - left)),
        extraSpaces = freeSpace % (right - left),
        minimalSpace = '';
      for (var i = 0; i < minimalSpaceLen; i++) {
        minimalSpace += ' ';
      }
      var line = '';
      for (var i = left; i < right; i++) {
        line += words[i] + minimalSpace;
        if (extraSpaces > 0) {
          line += ' ';
          extraSpaces--;
        }
      }
      text.push(line + words[right]);
    }
    currentWord = right + 1;
  }
  return text;
}