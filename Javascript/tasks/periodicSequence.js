function periodicSequence(S0, A, B, M) {
  var ans = [S0];
  var S = i => i ? (A * S(i - 1) + B) % M : S0;
  for (var i = 1; i < 50; i++) {
    ans.push(S(i));
  }
  for (var k = 0; k < ans.length; k++) {
    for (var j = k + 1; j < ans.length; j++) {
      if (ans[k] === ans[j]) return j - k;
    }
  }
}

function periodicSequence(S0, A, B, M) {
  var occurrence = [],
    currentValue = S0;
  for (var i = 0; i < M; i++) {
    occurrence.push(-1);
  }
  occurrence[S0] = 0;
  for (var i = 1;; i++) {
    currentValue = (A * currentValue + B) % M;
    if (occurrence[currentValue] !== -1) {
      return i - occurrence[currentValue];
    }
    occurrence[currentValue] = i;
  }
}