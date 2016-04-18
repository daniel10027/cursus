# Description
Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

## Example
For `cell1 = "A1"` and `cell2 = "C3"`, the output should be :

```javascript
bishopAndPawn(cell1, cell2) = true;
```

For `cell1 = "H1"` and `cell2 = "H3"`, the output should be :

```javascript
bishopAndPawn(cell1, cell2) = false.
```

- [input] string cell1

  Coordinates of the white bishop.

- [input] string cell2

  Coordinates of the black pawn.

- [output] boolean

  true if the bishop can capture the pawn, false otherwise.
