# Description

Given a tic-tac-toe board state, check whether it's possible to get it by playing by rules.

## Example:

For

```javascript
board = [['o','o','x'],
         ['x','o','o'],
         [' ',' ','x']]
```

the answer is `TicTacToe(board) = false`.
There're four 'o' symbols and only three 'x's, which is impossible since 'x' starts the game.

-   [input] array.array.char board

    A 3 × 3 matrix, the current board state. 'o's denote the second player's moves, 'x's denote the first player's moves, and ' ' denote empty cells.

-   [output] boolean

    `true` if the current board state is possible, `false` otherwise.

## Solutions

#### My Solution

Here's an obvious solution not yet optimized to be the shortest

```javascript
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
```

The solution above can be further more  shortened and become the code below

```javascript
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
```
