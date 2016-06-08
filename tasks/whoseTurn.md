# Description

Imagine a standard chess board with only two white and two black knights placed in their standard starting positions: the white knights on b1 and g1; the black knights on b8 and g8.

There are two players: one plays for white, the other for black. During each move, the player picks one of his knights and moves it to an unoccupied square according to standard chess rules. Thus, a knight on e4 can move to any of the following squares: d2, f2, g3, g5, f6, d6, c5, and c3, as long as it is not occupied by either a friendly or an enemy knight. The players take turns in making moves, starting with the white player.

Given the configuration of the knights after an unspecified number of moves, determine whose turn it is.

## Example

For p = "b1;g1;b8;g8", the output should be whoseTurn(p) = true. Input/Output

[time limit] 4000ms (js) [input] string p

The positions of the four knights, starting with white knights, separated by a semicolon, in standard chess notation.

[output] boolean

true if white is to move, false otherwise.
