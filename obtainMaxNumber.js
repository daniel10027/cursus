function obtainMaxNumber(inputArray) {

  var result = 0,
      cnt = {},
      mantissa = [];

  for (var i = 0; i < inputArray.length; i++) {
    var value = inputArray[i];
    while (value % 2 === 0) {
      value /= 2;
    }
    if (!cnt[value]) {
      mantissa.push(value);
      cnt[value] = 0;
    }
    cnt[value] += inputArray[i] / value;
  }

  for (var i = 0; i < mantissa.length; i++) {
    var exponent = 0,
        power = 1;
    while (power <= cnt[ mantissa[i] ]) {
      exponent += 1;
      power *= 2;
    }
    result = Math.max(result, mantissa[i] * Math.pow(2, exponent));
  }
  return result/2;
}
