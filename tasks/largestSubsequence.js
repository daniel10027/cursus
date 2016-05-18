function largestSubsequence(sequence) {
  var subsequences = [];
  var indexLongest = 17;
  for (var i = 0; i < 18; i++) {
    subsequences.push([]);
  }
  for (var i = 0; i < sequence.length; i++) {
    var sum = sequence[i] % 10;
    var value = sequence[i];
    while (value > 9) {
      value = Math.floor(value / 10);
    }
    sum += value;
    subsequences[sum - 1].push(sequence[i]);
  }
  for (var i = 16; i >= 0; i--) {
    if (subsequences[i].length > subsequences[indexLongest].length) {
      indexLongest = i;
    }
  }
  return subsequences[indexLongest];
}
