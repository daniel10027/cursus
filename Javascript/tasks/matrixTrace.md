## Description

Given a matrix, find its trace.

### Example

```Javascript
matrixTrace([[1, 1, 1],
             [0, 5, 0],
             [2, 1, 3]]) = 9
```

-   [input] array.array.integer matrix

    2-dimensional array of integers representing a square matrix

-   [output] integer

    the trace of matrix

## Solutions

```Javascript
    function matrixTrace(matrix) {
      var result = 0;
      for (var i = 0; i &lt; matrix.length; i++) {
        result += matrix[i][i];
      }
      return result;
    }
```
