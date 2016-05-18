function caseUnification(inputString) {
  var u = 0;
  var l = 0;

  for (var i = 0; i < inputString.length; i++) {
    if (/[A-Z]/.test(inputString[i])) {
      u++;
    } else l++;
  }

  if (l > u) return inputString.toLowerCase();
  return inputString.toUpperCase();
}
