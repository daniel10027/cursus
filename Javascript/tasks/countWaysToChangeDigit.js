function countWaysToChangeDigit(value) {
  var answer = 0;
  while (value) {
    answer += 9 - value % 10;
    value = Math.floor(value / 10);
  }
  return answer;
}
