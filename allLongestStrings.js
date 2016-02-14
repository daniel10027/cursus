function allLongestStrings(input) {

  var maximum = input[0].length;
  input.map(function(val) {
    maximum = Math.max(maximum, val.length);
  });

  input = input.filter(function(val) {
    return (val.length === maximum);
  });

  return input;
}
