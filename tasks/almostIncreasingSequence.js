function almostIncreasingSequence(sequence) {

  for (var erasedIndex = 0; erasedIndex < sequence.length; erasedIndex++) {
    var increasing = true,
      last = 0,
      start = 1;

    if (!erasedIndex) {
      last = 1;
      start = 2;
    }

    for (var j = start; j < sequence.length; j++) {
      if (j === erasedIndex) {
        continue;
      }
      if (sequence[j] <= sequence[last]) {
        increasing = false;
        break;
      }
      last = j;
    }

    if (increasing) {
      return true;
    }
  }

  return false;
}
