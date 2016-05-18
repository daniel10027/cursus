function arrayMode(arr) {
  var mode = {};
  var max = 0,
    count = 0;

  arr.forEach(function(e) {
    if (mode[e]) {
      mode[e]++;
    } else {
      mode[e] = 1;
    }

    if (count < mode[e]) {
      max = e;
      count = mode[e];
    }
  });

  return max;
}
