function addBorder(picture) {
  var answer = [""];
  for (var i = 0; i < picture[0].length + 2; i++) {
    answer[0] += "*";
  }
  for (var i = 0; i < picture.length; i++) {
    answer.push("*");
    for (var j = 0; j < picture[0].length; j++) {
      answer[i + 1] += picture[i][j];
    }
    answer[i + 1] += "*";
  }
  answer.push(answer[0]);
  return answer;
}
