function uniqueSubstringsTrie(input) {
  var addNode = function(lastVersion, ends) {
    var line = [];
    for (var i = 0; i < 26; i++) {
      line.push(0);
    }
    lastVersion.push(line);
    ends.push(0);
  };
  var nodesCount = 1,
    trie = [],
    ends = [],
    result = 0;
  addNode(trie, ends);
  for (var i = 0; i < input.length; i++) {
    var currentNode = 0;
    for (var j = i; j < input.length; j++) {
      var symbol = input.charCodeAt(j) - "a".charCodeAt(0);
      if (!trie[currentNode][symbol]) {
        addNode(trie, ends);
        trie[currentNode][symbol] = nodesCount;
        nodesCount++;
      }
      currentNode = trie[currentNode][symbol];
      ends[currentNode]++;
    }
  }
  for (var i = 0; i < nodesCount; i++) {
    if (ends[i] == 1) {
      result++;
    }
  }
  return result;
}