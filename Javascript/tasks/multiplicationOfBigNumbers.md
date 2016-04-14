# Description
Given a base for a numeral system, an integer number can be represented as an array of its digits with the most significant digit being on the first place, each digit is stored as an integer from `0` to `base - 1`. Leading zeros must be omitted.

## Example
For `base = 10`, `a = [9, 8, 7, 6]` and `b = [7, 6, 5]`, the output should be

```javascript
multiplicationOfBigNumbers(base, a, b) = [7, 5, 5, 5, 1, 4, 0]
```

Number `a` in numeral system 10 is equal to `9 * 103 + 8 * 102 + 7 * 101 + 6 * 100 = 9876`. Number `b` in numeral system 10 is equal to `7 * 102 + 6 * 101 + 5 * 100 = 765`.

`9876 * 765 = 7555140`, so the answer is `[7, 5, 5, 5, 1, 4, 0]`.
- [input] integer base

  base > 1.

- [input] array.integer a

  First positive number in the system with the given base.

- [input] array.integer b

  Second positive number in the system with the given base.

- [output] array.integer

  The multiplication of given numbers in the same system.
