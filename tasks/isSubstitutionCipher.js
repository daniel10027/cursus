function isSubstitutionCipher(string1, string2) {

  var pair = [],
    paired = [];
  for(var i = 0; i < 26; i++) {
    pair.push(-1);
    paired.push(false);
  }

  for(var i = 0; i < string1.length; i++) {
    var ch1 = string1.charCodeAt(i) - 'a'.charCodeAt(0);
    var ch2 = string2.charCodeAt(i) - 'a'.charCodeAt(0);
    if(pair[ch1] !== ch2 && (paired[ch2] || pair[ch1] !== -1)) {
      return false;
    }
    pair[ch1] = ch2;
    paired[ch2] = true;
  }

  return true;
}
