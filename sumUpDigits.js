function sumUpDigits(inputString) {
  var s = 0;

  for (var i = 0; i < inputString.length; i++) {

    if (/[0-9]/.test(inputString[i])) s += parseInt(inputString[i])
  }
  return s;
}
