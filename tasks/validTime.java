boolean validTime(String time) {

  class Helper {
  int charToInt(char symbol) {
    return symbol - '0';
  }
  }
  Helper h = new Helper();

  int hours = h.charToInt(time.charAt(0)) * 10 + h.charToInt(time.charAt(1)),
      minutes = h.charToInt(time.charAt(3)) * 10 + h.charToInt(time.charAt(4));

  if (hours < 24 && minutes < 60) {
    return true;
  }
  return false;
}
