# Description
Given an integer n.

If `n` is `even`, divide it by `2`. If `n` is `odd`, change it to `3n + 1`. Repeat the process until `n = 1`. Return the number of steps performed by the above algorithm.

## Example
For `n = 5`, the output should be

```javascript
hailstoneSequence(n) = 5.
```

The sequence is `5 -> 16 -> 8 -> 4 -> 2 -> 1`, so the number of steps is `5`.
- [input] integer n

  A positive integer.

- [output] integer
