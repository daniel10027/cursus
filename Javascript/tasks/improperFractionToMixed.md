# Description
Given an reduced improper fraction output it as an reduced mixed fraction.

## Example
For `A = [7, 2]`, the output should be

```javascript
improperFractionToMixed(A) = [3, 1, 2]
```

> **Explanation**  `7/2 = 3 + 1/2`

- [input] array.integer A

  Array A of two positive integers representing an reduced improper fraction (A[0] / A[1]). It's guaranteed that A[1] is not equal to 1 or 0.

- [output] array.integer

  Array B of three integers representing the reduced mixed fraction equal to A in the form B[0] + B[1] / B[2].
