Two elements of a matrix are considered neighboring if their indices are equal on one axis and differ by one on the other axis.

Given a rectangular matrix consisting of zeroes, replace each zero with the number of neighboring cells for that cell.

### Example
```
For matrix = [[0, 0, 0],
              [0, 0, 0],
              [0, 0, 0]],
the output should be [[2, 3, 2],
                      [3, 4, 3],
                      [2, 3, 2]]
```
[input] array.array.integer matrix

[output] array.array.integer
