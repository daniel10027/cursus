# Description
Given a rectangular matrix of integers and integers n, m, we are looking for the submatrix of size n × m that has the maximal sum among all submatrices of the given size.

## Example

```javascript
For matrix = [[1, 12, 11, 10],
              [4,  3,  2,  9],
              [5,  6,  7,  8]],
    n = 2, m = 1,
```

the output should be `19`.     
- [input] array.array.integer matrix

  2-dimensional array of integers representing a rectangular matrix.

- [input] integer n

  A positive integer not greater than the number of matrix rows.

- [input] integer m

  A positive integer not greater than the number of matrix columns.

- [output] integer

  The sum of all elements in the desired n x m submatrix.
