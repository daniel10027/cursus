//Recovery
function arrayMode(sequence) {
  var count = [],
    answer = 0;

  for(var i = 0; i < 10; i++) {
    count.push(0);
  }
  for(var i = 0; i < sequence.length; i++) {
    count[sequence[i] - 1]++;
    if(count[sequence[i] - 1] > count[answer]) {
      answer = sequence[i] - 1;
    }
  }
  return answer + 1; // +1
}

//Codewriting
function arrayMode(arr) {
  var mode = {};
  var max = 0,
    count = 0;

  arr.forEach(function(e) {
    if(mode[e]) {
      mode[e]++;
    } else {
      mode[e] = 1;
    }

    if(count < mode[e]) {
      max = e;
      count = mode[e];
    }
  });

  return max;
}
