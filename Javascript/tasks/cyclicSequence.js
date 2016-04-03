function cyclicSequence(sequence) {
  for (var i = 0; i < sequence.length; i++) {
    var j = i;
    for (var length = 1; length <= sequence.length; length++) {
      if (length === sequence.length) {
        return true;
      }
      if (sequence[(j + 1) % sequence.length] <= sequence[j]) {
        break;
      }
      j = (j + 1) % sequence.length
    }
  }
  return false;
}