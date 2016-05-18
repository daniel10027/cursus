# Description
For a pair of two positive integers a and b consider the following operation: if one of the integers is divisible by the other - replace this integer with the division result of the two.

This operation is applied sequentially until it stops working. Return the number of times the operation is applied. It is guaranteed that the answer is a finite number.

## Example
For a pair (432, 72) there will be 4 such operations:

`(432, 72) -> (6, 72) -> (6, 12) -> (6, 2) -> (3, 2)`
- [input] integer a     `a > 1`.
- [input] integer b     `b > 1`.
- [output] integer
