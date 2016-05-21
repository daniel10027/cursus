function adaNumber(line) {
  var atLeastOneDigit = false;
  if (line[line.length - 1] === '#') {
    var i = 0;
    var base = 0;
    while (line[i] != '#' && base <= 16) {
      if (line[i] !== '_') {
        if ('0' <= line[i] && line[i] <= '9') {
          base = base * 10 + line.charCodeAt(i) - '0'.charCodeAt(0);
        } else {
          return false;
        }
      }
      i++;
    }
    if (base < 2 || base > 16) {
      return false;
    }
    i++;
    while (i < line.length - 1) {
      if (line[i] !== '_') {
        var digit = -1;
        if ('a' <= line[i] && line[i] <= 'f') {
          digit = line.charCodeAt(i) - 'a'.charCodeAt(0) + 10;
        }
        if ('A' <= line[i] && line[i] <= 'F') {
          digit = line.charCodeAt(i) - 'A'.charCodeAt(0) + 10;
        }
        if ('0' <= line[i] && line[i] <= '9') {
          digit = line.charCodeAt(i) - '0'.charCodeAt(0);
        }
        if (0 <= digit && digit < base) {
          atLeastOneDigit = true;
        } else {
          return false;
        }
      }
      i++;
    }
  } else {
    for (i in line) {
      if (line[i] != '_') {
        if ('0' <= line[i] && line[i] <= '9') {
          atLeastOneDigit = true
        } else
          return false
      }
    }
  }
  return atLeastOneDigit;
}
