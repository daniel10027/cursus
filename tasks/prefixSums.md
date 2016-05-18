# Description

Construct an array B of prefix sums of the given array A.

B is defined as:

```javascript
B[0]   = A[0]
B[1]   = A[0] + A[1]
B[2]   = A[0] + A[1] + A[2]
...
B[n - 1] = A[0] + A[1] + ... + A[n - 1]
```

where `n` is the `length` of `A`.

## Example

Given `A = [1, 2, 3]`, B would be equal to [``1, 1 + 2, 1 + 2 + 3] = [1, 3, 6]``, hence:

```javascript
prefixSums([1, 2, 3]) = [1, 3, 6]
```

-   [input] array.integer A
