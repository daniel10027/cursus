function uniqueChars(s) {

  var was = [],
      best = 0,
      left = 0;
  for (var i = 0; i < 26; i++) {
    was.push(false);
  }
  for (var right = 0; right < s.length; right++) {
    var c = s.charCodeAt(right) - 'a'.charCodeAt();
    while (was[c]) {
      was[s.charCodeAt(left) - 'a'.charCodeAt()] = false;
      left++;
    }
    was[c] = true;
    best =  Math.max(best, right-left+1) ;
  }

  return best;
}
