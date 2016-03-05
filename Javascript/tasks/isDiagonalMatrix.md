In linear algebra, a square matrix is called a diagonal matrix if all entries outside the main diagonal are zero (the diagonal from the upper left to the lower right).

### Example

isDiagonalMatrix([
[1, 0, 0],
[0, 5, 0],
[0, 0, 3]
]) = true

isDiagonalMatrix([
[1, 0, 0],
[0, 5, 0],
[2, 0, 3]
]) = false
[input] array.array.integer matrix

2-dimensional array of integers representing a square matrix
[output] boolean

true if matrix is a diagonal matrix, false otherwise
