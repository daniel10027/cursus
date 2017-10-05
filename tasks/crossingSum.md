# Description
Given a rectangular matrix and integers a and b, consider the union of the ath row and the bth (both 0-based) column of the matrix. Return sum of all elements of that union.

## Example
For

```javascript
    matrix = [[1, 1, 1, 1],
              [2, 2, 2, 2],
              [3, 3, 3, 3]]
```

`a = 1`, `b = 3` the output should be 

`crossingSum(matrix, a, b) = 12`

Since (`2 + 2 + 2 + 2) + (1 + 3) = 12`
- [input] array.array.integer matrix

  2-dimensional array of integers representing a rectangular matrix.

- [input] integer a

  A non-negative integer less than the number of matrix rows.

- [input] integer b

  A non-negative integer less than the number of matrix columns.

- [output] integer
