function validTime(time) {

  var charToInt = function(symbol) {
    return symbol.charCodeAt() - '0'.charCodeAt();
  }

  var hours = charToInt(time[0]) * 10 + charToInt(time[1]),
    minutes = charToInt(time[3]) * 10 + charToInt(time[4]);

  if(hours < 24 && minutes < 60) {
    return true;
  }
  return false;
}
