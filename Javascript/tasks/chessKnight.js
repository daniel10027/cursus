function chessKnight(cell) {
  var row = parseInt(cell[1], 10),
    column = cell.charCodeAt(0) - 'a'.charCodeAt(0) + 1,
    steps = [
      [-2, -1],
      [-1, -2],
      [1, -2],
      [2, -1],
      [2, 1],
      [1, 2],
      [-1, 2],
      [-2, 1]
    ],
    answer = 0,
    tmpRow,
    tmpColumn;
  for (var i = 0; i < steps.length; i++) {
    tmpRow = row + steps[i][0];
    tmpColumn = column + steps[i][1];
    if (tmpRow >= 1 && tmpRow <= 8 && tmpColumn >= 1 && tmpColumn <= 8) {
      answer++;
    }
  }
  return answer;
}