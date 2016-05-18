# Description

Sudoku is a number-placement puzzle. The objective is to fill a `9 × 9` grid with digits so that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from `1 to 9`.

This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

## Example

For the first example below, the output should be `true`. For the other grid, the output should be `false`: each of the nine `3 × 3` sub-grids should contain all of the digits from `1 to 9`.

![Exemple](https://codefightsuserpics.s3.amazonaws.com/tasks/sudoku/img/sudoku.png?_tm=1460464675342)

- [input] array.array.integer grid

  A matrix representing `9 × 9` grid already filled with numbers.

- [output] boolean

  true if the given grid represents a correct solution to Sudoku, false otherwise.
