function longestWord(text) {

  var answer = '',
    current = [];

  for (var i = 0; i < text.length; i++) {
    if ('a' <= text[i] && text[i] <= 'z' || 'A' <= text[i] && text[i] <= 'Z') {
      current.push(text[i]);
      if (current.length > answer.length) {
        answer = current.join('');
      }
    } else {
      current = [];
    }
  }

  return answer;
}
