function closestString(s, k) {

  var count = [];
  for (var i = 0; i < 26; i++) {
    count.push(0);
  }
  for (var i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 'a'.charCodeAt()]++;
  }

  var result = [];
  for (var i = 0; i < s.length; i++) {
    result.push(0);
  }
  var smallest = 'z';
  for (var it = 0; it < k; it++) {
    var current = 0;
    for (var i = 1; i < 26; i++) {
      if (count[i] > count[current]) {
        current = i;
      }
    }
    for (var i = 0; i < s.length; i++) {
      if (s.charCodeAt(i) - 'a'.charCodeAt() == current) {
        result[i] =  String.fromCharCode(current + 'a'.charCodeAt());
      }
    }
    if (current < smallest.charCodeAt() - 'a'.charCodeAt()) {
      smallest = String.fromCharCode(current + 'a'.charCodeAt());
    }
    count[current] = 0;
  }

  for (var i = 0; i < s.length; i++) {
    if (count[s.charCodeAt(i) - 'a'.charCodeAt()] > 0) {
      result[i] = smallest;
    }
  }

  return result.join('');
}
