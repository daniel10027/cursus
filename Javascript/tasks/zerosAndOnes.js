function zerosAndOnes(s) {
  var answer = s.length,
    stack = [],
    topElem = -1;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '*') {
      stack = [];
      topElem = -1;
    } else {
      if (topElem >= 0 && stack[topElem] !== s[i]) {
        topElem--;
        answer -= 2;
      } else {
        if (topElem + 1 < stack.length) {
          stack[++topElem] = s[i];
        } else {
          topElem++;
          stack.push(s[i]);
        }
      }
    }
  }
  return answer;
}