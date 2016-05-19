function additionWithoutCarrying(param1, param2) {
  var result = 0,
    tenPower = 1;
  while(param1 > 0 || param2 > 0) {
    result += tenPower * ((param1 + param2) % 10);
    param1 = Math.floor(param1 / 10);
    param2 = Math.floor(param2 / 10);
    tenPower *= 10;
  }
  return result;
}
