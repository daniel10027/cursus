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