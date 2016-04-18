function properNounCorrection(noun) {
  var first = noun[0].toUpperCase();
  var last = noun.substring(1).toLowerCase();
  return first + last;
}

function properNounCorrection(n) {
  return n[0].toUpperCase() + n.substring(1).toLowerCase();
}