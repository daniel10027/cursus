function regularBracketSequence2(sequence) {
  var stack = []
  for (var i = 0; i < sequence.length; i++) {
    if (stack[stack.length - 1] === '(' && sequence[i] === ')') {
      stack.pop();
      continue;
    }
    if (stack[stack.length - 1] === '[' && sequence[i] === ']') {
      stack.pop();
      continue;
    }
    stack.push(sequence[i]);
  }
  if (stack.length) {
    return false;
  }
  return true;
}