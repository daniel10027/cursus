function roomBooking(M, operations) {
  var calculateHash = function(name) {
    var result = 0;
    for (var i = 0; i < name.length; i++) {
      result += name.charCodeAt(i);
    }
    return result;
  };
  var hashMap = [],
    answer = [];
  for (var i = 0; i < M; i++) {
    hashMap.push(['', -1]);
  }
  for (var i = 0; i < operations.length; i++) {
    var name = operations[i].substr(1),
      hash = calculateHash(name),
      pos = hash % M;
    if (operations[i][0] === '+') {
      while (hashMap[pos][1] !== -1) {
        pos = (pos + 1) % M;
      }
      hashMap[pos] = [name, hash];
    } else {
      while (hashMap[pos][1] !== hash || hashMap[pos][0] !== name) {
        pos = (pos + 1) % M;
      }
      hashMap[pos] = ["", -1];
    }
  }
  for (var i = 0; i < M; i++) {
    if (hashMap[i][1] !== -1) {
      answer.push(hashMap[i][0]);
    }
  }
  return answer;
}