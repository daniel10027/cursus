The transpose of an m-by-n matrix is the n-by-m matrix formed by turning rows into columns and vice versa. A square matrix that is the negative of its transpose is a skew-symmetric matrix.

Example

```
isSkewSymmetricMatrix([[ 1, 0, 1],
                       [ 0, 5,-2],
                       [-1, 2, 3]]) = true
isSkewSymmetricMatrix([[ 1, 0, 1],
                       [ 0, 5,-2],
                       [-1,-2, 3]]) = false
```

[input] array.array.integer matrix

2-dimensional array of integers representing a square matrix [output] boolean

true if matrix is a skew-symmetric matrix, false otherwise
