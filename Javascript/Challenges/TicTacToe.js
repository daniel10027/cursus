function TicTacToe(board) {
  var x = 0;
  var o = 0;
  var empty = 0;
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      if (board[i][j] === "o") 
        o++;
      if (board[i][j] === "x") 
        x++;
      if (board[i][j] === " ") 
        empty++;
      }
    }
  return (x === o || x === o + 1) && x + o + empty === 9;
}
TicTacToe = b => {
  x = o = e = 0
  for (i = 0; i < 3; i++) 
    for (j = 0; j < 3; j++) {
      if (b[i][j] == "o") 
        o++ else if (b[i][j] == "x") 
          x++ else 
            e++
          }
        return (x == o | x == o + 1) & x + o + e == 9
    }