# Description
Consider a square matrix with sides of even length.

Define its 0-border as the union of left and right columns as well as top and bottom rows. Now consider the initial matrix without the 0-border. Its 0-border is 1-border for the initial matrix. In the same way one can define 2-border, 3-border, etc.

Given a square matrix, find sums of elements for each of the matrix borders.

## Example
For the matrix

```
[[1, 2, 2, 3],
 [0, 1, 0, 2],
 [4,-1,-1,-3],
 [4,-1,-1, 3]]
```

output should be [16, -1].

[input] array.array.integer matrix

array of arrays of integers representing a square matrix with sides of even length [output] array.integer

an array A such that A[i] is equal to the sum of elements of the i-border of matrix. The length of the A should be half of the length of the matrix side
