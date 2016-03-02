function digitCharactersSum(ch1, ch2) {
  var x1 = ch1.charCodeAt(0) - '0'.charCodeAt(0),
    x2 = ch2.charCodeAt(0) - '0'.charCodeAt(0);
  if (x1 + x2 < 10) {
    return String.fromCharCode('0'.charCodeAt(0) + x1 + x2);
  } else {
    return '1' + String.fromCharCode('0'.charCodeAt(0) + ((x1 + x2) % 10));
  }
}
